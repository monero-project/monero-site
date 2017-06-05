---
layout: static_page
title: "How to Run a Monero Node"
title-pre-kick: "How to Run a "
title-kick: "Monero Node"
title-post-kick: ""
kick-class: "yellow-kicks"
icon: "icon_node"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### ¿Para que usar un Full Node?
Debido a la naturaleza descentralizada y P2P (peer-to-peer) de la red monero, ésta se vuelve más robusta y resistente cuanto más crece. Es por ello que animamos a todos los usuarios a usar un full node siempre que puedan.

Llevar un node de Monero no precisa de mucha potencia de procesamiento, pero si requiere unos pocos gigabytes de espacio en el disco duro para almacenar los blockchain, habrá también un impacto de tu ancho de banda, especialmente por parte de los nodos que tengas conectados y acogidos al blockchain.

La forma más facil de tener un nodo de Monero, sin afectar el ancho de banda de tu hogar, es comprar un VPS (Servidor Virtual Privado). Recomendamos [InterServer.net](https://interserver.net/dock/vps-231552.html) usando el cupón de descuento 'MONERO' para obtener un descuento sobre el ya de por si barato VPS de 6$/mes. Usar el cupón de descuento, o nuestro link de afiliado (https://interserver.net/dock/vps-231552.html) ayudará a la financiación del desarrollo de Monero.

Monero funcionará en la gran mayoria de hardware, incluyendo ARM y sistemas 32-bits. Para preparar la ejecución/funcionamiento del nodo, descargue los binaries de Monero [from the downloads page](/downloads).

### Ejecutando el nodo.

Una vez tengas los archivos descargados y descomprimidos, no tienes que hacer más que ejecutar el daemon de Monero (monerod).

- En Windows: localizar monerod.exe en Windows Explorer y hacer doble click en él. Si se abre e inmediatamente cierra, o falla tras la ejecución, entonces tal vez quieras ejecutarlo desde la linea de comandos (CMD) para localizar el error.

- En OS X: localiza monerod en Finder y haz doble click en él. Tal y como en Windows, si se abre y cierra, o falla tras la ejecución, entonces puedes ejecutarlo desde el terminal.

- En Linux: dependiendo de si estas corriendo una version Linux de escritorio o servidor, querrás iniciar monerod en una sesión de ventana o en su propia consola.

### Asegurandonos de que nuestro nodo funciona correctamente

Cuando ejecutes monerod por primera vez, verás una pantalla parecida a la siguiente:

{:.cli-code}
2015-Feb-18 00:09:45.699104 Core initialized OK
2015-Feb-18 00:09:45.700143 Starting core RPC server\.\.\.
2015-Feb-18 00:09:45.700229 Run net_service loop( 2 threads)\.\.\.
2015-Feb-18 00:09:45.700472 [SRV_MAIN]Core RPC server started ok
2015-Feb-18 00:09:45.700543 [SRV_MAIN]Starting P2P net loop\.\.\.
2015-Feb-18 00:09:45.701066 [SRV_MAIN]Run net_service loop( 10 threads)\.\.\.
2015-Feb-18 00:09:46.702787 [P2P1]
<span style="color: yellow;">2015-Feb-18 00:09:54.923018 [P2P6][5.9.25.103:28080 OUT]Sync data returned unknown top block: 228593 -> 228609 [16 blocks (0 days) behind]
SYNCHRONIZATION started
2015-Feb-18 00:09:57.803744 [P2P1][197.242.158.240:28080 OUT]Sync data returned unknown top block: 228593 -> 228609 [16 blocks (0 days) behind]
SYNCHRONIZATION started</span>
<span style="color: lime;">2015-Feb-18 00:10:01.719800 [P2P4][197.242.158.240:28080 OUT] SYNCHRONIZED OK</span>

El texto amarillo indica que está recibiendo bloques mientras se sincroniza con el resto de la red de Monero. El texto verde "synchronized ok" aparecerá una vez que se haya sincronizado correctamente. Una vez lo veas, no hay nada mas que hacer, podemos decir que ya estas corriendo un nodo de Monero!

Para salir del nodo cuando quieras, puedes teclear "exit" en la ventana del daemon y pulsar enter, y se pagara él solito.
