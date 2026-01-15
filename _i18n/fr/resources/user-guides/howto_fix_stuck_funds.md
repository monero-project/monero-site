{% include disclaimer.html translated="yes" translationOutdated="no" %}

Parfois, vos fonds pourraient être bloqués, ou vous auriez des fonds bloqués
qui ne se débloqueraient jamais. Voici comment solutionner ce problème.

- Load your wallet in monero-wallet-cli.

- Type

> seed

Dans l'invite de commande. Notez votre phrase mnémonique de 25 mots, si vous
ne l'avez pas déjà fait. C'est la meilleure façon de vous assurer que vous
ne perdez pas l'accès à vos fonds.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Vous pouvez réaliser ceci en copiant les fichiers dans un nouveau
répertoire.

Parfois, lors de la création de votre portefeuille, vous pourriez lui avoir
donner un nom sans la partie .bin. Dans ce cas, votre portefeuille
s'appellera nomdevotreportefeuille sans le .bin à la fin.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.

