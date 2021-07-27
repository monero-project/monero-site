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

Ya que el manejo de la blockchain y del monedero son programas separados,
varios usos de `monero-wallet-cli` necesitan trabajar con el daemon. Esto
incluye buscar por transacciones de entrada a tu dirección.  Una vez que
estés ejecutando `monero-wallet-cli` y `monerod`, escribe `balance`.

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

Si pagas a un comerciante, y el comerciante reclama que no ha recibido el
pago, puedes necesitar probar a un tercero que sí enviaste los fondos, o
incluso al comerciante, si es que es un error honesto. Monero es privado,
así que no puedes simplemente indicar tu transacción en la blockchain,
tampoco puedes saber quién la envió, ni quién la recibió. No obstante,
proveyendo la llave privada por transacción a una parte, esa parte puede
saber si esa transacción envió Monero a esa dirección en particular. Ten en
cuenta que guardar estas llaves privadas por transacción está desactivado
por defecto, y tendrás que activarlo antes de enviar, si crees que lo puedes
necesitar:

```
set store-tx-info 1
```

Puedes recuperar la llave tx de una transacción anterior:

```
get_tx_key 1234567890123456789012345678901212345678901234567890123456789012
```

Coloca el ID de la transacción del cual quieres la llave. Recuerda que un
pago puede haber sido dividido en más de una transacción, así que puedes
necesitar varias llaves. Puedes enviar esa llave, o llaves, a quien quieras
proveer con pruebas de tu transacción, junto con los ID de transacción y la
dirección a la que enviaste. Ten en cuenta que este tercero, si conoce tu
dirección, será capaz de ver cuánto cambio regresó a tu cuenta también.

Si tú eres el tercero (esto es, alguien quiere probarte que enviaron Monero
a una dirección), entonces puedes revisarlo de esta forma:

```
check_tx_key TXID TXKEY ADDRESS
```

Replace `TXID`, `TXKEY` and `ADDRESS` with the transaction ID,
per-transaction key, and destination address which were supplied to you,
respectively. `monero-wallet-cli` will check that transaction and let you
know how much monero this transaction paid to the given address.

## How to find a payment to you

Si recibiste un pago utilizando un ID de pago en particular, puedes verlo
con:

```
payments PAYMENTID
```

Puedes dar más de un ID de pago también.

De manera más general, puedes revisar pagos de entrada y salida:

```
show_transfers
```

Puedes dar una altura opcional para listar sólo transacciones recientes, y
solicitar solamente transacciones de entrada o salida. Por ejemplo,

```
show_transfers in 650000
```

sólo mostrará transacciones de entrada después del block 650000. También
puedes dar un rango de altura.

Si quieres minar, puedes hacerlo desde tu monedero:

```
start_mining 2
```

Esto empezará a minar en el daemon utilizando dos subprocesos. Ten en cuenta
que esto es minado en solitario, y puede tomar un tiempo en encontrar un
bloque. Para detener el minado:

```
stop_mining
```
