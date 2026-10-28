---
# Headless page used to render blog posts for /feed.xml (layouts/home.feed.xml).
# Render hooks write plain HTML for it (no link decoration, image
# processing, code-block styling or heading ids), as the feed always had.
build:
  render: never
  list: never
plainLinks: true
feed: true
---
