import re, os, pathlib, urllib.parse, urllib.request, concurrent.futures as cf, json

ROOT = pathlib.Path("assets")
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36"}
urls = [u for u in pathlib.Path("asset_urls_orig.txt").read_text().split("\n") if u.strip()]

def bucket(name):
    e = name.rsplit(".", 1)[-1].lower()
    if e in ("webm", "mp4"): return "video"
    if e in ("svg",): return "svg"
    if e in ("pdf",): return "docs"
    return "images"

def clean_name(u):
    base = urllib.parse.unquote(u.rsplit("/", 1)[-1])
    base = re.sub(r'^[0-9a-f]{24}_', '', base)          # strip webflow hash prefix
    base = re.sub(r'[^\w\s.\-()&]', '', base).strip()
    base = re.sub(r'\s+', '-', base)
    return base

manifest = []
def get(u):
    enc = urllib.parse.quote(u, safe=":/?=&%")
    name = clean_name(u)
    d = ROOT / bucket(name); d.mkdir(parents=True, exist_ok=True)
    p = d / name
    if p.exists() and p.stat().st_size > 0:
        return (u, str(p), p.stat().st_size, "cached")
    try:
        req = urllib.request.Request(enc, headers=UA)
        data = urllib.request.urlopen(req, timeout=60).read()
        p.write_bytes(data)
        return (u, str(p), len(data), "ok")
    except Exception as e:
        return (u, str(p), 0, f"FAIL {e}")

with cf.ThreadPoolExecutor(8) as ex:
    for r in ex.map(get, urls):
        manifest.append({"url": r[0], "path": r[1], "bytes": r[2], "status": r[3]})

pathlib.Path("data/asset_manifest.json").write_text(json.dumps(manifest, indent=2))
ok = [m for m in manifest if not m["status"].startswith("FAIL")]
fail = [m for m in manifest if m["status"].startswith("FAIL")]
print(f"downloaded {len(ok)}/{len(manifest)}  total {sum(m['bytes'] for m in ok)/1e6:.1f} MB")
for f in fail[:15]: print("FAIL:", f["url"], f["status"][:80])
