Restaurer un portefeuille à partir de la clef privé (en ligne de commande) est très simple. Si vous avez les informations nécessaire, avec ce guide vous pourrez totalement restaurer votre portfeuille. Notez : vous n'avez pas besoin de connaitre votre mot de passe pour restaurer depuis la clef.

Vous avez besoin de trois données pour restaurer votre portefeuille, soit vos fichiers .keys qui contiennent ces informations ainsi que le mot de passe pour les déchiffrer. Les trois composant du portefeuille dont vous avez besoin sont :

1. **L'Adresse**
2. **La clef secrète de dépense**
3. **La clef secrète d'audit**


Puis lancez la commande du portefeuille :

`./monero-wallet-cli --generate-from-keys Nouveau_Nom_de_Portefeuille.abc`

Puis, votre adresse, vos clefs secrètes de dépense et d'audit, ainsi qu'un nouveau mot de passe pour votre portefeuille régénéré vous seront demandées.

Lancer cela avec les bons paramètres va régénérer les fichiers de votre portefeuille et vous permettre de configurer un nouveau mot de passe.

Si vous rencontrer des problèmes, lancer `./monero-wallet-cli --help` vous affichera les options disponible au démarrage du portefeuille. Une fois à l'intérieur du portefeuille, lancer la commande `help` listera l'aide des commandes disponible dans le portefeuille.
