{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Probar pagos

Cuando envías dinero a una parte quien después reclama que el pago haya sido realizado, necesitas ser capaz de probar que el pago fue realizado.

Con Bitcoin, esto es típicamente hecho buscando el ID de transacción, donde se muestran
las direcciones de origen y destino, junto con la cantidad tramitada.

Monero, no obstante, es privado: esa información no está disponible públicamente en la blockchain. Los pasos son, por lo tanto,
un poco más complejos.

Para probarle a Charlie que ella hizo un pago a Bob, Alicia debe proveer a Charlie con tres piezas de información:

- el ID de transacción, como es hecho en Bitcoin
- la dirección de Bob, como es hecho en Bitcoin
- la llave de transacción, que es algo nuevo con Monero y otras criptomonedas CryptoNote

Cuando Alicia hizo la transacción, una llave de un solo uso fue automáticamente generada para esa transacción.

#### CLI

Alicia puede consultarlo así en monero-wallet-cli (nuevo nombre para la vieja simplewallet):

> get_tx_key TXID

Alicia pondría su actual ID de transacción en lugar del marcador TXID. Si todo va bien, la llave de un solo uso
será mostrada.

Tenga en cuenta que esto sólo funcionará si monero-wallet-cli está configurado para guardar llaves de transacción. Para volver a revisar:

> set

Si set es 0, cámbialo a 1:

> set store-tx-info 1

#### GUI

Alicia puede abrir monero-wallet-gui e ir al historial para ver los detalles de su transacción:

![Historial](/img/resources/user-guides/en/prove-payment/history.png)

Aquí, ella puede copiar el ID de transacción y la dirección de Bob haciendo clic en cada uno.
Entonces ella puede hacer clic en `P` para obtener una prueba de pago (llave de transacción):

![Prueba de pago](/img/resources/user-guides/en/prove-payment/payment-proof.png)


---

Alicia ahora puede enviarle a Charlie la llave de transacción junto al ID de transacción y la dirección de Bob.

Nota: si varias transacciones fueron hechas, esto debe repetirse para cada transacción.

### Revisar pagos

Charlie ahora recibió esas tres piezas de información, y quiere revisar si Alicia está diciendo la verdad: en una blockchain
actualizada,

#### CLI

Charlie escribe en monero-wallet-cli:

> check_tx_key TXID TXKEY ADDRESS

La información provista por Alicia se coloca limpiamente en lugar de los marcadores. monero-wallet-cli usará la llave de transacción
para decodificar la transacción, y mostrar cuánto envió la transacción a la dirección.

Obviamente, Charlie querrá volver a revisar con Bob que la dirección es realmente de él - al igual que con Bitcoin.

#### GUI

Charlie abrirá su monero-wallet-gui e irá a la página en Avanzado > Probar/verificar para llenar la sección Comprobar con la información provista por Alicia:

![Prueba de pago](/img/resources/user-guides/en/prove-payment/check-payment.png)

Entonces haciendo clic en Check dirá a Charlie cuánto envió esta transacción en particular a la dirección, y cuántas confirmaciones tuvo la transacción:

![Pago revisado](/img/resources/user-guides/en/prove-payment/payment-checked.png)


---

Obviamente, Charlie querrá volver a revisar con Bob que la dirección es realmente de él - al igual que con Bitcoin.

Nota: si varias transacciones fueron hechas, esto debe repetirse para cada transacción.
