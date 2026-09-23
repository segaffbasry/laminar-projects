#!/bin/bash
cd /Users/segaf/Documents/Projects/laminarprojects/_scrape
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
fetch_one() {
  url="$1"
  slug=$(echo "$url" | sed -E 's|https://www.laminarprojects.com/?||; s|/|__|g')
  [ -z "$slug" ] && slug="index"
  out="html/${slug}.html"
  [ -s "$out" ] && return 0
  curl -s -L --compressed -m 45 -A "$UA" "$url" -o "$out"
}
export -f fetch_one
export UA
cat urls.txt | xargs -P 8 -I{} bash -c 'fetch_one "$@"' _ {}
