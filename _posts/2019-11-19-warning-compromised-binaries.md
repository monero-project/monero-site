---
layout: post
title: "Warning: The binaries of the CLI wallet were compromised for abut 35 minutes"
summary: The binaries available on this website were compromised for a brief time
tags: [announcements]
author: ErCiccione
---

Yesterday [a GitHub issue about mismatching hashes coming from this website](https://github.com/monero-project/monero/issues/6151) was opened. A quick investigation found out that the binaries of the CLI wallet had been compromised and a malicious version was being served. It was quickly fixed, which means the conpromised binaries were online for only 35 minutes. The binaries are now served from another, safe, source. [See the reddit post by core team member binaryfate](https://www.reddit.com/r/Monero/comments/dyfozs/security_warning_cli_binaries_available_on/)

It's strongly racommannded to anyone who downloaded the CLI wallet from this website between Monday 19th and tuesday 20th, to check the hashes of their binaries, if they don't match the official ones delete the files and download them again. <b>Do not run the compromised binaries for any reason!</b>.

We have two guides available to help users check the autenticity of their binaries: <a href="{{site.baseurl}}/resources/user-guides/verification-windows-beginner.html">Verify binaries on Windows (beginner)</a> and <a href="{{site.baseurl}}/resources/user-guides/verification-allos-advanced.html">Verify binaries on Linux, Mac, or Windows command line (advanced)</a>. Signed hashed can be found here: https://web.getmonero.org/downloads/hashes.txt.

The situations is being investigated and updates will be provided soon.

<i>The Monero community</i>
