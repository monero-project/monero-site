{% include disclaimer.html translated="yes" translationOutdated="no" %}

Restaurer un portefeuille à partir de la clef privé est très simple. Si vous avez les informations nécessaire, avec ce guide vous pourrez totalement restaurer votre portefeuille. Notez : vous n'avez pas besoin de connaître votre mot de passe pour restaurer depuis la clef.

Vous avez besoin de trois données pour restaurer votre portefeuille, soit vos fichiers .keys qui contiennent ces informations ainsi que le mot de passe pour les déchiffrer. Les trois composant du portefeuille dont vous avez besoin sont :

1. **L'Adresse**
2. **La clef secrète de dépense**
3. **La clef secrète d'audit**

#### CLI

Lancez la commande du portefeuille :

`./monero-wallet-cli --generate-from-keys Nouveau_Nom_de_Portefeuille.abc`

Puis, votre adresse, vos clefs secrètes de dépense et d'audit, ainsi qu'un nouveau mot de passe pour votre portefeuille régénéré vous seront demandées.

Lancer cela avec les bons paramètres va régénérer les fichiers de votre portefeuille et vous permettre de configurer un nouveau mot de passe.

Si vous rencontrer des problèmes, lancer `./monero-wallet-cli --help` vous affichera les options disponible au démarrage du portefeuille. Une fois à l'intérieur du portefeuille, lancer la commande `help` listera l'aide des commandes disponible dans le portefeuille.

#### GUI

Lancez `monero-wallet-gui`. Si c'est la première fois que vous le lancez, allez directement à l'étape suivante, sinon, cliquez sur `Cancel` :

![cancel opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.png)

Choisissez votre langue `Français`:

![choose language](/img/resources/user-guides/en/restore_from_keys/choose-language.png)

Cliquez sur `Restaurer un portefeuille à partir des clés ou de la phrase mnémonique`:

![choose restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.png)

Choisissez `Restaurer à partir des clés`, donnez un nom & un emplacement de stockage à votre portefeuille, complétez les `Adresse du compte (publique)`, `Clé d'audit (privée)` & `Clé de dépense (privée)`. Optionnellement, indiquez une `Hauteur de restauration (facultative)` pour éviter de scanner les blocs les plus anciens. Enfin cliquez sur la flèche `Droite` :

![restore wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.png)

Sur la page suivante, donnez un mot de passe fort à votre portefeuille avant de cliquer sur la flèche `Droite` :

![wallet password](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

Indiquez vos paramètres de démon, et cliquez sur la flèche `Droite` :

![daemon settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

Cliquez sur `UTILISER MONERO` pour profiter de votre portefeuille restauré :

![all set up](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)
