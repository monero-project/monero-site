#!/bin/sh
# What a CI build of a push or pull request includes, to keep it fast. Prints
# environment variables for the build (CI appends them to $GITHUB_ENV):
#   - the newest 10 blog posts, plus every post the change touches
#   - English, plus every language whose translations or Moneropedia entries
#     the change touches (the others are switched off)
#   - no drawn preview cards, images not resized
# A release builds the whole site and doesn't use this.
#
# usage: scripts/ci-build-scope.sh [<base commit>]   (no base: nothing counts as changed)
set -eu
base=${1:-}
changed=""
if [ -n "$base" ] && git rev-parse -q --verify "$base^{commit}" >/dev/null; then
  changed=$(git diff --name-only "$base" HEAD -- src/content/blog src/i18n/translations src/content/moneropedia)
fi

# blog posts the change touches (file names), built besides the newest 10
keep_posts=$(printf '%s\n' "$changed" | sed -n 's#^src/content/blog/\([0-9][^/]*\.md\)$#\1#p' | tr '\n' ' ')

# the site's languages (hugo.toml) other than English, unless the change touches them
disable=""
for lang in $(sed -n 's/^\[languages\.\([a-z-]*\)\]$/\1/p' hugo.toml); do
  [ "$lang" = en ] && continue
  if ! printf '%s\n' "$changed" | grep -qE "^src/(i18n/translations|content/moneropedia)/$lang/"; then
    disable="$disable $lang"
  fi
done

echo "LIMIT_POSTS=10"
echo "KEEP_POSTS=${keep_posts% }"
echo "SKIP_OG=true"
echo "SKIP_IMAGE_OPTIMIZATION=true"
echo "HUGO_DISABLELANGUAGES=${disable# }"
