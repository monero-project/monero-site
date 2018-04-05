Un portefeuille d'audit ne peut que voir quelles transactions entrantes vous appartiennent. Il ne peut pas dépenser vos Moneroj, en fait il ne peut même pas voir les transactions sortante de votre portefeuille. Cela rends le portefeuille d'audit particulièrement intéressant pour : 

* Les déceloppeurs écrivant des librairies de validation de paiements ;
* Les utilisateurs validant les transactions entrantes sur des portefeuilles froids.

### Créer un portefeuille d'audit

Vous pouvez créer un portefeuille d'audit depuis n'importe quel portefeuille existant.

Ouvrez un portefeuille existant ou créez en un nouveau en utilisant `monero-wallet-cli`. Dans le portefeuille, tapez `address` et `viewkey` pour afficher l'adresse et la clefs privée d'audit du portefeuille. Tapez `exit` pour fermer le portefeuille.

Ensuite, créez votre portefeuille d'audit en tapant `monero-wallet-cli --generate-from-view-key nom-du-portefeuille`. Le dernier argument sera le nom du fichier de votre portefeuille. Vos `adresse standard` (`Standard address`) et `clef d'audit` (`View key`) vous seront demandées par le portefeuille. Collé l'adresse originelle de votre portefeuille et la clef privée d'audit. Puis, tapez Entrer et confirmez un mot de passe pour pour votre nouveau portefeuille afin de terminer l'opération.
