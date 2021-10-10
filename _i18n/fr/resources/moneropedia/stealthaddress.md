---
summary: 'Adresses à usage unique automatiques pour chaque transaction'
terms: ["stealth-address", "stealth-addresses", "adresse-furtive", "adresses-furtives"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Les adresses furtives constitue une part importante de la confidentialité
inhérente à Monero. Elle permettent et imposent à l'émetteur de créer une
adresse à usage unique aléatoire pour chaque @transaction pour le compte du
destinataire. Le destinataire peut publier une seule adresse tout en
recevant ses paiements à destinations d'adresses uniques sur la
@chaîne-de-blocs, ou elles ne peuvent pas être reliées ni à l'adresse
publiée du destinataire, ni à aucune autre adresse de transaction. En
utilisant les adresses furtives, seule l'émetteur et le destinataire peuvent
déterminer où un paiement à été envoyé.

Lorsque vous créez un compte Monero, vous obtenez une @clef-d'audit privée,
une @clef-de-dépense privée et une adresse publique. La @clef-de-dépense est
utilisée pour envoyer de paiements, la @clef-d'audit permet d'afficher les
transactions entrantes à destination de votre compte et l'adresse publique
sert à recevoir des paiements. Les deux @clef-de-dépense et @clef-d'audit
servent à construire votre adresse Monero. Vous pouvez disposez d'un
portefeuille "lecture seule" qui n'utilise que la @clef-d'audit. Cette
fonctionnalité peut être utilisée pour des besoins de comptabilité et de
contrôle, mais est actuellement peu fiable à cause de l'impossibilité de
suivre les transactions sortantes. Vous pouvez décider qui peut voir votre
solde de Moneroj en partageant votre @clef-d'audit. Monero est privé par
défaut, et optionnellement semi-transparent !

Lorsque vous utilisez votre portefeuille Monero, tout ceci est géré par le
logiciel. Envoyer des Moneroj est aussi simple qu'entrer une adresse de
destination, un montant, et d'appuyer sur Envoyer. Pour recevoir des
Moneroj, communiquez simplement votre adresse publique à l'émetteur.

Pour en savoir plus sur la prévention du traçage d'historique de Monero
(intraçabilité), voir les @signatures-de-cercle.
