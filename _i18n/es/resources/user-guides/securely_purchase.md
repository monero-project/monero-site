{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Cómo comprar y guardar Monero de manera segura.

Esta es una guía para comprar y guardar Monero de manera segura a Junio del 2017.

#### Paso 1: Compra Bitcoin

Hay varias formas de comprar Bitcoin. Dos compañías actuales semi-confiables son Xapo <http://www.xapo.com/> y Coinbase <http://www.coinbase.com/>. El proceso incluye subir tu identificación personal (Identificación de estado, Pasaporte, entre otras) y toma un tiempo de 2 a 10 días (o más). Verifica su reputación en Reddit antes de hacer una compra grande. Xapo utiliza transferencia bancaria y Coinbase transferencia ACH bancaria. Xapo puede ser más rápido que Coinbase. Coinbase también permite compras pequeñas "instantáneas" a través de tarjeta de débito, pero agrega una gran comisión por esta opción. Una vez que hayas comprado Bitcoin, ¡estarás listo para convertirlo a Monero!

#### Paso 2: Descarga y crea un monedero en papel en un ordenador seguro y aislado de la web

Descarga el generador de monederos en papel en: https://moneroaddress.org y cópialo a una memoria USB (link directo: https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip).

Extrae y abre el generador (monero-wallet-generator.html) en un navegador web en un ordenador aislado de la web que nunca haya sido usado, o que haya tenido una instalación limpia del SO.

Tu monedero en papel tendrá cuatro importantes elementos:

Dirección Pública Monero
La dirección pública es utilizada para recibir fondos en el monedero. Puedes compartirla a cualquiera que vaya a enviar fondos a tu monedero.

Semilla Mnemónica Monero
La semilla mnemónica es un método de guardado de todo el monedero fácilmente reconocible para seres humanos. Es todo lo que necesitas para restaurar tu monedero en una fecha futura.

Clave Privada de Utilización Monero
La clave privada de utilización es usada para enviar fondos desde tu monedero.

Clave Privada de Visualización Monero
La clave privada de visualización es para ver transacciones de entrada al monedero. Comúnmente es utilizada para preparar un monedero de visualización solamente que vea las transacciones de entrada en vivo en la blockchain a un monedero almacenamiento en frío.

A este punto tienes varias opciones. Puedes imprimir el monedero en papel, guardarlo como PDF o texto en una memoria USB, quemarlo a un CD/DVD, entre otras opciones. Querrás tener al menos dos o tres copias probablemente, guardadas en diferentes ubicaciones. Si lo guardas digitalmente, encripta todo con una contraseña fuerte. Si lo guardas en papel, no lo muestres a nadie quien pueda memorizar tu clave de 25 palabras, o tomar una foto del monedero sin permiso. Enviar una foto a alguien de tu monedero equivale a enviar todos tus fondos.

Cualquiera que sea el método que elijas, asegúrate que no haya ninguna copia del monedero en el dispositivo que hayas utilizado. Es posible que debas borrar de manera segura el monedero si lo guardaste en un disco, o asegurarse de que la impresora no guarde una copia en la memoria.

*Si pierdes acceso a tu monedero en papel el Monero no estará disponible para ti o para alguien más nunca. ¡No serás capaz de recuperarlo!

#### Nota adicional
Opción para encriptar una semilla mnemónica de Monero:
https://xmr.llcoins.net/
Descarga la página hmtl y colócala en tu computadora aislada. Revisa la parte "Encrypt/Decrypt Mnemonic Seed" y asegúrate de utilizar "CN Add" con una contraseña decente. Agradecimientos a manicminer5.



#### Paso 3: Convierte tu Bitcoin a Monero y envíalo a tu monedero en papel de Monero

Cambia a tu ordenador conectado a la red y ve a www.shapeshift.io. Elige "Depositar Bitcoin" y "Recibir Monero" (rápido).

Presiona en continuar.

Tu dirección de Monero (dirección pública Monero en tu monedero en papel)
Pega la dirección pública Monero de tu monedero en papel en donde dice "Tu dirección de Monero". Pero, ya que tu dirección pública se encuentra en un ordenador aislado (ṡcierto?), no puedes copiarlo y pegarlo... cópialo a mano, o a través de una memoria USB con sólo la dirección pública en ella.

Dirección de Reembolso (dirección pública Bitcoin en donde puedes recibir fondos)
Ingresa una dirección de Bitcoin que controles en donde se pueda enviar un reembolso en caso de que haya un problema con la transacción. Es muy importante que ingreses una dirección pública que esté bajo tu control o que pueda recibir fondos. En Xapo y Coinbase esta recibe el nombre de dirección de recibo y puede cambiar periódicamente.

ID de Pago
Deja el ID de pago en blanco si estás enviando a tu propio monedero de Monero o monedero en papel de Monero.

Acepta los términos y presiona la casilla de "dirección reutilizable".

Presiona en "Iniciar Transacción".

Dirección de Depósito (dirección pública Bitcoin de Shapeshift.io creada solamente para recibir tus fondos)
En la nueva pantalla que emerja, copia la dirección de depósito en el portapapeles (selecciona y presiona Ctrl+C o editar-copiar). Enviarás Bitcoin desde Xapo/Coinbase a Shapeshift.io a esta dirección.

Ve a tu cuenta de Xapo o Circle, y busca un botón para Transferir o Enviar. Pega la dirección de depósito en el campo de destino e ingresa la cantidad de bitcoin que quieres convertir a Monero. Se debe encontrar entre los rangos de depósito mínimos y máximos especificados por Shapeshift.io. Presiona en enviar y autoriza la transacción, si es requerido.

Una vez la transacción haya sido enviada por Xapo/Coinbase habrá un retardo mientras que la transacción entra a la blockchain de Bitcoin y espere confirmación. Esto puede ser minutos u horas. Puedes revisar si el pago ha sido enviado consultando la dirección de depósito de Shapeshift.io en blockchain.info. Tu transacción con Shapeshift.io se mostrará ahí.

Cuando tu transacción de Bitcoin haya sido confirmada, Shapeshift.io comenzará entonces a convertir Bitcoin (BTC) a Monero (XMR) en algún sitio de compra/venta de criptomonedas y cuando se complete, ¡enviará el Monero a la dirección de tu monedero en papel de almacenamiento en frío! Esto puede tomar desde minutos a horas. Si hay algún problema, contacta a Shapeshift.io. Cuentan con un buen soporte.

Cuando la página de Shapehift.io diga que tu transacción ha sido completada, ¡ahora deberás tener Monero en tu monedero en papel!


#### Notas y cómo verificar fondos
Debido a que la blockchain de Monero es privada y no rastreable, no serás capaz de buscar tu dirección pública de Monero y confirmar que los fondos han llegado como puedes hacer con Bitcoin. Esto es bueno para la privacidad, pero malo para conveniencia.

Para verificar de una manera segura que los fondos han llegado a tu monedero, necesitarás preparar un monedero de sólo visualización. Aquí es donde entra la clave de visualización. Para crear un monedero de sólo visualización ve la entrada: [Monederos de sólo visualización]({{site.baseurl}}/resources/user-guides/view_only.html)

Para verificar que los fondos *aún siguen* en tu monedero y que no han sido utilizados necesitas crear un monedero en frío con tu llave mnemónica (todos tus fondos) en una computadora aislada con una copia actualizada de la blockchain de Monero. Cuando termines tendrás que borrar con seguridad el monedero o conectarlo a la red y volverlo un monedero en caliente.



