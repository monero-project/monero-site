---
layout: post
title: Monero Compatible Bulletproofs
tags: [crypto, research, community]
author: Sarang Noether
---

Here is a quick update on Bulletproofs and their role in Monero. Bottom line: they're awesome, they work, the fees are lower, and they're moving into testnet.  

Monero's confidential transactions hide the amounts involved. To ensure that inputs and outputs balance properly in a way that can be verified by anyone, we use commitments that have useful algebraic properties. However, this isn't enough. We also need to ensure that each amount is a positive value that won't risk an overflow, and this is where range proofs come in. A range proof allows anyone to verify that a commitment represents an amount within a specified range, without revealing anything else about its value. Our current range proofs scale linearly in size with the number of outputs and the number of bits in the range (currently 64 bits), meaning they make up the bulk of a transaction's size. Further, this means that a transaction with multiple outputs needs multiple separate range proofs. Not great.  

Thanks to a fantastic new paper by Bünz, Bootle, and others ([freely available here](https://web.stanford.edu/~buenz/pubs/bulletproofs.pdf)), there is a more efficient way to handle range proofs. The size of a bulletproof increases only logarithmically with both the size of the range and the number of outputs. This gives us two related types of bulletproofs: single-output and multiple-output. A transaction with multiple outputs can either include several single-output proofs or one multiple-output proof (which is smaller than the separate proofs).  

Let's look at the typical two-output transaction, where I send you some XMR and direct the change back to myself. With our current range proofs, the transaction is around 13.2 kB in size. If I used single-output bulletproofs, the transaction reduces in size to only around 2.5 kB! This is, approximately, an 80% reduction in transaction size, which then translates to an 80% reduction in fees as well. The space savings are even better with multiple-output proofs. This represents a significant decrease in transaction sizes. Further, our initial testing shows that the time to verify a bulletproof is lower than for the existing range proofs, meaning speedier blockchain validation.  

We have working Java test code for bulletproofs available now ([at this GitHub repo](https://github.com/b-g-goodell/research-lab/tree/master/source-code/StringCT-java/src/how/monero/hodl/bulletproof)) for both single and multiple outputs. The code for single-output bulletproofs has been ported to C++ by moneromooo ([found at this pull request](https://github.com/monero-project/monero/pull/2883)) and will be available on testnet shortly. The code is being reviewed and tested thoroughly.  

Multiple outputs raise some issues that need further thought. Because bulletproof verification is linear in the number of outputs (while the size scales logarithmically), an attacker could pack a transaction with many outputs; this tiny transaction would require low fees but would be computationally expensive to verify, opening the door to denial-of-service attacks. Because of this, we will need to adjust the fee structure away from transaction size and take into account the verification scaling. This doesn't mean fees go up, though! It just means that the fees will scale properly and in a safe way.  

To avoid any problems, we're deploying bulletproofs in two stages. You'll first see only the single-output proofs. A two-output transaction will initially use two separate proofs, which still offers massive savings from what we have now. You'll see lower fees and faster verification times. We'll continue discussions about fee structure while we test multiple-output proofs, and later deploy them as a second stage. We want to encourage miners to use multiple-output proofs while being safe about fee scaling.  

Overall, bulletproofs represent a huge advancement in Monero transactions. We get massive space savings, better verification times, and lower fees. If you're a fan of testnet, keep an eye out for bulletproofs!  
