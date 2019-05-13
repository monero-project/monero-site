---
tags: ["kovri"]
terms: ["Address-Book"]
summary: "Allows you to visit I2P websites/services that have the .i2p domain"
---

### The Basics

In order to browse @I2P sites or services with @Kovri, you'll need an address book. An address book will allow you to translate @I2P websites/services that use the `.i2p` [top-level domain](https://en.wikipedia.org/wiki/Top_level_domain) into an address that @I2P network will understand.

Without an address book, you would be stuck using a @base32-address every time you visit an @I2P website/service - and that's not fun!

### In-depth information

Since [DNS](https://en.wikipedia.org/wiki/DNS) does not exist on the @I2P network, @Kovri also does **not** use DNS or any sort of @canonically-unique-host resolution. Instead, Kovri pairs a @locally-unique-host to a @base64-address @destination in a @subscription. Once your address book is filled with a @subscription, you can resolve your favorite `.i2p` domain site into a usable @I2P destination.

### Creating an Address Book

By default, your installation will come with a default public @subscription called `hosts.txt` in your @data-directory. When @Kovri starts, it loads this subscription and fetches any other subscriptions you've specified. Once loaded, your address book will be appropriately filled. For details on how to manage subscriptions, see @subscription.

### Updating the Address Book

Currently, there are several ways to update your address book:

1. Use a @jump-service to insert I2P addresses into your address book
2. Use a @jump-service to copy/paste an address into your private @subscription
3. Manually add or subtract from a private @subscription

**Note: Kovri is in heavy development. In the future there *will* be easier ways to update the address book**

### Address Book / Naming specification

For specification details and more, visit the [Address Book and Naming Specification](https://geti2p.net/en/docs/naming)
