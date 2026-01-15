---
summary: 'Un groupe de signatures cryptographiques qui contiennent au moins un participant réel, mais aucun moyen de déterminer laquelle est la vraie car elles paraissent toutes valides'
terms: ["ring-signature", "ring-signatures", "signature-de-cercle", "signatures-de-cercle"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

En cryptographie, une signature de cercle est une sorte de signature
numérique qui peut être générée par n'importe quel nombre d'utilisateurs
disposant chacun d'une clef. De ce fait, un message signé par une signature
de cercle est endossé par quelqu'un dans un groupe de personnes
spécifique. L'une des propriétés de sécurité d'une signature de cercle est
qu'il est informatiquement impossible de déterminer *quelle* clef des
membres du groupe a été utilisée pour générer la signature.

Par exemple, une signature de cercle pourrait être utilisé pour fournir une
signature anonyme à un "membre éminent de l'Elysée", sans révéler quel
membre aurait signé le message. Les signatures de cercle sont parfaites pour
cette application car l'anonymat d'une signature de cercle ne peut pas être
révoquée, et car le groupe d'une signature de cercle peut être improvisé (ne
nécessitant pas de mise en place préalable).

### Application à Monero

A ring signature makes use of your @account keys and a number of public keys
(also known as outputs) pulled from the @blockchain using a gamma
distribution method. Over the course of time, past outputs could be used
multiple times to form possible signer participants. In a "ring" of possible
signers, all ring members are equal and valid. There is no way an outside
observer can tell which of the possible signers in a signature group belongs
to your @account. So, ring signatures ensure that transaction outputs are
untraceable. Moreover, there are no @fungibility issues with Monero given
that every transaction output has plausible deniability (e.g. the network
can not tell which outputs are spent or unspent).

Pour comprendre comment Monero vous offre la confidentialité par défaut
(non-associativité), voir @adresses-furtives.
