import re, urllib.parse, html as H, pathlib, sys

raw = pathlib.Path("asset_urls_raw.txt").read_text().splitlines()
out = set()
EXT = re.compile(r'\.(png|jpe?g|gif|svg|webp|avif|webm|mp4|pdf|woff2?|ttf|otf|ico)$', re.I)

for line in raw:
    line = H.unescape(line).strip()
    for part in line.split(','):                     # comma-joined video srcs
        u = part.strip().strip('"\'')
        u = u.replace('%2F', '/').replace('%2f', '/')  # encoded slashes
        u = re.sub(r'(&quot|&gt|&lt).*$', '', u)
        if not u.startswith('http'):
            continue
        if not EXT.search(u):
            continue
        out.add(u)

orig, variants = [], []
for u in sorted(out):
    (variants if re.search(r'-p-\d+\.', u) else orig).append(u)

pathlib.Path("asset_urls_orig.txt").write_text("\n".join(orig) + "\n")
pathlib.Path("asset_urls_variants.txt").write_text("\n".join(variants) + "\n")
print(f"originals: {len(orig)}   variants: {len(variants)}")
