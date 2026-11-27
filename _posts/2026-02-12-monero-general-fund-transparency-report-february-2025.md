---
layout: post
title: "Monero General Fund Transparency Report - February 2025"
summary: Report on the Monero General Fund usage and current balances as of February 2025.
tags: [community, core]
author: binaryFate
---

## Current General Fund usage policy

I have expressed the general spending policy several years ago and it has not changed. See the [previous report](https://old.reddit.com/r/Monero/comments/11fslu9/monero_general_fund_transparency_report_march_2023/).

In short:

- The GF is used to cover costs of basic infrastructure useful for the Monero project (domain, hosting, CDN...).

- It is used to cover part of some CCS proposals deemed "fundamental" to the project. When I donate to these CCS proposals I always mention it immediately, so at any point in time you can get an up-to-date overview by looking at my comments on [this page](https://repo.getmonero.org/binaryFate).

- If that general spend policy was to change (say, an important payment appears necessary and does not fall under the two categories above), I would inform the community immediately without waiting for the next report.

## Reminder on Core Team funding

Just like the rest of the core team, I am not and I have never been paid for any of my contributions. I am just a passionate volunteer.

## Current setup

Until late 2023 we had the following wallets (see also my [previous report](https://old.reddit.com/r/Monero/comments/11fslu9/monero_general_fund_transparency_report_march_2023/)).

- **GF**: The known address for donations, this wallet has existed for many years now. Me and Fluffypony have access to it, plus possibly some other core team members.

- **GF2**: A new wallet I created when Fluffypony had issues in the US, to contain bulk of the funds.

End of 2023 following the hack of the CCS wallet (even though the incident had nothing to do with me) I decided to revamp my personal opsec and setup. I deprecated the wallet GF2 (now empty), and moved all funds to a new wallet I call "GF-Vault".

## Amounts of XMR as of February 6th, 2025

Currently 162.980239254745 in GF and 15,584.2318619398 in GF-Vault. (GF2 empty).  
Total **15,747.212101194545 XMR**.  
The Bitcoin donation address contains **0.21869208 BTC**.

## All transactions in a readable spreadsheet

I have exported all transactions from the 3 wallets and annotated every spending made since the last report. The format is ODS.  
Please note there are several tabs in the file! :)  
Find it here: [downloads.getmonero.org/GF_report_February_2025.ods](https://downloads.getmonero.org/GF_report_February_2025.ods)

## Notes

There are small "debts" outstanding to me, so a heads-up:

- I never refunded myself for the payment I made of the last 2 years of SSL certificate for getmonero.org. Total cost = 140$.

- There are recurring payments for some secondary servers (like matrix, repo...) that are charged to me personally in fiat, and I am supposed to recover costs from corresponding sponsors. If these sponsors fall through, I will eventually refund myself from the GF. I will give an explicit notification to the community if/when I execute these transfers, as I am mindful any payment from the GF to me personally is extra sensitive and I want to be vocal about them.

## Technical info

Note the Monero General Fund donation address remains `888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H`.

The info below is to verify all wallets activity and outstanding balances.

**GF**  
Base address: `44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A`  
View key secret: `f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501`  
Key images: [downloads.getmonero.org/key_images_GF_until_20250206](https://downloads.getmonero.org/key_images_GF_until_20250206)

**GF2**  
Base address: `47Q7HtVaKZKKfxEwK1qJgDdutgxYu892b1qu34Yy1Fow5m1hPQCpQNx6cBTc6tgJDvdggtHqssfybH5AJSaud7t3DffrAXw`  
View key secret: `5c58e403ec2076594f4791b0322ad4b8720ad6bedfafee03aa3ff97f7b1a540f`  
Key images: [downloads.getmonero.org/key_images_GF2_until_20250206](https://downloads.getmonero.org/key_images_GF2_until_20250206)

**GF-Vault**  
Base address: `48UUYsQX9fXf34zW5MurZs8SiAZi3nhUZL3d24xSoxniJaDeLSFUrJv7uaPQ8TfRxR8BDHJV7qKxr4bDqKmgGk5KKjXfUA8`  
View key secret: `c19710062c7ca4f3bda9039d323c99b387cd1684ee0ca5fe7bd744a70688c500`  
Key images: [downloads.getmonero.org/key_images_GF-Vault_until_20250206](https://downloads.getmonero.org/key_images_GF-Vault_until_20250206)

The Bitcoin address is: `1KTexdemPdxSBcG55heUuTjDRYqbC5ZL8H`, you do not need a view key to track it or verify its balance ;)
