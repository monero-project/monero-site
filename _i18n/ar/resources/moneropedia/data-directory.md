---
tags: ["kovri"]
terms: ["Data-Directory"]
summary: "Where essential kovri data for runtime is stored"
---

{% include untranslated.html %}
### The Basics

Depending on your OS, @Kovri currently stores all run-time data in the following directory:

- Linux/FreeBSD:
  - `$HOME/.kovri`

- OSX:
  - `$HOME/Library/Application\ Support/Kovri`

- Windows:
  - `"$APPDATA"\\Kovri`

This includes all configuration files, @address-book, certificates, and resources.
