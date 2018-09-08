{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Importando la Blockchain al monedero GUI (Windows)

### Paso 1

Descarga la blockchain actual de https://downloads.getmonero.org/blockchain.raw; puedes saltar este paso si estás importando la blockchain de otra fuente.

### Paso 2

Busca la dirección de tu monedero de Monero (la carpeta donde has extraído tu monedero). Por ejemplo:

`D:\monero-gui-0.10.3.1`

Tu dirección puede ser distinta dependiendo en dónde decidiste descargar tu monedero y con qué versión de monedero cuentas.

### Paso 3

Busca la dirección del archivo de la Blockchain que descargaste, por ejemplo:

`C:\Usuarios\KeeJef\Descargas\blockchain.raw`

El tuyo puede ser distinto dependiendo de en dónde descargaste la blockchain.

### Paso 4

Abre una consola de comandos. Puedes hacerlo presionando Windows+R y escribiendo en la ventana emergente "cmd".

### Paso 5

Ahora necesitas ir desde la consola a la dirección de tu monedero de Monero. Puedes hacer esto escribiendo:

`cd C:\DIRECCIÓN\DEL\ARCHIVO\DE\TU\MONEDERO`

Se debería ver como:

`cd D:\monero-gui-0.10.3.1`

Si tu monedero de Monero está en otro disco, puedes utilizar `DriveLetter:`. Por ejemplo, si tu monedero está en el disco D, entones antes de utilizar el comando `cd` debes escribir `D:`.

### Paso 6

Ahora escribe en la consola:

`monero-blockchain-import --verify 1 --input-file C:\DIRECCIÓN\DEL\ARCHIVO\DE\TU\BLOCKCHAIN`

Por ejemplo:

`monero-blockchain-import --verify 1 --input-file C:\Usuarios\KeeJef\Descargas\blockchain.raw`

Si descargaste la blockchain de una fuente confiable y de reputación, puedes configurar el comando a `verify 0`. Esto reducirá la cantidad de tiempo de sincronización de la blockchain.

### Paso 7

Después de que la Blockchain haya terminado de sincronizarse podrás abrir tu monedero normalmente. El archivo blockchain.raw puede ser eliminado.


Autor: Kee Jefferys