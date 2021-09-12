---
summary: "Moneroj envoyés lors d'une transaction, qui reviennent dans votre compte au lieu d'être envoyés à un autre destinataire."
terms: ["change", "monnaie"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Moneroj envoyés lors d'une transaction, qui reviennent dans votre compte au
lieu d'être envoyés à un autre destinataire.

### Informations détaillées

Le @portefeuille de l'application Monero rends la monnaie automatiquement,
mais lorsque vous envoyez une transaction, vous prenez une entrée que vous
contrôlez et dites au réseau Monero quoi faire avec. L'entrée est un "dépôt"
sur votre compte que vous avez le droit de dépenser. Les sorties sont les
portions de la transaction qui disent au réseau Monero où envoyer les fonds.

Vous pourriez avoir de multiples entrées dans votre compte, de multiples
valeurs (par exemple : vous avez déposé 0,5 XMR vendredi, et 0,75 XMR
samedi). Donc, lorsque vous avez une transaction avec une entrée de 0,5 XMR,
mais que vous ne voulez envoyer que 0,1 XMR, votre transaction va inclure
des frais à payer au @mineur, une sorti de 0,1 XMR à envoyer au
destinataire, et le reste qui devra vous être rendu (c'est appelé de la
"monnaie"). Une fois la transaction terminée, la monnaie devient disponible
en tant qu'entrée que vous pourrez de nouveau fractionner lors d'une
nouvelle transaction.
