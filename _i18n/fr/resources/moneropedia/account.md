---
summary: 'Similaire à un compte en banque dans son fonctionnement, contient toutes vos transactions envoyées et reçues'
terms: ["account", "accounts", "wallet", "wallets", "compte", "comptes", "portefeuille", "portefeuilles"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Ceux qui sont familiers avec les prédécesseurs de Monero seront plus
familiers avec le terme de *portefeuille* pour décrire ceci. Dans Monero
nous appelons cela un compte, et c'est un compte privé détenu et utilisé par
un utilisateur de Monero.

Votre compte contient toutes les @transactions Monero que vous avez envoyées
et reçues. Le solde de votre compte correspond à la somme de tous les
Moneroj que vous avez reçus, moins les Moneroj que vous avez
envoyés. Lorsque vous utilisez Monero vous pouvez constater que votre compte
dispose de deux soldes, un solde bloqué et un solde débloqué. Le solde
débloqué contient les fonds qui peuvent être immédiatement dépensés. Vous
pouvez recevoir une transaction qui dispose d'une @durée-de-déverrouillage
de configurée, ou vous pourriez avoir envoyé des Moneroj et attendre que la
@monnaie soit rendue à votre portefeuille, deux circonstances qui peuvent
conduire ces fonds à être bloqués pendant un moment.

Une différence clef entre les monnaies électroniques traditionnelles et
Monero est que votre compte reste sous votre contrôle, normalement sur votre
ordinateur, et ne peut être accédé par quiconque si vous [pratiquez une
bonne sécurité](#pratiquer-une-bonne-securite).

### De Multiple Comptes

Il n'y a pas de coûts associés à la création d'un compte Monero, et il n'y a
pas de frais appliqués à l'exception des frais individuels de @transaction
qui vont aux @mineurs.

Cela signifie que les individus peuvent facilement créer un compte Monero
pour eux-mêmes, de même qu'un compte joint partagé avec leurs partenaires,
et des comptes individuels pour leurs enfants. De la même manière, une
entreprise pourrait créer des comptes séparés pour chaque branche ou
groupe. Dans la mesure ou les frais de @transaction Monero sont relativement
faibles, déplacer les fonds entre les comptes n'est pas une activité
coûteuse.

### Clefs Cryptographiques

Monero s'appuie fortement sur les principes de cryptographie connus comme
*cryptographie par clef publique/privée* ou *cryptographie asymétrique*, qui
sont décrits en détail dans [Cet article
Wikipedia](https://fr.wikipedia.org/wiki/Cryptographie_asym%C3%A9trique).

Votre compte est basé sur deux clefs, une @clef-de-dépense et une
@clef-d'audit. La @clef-de-dépense a de particulier qu'elle est suffisante
pour dépenser vos Moneroj, alors que la @clef-d'audit vous permet de révéler
vos @transactions à un tier, par exemple pour des besoin d'audit ou de
comptabilité. Ces clefs de votre compte jouent également un rôle important
dans la confidentialité des @transactions de Monero.

Vous devez protéger chaque clef privée de ces deux types afin de maintenir
la confidentialité de votre compte. A l'inverse, les clefs publiques sont
évidemment publiques (elles font parties de votre adresse de compte
Monero). Dans le cadre d'une cryptographie standard clef publique/clef
privée, quelqu'un pourrait vous envoyer un message en le chiffrant à l'aide
de l'une de vos clefs publiques, et vous seriez alors le seul capable de le
déchiffrer avec votre clef privée.

### Sauvegarder votre Compte

Lorsque vous gérez votre propre compte Monero avec la @clef-de-dépense
privée, vous êtes seul responsable de la sécurité de vos
fonds. Heureusement, Monero permet très facilement de sauvegarder votre
compte. Lorsque vous créez un compte Monero pour la première fois, vous
recevez une @phrase-mnémonique propre à votre compte qui consiste en 13 ou
25 mots dans la langue de votre choix. **Cette phrase mnémonique est la
seule chose dont vous avez besoin pour sauvegarder votre compte**, il est
donc impératif de l'écrire et de la conserver en toute sécurité. Ne
conservez jamais cette phrase mnémonique sous une forme ou à un emplacement
qui permettrait à d'autres de la voir !

```
List of available languages for your wallet's seed:
0 : Deutsch
1 : English
2 : Español
3 : Français
4 : Italiano
5 : Nederlands
6 : Português
7 : русский язык
8 : 日本語
9 : 简体中文 (中国)
10 : Esperanto
Enter the number corresponding to the language of your choice: 1
Generated new wallet: 4B15ZjveuttEaTmfZjLVioPVw7bfSmRLpSgB33CJbuC6BoGtZrug9TDAmhZEWD6XoFDGz55bgzisT9Dnv61sbsA6Sa47TYu
view key: 4130fa26463d9451781771a8baa5d0b8085c47c4500cefe4746bab48f1d15903
**********************************************************************
Your wallet has been generated.
To start synchronizing with the @daemon, use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing monero-wallet-cli to save your
current session's state. Otherwise, you might need to synchronize
your wallet again (your wallet keys are NOT at risk in any case).

PLEASE NOTE: the following 25 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

aunt knuckle italics moisture hawk thorn iris abort
chlorine smog uphill glass aptitude nowhere sewage plywood
dual relic fierce divers anvil nodes bubble cabin abort
**********************************************************************
Starting refresh...
Refresh done, blocks received: 21939                            
Balance: 0.000000000000, unlocked balance: 0.000000000000
Background refresh thread started
[wallet 4B15Zj]: █
```

Comme le montre l'exemple ci-dessus, il est extrêmement important de
conserver cette phrase en lieu sûr. Si vous interrogez quand au risque de
perte, vol ou destruction à votre domicile par exemple, vous pourrez vouloir
conserver une copie chez votre avocat ou dans un coffre fort. Il est
également recommandé de la conserver d'une façon qui ne rende pas évident le
fait qu'il s'agisse de votre phrase mnémonique, donc l'écrire au sein d'une
lettre ou autre note est conseillé.

### Pratiquer une Bonne Sécurité

Au delà de la sauvegarde de votre @phrase-mnémonique vous permettant d'avoir
accès à votre compte en cas de forces majeures, de perte ou de vol, il est
également important de pratiquer une *bonne sécurité*. Utilisez un mot de
passe fort lorsque vous créez un compte Monero local (que vous n'utilisez
pas sur [MyMonero](https://mymonero.com) ou sur un autre système de compte
en ligne).

Ne divulguez jamais le mot de passe de votre compte Monero à quiconque dans
la mesure ou cela permettrait d'accéder à vos Moneroj sur votre ordinateur
sans avoir à connaître votre @phrase-mnémonique. De la même manière,
assurez-vous d'avoir un antivirus à jour en cours de fonctionnement, plus
particulièrement pour un ordinateur Windows. Enfin, soyez prudent lorsque
vous cliquez sur des liens dans des e-mail, ou sur des sites non-fiables,
dans la mesure ou un programme malveillant pourrait s'installer et attendre
que vous accédiez à votre compte Monero avant d'en vider les fonds.

### Laisser votre compte à vos parents proches

Fournir l'accès à votre compte Monero à vos parents proches se fait aussi
simplement qu'en sauvegardant votre compte Monero. Laissez-leurs simplement
votre @phrase-mnémonique dans votre testament, ou conservez-la à un endroit
sûr qui leurs sera communiqué lors de l'exécution de votre testament. Cette
solution permet en plus à vos proches de ne pas avoir à attendre des mois le
déblocage des fonds par un tiers.
