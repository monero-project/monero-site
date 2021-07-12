{% include disclaimer.html translated="yes" translationOutdated="no" %}

`monero-wallet-cli` is the wallet software shipped in the Monero
archives. It is a console program, and manages an account. While a bitcoin
wallet manages both an account and the blockchain, Monero separates these:
`monerod` handles the blockchain, and `monero-wallet-cli` handles the
account.

This guide will show how to perform various operations with
`monero-wallet-cli`. The guide assumes you are using the most recent version
of Monero and have already created an account according to the other guides.

## Overview

You can have a list of the most important commands by running `help`:

```
Important commands:

"welcome" - Show welcome message.
"help all" - Show the list of all available commands.
"help <command>" - Show a command's documentation.
"apropos <keyword>" - Show commands related to a keyword.

"wallet_info" - Show wallet main address and other info.
"balance" - Show balance.
"address all" - Show all addresses.
"address new [<label text with white spaces allowed>]" - Create new subaddress.
"transfer <address> <amount>" - Send XMR to an address.
"show_transfers [in|out|pending|failed|pool]" - Show transactions.
"sweep_all <address>" - Send whole balance to another wallet.
"seed" - Show secret 25 words that can be used to recover this wallet.
"refresh" - Synchronize wallet with the Monero network.
"status" - Check current status of wallet.
"version" - Check software version.
"exit" - Exit wallet.

"donate <amount>" - Donate XMR to the development team.
```

## Checking your balance

Dans la mesure ou la gestion de la chaîne de blocs et le portefeuille sont
des applications séparées, de nombreux usages de `monero-wallet-cli`
implique de fonctionner avec le démon. Incluant la vérifications des
transactions entrantes sur votre adresse. Une fois que `monero-wallet-cli`
et `monerod` sont tous deux en cours d'exécution, entrez `balance`.

Output:

```
Currently selected account: [0] Primary account
Tag: (No tag assigned)
Balance: 7.499942880000, unlocked balance: 7.499942880000
```

In this example you're viewing the balance of your primary account (with
index `[0]`). `Balance` is your total balance. The `unlocked balance` is the
amount currently available to spend. Newly received transactions require 10
confirmations on the blockchain before being unlocked.

## Sending monero

You will need the standard address you want to send to (a long string
starting with '4' or a '8'). The command structure is:

```
transfer ADDRESS AMOUNT
```

Replace `ADDRESS` with the address you want to send to and `AMOUNT` with how
many monero you want to send.

## Receiving monero

If you have your own Monero address, you just need to give your address to
someone.

You can find out your primary address with:

```
address
```

Since Monero is anonymous, you won't see the origin address the funds you
receive came from. If you want to know, for instance to credit a particular
customer, you'll have to tell the sender to use a payment ID, which is an
arbitrary optional tag which gets attached to a transaction. It's not
possible to use standalone payment addresses, but you can generate an
address that already includes a random payment ID (integrated addresss)
using `integrated_address`:

```
Random payment ID: <82d79055f3b27f56>
Matching integrated address: 4KHQkZ4MmVePC2yau6Mb8vhuGGy8LVdsZD8CFcQJvr4BSTfC5AQX3aXCn5RiDPjvsEHiJu1TC1ybR8pRTCbZM5bhTrAD3HDwWMtAn1K7nV
```

This will generate a random payment ID, and give you the address that
includes your own account and that payment ID. If you want to select a
particular payment ID, you can do that too. Use:

```
integrated_address 82d79055f3b27f56
```

Payments made to an integrated address generated from your account will go
to your account, with that payment ID attached, so you can tell payments
apart.

### Using subaddresses

It's suggested to use subaddresses (starting with `8`) instead of your main
address (starting with `4`) to receive funds. Run:

```
address new [<label text with white spaces allowed>]
```

This will generate a subaddress and its optional label, which addess you can
share to receive payment on the account it's linked to.  For example,

```
address new github_donations
```

will generate a subaddress and its label 'github_donations'.

To view all generated addresses, run:

```
address all
```

## Proving to a third party you paid someone

Si vous payez un commerçants, et que celui-ci prétends qu'il n'a pas reçu
les fonds, vous pourriez avoir besoin de prouver à un tiers que vous avez
bien envoyé les fonds (ou même au commerçants, s'il s'agit d'une erreur
honnête). Monero est confidentiel, de sorte que vous ne pouvez pas
simplement indiquer votre transaction dans la chaîne de blocs, dans la
mesure où vous ne pouvez ni dire qui l'a envoyé, ni qui l'a reçu. Cependant,
en fournissant la clef privée propre à la transaction à un tiers, celui-ci
peut dire si la transaction à envoyé des moneroj à cette adresse
particulière. Notez que la conservation des clefs privées propres aux
transactions est désactivé par défaut, et que vous aurez à l'activer avant
l'envoie, si vous pensez que vous pourriez en avoir besoin :

```
set store-tx-info 1
```

Vous pouvez récupérer la clef tx d'une précédente transaction :

```
get_tx_key 1234567890123456789012345678901212345678901234567890123456789012
```

Indiquez l'ID de transaction dont vous voulez la clef. Souvenez vous qu'un
paiement peut avoir été scindé en plusieurs transactions, donc vous pourriez
avoir besoin de plusieurs clefs. Vous pourrez alors envoyer cette clef, ou
ces clefs, à quiconque vous fournira la preuve de votre transaction,
accompagné de l'ID de transaction et de l'adresse à laquelle vous avez
envoyé les fonds. Notez que ce tiers, s'il connaît votre propre adresse,
sera également en mesure de voir quelle quantité de monnaie vous aurait été
rendue.

Si vous êtes le tiers (c'est à dire que quelqu'un veut vous prouver qu'il a
effectivement envoyé des moneroj à une adresse), vous pouvez le vérifier
comme suit :

```
check_tx_key TXID TXKEY ADDRESS
```

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID,
per-transaction key, and destination address which were supplied to you,
respectively. `monero-wallet-cli` will check that transaction and let you
know how much monero this transaction paid to the given address.

## How to find a payment to you

Si vous recevez un paiement utilisant un ID de paiement précis, vous pouvez
le rechercher :

```
payments PAYMENTID
```

Vous pouvez également fournir plus d'un ID de paiement.

Plus généralement, vous pouvez examiner les paiements reçus et envoyés :

```
show_transfers
```

Vous pouvez indiquer une hauteur de bloc optionnelle pour ne lister que les
transactions récentes, et ne demander que les transactions entrantes ou
sortantes. Par exemple,

```
show_transfers in 650000
```

ne vous montrera que les transferts reçus après le block 650000. Vous pouvez
également fournir une plage de hauteur de bloc.

Si vous voulez miner, vous pouvez le faire depuis le portefeuille :

```
start_mining 2
```

Cela va démarrer l'extraction minière sur le démon en utilisant deux
threads. Notez qu'il s'agit d'extraction minière en solo, et qu'il pourrait
falloir un moment avant que vous ne trouviez un bloc. Pour arrêter
l'extraction minière :

```
stop_mining
```
