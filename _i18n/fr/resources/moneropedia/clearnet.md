---
layout: moneropedia
entry: "Clearnet"
tags: ["kovri"]
terms: ["Clearnet"]
summary: "The internet in which anonymous overlay networks are built upon"
---

### The Basics

When you use the internet for things like news, email, social media, and even Monero, you are most likely using a clearnet connection. This means that *all* of your connections can be tracked, traced, and monitored by:

- your [ISP](https://en.wikipedia.org/wiki/ISP)
- the website/service/person you're communicating with
- possibly a [Five Eyes](https://en.wikipedia.org/wiki/5_Eyes) capable entity

and even if you use [HTTPS](https://en.wikipedia.org/wiki/HTTPS) or similar (which *encrypts* your transmission), your route is not hidden nor is it anonymous, thus; it is in the *clear*.

### In-depth information

Since a traditional [VPN](https://en.wikipedia.org/wiki/VPN) cannot save you from clearnet (as you are still using *clearnet* (though you are more proxied than without a VPN)), you should use an *anonymous overlay network* to avoid using clearnet directly:

- @Kovri
- @Java-I2P
- [Tor](https://torproject.org/)

These technologies protect you from clearnet by building an anonymous network **over** clearnet to keep your transmissions both encrypted **and** anonymous.

Here is an accurate, [interactive diagram](https://www.eff.org/pages/tor-and-https) provided by the [EFF](https://www.eff.org/) which describes *clearnet* as it relates to **Tor**. The concept also (somewhat) applies to @Kovri and @I2P in terms of anonymity with the exception that:

- @Kovri does not use exit nodes when connecting to an @eepsite
- Your traffic never need to leave the @I2P network
- You do not need HTTPS to use @Kovri (with the exception of @reseed)
