---
terms: ["ring-size"]
summary: "total number of possible signers in a ring signature"
---

### The Basics
Ring size refers to the total number of possible signers in a @ring-signature. If a ring size of 4 is selected for a given @transaction, this means that there are 3 foreign outputs in addition to your “real” output. A higher ring size number will typically provide more privacy than a lower number. However, reusing an odd, recognizable ring size number for transactions could possibly make transactions stand out.

`Ring size = foreign outputs + 1 (your output)`