#!/usr/bin/env python3
"""Check that component stylesheets only style their own component.

Every top-level selector in assets/css/components/<name>.css must contain the
scope attribute [data-c-<name>]. Rules nested inside a scoped rule inherit it.
Intentionally global rules (e.g. styling rendered Markdown) must be marked
with a /* global */ comment directly before the selector.

usage: scripts/check-scoped-css.py [files...]
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
files = [pathlib.Path(f).resolve() for f in sys.argv[1:]] or sorted((ROOT / "assets/css/components").glob("*.css"))

# at-rules whose blocks contain selectors vs. ones that don't
NO_SELECTORS = ("@keyframes", "@font-face", "@property", "@counter-style", "@page")

def split_selectors(head):
    """Split a selector list on top-level commas (not inside () or [])."""
    parts, depth, cur = [], 0, ""
    for ch in head:
        if ch in "([":
            depth += 1
        elif ch in ")]":
            depth -= 1
        if ch == "," and depth == 0:
            parts.append(cur.strip())
            cur = ""
        else:
            cur += ch
    return parts + [cur.strip()]


problems = 0
for path in files:
    name = path.stem
    scope = f"[data-c-{name}]"
    text = path.read_text()
    # walk the CSS, tracking a stack of open blocks
    stack = []  # entries: "rule" | "at" | "skip"
    buf = ""
    marked_global = False
    line = 1
    i = 0
    while i < len(text):
        c = text[i]
        if text.startswith("/*", i):
            end = text.index("*/", i) + 2
            comment = text[i:end]
            if comment.strip("/* ").strip() == "global":
                marked_global = True
            line += comment.count("\n")
            i = end
            continue
        if c == "{":
            head = " ".join(buf.split())
            buf = ""
            parent_skip = stack and stack[-1] == "skip"
            if head.startswith("@"):
                stack.append("skip" if head.startswith(NO_SELECTORS) or parent_skip else "at")
            elif parent_skip:
                stack.append("skip")
            elif "rule" in stack:
                stack.append("rule")  # nested inside a scoped rule
            else:
                bad = [s for s in split_selectors(head) if scope not in s]
                if bad and not marked_global:
                    problems += 1
                    print(f"{path.relative_to(ROOT)}:{line}: selector without {scope}: {', '.join(bad)}")
                stack.append("rule")
            marked_global = False
        elif c == "}":
            if stack:
                stack.pop()
            buf = ""
        elif c == ";":
            buf = ""
        else:
            buf += c
        if c == "\n":
            line += 1
        i += 1

if problems:
    print(f"\n{problems} unscoped selector(s). Add [data-c-<name>] or mark intentional ones with /* global */.")
    sys.exit(1)
print(f"ok: {len(files)} component stylesheets scoped")
