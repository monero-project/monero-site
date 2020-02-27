---
layout: post
title: "Warning: The binaries of the CLI wallet were compromised for a short time"
summary: The binaries available on this website were compromised for a short time
tags: [urgent]
author: ErCiccione
---

Yesterday [a GitHub issue about mismatching hashes coming from this website](https://github.com/monero-project/monero/issues/6151) was opened. A quick investigation found that the binaries of the CLI wallet had been compromised and a malicious version was being served. The problem was immediately fixed, which means the compromised files were online for a very short amount of time. The binaries are now served from another, safe, source. [See the reddit post by core team member binaryfate](https://www.reddit.com/r/Monero/comments/dyfozs/security_warning_cli_binaries_available_on/).

It's strongly recommended to anyone who downloaded the CLI wallet from this website between Monday 18th 2:30 AM UTC and 4:30 PM UTC, to check the hashes of their binaries. If they don't match the official ones, delete the files and download them again. <b>Do not run the compromised binaries for any reason</b>.

We have two guides available to help users check the authenticity of their binaries: <a href="{{site.baseurl}}/resources/user-guides/verification-windows-beginner.html">Verify binaries on Windows (beginner)</a> and <a href="{{site.baseurl}}/resources/user-guides/verification-allos-advanced.html">Verify binaries on Linux, Mac, or Windows command line (advanced)</a>. Signed hashes can be found here: https://getmonero.org/downloads/hashes.txt.

The situation is being investigated and updates will be provided soon.

<i>The Monero community</i>
