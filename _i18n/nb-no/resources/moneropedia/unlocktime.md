---
summary: 'a special transaction where the recipient(s) can only spend the funds after a future date, as set by the sender'
terms: ["unlock-time", "opplåsningstid"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Det grunleggende

A special transaction where the recipient(s) can only spend the funds after
a future date, as set by the sender.

Unlock time allows you to send a transaction to someone, such that they can
not spend it until after a certain block height, or until a certain
time. These locks are per transaction, not per output. This means any
returning change will be locked too. ***Do not unintentionally lock your
change outputs.***

Merk at dette fungerer på en annen måte enn Bitcoins
[nLockTime](https://en.bitcoin.it/wiki/NLockTime), der transaksjonen ikke er
gyldig før den utvalgte tiden.

Using `unlock_time` has privacy consequences for the user(s) (and the wider
Monero network if it is flooded with these). The value is public on the
blockchain, so be aware of potential clustering. The feature is rarely used
and may be removed in a future Monero release, so the Monero developers
advise against building critical infrastructure that depends on this
feature.

Decoy outputs may be selected from these locked outputs, thus identifying
them as provable decoy outputs. At the moment, this has little impact on
wider network privacy since this unlock time feature is so rarely used.

Further, true spends after a reasonably long lock time (more than several
days) may be heuristically identified as the true spend, since there will be
fewer other transactions using those outputs as decoys around that time
period.

Users should verify that the outputs they receive from others are not
encumbered by an unexpected unlock time. Users may want to hold off acting
upon such a transaction until the unlock time lapses. The `show_transfers`
command includes the unlock time.

### Technical Use

Usage when using the `transfer` command: `unlock_time` + unsigned int

Integer values less than 500,000,000 are interpreted as absolute block
height. Values greater than or equal to 500,000,000 are interpreted as an
absolute Unix epoch timestamp. The Monero CLI wallet only supports values
less than 500,000,000; Unix timestamps must be submitted via RPC or another
custom software.

The integer value will be interpreted by the protocol as an ***absolute***
block height value or Unix epoch timestamp, not a relative value. Using an
integer value less than the current block height or a Unix epoch timestamp
less than the current Unix epoch timestamp makes no sense. For example, if
you want the Monero transaction to unlock 100 blocks from now, add 100 to
the current block height.
