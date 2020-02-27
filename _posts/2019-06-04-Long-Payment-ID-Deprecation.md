---
layout: post
title: Long Payment ID Deprecation
summary: Announcement of the deprecation of long payment IDs
tags: [community, crypto]
author: dEBRUYNE / Fluffypony
---

Dear participants of the Monero ecosystem,

We would like to inform you that we will be phasing out long payment
IDs this year. Long payment IDs are detrimental to privacy and a
source of negative user experience (as well as additional support work
for services). Services will have to upgrade to either integrated
addresses or subaddresses. Note, however, that there is some
discussion about phasing out integrated addresses as well. Therefore,
services are, to avoid having to potentially perform additional work,
encouraged to upgrade to subaddresses directly.

Long payment IDs will be phased out because they have several salient
drawbacks. First, long payment IDs are detrimental to privacy insofar
as they can potentially link the transactions of a user in case of
reusage. Second, long payment IDs have to be attached separately to a
transaction. This is inconsistent with conventional cryptocurrency
transactions and therefore unintuitive for the user. As a result,
users occasionally forget to attach the long payment ID when sending
their transaction to a service and thus have to go through support to
'recover' their funds. Third, it logically follows from the previous
point that long payment IDs cause additional support work for
services. Fourth, only one long payment ID can be attached to a
transaction. Thus, services cannot batch withdrawals of multiple users
specifying a long payment ID. By contrast, subaddresses have no such
restriction and withdrawals can thus all be batched.

In sum, payment IDs have serveral salient drawbacks and will therefore
be phased out. Services are recommended to upgrade to subaddresses as
soon as possible. Subaddresses essentially function similar to Bitcoin
HD wallets and should thus be relatively straightforward to implement.
Furthermore, subaddresses are managable from a resource point point of
view.

Yours sincerely,

The Monero dev community

Appendix:

An upgrade process PDF that may be useful for you can be found here:
https://github.com/monero-project/meta/files/2775745/Upgrade.Process.pdf
