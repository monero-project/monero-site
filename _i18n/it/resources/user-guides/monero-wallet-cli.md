{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="false" version=page.version %}
# monero-wallet-cli

`monero-wallet-cli` is the wallet software that ships with the Monero tree. It is a console program,
and manages an account. While a bitcoin wallet manages both an account and the blockchain,
Monero separates these: `monerod` handles the blockchain, and `monero-wallet-cli` handles the account.

This guide will show how to perform various operations from the `monero-wallet-cli` UI. The guide assumes you are using the most recent version of Monero and have already created an account according to the other guides.


## Checking your balance

Since the blockchain handling and the wallet are separate programs, many uses of `monero-wallet-cli`
need to work with the daemon. This includes looking for incoming transactions to your address.
Once you are running both `monero-wallet-cli` and `monerod`, enter `balance`.

Example:

This will pull blocks from the daemon the wallet did not yet see, and update your balance
to match. This process will normally be done in the background every minute or so. To see the
balance without refreshing:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

In this example, `Balance` is your total balance. The `unlocked balance` is the amount currently available to spend. Newly received transactions require 10 confirmations on the blockchain before being unlocked. `unlocked dust` refers to very small amounts of unspent outputs that may have accumulated in your account.

## Sending monero

You will need the standard address you want to send to (a long string starting with '4'), and
possibly a payment ID, if the receiving party requires one. In that latter case, that party
may instead give you an integrated address, which is both of these packed into a single address.

### Sending to a standard address:

    transfer ADDRESS AMOUNT PAYMENTID

Replace `ADDRESS` with the address you want to send to, `AMOUNT` with how many monero you want to send,
and `PAYMENTID` with the payment ID you were given. Payment ID's are optional. If the receiving party doesn't need one, just
omit it.

### Sending to an integrated address:

    transfer ADDRESS AMOUNT

The payment ID is implicit in the integrated address in that case.

### Specify the number of outputs for a transaction:

    transfer RINGSIZE ADDRESS AMOUNT

Replace `RINGSIZE` with the number of outputs you wish to use. **If not specified, the default is 7.** It's a good idea to use the default, but you can increase the number if you want to include more outputs. The higher the number, the larger the transaction, and higher fees are needed.


## Receiving monero

If you have your own Monero address, you just need to give your standard address to someone.

You can find out your address with:

    address

Since Monero is anonymous, you won't see the origin address the funds you receive came from. If you
want to know, for instance to credit a particular customer, you'll have to tell the sender to use
a payment ID, which is an arbitrary optional tag which gets attached to a transaction. To make life
easier, you can generate an address that already includes a random payment ID:

    integrated_address

This will generate a random payment ID, and give you the address that includes your own account
and that payment ID. If you want to select a particular payment ID, you can do that too:

    integrated_address 12346780abcdef00

Payments made to an integrated address generated from your account will go to your account,
with that payment id attached, so you can tell payments apart.


## Proving to a third party you paid someone

If you pay a merchant, and the merchant claims to not have received the funds, you may need
to prove to a third party you did send the funds - or even to the merchant, if it is a honest
mistake. Monero is private, so you can't just point to your transaction in the blockchain,
as you can't tell who sent it, and who received it. However, by supplying the per-transaction
private key to a party, that party can tell whether that transaction sent monero to that
particular address. Note that storing these per-transaction keys is disabled by default, and
you will have to enable it before sending, if you think you may need it:

    set store-tx-info 1

You can retrieve the tx key from an earlier transaction:

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Pass in the transaction ID you want the key for. Remember that a payment might have been
split in more than one transaction, so you may need several keys. You can then send that key,
or these keys, to whoever you want to provide proof of your transaction, along with the
transaction id and the address you sent to. Note that this third party, if knowing your
own address, will be able to see how much change was returned to you as well.

If you are the third party (that is, someone wants to prove to you that they sent monero
to an address), then you can check this way:

    check_tx_key TXID TXKEY ADDRESS

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID, per-transaction key, and destination
address which were supplied to you, respectively. monero-wallet-cli will check that transaction
and let you know how much monero this transaction paid to the given address.


## Getting a chance to confirm/cancel payments

If you want to get a last chance confirmation when sending a payment:

    set always-confirm-transfers 1


## How to find a payment to you

If you received a payment using a particular payment ID, you can look it up:

    payments PAYMENTID

You can give more than one payment ID too.

More generally, you can review incoming and outgoing payments:

    show_transfers

You can give an optional height to list only recent transactions, and request
only incoming or outgoing transactions. For example,

    show_transfers in 650000

will only show incoming transfers after block 650000. You can also give a height
range.

If you want to mine, you can do so from the wallet:

    start_mining 2

This will start mining on the daemon usin two threads. Note that this is solo mining,
and may take a while before you find a block. To stop mining:

    stop_mining

