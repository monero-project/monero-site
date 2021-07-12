{% include disclaimer.html translated="no" translationOutdated="no" %}

`monero-wallet-cli` is the wallet software shipped in the Monero
archives. It is a console program, and manages an account. While a bitcoin
wallet manages both an account and the blockchain, Monero separates these:
`monerod` handles the blockchain, and `monero-wallet-cli` handles the
account.

This guide will show how to perform various operations with
`monero-wallet-cli`. The guide assumes you are using the most recent version
of Monero and have already created an account according to the other guides.

## Overview

You can have a list of the most important commands by running `help`:

```
Important commands:

"welcome" - Show welcome message.
"help all" - Show the list of all available commands.
"help <command>" - Show a command's documentation.
"apropos <keyword>" - Show commands related to a keyword.

"wallet_info" - Show wallet main address and other info.
"balance" - Show balance.
"address all" - Show all addresses.
"address new [<label text with white spaces allowed>]" - Create new subaddress.
"transfer <address> <amount>" - Send XMR to an address.
"show_transfers [in|out|pending|failed|pool]" - Show transactions.
"sweep_all <address>" - Send whole balance to another wallet.
"seed" - Show secret 25 words that can be used to recover this wallet.
"refresh" - Synchronize wallet with the Monero network.
"status" - Check current status of wallet.
"version" - Check software version.
"exit" - Exit wallet.

"donate <amount>" - Donate XMR to the development team.
```

## Checking your balance

Since the blockchain handling and the wallet are separate programs, many
uses of `monero-wallet-cli` need to work with the @daemon. This includes
looking for incoming transactions to your address.  Once you are running
both `monero-wallet-cli` and `monerod`, enter `balance`.

Output:

```
Currently selected account: [0] Primary account
Tag: (No tag assigned)
Balance: 7.499942880000, unlocked balance: 7.499942880000
```

In this example you're viewing the balance of your primary account (with
index `[0]`). `Balance` is your total balance. The `unlocked balance` is the
amount currently available to spend. Newly received transactions require 10
confirmations on the blockchain before being unlocked.

## Sending monero

You will need the standard address you want to send to (a long string
starting with '4' or a '8'). The command structure is:

```
transfer ADDRESS AMOUNT
```

Replace `ADDRESS` with the address you want to send to and `AMOUNT` with how
many monero you want to send.

## Receiving monero

If you have your own Monero address, you just need to give your address to
someone.

You can find out your primary address with:

```
address
```

Since Monero is anonymous, you won't see the origin address the funds you
receive came from. If you want to know, for instance to credit a particular
customer, you'll have to tell the sender to use a payment ID, which is an
arbitrary optional tag which gets attached to a transaction. It's not
possible to use standalone payment addresses, but you can generate an
address that already includes a random payment ID (integrated addresss)
using `integrated_address`:

```
Random payment ID: <82d79055f3b27f56>
Matching integrated address: 4KHQkZ4MmVePC2yau6Mb8vhuGGy8LVdsZD8CFcQJvr4BSTfC5AQX3aXCn5RiDPjvsEHiJu1TC1ybR8pRTCbZM5bhTrAD3HDwWMtAn1K7nV
```

This will generate a random payment ID, and give you the address that
includes your own account and that payment ID. If you want to select a
particular payment ID, you can do that too. Use:

```
integrated_address 82d79055f3b27f56
```

Payments made to an integrated address generated from your account will go
to your account, with that payment ID attached, so you can tell payments
apart.

### Using subaddresses

It's suggested to use subaddresses (starting with `8`) instead of your main
address (starting with `4`) to receive funds. Run:

```
address new [<label text with white spaces allowed>]
```

This will generate a subaddress and its optional label, which addess you can
share to receive payment on the account it's linked to.  For example,

```
address new github_donations
```

will generate a subaddress and its label 'github_donations'.

To view all generated addresses, run:

```
address all
```

## Proving to a third party you paid someone

If you pay a merchant, and the merchant claims to not have received the
funds, you may need to prove to a third party you did send the funds - or
even to the merchant, if it is a honest mistake. Monero is private, so you
can't just point to your transaction in the blockchain, as you can't tell
who sent it, and who received it. However, by supplying the per-transaction
private key to a party, that party can tell whether that transaction sent
monero to that particular address. Note that storing these per-transaction
keys is disabled by default, and you will have to enable it before sending,
if you think you may need it:

```
set store-tx-info 1
```

You can retrieve the tx key from an earlier transaction:

```
get_tx_key 1234567890123456789012345678901212345678901234567890123456789012
```

Pass in the transaction ID you want the key for. Remember that a payment
might have been split in more than one transaction, so you may need several
keys. You can then send that key, or these keys, to whoever you want to
provide proof of your transaction, along with the transaction id and the
address you sent to. Note that this third party, if knowing your own
address, will be able to see how much change was returned to you as well.

If you are the third party (that is, someone wants to prove to you that they
sent monero to an address), then you can check this way:

```
check_tx_key TXID TXKEY ADDRESS
```

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID,
per-transaction key, and destination address which were supplied to you,
respectively. `monero-wallet-cli` will check that transaction and let you
know how much monero this transaction paid to the given address.

## How to find a payment to you

If you received a payment using a particular payment ID, you can look it up:

```
payments PAYMENTID
```

You can give more than one payment ID too.

More generally, you can review incoming and outgoing payments:

```
show_transfers
```

You can give an optional height to list only recent transactions, and
request only incoming or outgoing transactions. For example,

```
show_transfers in 650000
```

will only show incoming transfers after block 650000. You can also give a
height range.

If you want to mine, you can do so from the wallet:

```
start_mining 2
```

This will start mining on the daemon usin two threads. Note that this is
solo mining, and may take a while before you find a block. To stop mining:

```
stop_mining
```
