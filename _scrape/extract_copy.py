from bs4 import BeautifulSoup, NavigableString
import re, json, pathlib

HTML = pathlib.Path("html"); OUT = pathlib.Path("content"); OUT.mkdir(exist_ok=True)
pathlib.Path("data").mkdir(exist_ok=True)
norm = lambda t: re.sub(r'[​­]', '', re.sub(r'\s+', ' ', t or '')).strip()
SKIP = {"script", "style", "noscript", "svg", "path", "head", "meta", "link", "br"}

def slug_to_url(p):
    s = p.stem
    return "https://www.laminarprojects.com/" + ("" if s == "index" else s.replace("__", "/"))

def walk(node, items, seen):
    """Emit one item per block that owns direct text, preserving document order."""
    if isinstance(node, NavigableString):
        return
    if node.name in SKIP:
        return
    # direct text owned by this element (not by children)
    own = norm("".join(c for c in node.children if isinstance(c, NavigableString)))
    if own:
        tag = node.name
        if tag in ("a", "button"):
            href = node.get("href", "")
            kind, extra = "cta", {"href": href}
        elif re.fullmatch(r"h[1-6]", tag):
            kind, extra = tag, {}
        elif tag == "li":
            kind, extra = "li", {}
        elif tag == "blockquote":
            kind, extra = "quote", {}
        elif tag in ("label", "input", "option"):
            kind, extra = "form", {}
        else:
            kind, extra = "text", {}
        key = (kind, own)
        if key not in seen:
            seen.add(key)
            items.append({"t": kind, "text": own, **extra})
    for c in node.children:
        walk(c, items, seen)

pages = []
for f in sorted(HTML.glob("*.html")):
    soup = BeautifulSoup(f.read_text(errors="ignore"), "lxml")
    for t in soup(["script", "style", "noscript"]): t.decompose()
    meta = {m.get("name") or m.get("property"): m.get("content")
            for m in soup.find_all("meta") if (m.get("name") or m.get("property")) and m.get("content")}
    page = {"slug": f.stem, "url": slug_to_url(f),
            "title": norm(soup.title.get_text()) if soup.title else "",
            "description": meta.get("description", ""),
            "og_image": meta.get("og:image", ""), "sections": []}
    body = soup.body
    if not body:
        pages.append(page); continue
    for sec in body.find_all(recursive=False):
        items, seen = [], set()
        walk(sec, items, seen)
        if items:
            page["sections"].append({"tag": sec.name, "class": " ".join(sec.get("class") or []), "items": items})
    pages.append(page)

pathlib.Path("data/content.json").write_text(json.dumps(pages, indent=2, ensure_ascii=False))

for p in pages:
    lines = [f"# {p['title']}", "", f"URL: {p['url']}", f"Description: {p['description']}", ""]
    for s in p["sections"]:
        lines += [f"## [{s['class'] or s['tag']}]"]
        for it in s["items"]:
            t, x = it["t"], it["text"]
            if t == "cta":   lines.append(f"- CTA: **{x}** -> {it.get('href','')}")
            elif t == "li":  lines.append(f"- {x}")
            elif t == "quote": lines.append(f"> {x}")
            elif t == "form":  lines.append(f"- [field] {x}")
            elif t.startswith("h"): lines.append(f"{'#'*min(int(t[1])+2,6)} {x}")
            else: lines.append(x)
        lines.append("")
    (OUT / f"{p['slug']}.md").write_text("\n".join(lines))

wc = lambda p: sum(len(i["text"].split()) for s in p["sections"] for i in s["items"] if i["t"] != "cta")
print(f"extracted {len(pages)} pages, {sum(wc(p) for p in pages):,} words total")
for s in ("index","construction-management-software","contact","our-team","our-philosophy","join-us"):
    m = next((p for p in pages if p["slug"] == s), None)
    if m: print(f"  {s:<38} {wc(m):>6}w")
