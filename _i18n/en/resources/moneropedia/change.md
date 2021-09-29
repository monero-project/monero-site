---
terms: ["change"]
summary: "Monero sent as part of a transaction, that returns to your account instead of going to another recipient"
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

Monero sent as part of a transaction, that returns to your account instead of going to another recipient.

### More Information

The @wallet in the Monero software makes change automatically, but when you send a transaction, you are taking an input that you control and telling the Monero network what to do with it. The input is a "deposit" to your account that you are able to spend. Outputs are the part of the transaction that tells the Monero network where to send the funds.

You might have multiple inputs in your account, in many different denominations (For example: you deposited 0.5 XMR on Friday, and 0.75 XMR on Saturday). So, when have a transaction with an input of 0.5 XMR, but you only want to send 0.1 XMR, your transaction will include a fee to pay the @miner, an output for 0.1 XMR to send to the recipient, and the rest that you want to send back to yourself will be an output back to you (this is called "change"). Once the transaction is completed, the change becomes available to you as an input that you can again split and send with a new transaction.
