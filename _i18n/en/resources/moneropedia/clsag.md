---
terms: ["CLSAG"]
summary: Monero's efficient way of building ring signatures
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

CLSAG (Concise Linkable Spontaneous Anonymous Group) signature are the new way Monero builds @ring-signatures, which replaces MLSAG (multilayered Linkable Spontaneous Anonymous Group Signature). CLSAG will go live and mandatory with the [Monero network upgrade of October 2020]({{ site.baseurl }}/2020/08/18/network-upgrade-october-2020.html). CLSAG maintains the same functionalities as MLSAG, but with the advantage of considerable size savings for @transactions and improvements in verification speed. This new technology was developed by contributors of the [Monero Research Lab]({{ site.baseurl }}/resources/research-lab/) and [audited by external researchers]({{ site.baseurl_root }}/resources/research-lab/audits/clsag.pdf).

With CLSAG, users see a 20% improvement in signature verification, and at least a 10% overall improvement for typical transactions. For example, a typical Monero transaction (2 inputs and 2 outputs) which usually weighs 2.5kB, takes only 1.9kB of blockchain space with CLSAG, a ~25% improvement.

---

##### Other Resources

<sub>1. [Announcement of CLSAG audit's result and overview of the technology]({{ site.baseurl }}/2020/07/31/clsag-audit.html)</sub><br>

<sub>1. [CLSAG preprint](https://eprint.iacr.org/2019/654)</sub>