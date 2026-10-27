---
# /legal/ shows all documents in src/content/legal, which have no pages of their own
layout: legal
# cascade also applies to this page itself, so render it explicitly
build:
  render: always
cascade:
  build:
    render: never
    list: local
---
