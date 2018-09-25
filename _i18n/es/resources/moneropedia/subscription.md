---
tags: ["kovri"]
terms: ["Subscription"]
summary: "A file used by address book which contains I2P hosts paired with I2P destinations"
---

{% include untranslated.html %}
### The Basics

A subscription is a file which contains a list of `.i2p` hosts paired with their respective @destination. Subscriptions are used by the @address-book.

### In-depth information

Similar to how a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) can map an internet hostname to a specified address, a subscription matches a `.i2p` address to @base64-address by using the following format (no spaces allowed): `host=address`

More specifically, a subscription pairs a @locally-unique-host to @base64-address.

Example:

```
anonimal.i2p=AQZGLAMpI9Q0l0kmMj1vpJJYK3CjLp~fE3MfvE-e7KMKjI5cPOH6EN8m794uHJ6b09qM8mb9VEv1lVLEov~usVliTSXCSHuRBOCIwIOuDNU0AbVa4BpIx~2sU4TxKhoaA3zQ6VzINoduTdR2IJhPvI5xzezp7dR21CEQGGTbenDslXeQ4iLHFA2~bzp1f7etSl9T2W9RID-KH78sRQmzWnv7dbhNodMbpO6xsf1vENf6bMRzqD5vgHEHZu2aSoNuPyYxDU1eM6--61b2xp9mt1k3ud-5WvPVg89RaU9ugU5cxaHgR927lHMCAEU2Ax~zUb3DbrvgQBOTHnJEx2Fp7pOK~PnP6ylkYKQMfLROosLDXinxOoSKP0UYCh2WgIUPwE7WzJH3PiJVF0~WZ1dZ9mg00c~gzLgmkOxe1NpFRNg6XzoARivNVB5NuWqNxr5WKWMLBGQ9YHvHO1OHhUJTowb9X90BhtHnLK2AHwO6fV-iHWxRJyDabhSMj1kuYpVUBQAEAAcAAA==
```

1. `anonimal.i2p` is the @locally-unique-host
2. `=` is the separator
3. Everything that remains is the @base64-address

### Subscription types

For @Kovri, there are two types of subscription files: *public* and *private*.

A *public* subscription:
- is used when bootstrapping to use essential services (IRC, email, Monero, etc.)
- is static and is refreshed every 12 hours from Monero's @address-book server
- allows you to safely share the subscription with everyone as it is publically available (anyone who shares the same public subscription will also be able to resolve the same hostname to the same destination as you)

A *private* subscription:
- is used exclusively by you and is not shared with others unless you explicitly choose to share the file
- default file is `private_hosts.txt` in your @data-directory

### Updating a private subscription

You can use a @jump-service to manually update your private subscription. The updated subscription will then be fed into the @address-book for you to use.

### Notes
To learn how to subscribe to multiple subscriptions, see the [user-guide](https://github.com/monero-project/kovri/blob/master/doc/USER_GUIDE.md).
