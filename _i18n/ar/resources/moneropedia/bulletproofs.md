---
summary: 'a new kind of range proofs replacing RingCT in transactions to obfuscate the amounts sent'
terms: ["bulletproofs", "bulletproof"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### The Basics

@RingCT was introduced to obfuscate transaction amounts. One goal of @RingCT was to prove the sum of inputs - outputs in the @transaction was equal to 0, and all outputs were positive numbers.  
To accomplish this, two kind of ring signatures were constructed: One ring signature for the whole transaction (to prove the sum is 0), and a set of ring signatures for the subsets of transaction bits (to prove the outputs are positive numbers), then combined together using originally Schnorr signatures (and later replaced by Borromean ring signature).  
While it was doing the job, a big drawback was the huge size of such a
ringCT transaction.

### Where it comes to bulletproofs

Back in 2017, a [Standford applied crypto group](https://crypto.stanford.edu/bulletproofs/) wrote a [paper](https://eprint.iacr.org/2017/1066.pdf) presenting a new kind of range proofs, called bulletproofs.  

> Bulletproofs are short non-interactive zero-knowledge proofs that require no trusted setup.

Bulletproofs, unlike Borromean or Schnorr signatures, are very efficient as range proofs. Proving a big set of data only generates a small proof, and the size of this proofs grows logarithmically with the size of the data being proved.  
It means that increasing the number of outputs in a transaction will, with bulletproofs only slightly increase the size of the proof.  
Bulletproofs also have the advantage to allow to prove that multiple
committed amounts are in the desired range at once. No need to prove each
output to each destination in separate proofs; the whole transaction amounts
could be proven in one bigger (but still very small) bulletproof.

### Thorough audit process and implementation

As bulletproofs were really new, and the initial implementation made by the group, while thoroughly done, needed a rewrite focused on our specific use-case, implementing bulletproof in Monero was not a simple thing.  
The code has been written and rewritten to follow the new version of bulletproofs which was still being developed, but once this Monero implementation was finalized, the resulting deployment should be taken with extreme care.  
Therefore, the community started an auditing process. Researchers reached out to Benedikt Bünz, lead author of the Bulletproofs paper, and to [OSTIF](https://ostif.org/) an organization which helps open source technologies to improve and secure themselves.  
OSTIF directed the group to several organizations with the skills required to perform the audit. While one of them asked to be kept unnamed and was therefore put away from the process that needed to be public, two others (QuarksLab & Kudelski Security) were choosen to conduct the audit.  
Our 3 auditors were funded by the community to ensure that the
implementation did not contain any critical bugs or exploits.  The final
reports were released during the summer of 2018, with several useful
corrections and fixes suggested, and the final bulletproof implementation
has been added first to Monero Stagenet, and then to the main Monero network
during the October 2018 network upgrade.

Since the bulletproofs deployment, the size of an average transaction has
dropped by at least 80%, as well as the transaction fees.

More explanations on Monero's implementation of bulletproofs could be found
on youtube fondajo channel in a [conversation with Sarang
Noether](https://www.youtube.com/watch?v=6lEWqIMLzUU).
