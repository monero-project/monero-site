{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Tabla de Contenido

* [Windows](#windows)
* [Mac OS X](#mac-os-x)
* [Linux](#linux)
* [Notas finales](#notas-finales)

### Windows

Primero necesitamos asegurarnos de estar suficientemente preparados. Esto implica lo siguiente:

- Esta guía asume que ya has inicializado tu monedero Ledger y asimismo generado tu semilla mnemónica de 24 palabras.

- Necesitas ejecutar / usar monero-wallet-cli v0.12.2.0, que puede encontrarse <a href="{{site.baseurl}}/downloads/">aquí</a>.

- Necesitas instalar la aplicación Ledger Monero y configurar tu sistema. Las instrucciones se pueden encontrar [aquí](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (secciones 3.1.1 y 3.2.3 en particular). Adicionalmente, asegúrate de tener la red en `Mainnet` (red principal).

- Tu Ledger necesita estar conectada y la aplicación Ledger Monero debe estar en ejecución.

- `monerod.exe` debe estar en ejecución y sincronizado totalmente o debes conectarte a un nodo remoto.

Ahora que estamos lo suficientemente preparados, ¡comencemos!

- Ve al directorio / carpeta donde se encuentra monerod.exe y monero-wallet-cli.exe.

- Abre una nueva consola de comandos / powershell. Esto se logra asegurando que el cursor no se encuentra en ningún archivo y presionando en SHIFT + click derecho. Se te dará una opción de "Abrir una consola de comandos aquí". Si estás utilizando Windows 10 en su última versión, se te dará una opción de "Abrir una ventana de PowerShell aquí".

- Ahora escribe:

`monero-wallet-cli.exe --generate-from-device <nuevo-nombre-de-monedero> --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device <nuevo-nombre-de-monedero> --subaddress-lookahead 3:200` (Win 10)

Ten en cuenta que es simplemente un marcador para el nombre actual del monedero. Si, por ejemplo, deseas llamar a tu monedero `MoneroWallet`, el comando sería como se muestra a continuación:

`monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 10)

- monero-wallet-cli te preguntará, después de ejecutar el comando anterior, por una contraseña. Asegúrate de establecer una contraseña fuerte y de confirmarla después de ello.

- Ledger preguntará si deseas exportar la clave privada o no. Primero y ante todo, tus fondos no pueden ser comprometidos con simplemente tu clave privada de visualización. Exportar la clave privada de visualización permite al cliente (en el ordenador - Monero v0.12.2.0) escanear bloques en busca de transacciones pertenecientes a tu monedero / dirección. Si esta opción no es utilizada, el dispositivo (Ledger) escaneará bloques, lo que será significativamente más lento. Sin embargo, hay una advertencia. Si tu sistema se ve comprometido, el adversario será potencialmente capaz de también comprometer tu clave privada, lo que es perjudicial para tu privacidad. Esto es virtualmente imposible cuando la clave privada no es exportada.

- Tendrás que hacer clic en confirmar dos veces antes de proceder.

- Tu monedero Ledger Monero será ahora generado. Ten en cuenta que esto puede tomar de 5 a 10 minutos. Además, no habrá realimentación inmediata en monero-wallet-cli o en la Ledger.

- `monero-wallet-cli` comenzará a refrescarse. Espera a que se haya refrescado totalmente.

Felicidades, ahora puedes utilizar tu monedero Ledger Monero en conjunto con monero-wallet-cli.

### Mac OS X

Primero necesitamos asegurarnos de estar suficientemente preparados. Esto implica lo siguiente:

- Esta guía asume que ya has inicializado tu monedero Ledger y asimismo generado tu semilla mnemónica de 24 palabras.

- Necesitas ejecutar / usar monero-wallet-cli v0.12.2.0, que puede encontrarse <a href="{{site.baseurl}}/downloads/">aquí</a>.

- Necesitas instalar la aplicación Ledger Monero y configurar tu sistema. Las instrucciones se pueden encontrar [aquí](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (secciones --1 y --2 en particular). Adicionalmente, asegúrate de tener la red en `Mainnet` (red principal).

- Ten en cuenta que las instrucciones para la configuración del sistema (sección --2) en Mac OS X están bastante elaboradas y pueden ser percibidas como ligeramente complejas. Afortunadamente, tficharmers ha creado una guía [aquí](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in) que puedes utilizar para asistencia.

- Tu Ledger necesita estar conectada y la aplicación Ledger Monero debe estar en ejecución.

- `monerod` debe estar en ejecución y sincronizado totalmente o debes conectarte a un nodo remoto.

Ahora que estamos lo suficientemente preparados, ¡comencemos!

- Utiliza el buscador para localizar el directorio / carpeta en donde se encuentra `monero-wallet-cli` (CLI v0.12.2.0).

- Ve a tu escritorio.

- Abre una nueva terminal (si no sabes cómo abrir una terminal, ve [aquí](https://apple.stackexchange.com/a/256263)).

- Arrastra `monero-wallet-cli` a la terminal. Debería agregar la dirección completa a la terminal. No presiones Enter.

- Ahora escribe:

`--generate-from-device <nuevo-nombre-de-monedero> --subaddress-lookahead 3:200`

Ten en cuenta que es simplemente un marcador para el nombre actual del monedero. Si, por ejemplo, deseas llamar a tu monedero `MoneroWallet`, el comando sería como se muestra a continuación:

`--generate-from-device MoneroWallet --subaddress-lookahead 3:200`

Ten en cuenta que el texto anteriormente mencionado se adjuntará a la dirección de `monero-wallet-cli`. Así, antes de que presiones Enter, tu terminal se debería ver como:

`/dirección/completa/de/monero-wallet-cli --generate-from-device <nuevo-nombre-de-monedero> --subaddress-lookahead 3:200`

Donde la dirección completa es, intuitivamente, la dirección actual en tu Mac OS X.

- monero-wallet-cli te preguntará después de ejecutar el comando anterior por una contraseña. Asegúrate de establecer una contraseña fuerte y de confirmarla después de ello.

- Ledger preguntará si deseas exportar la clave privada o no. Primero y ante todo, tus fondos no pueden ser comprometidos con simplemente tu clave privada de visualización. Exportar la clave privada de visualización permite al cliente (en el ordenador - Monero v0.12.2.0) escanear bloques en busca de transacciones pertenecientes a tu monedero / dirección. Si esta opción no es utilizada, el dispositivo (Ledger) escaneará bloques, lo que será significativamente más lento. Sin embargo, hay una advertencia. Si tu sistema se ve comprometido, el adversario será potencialmente capaz de también comprometer tu clave privada, lo que es perjudicial para tu privacidad. Esto es virtualmente imposible cuando la clave privada no es exportada.

- Tendrás que hacer clic en confirmar dos veces antes de proceder.

- Tu monedero Ledger Monero será ahora generado. Ten en cuenta que esto puede tomar de 5 a 10 minutos. Además, no habrá realimentación inmediata en monero-wallet-cli o en la Ledger.

- `monero-wallet-cli` comenzará a refrescarse. Espera a que se haya refrescado totalmente.

- Felicidades, ahora puedes utilizar tu monedero Ledger Monero en conjunto con monero-wallet-cli.

### Linux

Primero necesitamos asegurarnos de estar suficientemente preparados. Esto implica lo siguiente:

- Esta guía asume que ya has inicializado tu monedero Ledger y asimismo generado tu semilla mnemónica de 24 palabras.

- Necesitas ejecutar / usar monero-wallet-cli v0.12.2.0, que puede encontrarse <a href="{{site.baseurl}}/downloads/">aquí</a>.

- Necesitas instalar la aplicación Ledger Monero y configurar tu sistema. Las instrucciones se pueden encontrar [aquí](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (secciones --1 y --1 en particular). Adicionalmente, asegúrate de tener la red en `Mainnet` (red principal).

- Tu Ledger necesita estar conectada y la aplicación Ledger Monero debe estar en ejecución.

- `monerod` debe estar en ejecución y sincronizado totalmente o debes conectarte a un nodo remoto.

Ahora que estamos lo suficientemente preparados, ¡comencemos!

- Ve al directorio / carpeta donde se encuentra monero-wallet-cli y monerod.

- Abre una nueva terminal

- Ahora escribe:

`./monero-wallet-cli --generate-from-device <nuevo-nombre-de-monedero> --subaddress-lookahead 3:200`

Ten en cuenta que es simplemente un marcador para el nombre actual del monedero. Si, por ejemplo, deseas llamar a tu monedero `MoneroWallet`, el comando sería como se muestra a continuación:

`./monero-wallet-cli --generate-from-device MoneroWallet --subaddress-lookahead 3:200`

- monero-wallet-cli te preguntará, después de ejecutar el comando anterior, por una contraseña. Asegúrate de establecer una contraseña fuerte y de confirmarla después de ello.

- Ledger preguntará si deseas exportar la clave privada o no. Primero y ante todo, tus fondos no pueden ser comprometidos con simplemente tu clave privada de visualización. Exportar la clave privada de visualización permite al cliente (en el ordenador - Monero v0.12.2.0) escanear bloques en busca de transacciones pertenecientes a tu monedero / dirección. Si esta opción no es utilizada, el dispositivo (Ledger) escaneará bloques, lo que será significativamente más lento. Sin embargo, hay una advertencia. Si tu sistema se ve comprometido, el adversario será potencialmente capaz de también comprometer tu clave privada, lo que es perjudicial para tu privacidad. Esto es virtualmente imposible cuando la clave privada no es exportada.

- Tendrás que hacer clic en confirmar dos veces antes de proceder.

- Tu monedero Ledger Monero será ahora generado. Ten en cuenta que esto puede tomar de 5 a 10 minutos. Además, no habrá realimentación inmediata en monero-wallet-cli o en la Ledger.

- `monero-wallet-cli` comenzará a refrescarse. Espera a que se haya refrescado totalmente.

Felicidades, ahora puedes utilizar tu monedero Ledger Monero en conjunto con monero-wallet-cli.

### Notas finales

- Recomendamos fuertemente probar el proceso completo primero. Esto es, enviar una pequeña cantidad al monedero y después restaurarlo (utilizando la guía ya mencionada) para verificar que puedes recuperar el monedero. Ten en cuenta que, al recrear / restaurar el monedero, deberás adjuntar el marcador `--restore-height` (con una altura de bloque anterior a la altura de tu primera transacción al monedero) al comando en el paso 3 (Windows), paso 5 (Mac OS X), o paso 3 (Linux). Más información acerca de la altura de restauración y cómo aproximarla puede encontrarse [aquí](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

- Si utilizar un nodo remoto, adjunta el marcador `--daemon-address host:port` al comando en el paso 3 (Windows), paso 5 (Mac OS X), o paso 3 (Linux).

- Si lo deseas, puedes ajustar el valor de `--subaddress-lookahead`. El primer valor es el número de cuentas y el segundo valor es el número de subdirecciones por cuenta. Así, si por ejemplo deseas pre-generar 5 cuentas con 100 subdirecciones cada una, utiliza `--subaddress-lookahead 5:100`. Ten en mente que, entre más subdirecciones pre-generes, más tiempo le tomará a la Ledger el crear tu monedero.

- Sólo tienes que utilizar el marcador `--generate-from-device` una vez (e.g. sobre creación de monedero). Después de eso, básicamente lo utilizarás de manera similar a como normalmente utilizas la consola de comandos. Esto es:
   - Asegúrate de que tu Ledger está conectada y la aplicación Monero está en ejecución.
   - Abre `monero-wallet-cli`.
   - Ingresa el nombre de tu monedero Ledger Monero.
   - Ingresa la contraseña para abrir el monedero.

   Si los archivos del monedero Ledger no se encuentran en la misma dirección que `monero-wallet-cli`, debes abrir `monero-wallet-cli` con el marcador `--wallet-file /path/to/wallet.keys/file`. De manera alternativa, puedes copiar los archivos del monedero Ledger al mismo directorio de `monero-wallet-cli`.

- Si tienes más preguntas o necesitas asistencia, por favor deja un comentario en la respuesta original en [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli).
