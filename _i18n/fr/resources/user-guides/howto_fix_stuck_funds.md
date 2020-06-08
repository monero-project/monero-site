{% include disclaimer.html translated="yes" translationOutdated="no" %}

Parfois, vos fonds pourraient être bloqués, ou vous auriez des fonds bloqués qui ne se débloqueraient jamais. Voici comment solutionner ce problème.

- Chargez votre portefeuille dans monero-wallet-cli.

- Tapez

> seed

Dans l'invite de commande. Notez votre phrase mnémonique de 25 mots, si vous ne l'avez pas déjà fait. C'est la meilleure façon de vous assurer que vous ne perdez pas l'accès à vos fonds.

- Fermez monero-wallet-cli en tapant

> exit

- Sauvegardez tous les fichiers relatifs à votre portefeuille, à savoir :

> nomdevotreportefeuille.bin
> nomdevotreportefeuille.bin.keys
> nomdevotreportefeuille.bin.address.txt

Vous pouvez réaliser ceci en copiant les fichiers dans un nouveau répertoire.

Parfois, lors de la création de votre portefeuille, vous pourriez lui avoir donner un nom sans la partie .bin. Dans ce cas, votre portefeuille s'appellera nomdevotreportefeuille sans le .bin à la fin.

- Supprimez nomdevotreportefeuille.bin

- Lancez monero-wallet-cli, et tapez le nom de votre portefeuille que vous venez de supprimer.

- Entrez votre mot de passe. Votre portefeuille sera alors mis à jour et avec un peu de chance vos fonds bloqués seront alors débloqués.

