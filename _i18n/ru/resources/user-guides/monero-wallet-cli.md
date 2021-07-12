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

Поскольку обработка данных в блокчейне и учетных записей кошельков
пользователей совершаются отдельными программами, многие функции
`monero-wallet-cli` не будут функционировать без работающего демона. Одной
из таких функций является поиск входящих транзакций на ваш адрес. Только
когда вы запустите оба приложения, `monero-wallet-cli` и `monerod`, сможете
увидеть входящий баланс своего кошелька. Для этого введите команду
`balance`.

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

Если вы платите субъекту, а он заявляет, что не получил средств, вам может
потребоваться доказать третьему лицу, которому вы отправляли средства, или
даже самому субъекту, что платеж был действительно отправлен. Monero
является конфиденциальной сетью, поэтому вы не можете просто указать на свою
транзакцию в блокчейне, так как вы не можете сказать, кто ее отправил, и кто
ее получил. Однако существует возможность предоставлять `tx key` (Ключ
транзакций) третьей стороне, а эта сторона уже сможет определить, была ли
отправлена эта транзакция Monero этому конкретному адресу. Обратите
внимание, что сохранение этих ключей для каждой транзакции отключено по
умолчанию, и вам нужно будет включить его перед отправкой, если вы считаете,
что вам может понадобиться данная функция. Делается это с помощью команды:

```
set store-tx-info 1
```

Вы можете извлечь `tx key` (Ключ транзакций) из более ранней транзакции:

```
get_tx_key 1234567890123456789012345678901212345678901234567890123456789012
```

Введите идентификатор транзакции, для которого вы хотите узнать
ключ. Помните, что платеж мог быть разделен более чем на одну транзакцию,
поэтому вам может понадобиться несколько ключей для каждой транзакции. Затем
вы можете отправить этот ключ или ключи кому-либо, кому вы хотите
предоставить подтверждение совершения своей транзакции, а также
идентификатор транзакции и адрес, на который вы отправили средства. Обратите
внимание, что эта третья сторона, зная свой собственный адрес, и эти данные
сможет узнать, какие именно средства вы ей отправили.

Если вы являетесь третьей стороной (то есть кто-то хочет доказать вам, что
отправил Monero на ваш адрес), вы можете проверить это таким способом:

```
check_tx_key TXID TXKEY ADDRESS
```

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID,
per-transaction key, and destination address which were supplied to you,
respectively. `monero-wallet-cli` will check that transaction and let you
know how much monero this transaction paid to the given address.

## How to find a payment to you

Если вы получили платеж с использованием определенного `payment id`
(Идентификатор платежа), вы можете посмотреть информацию об этом с помощью
команды:

```
payments PAYMENTID
```

Вы также можете указать более одного идентификатора платежа.

В более общем плане вы можете просматривать информацию обо всех входящих и
исходящих платежах, если введете команду:

```
show_transfers
```

Вы можете дополнительно указать высоту блока, чтобы отображать только
последние транзакции и запрашивать только входящие или исходящие
транзакции. Например, команда:

```
show_transfers in 650000
```

покажет только входящие транзакции после блока 650000. Вы также можете
указывать диапазоны высоты блоков.

Если вы хотите запустить фоновый майнинг, то можете сделать это прямо из
кошелька командой:

```
start_mining 2
```

Это запустит майнинг на демоне в 2 потока. Обратите внимание, что это
соло-майнинг, и может потребоваться очень длительное время, прежде чем вы
найдете блок. Чтобы остановить майнинг, введите команду:

```
stop_mining
```
