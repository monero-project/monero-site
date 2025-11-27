---
title: "Post-Mortem of find_and_save_rings() bug"
summary: "Wallet privacy leak disclosure. v0.18.4.2 is highly recommended."
tags: [core, crypto, dev, community]
author: Jeffro256
---

## Quick Facts

- Severity: HIGH if using untrusted remote daemon, MEDIUM otherwise
- Affected versions: GUI/CLI wallet versions v0.12.0.0 to v0.18.4.1
- Impact: Sends TXIDs of outgoing transactions to daemon after first time loading wallet from file, reducing sender anonymity
- Fix: Update Monero [CLI](https://getmonero.org/2025/08/26/monero-0.18.4.2-released.html) / [GUI](https://getmonero.org/2025/08/26/monero-GUI-0.18.4.2-released.html) to v0.18.4.2
- Workaround: TBD

## Introduction

In 2018, a persistent "ring database" was added to `wallet2` to solve a sender privacy problem with forks of Monero. If an enote was received before a fork occurs, and a wallet tries spending that enote after the fork occurs on both forks, the same key image will appear in the input to both of those transactions on the different forks. By necessity, one of the ring members must be the same between those two forks (the "true spend"). If no other ring members are shared between those two inputs, but both ring signatures verify correctly, then an external observer can pin which ring member is the "true spend". This destroys sender anonymity. To combat this, a ring database is populated in a user directory which maps spent key images to their ring signatures. Then, if a forked wallet tries to spend an enote already spent on another chain, it will lookup up ring signature data from the local ring database, and try to re-use as many decoys from that ring as possible. This reduces the sender anonymity risk for spending enotes across different forks.

There are basically three ways that the ring database can be populated: the ring indices from transactions can be added from 1) scanned outgoing transactions during a normal chain refresh 2) transactions submitted to the network from that wallet and 3) already-known outgoing transactions after explicitly fetching them from the daemon. The method `tools::wallet2::find_and_save_rings()` implemented the latter of the three schemes. Its purpose was to populate the ring database for already-existing wallets created before the v0.12.0.0 release after which rings were added during refresh, without having to rescan the whole blockchain. However, as it turns out, `tools::wallet2::find_and_save_rings()` was called more often than it should have given its niche purpose.

## Reproducing

Here are steps to reproduce the privacy leak using the CLI wallet (assumes working daemon connection):

1. Create wallet (same-device keys, hardware wallet keys, multisig, etc), remember seed phrase if applicable
2. Receive an enote, spend said enote, wait 10 blocks
3. Delete (or move) wallet files, both keys and cache
4. Restore wallet and refresh before saving
5. Close wallet
6. (Optional) Open packet inspection software (e.g. Wireshark) and begin logging RPC traffic (using `--daemon-ssl disabled` helps here)
7. Re-open wallet
8. Daemon now has list of confirmed outgoing transactions ☹️
9. (Optional) If using packet inspection software, filter using the string `gettransactions`
10. To repeat, go to step 3

## Technical explanation

`tools::wallet2::find_and_save_rings()` was called unconditionally when loading a wallet from file, inside `wallet2::load()`. However, it would return early if the member field `m_ring_history_saved` was equal to `true`. At the end of the call to `tools::wallet2::find_and_save_rings()`, `m_ring_history_saved` is set to `true`. However, initializing a `wallet2` object sets `m_ring_history_saved` to `false`. This field, `m_ring_history_saved`, is also serialized into the wallet cache file. So, after a wallet's first load, if there are scanned outgoing transactions in the cache during the first save, `m_ring_history_saved` is set to `false` so `tools::wallet2::find_and_save_rings()` proceeds. It grabs all TXIDs from outgoing transactions (stored in field member `m_confirmed_txs`), and performs a `/gettransactions` RPC call with that list of TXIDs to the daemon, leaking its outgoing transaction history. The RPC call is made without discriminating whether the daemon is marked as trusted or not.

Let's say that you delete the cache file and keep keys file. Note that while `tools::wallet2::find_and_save_rings()` is still called on load, the `/gettransactions` RPC call is skipped since a missing cache file causes `m_confirmed_txs` to be empty. `m_ring_history_saved` is still set to `true` at the end of the call, and so the RPC call will never be made henceforth. So merely deleting the cache file won't trigger the vulnerability, the keys file also needs to not be present.

- Vulnerability introduction commit (master branch): [5f146873](https://github.com/monero-project/monero/commit/5f146873c58f39632e26c5edbf2f618cacbd76a5)
- Vulnerability fix commit (master branch): [dc350f35](https://github.com/monero-project/monero/commit/dc350f35a5008558ecc9c868b6af8138e0cf22e8)

## Privacy implications with ring signatures

When the aforementioned RPC call is triggered, the daemon receives a list of TXIDs of your wallets outgoing transactions. If a malicious operator of said daemon knows the receiver of the outputs in the outgoing transactions, then the operator can tie that wallet as sending funds to a certain receiver. Furthermore, because of the current ring size and size of the the blockchain, the probability of selecting your own owned outputs as a decoy in your own ring signatures is small. As such, a smart malicous operator, with a list of your outgoing TXIDs, can inspect the ring members of your going transactions and cross-reference if any of the members are outputs of transactions in the TXID list. If so, the operator can guess with high accuracy that a certain change output was spent in a certain ring in a later outgoing transaction. This allows the operator to construct a probabilistic transaction graph, without amount information, for a wallet's funds after entering possession.
