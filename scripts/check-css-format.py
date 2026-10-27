#!/usr/bin/env python3
"""Check that stylesheets follow the project's formatting.

The style is the one the CSS is already written in (Prettier's defaults):
- 2 spaces of indentation per nesting level; no tabs
- `{` at the end of the selector line, after one space; `}` on its own line
- one declaration per line, written `property: value;`
- no trailing whitespace, file ends with a single newline

It reports problems with file and line; it does not rewrite files.

usage: scripts/check-css-format.py [files...]   (default: assets/css/**/*.css)
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
# fonts.css is a Hugo template (it contains {{ ... }}), not plain CSS
SKIP = {ROOT / "assets/css/base/fonts.css"}
files = [pathlib.Path(f).resolve() for f in sys.argv[1:]] or sorted(
    p for p in (ROOT / "assets/css").rglob("*.css") if p not in SKIP
)


def strip_comments_and_strings(line, in_comment):
    """Blank out comments and string contents so they don't trip the checks."""
    out, i = "", 0
    while i < len(line):
        if in_comment:
            end = line.find("*/", i)
            if end == -1:
                return out, True
            i = end + 2
            in_comment = False
        elif line.startswith("/*", i):
            in_comment = True
            i += 2
        elif line[i] in "\"'":
            q = line[i]
            j = i + 1
            while j < len(line) and line[j] != q:
                j += 2 if line[j] == "\\" else 1
            out += q + " " * max(0, min(j, len(line)) - i - 1) + q
            i = j + 1
        else:
            out += line[i]
            i += 1
    return out, in_comment


problems = 0


def report(path, n, msg):
    global problems
    problems += 1
    print(f"{path.relative_to(ROOT) if path.is_relative_to(ROOT) else path}:{n}: {msg}")


for path in files:
    raw = path.read_bytes().decode("utf-8")
    if "\r" in raw:
        report(path, 1, "use \\n line endings, not \\r\\n")
    if not raw.endswith("\n") or raw.endswith("\n\n"):
        report(path, len(raw.splitlines()), "file must end with exactly one newline")
    depth = 0  # open { blocks
    paren = 0  # open ( across lines (multi-line values such as color-mix)
    in_comment = False
    continuing = False  # inside a statement that spans lines (selector list, value)
    statement = (0, "")  # first line of the current statement
    for n, line in enumerate(raw.split("\n"), 1):
        if "\t" in line:
            report(path, n, "tab character (indent with 2 spaces)")
        if line != line.rstrip():
            report(path, n, "trailing whitespace")
        was_comment = in_comment
        code, in_comment = strip_comments_and_strings(line, in_comment)
        text = code.strip()
        if not text:
            continue
        indent = len(code) - len(code.lstrip(" "))
        closing = text.startswith("}")
        expected = 2 * (depth - 1 if closing else depth)
        if not was_comment:
            if continuing or paren:
                if indent < expected or indent % 2:
                    report(path, n, f"continuation line indented {indent} spaces, expected at least {expected} (even)")
            elif indent != expected:
                report(path, n, f"indented {indent} spaces, expected {expected}")
        if closing and text != "}":
            report(path, n, "put } on its own line")
        if text.endswith("{") and not re.search(r"\S {$", text) and text != "{":
            report(path, n, "write one space before {")
        if text == "{":
            report(path, n, "put { at the end of the selector line")
        # remember where a statement starts; once it ends we know whether it was a
        # declaration (ends with ;) or a selector (ends with {)
        if not continuing and paren == 0:
            statement = (n, text)
        if paren == 0 and re.search(r";\s*\S", text) and not text.startswith("@"):
            report(path, n, "one declaration per line")
        paren += code.count("(") - code.count(")")
        depth += code.count("{") - code.count("}")
        if paren == 0 and text.endswith(";") and not statement[1].startswith("@"):
            if not re.match(r"^(--[\w-]+|[-a-z]+):( |$)", statement[1]):
                report(path, statement[0], "write declarations as `property: value;` (one space after the colon)")
        # the statement continues on the next line unless it ended here
        continuing = paren > 0 or not text.endswith(("{", "}", ";"))
    if depth != 0:
        report(path, n, f"unbalanced braces ({depth:+d})")

if problems:
    print(f"\n{problems} formatting problem(s).")
    sys.exit(1)
print(f"ok: {len(files)} stylesheets formatted")
