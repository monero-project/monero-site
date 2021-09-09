{% include disclaimer.html translated="no" translationOutdated="no" %}

### Table of contents

- [What is important to know about Monero payments?](#what-is-important-to-know-about-monero-payments)
- [How to make a payment using Monero GUI](#how-to-make-a-payment-using-monero-gui)
- [How to check if your payment transaction was confirmed](#how-to-check-if-your-payment-transaction-was-confirmed)
- [What should I do if my transaction is not confirmed or has failed?](#what-should-i-do-if-my-transaction-is-not-confirmed-or-has-failed)
- [How to prove a payment was made](#how-to-prove-a-payment-was-made)

### What is important to know about Monero payments?

- **Monero transactions are irreversible**: Monero transactions can't be reversed once they are confirmed (included in a @block) by a miner. If you've sent a transaction and it was confirmed by a miner, the only way to get your money back is to ask the receiver to send it back to you.

- **Monero transactions are private**: people watching the @blockchain will not know important details of your transaction, like sender address, amount and recipient address. The recipient of your payment will know all details of the transaction, except the sender address (your wallet address) and transaction description.

- **The Monero transaction fee is paid by the sender**: unlike credit cards, where the merchant pays the transaction fee, in Monero the sender pays the transaction fee, which is used to incentivize miners to include the transaction in a block.

- **The Monero transaction fee does not depend on the amount sent**: it depends on the network congestion at the time and the data size of your transaction, which increases together with the number of recipients and coins being spent.

### How to make a payment using Monero GUI

1) Go to `Send` page. In order to send a transaction, your node and wallet must be synchronized (this status can be seen in the lower left corner) and the currently selected account must have an available (unlocked) balance.

<img src="/img/resources/user-guides/en/make-payment/send_page.png" style="width: 600px;"/>

2) On `Address` field, enter the recipient address. If it's a Monero address, it should start with `4...` or `8...`.

Alternatively you can import an address using `Grab QR code from screen` and `Import from address book` buttons.

You can also paste in this field a Monero payment request with an amount request, which starts with `monero:...`.

This field also supports @OpenAlias addresses, which are human readable addresses (for instance, `donate.getmonero.org`). If you enter an OpenAlias address, a `Resolve` button will be displayed. Click on it to retrieve its Monero address.

<img src="/img/resources/user-guides/en/make-payment/openalias.png" style="width: 587px;"/>

3) On `Amount` field, enter the amount in XMR. You can also click on `Send all` button, which will create a transaction sending all unlocked balance from the currently selected account.

Below the XMR amount you can see the amount converted in fiat currency (USD or EUR). If your wallet is not displaying it, go to `Settings` > `Interface` page to enable this feature.

4) Click on `Add recipient` if you want to add more recipients to the transaction. A transaction with multiple recipients will only pay a single transaction fee, but the higher the number of recipients, the higher the fee will be.

Sending to multiple recipients doesn't compromise your privacy, since each recipient will not know the other recipients of the transaction, nor how much was sent for each one.

5) If you are using Monero GUI in Advanced mode, you will see a `Transaction priority` dropbox. It's recommended to leave it on `Automatic`.

For privacy reasons, it's not possible to enter a custom fee, but you can choose between four fee levels. It's not necessary to change the fee level unless the Monero network is congested.

The transaction fee does not depend on the amount sent, it depends on the network congestion at the time and the data size of your transaction. The main factors that increase the data size of your transaction are a higher number of recipients and a higher number of coins being spent. Sending 10 XMR using 10 coins (10 outputs, each one worth 1 XMR) requires more transaction fee than sending 10 XMR using a single coin (1 output worth 10 XMR). The more transactions you send or receive, the higher will be the number of coins in your wallet. Currently it's not possible to see or manage individual coins on Monero GUI. It is an advanced feature and most users don't need it. If you need it, this feature is available on [Monero CLI]({{site.baseurl}}/downloads/#cli) and [Feather wallet]({{site.baseurl}}/downloads/#mobilelight).

6) Optionally, click on `Add description` to add a note for your transaction, which will be saved in your wallet and can be later consulted on `History` page. This feature is for your control only: it will not be sent to the receiver neither registered on the blockchain.

7) Click on `Send` button.

8) A transaction confirmation dialog will appear. Check if the transaction details are correct and click on `Confirm` button.

<img src="/img/resources/user-guides/en/make-payment/tx_confirmation.png" style="width: 600px;"/>

9) Enter your wallet password and click on `Send transaction` button.

<img src="/img/resources/user-guides/en/make-payment/password.png" style="width: 427px;"/>

10) Next, you will see the `Transaction successfully sent!` dialog.

<img src="/img/resources/user-guides/en/make-payment/tx_successful.png" style="width: 600px;"/>

This means your transaction was sent to the Monero network and is now waiting to be confirmed (included in a @block) by a miner. Now, you just have to wait for your transaction to be confirmed, which takes on average 2 minutes. Once you've sent your transaction to the network, there is nothing you can do to make the confirmation process faster.

This dialog will also display the `Transaction ID` (txid), which is a unique identifier for your Monero transaction. Optionally, click on `Copy` button to copy it to the clipboard. You can enter it on `Transactions` page or [block explorers]({{site.baseurl}}/resources/tools/) to see the transaction details. Sometimes a recipient may also ask you to send a transaction ID to verify you’ve sent Monero to them.

Click on `View progress` button to open `Transactions` page and see the transaction details. On this page you can monitor the @blockchain and check if your transaction was confirmed.

### How to check if your payment transaction was confirmed

The `Transactions` page allows you to see if your payment transaction was confirmed.

<img src="/img/resources/user-guides/en/make-payment/transactions_page.png" style="width: 600px;"/>

There are three possible states for your sent transaction:

- **Sent (Pending)**: your transaction was sent to the Monero network but it is still waiting to be confirmed. Please wait for a while until a miner includes your transaction in a block, confirming it. This process takes on average 2 minutes, but sometimes can take longer.
- **Sent**: your transaction was included in a block by a miner and is now considered confirmed. On `Blockheight` you can see the block number in which your transaction was included. On `Confirmations` you can see how many blocks were mined since your transaction was included in a block.
- **Sent (Failed)**: something went wrong and your transaction was not sent to the Monero network. Read the following section to see how you can solve this problem.

### What should I do if my transaction is not confirmed or has failed?

First of all, don't panic. In Monero your money can't get lost "in limbo". If you sent a transaction and it is not getting confirmed or has failed, your money is not at risk of being lost. The money is not removed from your wallet and sent somewhere before arriving at the recipient wallet. There are only two possibilities: either the transaction hasn't been confirmed and the money is still yours, or it was confirmed and the recipient now has the money.

First, try following [this guide](https://monero.stackexchange.com/questions/6649/transaction-stuck-as-pending-in-the-gui). If it doesn't solve your problem, ask for support on [reddit (r/monerosupport)](https://www.reddit.com/r/monerosupport/) or [Monero public chat rooms]({{site.baseurl}}/community/hangouts/).

### How to prove a payment was made

Some merchants require proof of payment. In order to do that, please read [How to prove a payment was made]({{site.baseurl}}/resources/user-guides/prove-payment.html).
