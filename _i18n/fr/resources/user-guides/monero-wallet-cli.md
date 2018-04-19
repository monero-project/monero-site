# monero-wallet-cli

`monero-wallet-cli` est une application de portefeuille qui est incluse dans la suite Monero. C'est un
programme en ligne de commandes qui permet de gérer un compte. Tandis que le portefeuille Bitcoin
gère à la fois un compte et la chaîne de bloc, Monero sépare ces deux composants : `monerod`
s'occupe de la chaîne de blocs, et `monero-wallet-cli` gère le compte.

Ce guide montrera comment effectuer diverses opération depuis l'interface de `monero-wallet-cli`. Ce guide suppose que vous utilisiez la version la plus récenter de Monero et que vous ayez déjà créé un compte comme exposé dans l'autre guide.


## Vérifier votre solde

Dans la mesure ou la gestion de la chaîne de blocs et le portefeuille sont des applications séparées,
de nombreux usages de `monero-wallet-cli` implique de fonctionner avec le démon. Incluant la
vérifications des transactions entrantes sur votre adresse. Une fois que `monero-wallet-cli` et
`monerod` sont tous deux en cours d'exécution, entrez `balance`.

Exemple :

Ceci récupèrera depuis le démon les blocs que le portefeuille n'a pas encore vu, et mettra à jour
votre solde. Ce processus est normalement réalisé en tache de fond environ toutes les minutes.
Pour voir votre balance sans rafraichir :

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

Dans cette exemple, `Balance` correspond à votre solde total. `unlocked balance` est le montant actuellement disponible pour être dépensé. Les nouvelles transactions reçues nécessitent 10 confirmations sur la chaîne de blocs avant d'être débloquées. `unlocked dust` corresponds à de très faible montants de sorties non dépensées qui ont pu s'accumuler sur votre compte.

## Envoyer des Moneroj

Vous aurez besoin de l'adresse standard à laquelle vous comptez envoyer (une longue chaine de
caractères commençant par '4') et potentiellement un ID de paiement, si le destinataire vous en
demande un. Dans ce dernier cas, celui-ci pourrait vous donner une adresse intégrée, qui contient
les deux dans une seule et même adresse.

### Envoyer à une adresse standard :

    transfer ADRESSE MONTANT IDdePAIEMENT

Remplacez `ADRESSE` avec l'adresse à laquelle vous souhaitez envoyer, `MONTANT` avec le montant que vous souhaitez
envoyer et `IDdePAIEMENT` avec l'ID de paiement qui vous a été fournit. L'ID de paiement est optionnel. Si le
destinataire ne vous en a pas fournit, n'en indiquez pas.

### Envoyer à une adresse intégrée :

    transfer ADRESSE MONTANT

Dans ce cas, l'ID de paiement est implicitement inclus dans l'adresse intégrée.

### Indiquer le nombre de sorties pour une transaction :

    transfer RINGSIZE ADRESSE MONTANT

Remplacez `RINGSIZE` avec le nombre de sorties que vous souhaitez utiliser. **S'il n'est pas spécifié, la valeur par défaut est 4.** C'est une bonne idée d'utiliser la valeur par défaut, mais vous pouvez augmenter celle-ci pour inclure plus de sorties. Plus grand est le nombre, plus grosse sera la transaction, nécessitant des frais plus importants.


## Recevoir des moneroj

Si vous avez votre propre adresse Monero, vous devez simplement communiquer à quelqu'un votre adresse standard.

Vous pouvez trouver votre adresse standard avec :

    address

Comme Monero est anonyme, vous ne verrez pas l'adresse à partir de laquelle les fonds vous sont envoyés.
Si vous voulez le savoir, par exemple pour créditer un client particulier, vous devrez indiquer à
l'emmeteur d'utiliser un ID de paiement, qui est une étiquette optionnelle et arbitraire qui sera
associé à la transaction. Pour vous faciliter la vie, vous pouvez générer une adresse qui inclue déjà
un ID de paiement aléatoire.

    integrated_address

