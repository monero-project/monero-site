{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Sistemas operativos:  varias versiones de Linux y Windows 7, 8

### Software de monedero:  Simplewallet

#### Recursos para crear un disco booteable:  [Linux](http://www.pendrivelinux.com/),       [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

#### Recursos para binarios de Monero:  [Monero Binaries]({{ site.baseurl }}/downloads/)

- Toma cualquier computadora que tengas cerca, incluso tu estación de trabajo. Lo tendrás más fácil si usas una computadora vieja sin Wi-Fi o Bluetooth si eres particularmente paranoico

- Crea un disco booteable de Linux o Windows, y asegúrate de que tienes los binarios de Monero en el mismo disco o un segundo disco (para Linux asegura que también has descargado copias de las dependencias que necesitarás, como libboost1.55 y miniupnpc por ejemplo)

- Desconecta la conexión a la red y/o cables de internet de tu computadora, físicamente remueve la tarjeta de Wi-Fi o apaga el botón de Wi-Fi/Bluetooth en la laptop si te es posible

- Inicia tu SO booteable, instala las dependencias si es necesario

- Copia los binarios de Monero a un disco RAM (/dev/shm en Linux, ISOs de Windows booteable normalmente tienen un disco Z: o algo similar)

- No abras el daemon de Monero. En su lugar, utilizando la consola de comandos, utiliza monero-wallet-cli para crear una nueva cuenta de Monero (@account)

- Cuando se pida por un nombre, ingresa cualquier nombre, no importa realmente

- Cuando se pida una contraseña, escribe como 50 - 100 caracteres aleatorios. No te preocupes de no saber la contraseña, sólo haz que sea muy larga

- **PASO CRÍTICO**: Escribe (en papel) tu semilla mnemónica de 25 palabras (@mnemonic-seed)
**ADVERTENCIA**: Si olvidas escribir esta información tus fondos podrán perderse para siempre

- Escribe (en tu teléfono, papel, otra computadora, o donde tú quieras) tu dirección y llave de visualización

- Apaga la computadora, remueve la batería si hay alguna, y déjala físicamente apagada por algunas horas

La cuenta que acabas de crear fue creada en la RAM, y los archivos digitales ahora son inaccesibles. Si algún adversario se las arregla para de alguna forma obtener los datos, no contarán con la larga contraseña para abrirla. Si necesitas recibir pagos, cuentas con tu dirección pública, y tienes la llave de visualización por si acaso. Si necesitas acceder a tu cuenta, cuentas con la semilla mnemónica (@mnemonic-seed) de 25 palabras, y puedes escribir varias copias de ella, incluyendo una copia fuera de sitio (e.g. una caja de depósito bancaria).

Relacionado:  [Generador de cuenta offline](http://moneroaddress.org/)
