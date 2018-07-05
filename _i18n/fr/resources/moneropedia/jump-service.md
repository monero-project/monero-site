---
entry: "Jump Service"
tags: ["kovri"]
terms: ["Jump-Service"]
summary: "An I2P website service that adds addresses to your address book"
---

{% include untranslated.html %}
### The Basics

In your @I2P configured web browser, you can use a Jump Service to *jump* to an @I2P address that you don't have in your @address-book. Once you've *jumped* to the address, the address will be saved into your @address-book.

### In-depth Information

In an @I2P configured browser, visit: http://stats.i2p/i2p/lookup.html (courtesy of @Java-I2P's lead developer *zzz*)

Then, you'll have two options:

1. *Hostname lookup* the address you wish to visit and then manually copy/paste the result
2. *Jump* to the @I2P website by entering the @I2P hostname (**recommended**)

### Using hostname lookup

For example, entering `pinkpaste.i2p` into the *Hostname lookup* box (and then submitting) will return:

```
pinkpaste.i2p=m-HrPrIAsdxts0WM~P4mE8mt9P7g-QTaBvu7Gc6Nl0UX7Vwck-i~RvOPfK6W~kfdRvwhNTqevkBL2UF5l36We02Aiywu7kB2xOHRkze68h-Tg2ewvRVwokohguCD2G3wwAEz~7FVda2avYDCb9-N6TfuzxKLnmhPMvbNSjGL7ZsD2p-h207R3-2kvuMV9bfu-K~w9NI9XJhIyufvUnFYc2jnTVg8PbaR4UP57cNaOO2YIMPkbr6~yTcIu9B1sUfHK6-N~6virQDOxW4M-62rjnZkLpaCtkOsXslmCwZI--TkZ6hKi1kXZvNmJRE1rYfffYRFn38zhaqszeETX8HiIvahZhXF5fNumBziYdmLdw8hkuN1A~emU6Xz9g~a1Ixfsq1Qr~guYoOtaw-0rOFxNRS9yMehE-2LCb8c-cAg6z5OdlN4qJDl~ZHgru4d~EHp~BpAK3v7u2Gi-8l1ygVW-1CHVna~fwnbOPN3ANPwh6~~yUit0Cx1f54XiNRn6-nPBQAEAAcAAA==
```

Copy/paste this host=@base64-address pairing into your **private** @subscription.

### Directly jumping

For example, entering `pinkpaste.i2p` into the *Jump* box (and then submitting) will automatically redirect you to the website **and** insert the @locally-unique-host into @address-book.
