---
layout: post
title: CLSAG security proof revisions
summary: Issues with CLSAG formal security proofs were identified. Monero's implementation of CLSAG is not affected.
tags: [crypto]
author: Cypher Stack
---

**TL;DR**: A recent review conducted by Cypher Stack identified issues with CLSAG formal security proofs, and proposed fixes. 
These fixes don't affect the Monero implementation of CLSAG, so users are not at risk, and no action needs to be taken.

The Monero transaction protocol uses [CLSAG](https://eprint.iacr.org/2019/654), a linkable ring signature construction, to authorize transactions.
The CLSAG preprint and implementation were written by Monero contributing researchers and developers, and improve on an earlier design, [MLSAG](https://eprint.iacr.org/2015/1098).

The [Zano](https://zano.org/) team recently engaged Cypher Stack, an applied cryptography consultancy, to review [d/v-CLSAG](https://github.com/hyle-team/docs/tree/master/zano/dv-CLSAG-extension), their generalization of CLSAG.
This generalization is intended to accommodate different types of transactions that the Zano protocol supports, but retains much of the original CLSAG design and security model.
Because of this, as part of Cypher Stack's review of d/v-CLSAG, aspects of the original CLSAG preprint were reviewed as well.

Cypher Stack identified two issues with formal security proofs that also apply to CLSAG, and proposed updates to the proofs and protocol description to address them.
Neither the existing Monero implementation of CLSAG nor the in-progress Zano implementation of d/v-CLSAG is affected by these issues, so users are not at risk and no action needs to be taken.
Despite no vulnerabilities resulting from the findings, Cypher Stack responsibly disclosed the findings to Monero contributing researchers.

The review report, which details the findings, is [available](https://github.com/cypherstack/zano-clsag-review/releases/tag/final).
While it is quite technical in nature, we encourage interested researchers and others to read it.

The first finding applying to CLSAG concerns an argument in an unforgeability proof that references an earlier signature design, [LSAG](https://eprint.iacr.org/2004/027).
The argument in LSAG fails to identify an implicit requirement that certain parts of verification equations be nonzero.
While the argument is somewhat more subtle in CLSAG and d/v-CLSAG, there are several ways it can be addressed.
Both the Monero and Zano implementations already check that certain values in verification are nonzero, so they are not affected by this finding.

The other finding that applies to CLSAG deals with another technical aspect of the unforgeability proof relating to how the proof reduces to a certain discrete logarithm hardness problem.
Essentially, the proof shows that if there existed a way to forge a CLSAG signature, there would be a way to break a cryptographic problem that is widely believed to be infeasible.
Because of the way certain operations in the proof are performed, the method of analysis does not formally hold.
The review proposes a modification to the security proof that uses a different, and more standard, hard cryptographic problem instead.
Making this change doesn't affect the CLSAG protocol or any implementations, but ensures the formal proof is fixed.

Formal analysis in applied cryptography is challenging and subtle, and it's not uncommon to discover issues in security proofs.
Cypher Stack hopes these findings, and the proposed proof updates, will be useful to the ecosystem.

Onward!
