{% include disclaimer.html translated="yes" translationOutdated="no" %}

Restaurer un portefeuille à partir de la clef privé est très simple. Si vous
avez les informations nécessaire, avec ce guide vous pourrez totalement
restaurer votre portefeuille. Notez : vous n'avez pas besoin de connaître
votre mot de passe pour restaurer depuis la clef.

Vous avez besoin de trois données pour restaurer votre portefeuille, soit
vos fichiers .keys qui contiennent ces informations ainsi que le mot de
passe pour les déchiffrer. Les trois composant du portefeuille dont vous
avez besoin sont :

1. **L'Adresse**
2. **La clef secrète de dépense**
3. **La clef secrète d'audit**


#### CLI

Lancez la commande du portefeuille :

`./monero-wallet-cli --generate-from-keys Nouveau_Nom_de_Portefeuille.abc`

Puis, votre adresse, vos clefs secrètes de dépense et d'audit, ainsi qu'un
nouveau mot de passe pour votre portefeuille régénéré vous seront demandées.

Lancer cela avec les bons paramètres va régénérer les fichiers de votre
portefeuille et vous permettre de configurer un nouveau mot de passe.

Si vous rencontrer des problèmes, lancer `./monero-wallet-cli --help` vous
affichera les options disponible au démarrage du portefeuille. Une fois à
l'intérieur du portefeuille, lancer la commande `help` listera l'aide des
commandes disponible dans le portefeuille.

#### GUI

Lancez `monero-wallet-gui`. Si c'est la première fois que vous le lancez,
allez directement à l'étape suivante, sinon, cliquez sur `Cancel` :

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Cliquez sur `Restaurer un portefeuille à partir des clés ou de la phrase
mnémonique`:

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
