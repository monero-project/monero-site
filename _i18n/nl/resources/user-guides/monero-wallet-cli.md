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

Omdat we een ander programma dan de portemonnee gebruiken om met de
blockchain te werken, moet `monero-wallet-cli` voor veel toepassingen
samenwerken met de node. Dit is bijvoorbeeld nodig om binnenkomende
transacties voor je adres op te zoeken.  Wanneer `monero-wallet-cli` en
`monerod` beide worden uitgevoerd, voer je `balance` in.

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

Als je een verkoper betaalt, en de verkoper beweert dat hij/zij het geld
niet heeft ontvangen, wil je misschien aan een derde bewijzen dat je het
geld wel degelijk hebt verzonden - of aan de verkoper zelf, als het een
eerlijke vergissing is. Monero is vertrouwelijk, dus je kunt niet zomaar je
transactie aanwijzen op de blockchain, want daar is niet te zien wie een
transactie heeft verzonden of ontvangen. Maar je kunt iemand wel de
privésleutel van een transactie geven, zodat die kan zien of die transactie
Monero naar dat adres heeft verzonden. Houd er rekening mee dat het opslaan
van deze transactiesleutels standaard is uitgeschakeld.  Je moet deze
functie voor het verzenden inschakelen als je denkt dat je deze misschien
nodig hebt:

```
set store-tx-info 1
```

Je kunt de transactiesleutel van een eerdere transactie ophalen:

```
get_tx_key 1234567890123456789012345678901212345678901234567890123456789012
```

Voer hierbij de ID in van de transactie waarvoor u de sleutel wilt
hebben. Houd er rekening mee dat een betaling kan zijn gesplitst in meer dan
één transactie, zodat je meerdere sleutels nodig hebt. Vervolgens kun je de
sleutel of sleutels opsturen naar wie je het bewijs van je transactie wilt
laten zien, met de transactie-ID en het adres van de ontvanger
erbij. Opmerking: als deze partij ook je eigen adres kent, kan deze ook zien
hoeveel wisselgeld je hebt teruggekregen.

Als je zelf de derde partij bent (dus als iemand aan jou wilt bewijzen dat
hij/zij Monero naar een bepaald adres heeft verzonden), kun je dat op deze
manier controleren:

```
check_tx_key TXID TXKEY ADDRESS
```

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID,
per-transaction key, and destination address which were supplied to you,
respectively. `monero-wallet-cli` will check that transaction and let you
know how much monero this transaction paid to the given address.

## How to find a payment to you

Als je een betaling met een bepaalde betalings-ID hebt ontvangen, kun je
deze opzoeken:

```
payments PAYMENTID
```

Je kunt ook meer dan één betalings-ID opgeven.

In het algemeen kun je binnenkomende en uitgaande betalingen bekijken:

```
show_transfers
```

Je kunt een optionele blokhoogte opgeven om alleen recente transacties te
ontvangen, en je kunt alleen binnenkomende of uitgaande transactie
opvragen. Bijvoorbeeld:

```
show_transfers in 650000
```

levert alleen binnenkomende overboekingen na blok 650.000 op. Je kunt ook
een bereik van blokhoogten opgeven.

Als je wilt minen, kun je dat ook vanuit de portemonnee doen:

```
start_mining 2
```

Hiermee gebruik je twee CPU-threads om te minen via de daemon. Let op: dit
is solo minen; het kan lang duren voordat je een blok vindt. Om te stoppen
met minen:

```
stop_mining
```
