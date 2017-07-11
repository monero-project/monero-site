---
layout: static_page
title: "Mining with XMRig and Docker"
title-pre-kick: "Mining XMR"
title-kick: "With XMRig and DOcker"
title-post-kick: ""
kick-class: "purple-kicks"
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

##Introduction

This guide is two fold, ease of use for mining on Linux distributions and some extra security around mining as most of these miners have not had security auditing.

At the end of this guide you will be able to sleep a little easier knowing that if the miner gets exploited it will not migrate to your OS.

###Why Docker

Docker is being used as it is the most well known and has the biggest chance to be already installed.

The container I an using is [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/) as per the name it is built on the [Alpine Linux](https://www.alpinelinux.org/) image.

###Why XMRig

[XMRig](https://github.com/xmrig/xmrig) is just a really solid miner to me. Nice output and statistics, no flashy web-ui's or dependencies. The XMRig container is only ~4MB what makes it extremely portable. 

####Step 1: Mining with XMRig

Run the following

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

####Step 2: There is no Step 2

You have already done everything you need to do. You are now mining in a docker container with XMRig `ctrl+c` to exit the miner or add `-d` just after `docker run` to background the miner.

