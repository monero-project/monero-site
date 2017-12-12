<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="full">
                    <div class="info-block text-adapt">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Instrucciones para la interfaz de línea de comandos (CLI)</h2>
                            </div>
                        </div>
<div markdown="1">
                           
### Los fundamentos

Monero funciona de una manera un poco diferente de otras criptomonedas. En el caso de una moneda digital como Bitcoin y sus derivativos, los sistemas de pago de comerciantes usualmente crean una nueva dirección de destinatario para cada pago o para cada usuario.

Puesto que Monero usa direcciones ocultadas, no hay necesidad en tener direcciones de destinatario separadas para cada pago o usuario. La dirección de una sola cuenta puede ser publicada. Para recibir pagos, un comerciante proporcionará un cliente con una ID de pago.

Una ID de pago es una cadena de 64 caracteres hexadecimales que se crea de manera aleatoria por un comerciante. Un ejemplo de ID de pago es:

```
666c75666679706f6e7920697320746865206265737420706f6e792065766572
```

### Verificar un pago en monero-wallet-cli
Si quiere verificar un pago usando monero-wallet-cli, puede usar el comando de “payments” seguido por una o varas ID de pago que quiere verificar. Por ejemplo:

```
[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
 666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █
```

Si quiere verificar pagos mediante programación, véase la siguiente sección.

### Recibir pagos paso a paso

* Generar una cadena de 64 caracteres hexadecimales aleatorios para el pago
* Pasar la ID de pago y la dirección de Monero al individuo que realiza el pago
* Verificar el pago usando “payments” en monero-wallet-cli

### Verificar el pago mediante programación

Para verificar un pago mediante programación, puede usar las llamadas de JSON RPC API get_payments o get_bulk_payments.

*get_payments: esto requiere a un parámetro con una sola ID de pago.

*get_bulk_payments: esto es un método preferido. Requiere dos parámetros, payments_ids - un array de JSON de IDs de pagos - y un óptimo min_block_height - la altura de bloque a escanear.  

Un ejemplo de los datos devueltos:

```
[ monero->~ ]$ curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
{
  "id": "test",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 30000000000000,
      "block_height": 441942,
      "payment_id": "666c75666679706f6e7920697320746865206265737420706f6e792065766572",
      "tx_hash": "7ba4cd810c9b4096869849458181e98e18b6474ab66415de0f4ccf7ab1162fdf",
      "unlock_time": 0
    }]
  }
}
```

Es importante notar que los importes devueltos se presentan usando las unidades básicas de Monero y no las unidades de display que normalmente se usan en aplicaciones de usuario final. Además, puesto que una transacción típicamente tendrá varias salidas que se añaden al total requerido de pago, los importes deben agruparse por el tx_hash o el payment_id y deben añadirse. Asimismo, puesto que salidas múltiples pueden tener el mismo importe, es imprescindible que no trate de filtrar los datos devueltos de una sola llamada get_bulk_payments.

Antes de buscar pagos, es necesario usar el demonio RPC API (la llamada RPC get_info) para verificar si se haya recibido bloques adicionales.

### Buscar pagos mediante programación

* Obtener la altura actual de bloque del demonio y proceder sólo si ha aumentado desde su última búsqueda
* Ejecute la llamada de RPC API get_bulk_payments con la última altura de bloque escaneada y la lista de todas IDs de pagos en el sistema
* Guardar la altura actual de bloque como la última altura escaneada
* Remove duplicates based on transaction hashes we have already received and processed  
                           
</div>
                    </div>
                </div>
    
                
                <!-- end right one-third block-->
            </div>
        </section>
                