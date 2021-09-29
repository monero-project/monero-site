---
summary: 'a 13 or 25 word phrase used to backup a Monero account, available in a number of languages'
terms: ["mnemonic-seed", "mnemonic"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

A 13 or 25 word phrase used to backup a Monero account, available in a
number of languages. This 25-word phrase (13 words in the case of MyMonero)
has all the information needed to view and spend funds from a Monero
@account.

### In-depth Information

In the official wallet, the mnemonic seed comprises 25 words with the last
word being used as a checksum. Those words correspond to a 256-bit integer,
which is the account's *private* @spend-key. The *private* @view-key is
derived by hashing the private spend key with Keccak-256, producing a second
256-bit integer. The corresponding *public* keys are then derived from the
private keys.

By storing the 25 word mnemonic key in a secure location, you have a backup
of your private keys and hence all of your Moneroj. Sharing this 25 word key
is the equivalent of allowing another person complete access to your funds.

It's not a good idea to store more than you want to lose in a "hot wallet"
aka a wallet which is currently or has ever been connected to the internet
or loaded onto any device that has or may in the future be connected to the
internet or any untrusted source!

By creating a cold, or @paper-wallet you can safely store Moneroj.