Cela va générer un ID de paiement aléatoire et vous fournir l'adresse qui inclue votre propre compte
et cet ID de paiement. Si vous voulez sélectionner un ID de paiement particulier, vous pouvez aussi
faire :

    integrated_address 12346780abcdef00

Les paiements effectués sur une adresse intégrée générée depuis votre compte iront sur votre compte,
avec cet ID de paiement associé, vous permettant de distinguer les paiements.


## Prouver à un tiers que vous avez payé quelqu'un

Si vous payez un commerçants, et que celui-ci prétends qu'il n'a pas reçu les fonds, vous pourriez
avoir besoin de prouver à un tiers que vous avez bien envoyé les fonds (ou même au commerçants,
s'il sagit d'une erreur honnête). Monero est confidentiel, de sorte que vous ne pouvez pas
simplement indiquer votre transaction dans la chaîne de blocs, dans la mesure où vous ne pouvez ni
dire qui l'a envoyé, ni qui l'a reçu. Cependant, en fournissant la clef privée propre à la
transaction à un tiers, celui-ci peut dire si la transaction à envoyé des moneroj à cette adresse
particulière. Notez que la conservation des clefs privées propres aux transactions est désactivé
par défaut, et que vous aurez à l'activer avant l'envoie, si vous pensez que vous pourriez en avoir
besoin :

    set store-tx-info 1

Vous pouvez récupérer la clef tx d'une précédente transaction :

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Indiquez l'ID de transaction dont vous voulez la clef. Souvenez vous qu'un paiement peut avoir
été scindé en plusieurs transactions, donc vous pourriez avoir besoin de plusieurs clefs. Vous
pourrez alors envoyer cette clef, ou ces clefs, à quiconque vous fournira la preuve de votre
transaction, accompagné de l'ID de transaction et de l'adresse à laquelle vous avez envoyé les
fonds. Notez que ce tiers, s'il connait votre propre adresse, sera également en mesure de voir
quelle quantité de monnaie vous aurait été rendue.

Si vous êtes le tiers (c'est à dire que quelqu'un veut vous prouver qu'il a effectivement envoyé
des moneroj à une adresse), vous pouvez le vérifier comme suit :

    check_tx_key IDTX CLEFTX ADRESSE

Remplacez `IDTX`, `CLEFTX` et `ADRESSE` respecectivement par l'ID de transation, la clef propre
à la transaction et l'adresse de destination qui vous ont été communiqués. monero-wallet-cli va
vérifier cette transaction et vous indiquera combien de moneroj ont été payés à l'adresse fournie.


## Pouvoir confirmer ou annuler des paiements

Si vous souhaitez devoir confirmer les paiements que vous envoyez :

    set always-confirm-transfers 1


## Comment retrouver un paiement qui vous a été fait

Si vous recevez un paiement utilisant un ID de paiement précis, vous pouvez le rechercher :

    payments PAYMENTID

Vous pouvez également fournir plus d'un ID de paiement.

Plus généralement, vous pouvez examiner les paiements reçus et envoyés :

    show_transfers

Vous pouvez indiquer une hauteur de bloc optionnelle pour ne lister que les transactions
récentes, et ne demander que les transactions entrantes ou sortantes. Par exemple,

    show_transfers in 650000

ne vous montrera que les transferts reçus après le block 650000. Vous pouvez également
fournir une plage de hauteur de bloc.

Si vous voulez miner, vous pouvez le faire depuis le portefeuille :

    start_mining 2

Cela va démarrer l'extraction minière sur le démon en utilisant deux threads. Notez qu'il s'agit
d'extraction minière en solo, et qu'il pourrait falloir un moment avant que vous ne trouviez un
bloc. Pour arrêter l'extraction minière :

    stop_mining

