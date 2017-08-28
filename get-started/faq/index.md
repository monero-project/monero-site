---
layout: full-text
title: FAQ
---

<div class="tab">
    <input id="tab-one" type="checkbox" name="tabs" class="accordian">
    <label for="tab-one" class="accordian">How does Monero have value?</label>
    
<div class="tab-content" markdown="1">

Monero has value because people are willing to buy it. If no one is willing to buy Monero, then it will not have any value. Monero’s price increases if demand exceeds supply, and it decreases if supply exceeds demand.

</div>

</div>

<div class="tab">
    <input id="tab-two" type="checkbox" name="tabs" class="accordian">
    <label for="tab-two" class="accordian">How can I get Monero?</label>
    
<div class="tab-content" markdown="1">

You can buy Monero from an exchange or from an individual. Alternatively, you can try mining Monero to get coins from the block reward.
</div>

</div>

<div class="tab">
    <input id="tab-three" type="checkbox" name="tabs" class="accordian">
    <label for="tab-three" class="accordian">What is a mnemonic seed?</label>
    
<div class="tab-content" markdown="1">

A mnemonic seed is a set of 25 words that can be used to restore your account anywhere. Keep these words safe and do not share them with someone else. You can use this seed to restore your account, even if your computer crashes.
</div>

</div>

<div class="tab">
    <input id="tab-four" type="checkbox" name="tabs" class="accordian">
    <label for="tab-four" class="accordian">How is Monero’s privacy different from other coins?</label>
    
<div class="tab-content" markdown="1">

Monero uses three different privacy technologies: ring signatures, ring confidential transactions (RingCT), and stealth addresses. These hide the sender, amount, and receiver in the transaction, respectively. All transactions on the network are private by mandate; there is no way to accidentally send a transparent transaction. This feature is exclusive to Monero. You do not need to trust anyone else with your privacy.
</div>

</div>

<div class="tab">
    <input id="tab-five" type="checkbox" name="tabs" class="accordian">
    <label for="tab-five" class="accordian">Why is my wallet taking so long to sync?</label>
    
<div class="tab-content" markdown="1">

If you are running a full node locally, you need to copy the entire blockchain to your computer. This can take a long time, especially on an old hard drive or slow internet connection. If you are using a remote node, your computer still needs to request a copy of all the outputs, which can take several hours. Be patient, and if you would like to sacrifice some privacy for faster sync times, consider using a lightweight wallet instead.
</div>

</div>

<div class="tab">
    <input id="tab-six" type="checkbox" name="tabs" class="accordian">
    <label for="tab-six" class="accordian">What is the different between a lightweight and a normal wallet?</label>
    
<div class="tab-content" markdown="1">

For a lightweight wallet, you give your view key to a node, who scans the blockchain and looks for incoming transactions to your account on your behalf. This node will know when you receive money, but it will not know how much you receive, who you received it from, or who you are sending money to. Depending on your wallet software, you may be able to use a node you control to avoid privacy leaks. For more privacy, use a normal wallet, which can be used with your own node.
</div>

</div>

<div class="tab">
    <input id="tab-seven" type="checkbox" name="tabs" class="accordian">
    <label for="tab-seven" class="accordian">How is Monero different from Bitcoin?</label>
    
<div class="tab-content" markdown="1">

Monero is not based on Bitcoin. It is based on the CryptoNote protocol. Bitcoin is a completely transparent system, where people can see exactly how much money is being sent from one user to another. Monero hides this information to protect user privacy in all transactions. It also has a dynamic block size and dynamic fees, an ASIC-resistant proof of work, and a tail coin emission, among several other changes.
</div>

</div>

<div class="tab">
    <input id="tab-eight" type="checkbox" name="tabs" class="accordian">
    <label for="tab-eight" class="accordian">Does Monero have a block size limit?</label>
    
<div class="tab-content" markdown="1">

No, Monero does not have a hard block size limit. Instead, the block size can increase or decrease over time based on demand. It is capped at a certain growth rate to prevent outrageous growth.
</div>

</div>

<div class="tab">
    <input id="tab-nine" type="checkbox" name="tabs" class="accordian">
    <label for="tab-nine" class="accordian">What is a blockchain?</label>
    
<div class="tab-content" markdown="1">

A blockchain is a system that stores a copy of all transaction history on the Monero network. Every two minutes, a new block with the latest transaction information is added to the blockchain. This chain allows the network to verify the amount of money accounts have and make it resilient to attacks and centralization attempts.
</div>

</div>

<div class="tab">
    <input id="tab-ten" type="checkbox" name="tabs" class="accordian">
    <label for="tab-ten" class="accordian">What is Kovri?</label>
    
<div class="tab-content" markdown="1">

Kovri is an I2P router written in C++. I2P is a hidden network like Tor with several technical differences. Kovri is an independent project of Monero, but it will work with Monero and several other projects. Kovri hides the transaction broadcast, so other nodes do not know who created transactions. In adversarial conditions, Kovri can be used to hide all Monero traffic through I2P, which would prevent people from knowing Monero is being used. Kovri is currently in alpha, and it is not yet fully integrated in Monero. Learn more about Kovri at the [project website.](https://getkovri.org)
</div>

</div>

<div class="tab">
    <input id="tab-eleven" type="checkbox" name="tabs" class="accordian">
    <label for="tab-eleven" class="accordian">What is fungibility, and why is it important?</label>
    
<div class="tab-content" markdown="1">

Fungibility is a simple property of money such that there are no differences between two amounts of the same value. If two people exchanged a 10 and two 5’s, then no one would lose out. However, let’s suppose that everyone knows the 10 was previously used in a ransomware attack. Is the other person still going to make the trade? Probably not, even if the person with the 10 has no connection with the ransomware. This is a problem, since the receiver of money needs to constantly check the money they are receiving to not end up with tainted coins. Monero is fungible, which means people do not need to go through this effort.
</div>

</div>

<div class="tab">
    <input id="tab-eleven" type="checkbox" name="tabs" class="accordian">
    <label for="tab-eleven" class="accordian">If Monero is so private how do we know they're not being created out of thin air?</label>
    
<div class="tab-content" markdown="1">
In Monero, every transaction generates a key image. Key images that are used more than once are rejected by the the miners as double-spends and cannot be added to a valid block. When a new transaction is received, miners verify that the key image does not already exist for a previous transaction to ensure it's not a double-spend.

We can also know that transaction amounts are valid even though the value of the inputs that you are spending and the value of the outputs you are sending are encrypted and hidden to everyone except the recipient of each of those outputs.

They're encrypted using Pedersen commitments. What this means is that no observers can tell the amounts of the inputs and outputs, but they can do math on the Pedersen commitments to determine that no Monero was created out of thin air.

As long as the encrypted output amounts you create which include an output for the recipient and a change output back to yourself plus the unencrypted transaction fee is equal to the sum of the inputs that are being spent, then you have a legitimate transaction and know no Monero is being created out of thin air. Pedersen commitments mean that the sums can be verified as being equal, but the Monero value of each of the sums and the Monero value of the inputs and outputs individually are undeterminable.
</div>

</div>
