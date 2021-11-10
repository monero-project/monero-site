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

Une signature de cercle se sert de la clef de votre @compte et d'un nombre
de clefs publiques (également connues sous le nom de sorties) récupérées
depuis la @chaîne-de-blocs en utilisant une méthode de distribution
triangulaire. Au fil du temps, les anciennes sorties pourraient être
utilisées plusieurs fois pour former les signataires participants
possibles. Dans un "cercle" de signataires possibles, touts les membres du
cercle sont égaux et valides. Il n'y a aucun moyen pour un observateur
extérieur de dire lequel des signataires possibles d'un groupe de signature
appartient à votre @compte. Donc, les signatures de cercle garantissent que
les sorties des transactions sont intraçables. De plus, il n'y a pas de
problème de @fongibilité avec Monero dans la mesure ou chaque sortie de
transaction est vraisemblablement réfutable (p.ex. les réseau ne peut pas
dire quelle transaction sont dépensées ou non dépensées).

Pour comprendre comment Monero vous offre la confidentialité par défaut
(non-associativité), voir @adresses-furtives.
