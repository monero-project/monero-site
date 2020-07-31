---
layout: post
title: Advisory note for users making use of subaddresses
summary: Users should be aware of the privacy functionality of subaddresses
tags: [urgent]
author: Justin Ehrenhofer / knaccc
---


Dear participants of the Monero ecosystem,

After some new limitations of subaddresses were found, this post should help clarify the use-cases of subaddresses and the privacy protections that they provide. Monero added subaddresses to its software to allow simpler OpSec management. For many users, subaddresses are a more elegant way to receive transactions than integrated addresses or main addresses. However, subaddresses are not as robust as using entirely different seeds for each desired disparate identity.

In summary, the below chart should help explain the relative privacy protections of different address behaviors. From a user experience perspective, subaddresses are far more user-friendly than using addresses from completely different seeds, while still providing a level of privacy protection that is sufficient for most use-cases.

<img src="/blog/assets/subaddress-janus/subaddress-janus.JPG" style="width: 800px;"/>

Reusing the main 4... addresses or integrated addresses will most likely allow counterparties and many passive observers to connect related addresses together to a single entity. This can occur if the addresses are posted publicly.

Subaddresses provide a much stronger degree of protection than integrated addresses. However, they provide weaker protection against malicious counterparties under some circumstances. We will describe one specific limitation as the "Janus attack."

Users who want the highest level of privacy and control should use independent seeds for each identity that they want entirely isolated from other activities.

## Janus attack information

### Plain English explanation:

You have two subaddresses in your wallet, A and B. You ask the attacker to send funds to you at address B, but the attacker suspects that you also own address A and wants to prove that you do. To prove this, instead of sending funds to you at address B, the attacker can send funds to you at address A and make it look to your wallet like the funds were actually received at address B. If you tell the attacker that you successfully received the funds, the attacker then knows you own address A. This attack is undetectable.

To give another example, suppose an attacker is given a subaddress deposit address at a popular exchange. They suspect that your subaddress is an exchange address. They may confirm this by sending themself a transaction that is only credited to their account if your account is also derived from the same seed held by the exchange. If the attacker's suspicions are incorrect, then they will not receive a deposit, and the funds are forever inaccessible by both them and you.

### Technical explanation:

You ask me to send funds to you at the subaddress (C_j, D_j). I suspect you have two identities, and that you also own subaddress (C_i, D_i). Instead of publishing the tx public key sD_j and output public key Hs(sC_j)G+D_j, I instead publish the tx public key sD_i and the output public key Hs(sC_i)G+D_j. You can't tell that I've done this, and it looks to you like I sent funds to you at your (C_j, D_j) subaddress. If you tell me you received the funds, I have now established that the (C_i, D_i) subaddress is in the same wallet and that you own both subaddresses within the same wallet (i.e. that they share the same private view key).

### Attack requirements:

All three of the following must be true for the attack to successfully link subaddresses to a shared seed:

1. The victim is using subaddresses connected to a single seed. Accounts are irrelevant. Separate accounts under a single seed are still susceptible.

2. The attacker is knowledgeable of a subaddresses to test and crafts a special transaction that is received by the victim if the subaddresses are derived from a single seed.

3. The entity confirms (manually or automatically) off-chain that the payment is received. The attacker can confirm their own receipt instead if they also have a subaddress derived from the same seed as the victim, such as in the exchange example.

### Mitigation:

Use separate wallets instead of separate subaddresses if you need to keep two different addresses completely unlinkable. Alternatively, do not notify any sender of the receipt of funds to your wallet. An attacker cannot know if the poisoned transaction was received to your wallet unless you confirm this to them. Do not share your exchange deposit subaddress with others; it's for your eyes only.

### Notes:

There are at least two known mitigations. Either we could encrypt the tx private key and send it as part of the transaction, or we could publish a Schnorr signature proving knowledge of the tx private key corresponding to the published tx public key, on the base point D_j. Doing either of these things would allow the recipient to verify that the incoming transaction is constructed properly. This mitigation would result in a slight increase in transaction size. Research on other possible mitigations is ongoing. 

This vulnerability requires an active attack involving sending funds to a wallet by the attacker. Passive non-colluding observers with knowledge of this vulnerability do not gain any advantage when attempting blockchain analysis to trace the movements of funds. 

This attack cannot be used to steal funds or inflate the supply of Monero. It can only be used to determine if two subaddresses belong to the same wallet.

If you are using subaddresses to distinguish between incoming funds to your wallet, rather than to maintain separate identities, then this attack does not affect you. Therefore, most merchants and exchanges will not be affected by this attack.

If the attacker's attempt is unsuccessful and the targeted subaddress is not derived from the same seed, then the funds are permanently inaccessible by the sender and receiver.

## Breaking Monero explanation

Justin Ehrenhofer explains the limitations of subaddresses, including the Janus attack, in [a Breaking Monero video](https://www.youtube.com/watch?v=M_IYzzC5Zqk).

## Conclusion

Subaddresses are an excellent, simple OpSec tool for the vast majority of people, but they are not perfect. Users who prioritize their privacy over convenience should use addresses derived from separate seeds as needed. However, most users should rest assured that this edge case will not impact most users in practice. The best, simple way to achieve reasonable unlinkability remains through the use of subaddresses.
