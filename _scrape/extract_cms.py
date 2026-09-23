from bs4 import BeautifulSoup
import re, json, pathlib, urllib.parse

HTML = pathlib.Path("html"); DATA = pathlib.Path("data"); DATA.mkdir(exist_ok=True)
norm = lambda t: re.sub(r'[​­]', '', re.sub(r'\s+', ' ', t or '')).strip()
def img(el): return urllib.parse.unquote(el.get("src", "")) if el else ""

def soup_of(f):
    s = BeautifulSoup(f.read_text(errors="ignore"), "lxml")
    for t in s(["script", "style", "noscript"]): t.decompose()
    n = s.find("nav")
    if n: n.decompose()
    return s

def richtext(block):
    """Rich text -> list of {heading, body[]} groups."""
    out, cur = [], None
    if not block: return out
    for el in block.find_all(["strong", "b", "p", "li", "h2", "h3", "h4"]):
        txt = norm(el.get_text(" ", strip=True))
        if not txt: continue
        if el.name in ("strong", "b") and el.parent.name in ("div", "p") and len(txt) < 80:
            if cur: out.append(cur)
            cur = {"heading": txt, "body": []}
        else:
            if txt in ("‍", ""): continue
            if cur is None: cur = {"heading": "", "body": []}
            if txt not in cur["body"]: cur["body"].append(txt)
    if cur: out.append(cur)
    return out

# ---------- PEOPLE (team + support) ----------
people = []
for f in sorted(list(HTML.glob("team__*.html")) + list(HTML.glob("support__*.html"))
                + list(HTML.glob("capital-project-excellence-experts__*.html"))):
    s = soup_of(f)
    name = s.find(class_="employee-name")
    if not name: continue
    photo = s.find("img", class_="employee-image-new") or s.find(class_=re.compile("employee-image"))
    if photo and photo.name != "img": photo = photo.find("img")
    role = norm((s.find(class_="employee-role") or {}).get_text(" ", strip=True)) if s.find(class_="employee-role") else ""
    group, slug = f.stem.split("__", 1)
    li = s.find("a", href=re.compile("linkedin.com", re.I))
    people.append({
        "slug": slug, "group": group, "name": norm(name.get_text()),
        "role": role.split("•")[0].strip() if "•" in role else role,
        "discipline": role.split("•")[1].strip() if "•" in role else "",
        "photo": img(photo), "linkedin": li.get("href") if li else "",
        "bio": richtext(s.find(class_="employee-description-rich-text")),
        "url": f"https://www.laminarprojects.com/{group}/{slug}",
    })

# ---------- STORIES (case studies / insights / culture) ----------
stories, seen = [], set()
# specific collections first so `our-stories-all` (the catch-all) never sets the kind
ordered = (sorted(HTML.glob("our-stories-case-studies__*.html"))
           + sorted(HTML.glob("our-stories-insights__*.html"))
           + sorted(HTML.glob("our-stories-culture__*.html"))
           + sorted(HTML.glob("insights__*.html"))
           + sorted(HTML.glob("news__*.html"))
           + sorted(HTML.glob("our-stories-all__*.html")))
for f in ordered:
    s = soup_of(f)
    group, slug = f.stem.split("__", 1)
    if slug in seen: continue
    h = s.find("h1") or s.find("h2")
    if not h: continue
    seen.add(slug)
    meta = {m.get("name") or m.get("property"): m.get("content") for m in s.find_all("meta")
            if (m.get("name") or m.get("property")) and m.get("content")}
    body = s.find(class_="main-body") or s.find(class_=re.compile("rich-text|w-richtext"))
    hero = s.find("img", class_=re.compile("hero|banner")) or (body.find("img") if body else None)
    kind = ("insight" if "insight" in group else "culture" if "culture" in group or group == "news" else "case-study")
    stories.append({
        "slug": slug, "kind": kind, "title": norm(h.get_text()),
        "summary": meta.get("description", ""), "og_image": meta.get("og:image", ""),
        "hero_image": img(hero),
        "body": [norm(p.get_text(" ", strip=True)) for p in (body.find_all(["h2","h3","p","li"]) if body else [])
                 if norm(p.get_text(" ", strip=True)) not in ("", "‍")],
        "url": f"https://www.laminarprojects.com/{group}/{slug}",
    })

for name, rows in (("people", people), ("stories", stories)):
    (DATA / f"{name}.json").write_text(json.dumps(rows, indent=2, ensure_ascii=False))
    print(f"{name}: {len(rows)}")

from collections import Counter
print(" people by group:", dict(Counter(p["group"] for p in people)))
print(" stories by kind:", dict(Counter(s["kind"] for s in stories)))
print(" people missing photo:", sum(1 for p in people if not p["photo"]))
print(" people missing bio:", sum(1 for p in people if not p["bio"]))
