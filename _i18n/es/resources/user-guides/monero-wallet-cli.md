{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# monero-wallet-cli

`monero-wallet-cli` es el software de monedero que viene con el árbol de Monero. Es un programa de consola,
y administra una cuenta. Mientras que un monedero de Bitcoin administra ambos, cuenta y blockchain,
Monero separa estos: `monerod` maneja la blockchain, y `monero-wallet-cli` la cuenta.

Esta guía mostrará cómo realizar varias operaciones desde la interfaz de usuario `monero-wallet-cli`. Esta guía asume que estás versión más reciente de Monero y que ya has creado una cuenta conforme a las demás guías.


## Revisando tu balance

Ya que el manejo de la blockchain y del monedero son programas separados, varios usos de `monero-wallet-cli`
necesitan trabajar con el daemon. Esto incluye buscar por transacciones de entrada a tu dirección.
Una vez que estés ejecutando `monero-wallet-cli` y `monerod`, escribe `balance`.

Ejemplo:

Esto sacará bloques del daemon que el monedero aún no ve, y actualizará tu balance para
que coincidan. Este proceso será normalmente realizado en segundo plano más o menos cada minuto. Para ver tu
balance sin refrescar:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

En este ejemplo, `Balance` es tu balance total. El `unlocked balance` es la cantidad actualmente disponible para gastar. Transacciones recientemente recibidas requieren 10 confirmaciones en la blockchain antes de ser desbloqueadas. `unlocked dust` se refiere a muy pequeñas cantidades de salidas sin gastar que se pueden haber acumulado en tu cuenta.

## Enviando Monero

Necesitarás la dirección estándar a la que quieres enviar (una larga cadena que comienza con '4'), y
posiblemente un ID de pago, si el receptor requiere uno. En ese último caso, el receptor
te debería dar una dirección integrada, que es la combinación de ambas en una dirección individual.

### Enviando a una dirección estándar:

    transfer ADDRESS AMOUNT PAYMENTID

Reemplaza `ADDRESS` con la dirección a la que deseas enviar, `AMOUNT` con cuánto Monero quieres enviar,
y `PAYMENTID` con el ID de pago que fuiste provisto. Los ID de pago son opcionales. Si el la parte receptora no requiere uno,
sólo omítelo.

### Enviando a una dirección integrada:

    transfer ADDRESS AMOUNT

El ID de pago está implícito en la dirección integrada en este caso.

### Especificar el número de salidas para una transacción:

    transfer RINGSIZE ADDRESS AMOUNT

Reemplaza `RINGSIZE` con el número de salidas que deseas utilizar. **Si no se especifica, el valor por defecto es 11.** Es una buena idea utilizar el valor por defecto, pero puedes incrementar el número si quieres incluir más salidas. Entre más alto el número, más grande es la transacción, y se requerirá más comisión.


## Recibiendo Monero

Si tienes tu propia dirección de Monero, sólo necesitas dar tu dirección estándar a alguien.

Puedes encontrar tu dirección con:

    address

Ya que Monero es anónimo, no podrás ver la dirección de origen de donde recibes fondos. Si
quieres saber, por ejemplo, cómo acreditar a un cliente en particular, tendrás que decir al emisor que utilice un
ID de pago, que es una etiqueta arbitraria opcional que se adjunta a una transacción. Para facilitar
las cosas, puedes generar una dirección que ya incluya un ID de pago aleatorio:

    integrated_address

Esto generará un ID de pago aleatorio, y te dará la dirección que incluye tu propia cuenta y el
ID de pago. Si quieres seleccionar un ID de pago en particular, puedes hacerlo también:

    integrated_address 12346780abcdef00

Pagos realizados a una dirección integrada generada desde tu cuenta irán a tu cuenta,
con el ID de pago adjunto, así podrás diferenciar pagos.


## Probando a un tercero que pagaste a alguien

Si pagas a un comerciante, y el comerciante reclama que no ha recibido el pago, puedes necesitar
probar a un tercero que sí enviaste los fondos, o incluso al comerciante, si es que es un error
honesto. Monero es privado, así que no puedes simplemente indicar tu transacción en la blockchain,
tampoco puedes saber quién la envió, ni quién la recibió. No obstante, proveyendo la llave privada
por transacción a una parte, esa parte puede saber si esa transacción envió Monero a esa
dirección en particular. Ten en cuenta que guardar estas llaves privadas por transacción está desactivado por defecto, y
tendrás que activarlo antes de enviar, si crees que lo puedes necesitar:

    set store-tx-info 1

Puedes recuperar la llave tx de una transacción anterior:

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Coloca el ID de la transacción del cual quieres la llave. Recuerda que un pago puede haber sido
dividido en más de una transacción, así que puedes necesitar varias llaves. Puedes enviar esa llave,
o llaves, a quien quieras proveer con pruebas de tu transacción, junto con los
ID de transacción y la dirección a la que enviaste. Ten en cuenta que este tercero, si conoce tu
dirección, será capaz de ver cuánto cambio regresó a tu cuenta también.

Si tú eres el tercero (esto es, alguien quiere probarte que enviaron Monero
a una dirección), entonces puedes revisarlo de esta forma:

    check_tx_key TXID TXKEY ADDRESS

Reemplaza `TXID`, `TXKEY` y `ADDRESS` con el ID de transacción, la llave por transacción y la dirección
de destino que te fueron provistas respectivamente. monero-wallet-cli revisará esa transacción
y te hará saber cuánto monero pagó esta transacción a la dirección dada.


## Obtener una oportunidad para confirmar/cancelar pagos

Si deseas obtener una última oportunidad de confirmación al enviar un pago:

    set always-confirm-transfers 1


## Cómo encontrar un pago

Si recibiste un pago utilizando un ID de pago en particular, puedes verlo con:

    payments PAYMENTID

Puedes dar más de un ID de pago también.

De manera más general, puedes revisar pagos de entrada y salida:

    show_transfers

Puedes dar una altura opcional para listar sólo transacciones recientes, y solicitar
solamente transacciones de entrada o salida. Por ejemplo,

    show_transfers in 650000

sólo mostrará transacciones de entrada después del block 650000. También puedes dar
un rango de altura.

Si quieres minar, puedes hacerlo desde tu monedero:

    start_mining 2

Esto empezará a minar en el daemon utilizando dos subprocesos. Ten en cuenta que esto es minado en solitario,
y puede tomar un tiempo en encontrar un bloque. Para detener el minado:

    stop_mining

