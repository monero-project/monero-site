---
layout: post
title: The Funds Travel Rule and Monero
summary: Monero as a platform does not interfere with the Funds Travel Rule regulatory requirements
tags: [community]
author: Monero Compliance Workgroup
---

*Note: This text is for informational purposes only. It does not have any legal basis and is not to be considered factual or authoritative. It is important to read and understand all relevant laws (including those not referenced here), as well as the linked documents and documents that are referenced herein because there are many concepts that this post does not touch on. It is the responsibility of each person individually to understand the rules and regulations that impact them, including their status as a regulated or non-regulated entity. The information in this post is not intended to be relied upon or used for making any decision, including financial and/or investment decisions. Do not use it as such.*

### Summary

FinCEN issued guidance in May 2019 to remind those subject to the Bank Secrecy Act (BSA) how FinCEN regulations apply to money services businesses (MSBs). This guidance is therefore likely applicable to certain cryptocurrency exchanges, among other parties, who are considered financial institutions. This guidance reminds regulated entities that among other things, certain activities they perform may be subject to the Funds Travel Rule. Non-regulated entities are not subject to these requirements.

### FinCEN's May 9, 2019 Guidance

The guidance issued by FinCEN [available here](https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf) did not establish new regulatory expectations or requirements. Rather, existing guidance and regulations are consolidated and applied to MSBs dealing with convertible virtual currencies (CVC).

One of the points noted in the guidance is that to the extent that a money transmitter’s transactions constitute a transmittal of funds according to the FinCEN regulations, the money transmitter must also comply with (among other things) the Funds Travel Rule.

### What is the Funds Travel Rule?

The Funds Travel Rule requires financial institutions who are sending and / or receiving funds to or from other financial institutions to capture, transmit, and store certain information associated with each transfer of funds above a certain threshold.

Referencing these documents by [the SEC](https://www.sec.gov/about/offices/ocie/aml2007/fincen-advissu7.pdf) and [FinCEN](https://www.fincen.gov/resources/statutes-regulations/guidance/funds-travel-regulations-questions-answers):

* Only transmittals of funds equal to or greater than $3,000 (or its foreign equivalent) are subject to the rule.
* A transmittor's financial institution must include and send the following in the transmittal order:
  * The name of the transmittor
  * The account number of the transmittor, if used
  * The address of the transmittor
  * The identity of the transmittor's financial institution
  * The amount of the transmittal order
  * The execution date of the transmittal order, and
  * The identity of the recipient's financial institution
* A receiving financial institution must receive and retain:
  * The name of the recipient
  * The address of the recipient
  * The account number of the recipient, and
  * Any other specific identifier of the recipient

Regulated exchanges that are currently AML / KYC compliant should have most of the information required to transmit when appropriate since they retain certain customer identification documentation as part of their AML / KYC processes. Additionally, details of specific transactions are presently displayed on most major exchanges in the relevant "user account," "transaction history," "ledger," or other appropriate heading, meaning that most of the required data is probably already being captured. Transaction IDs are searchable in the public blockchain.

### How Might Regulated Entities Comply with Travel Rule Obligations?

It is up to each regulated entity to decide how to comply with the Travel Rule requirements. Some organizations may simply only permit non-regulated, non-financial institutions to interact with their products. For others, using a third-party tool to transmit information off-chain is the most efficient and reliable method that will allow entities to comply with the Travel Rule.

Relating to the transmission of the required data, [FinCEN states in their May 9, 2019 guidance](https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf) that "...if a given transmission protocol is unable to accommodate such information, the obligated person may provide such information in a message different from the transmittal order itself." [The FATF recommendations](https://www.fatf-gafi.org/media/fatf/documents/recommendations/pdfs/FATF%20Recommendations%202012.pdf) (updated June 2019) also state similarly that "the information can be submitted either directly or indirectly. It is not necessary for this information to be attached directly to the virtual asset transfers." Therefore, on-chain sharing of information is not needed. This allows the Travel Rule information-sharing process to remain separate from any transacted asset.

There may be additional work required by regulated entities to compile their data into a transmittable form and / or to use a third-party transmission protocol to send the required information to the recipient regulated institution. These challenges are not unique to transacting in Monero and apply to the regulated institution itself, rather than any individual cryptocurrency.

One example of a company providing this third-party information transmission service is [CipherTrace with its TRISA product](https://ciphertrace.com/travel-rule-info-sharing-architecture/). However, almost any direct method of communication, such as email or file transfer, could suffice.

Similarly to Zcash's memo field, the Monero `tx_extra` field could be used to include arbitrary encrypted data; this might include Travel Rule information specified by regulated entities. However, the use of such a field contributes to chain bloat, could affect transaction distinguishability, and is unnecessary due to the benefits of off-chain solutions. Building infrastructure surrounding this field is strongly ill-advised due to the changing nature of the Monero protocol. Services should invest in standardizing entity-to-entity secure solutions for off-chain information exchange rather than building small silos for individual assets. Furthermore, the consequences of encryption error are lower for direct lines of communication than for information stored on a public ledger.

However information is shared, services should remain aware of other relevant privacy regulations, including GDPR. Encryption alone may not be sufficient to comply with certain privacy and data protection regulations. Running afoul of these could expose services to legal liability.

### Does the Funds Travel Rule impact Monero?

The Funds Travel Rule doesn’t appear to impact Monero itself. [FinCEN’s May 9, 2019 guidance](https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf) reminds regulated entities (likely including cryptocurrency exchanges) of their obligations to comply with BSA regulations. The Funds Travel Rule is a BSA regulation.

It would appear to be inappropriate to state that any cryptocurrency is compliant or not compliant with the Funds Travel Rule, since the Funds Travel Rule appears to apply to regulated entities, rather than the underlying assets in which the entities trade.

[FinCEN’s May 9, 2019 guidance](https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf) states that "A money transmitter that operates in anonymity-enhanced CVCs for its own account or for the accounts of others (regardless of the frequency) is subject to the same regulatory obligations as when operating in currency, funds, or non-anonymized CVCs." Therefore, it doesn’t appear that regulated entities would need to treat Monero differently from a regulatory compliance perspective than more traditional surveillance capable coins, like Bitcoin.

[The guidance](https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf) then goes on to state "In other words, a money transmitter cannot avoid its regulatory obligations because it chooses to provide money transmission services using anonymity-enhanced CVC". This appears to further reiterate that regulated entities aren't prohibited from transmitting or receiving anonymity-enhanced CVCs. A logical conclusion would be that from the regulatory compliance perspective, transmitting funds denominated in Monero would be equivalent to transmitting funds denominated in a surveillance capable coin like Bitcoin.

### Conclusion

The Travel Rule is a burden to share information placed on regulated entities, not on the Monero protocol itself or non-regulated entities who use the Monero protocol. You must determine for yourself if you are a regulated entity or not. The Monero community generally recommends that regulated entities share information off-chain using a direct line of communication or a third-party tool. We do not recommend using Monero’s encrypted message field `tx_extra` over simpler solutions such as using a third party data transmission tool.

Monero is an asset that can be used by regulated entities without prohibiting them from meeting their regulatory requirements. In the context of this post, there are no rules imposed on regulated entities dealing in Monero that are not also imposed when dealing in traditional surveillance capable coins like Bitcoin. Additionally, leading data sharing infrastructure solutions are cryptocurrency-agnostic. Thus, it can be said that Monero as a platform does not interfere with the required Funds Travel Rule regulatory requirements.
