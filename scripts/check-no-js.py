#!/usr/bin/env python3
"""Check that the built site contains no JavaScript.

Fails on any <script> element, inline event handler attribute (onclick=...),
or javascript: URL in the HTML files under the given folder (default: dist).
Same rules CI used to run through htmlhint (script-disabled and
inline-script-disabled).

usage: scripts/check-no-js.py [dist]
"""
import pathlib
import re
import sys
from html.parser import HTMLParser

root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "dist")
JS_URL = re.compile(r"^\s*javascript:", re.I)


class Checker(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.problems = []

    def handle_starttag(self, tag, attrs):
        line = self.getpos()[0]
        if tag == "script":
            self.problems.append(f"{line}: <script> element")
        for name, value in attrs:
            if name.startswith("on"):
                self.problems.append(f"{line}: inline event handler {name}= on <{tag}>")
            elif value and JS_URL.match(value):
                self.problems.append(f"{line}: javascript: URL in {name}= on <{tag}>")

    handle_startendtag = handle_starttag


files = sorted(root.rglob("*.html"))
if not files:
    sys.exit(f"no HTML files found under {root}/ (build the site first: hugo)")
problems = 0
for path in files:
    checker = Checker()
    checker.feed(path.read_text(encoding="utf-8"))
    for p in checker.problems:
        problems += 1
        print(f"{path}:{p}")

if problems:
    print(f"\n{problems} problem(s): the site must work without JavaScript.")
    sys.exit(1)
print(f"ok: {len(files)} HTML files, no JavaScript")
