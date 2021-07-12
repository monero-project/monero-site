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

Da die Zuständigkeiten für Blockchain und Wallet bei verschiedenen
Programmen liegen, benötigen einige Dienste des `monero-wallet-cli` eine
Verbindung mit einem Hintergrunddienst (darunter die Suche nach eingehenden
Transaktionen).  Sobald du sowohl `monero-wallet-cli` wie auch `monerod`
gestartet hast, kannst du `balance` eingeben.

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

Solltest du einen Händler bezahlt haben, dieser aber bestreiten, das Geld
empfangen zu haben, kann es passieren, dass du deine Zahlung gegenüber
Dritten nachweisen musst - oder sogar gegenüber des Händlers, sofern es ein
ehrlicher Fehler seinerseits war. Da Monero privat ist und man nicht
ausmachen kann, wer Gelder empfangen oder gesendet hat, kannst du nicht
einfach auf deine Transaktion in der Blockchain verweisen. Durch
Bereitstellen des privaten, pro Transaktion vertraulichen Schlüssels ist es
Dritten allerdings möglich, zu sehen, ob in dieser Transaktion Monero an die
jeweilige Adresse gesendet wurden. Beachte, dass das Abspeichern dieser
Transaktionsschlüssel standardmäßig deaktiviert ist. Wenn du denkst, du
könntest diese Funktion gebrauchen, musst du sie vor dem Senden einschalten:

```
set store-tx-info 1
```

Du kannst den Transaktionsschlüssel einer früheren Transaktion abrufen:

```
get_tx_key 1234567890123456789012345678901212345678901234567890123456789012
```

Gib die Transaktions-ID, deren Schlüssel du benötigst, ein. Vergiss nicht,
dass eine Zahlung mit verschiedenen Einzeltransaktionen getätigt werden
kann; es kann also sein, dass du mehrere Schlüssel brauchst. Du kannst
diese(n) Schlüssel (zusammen mit der Transaktions-ID und der
Empfangsadresse) anschließend an denjenigen schicken, dem du einen Nachweis
über deine Transaktion erbringen möchtest. Bedenke, dass der entsprechende
Dritte - sollte er deine eigene Adresse kennen - sehen kann, wie viel
Wechselgeld an dich zurückgegangen ist.

Wenn du dieser Dritte bist (weil dir jemand beweisen möchte, dass er Monero
an eine Adresse gesendet hat), kannst du den Nachweis folgendermaßen
überprüfen:

```
check_tx_key TXID TXKEY ADDRESS
```

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID,
per-transaction key, and destination address which were supplied to you,
respectively. `monero-wallet-cli` will check that transaction and let you
know how much monero this transaction paid to the given address.

## How to find a payment to you

Hast du eine Zahlung mit einer bestimmten Zahlungs-ID erhalten, kannst du
diese folgendermaßen aufsuchen:

```
payments PAYMENTID
```

Du kannst auch mehr als eine Zahlungs-ID eingeben.

Grundsätzlich kannst du ein- und ausgehende Zahlungen wie folgt prüfen:

```
show_transfers
```

Du kannst zur Anzeige jüngerer Transaktionen eine bestimmte Höhe setzen und
nur eingehende oder nur ausgehende Transaktionen abfragen, zum Beispiel
zeigt

```
show_transfers in 650000
```

nur die eingegangen Transaktionen nach dem Block 650000 an. Du kannst
außerdem einen Höhenbereich festlegen.

Falls du minen möchtest, kannst du dies vom Wallet aus tun:

```
start_mining 2
```

Hierdurch startet das Mining mit dem Hintergrunddienst unter Gebrauch zweier
Threads. Bedenke, dass dieses Solomining eine Weile dauern kann, bis du
einen Block findest. Du beendest das Minen mit

```
stop_mining
```
