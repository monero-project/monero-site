{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Seleccionando una pool

Hay muchas pools para escoger, una lista está disponible en
[moneropools.com](https://moneropools.com). Minar en una pool grande puede significar
pagos más frecuentes, pero minar en una pequeña ayuda a mantener la red
descentralizada.

# Seleccionar un minero CPU

Al igual que las pools, hay muchos mineros para escoger. El que
debes elegir depende del hardware que quieras utilizar para minar. Esta guía utilizará
un minero CPU solamente, y será
[xmr-stak-cpu](https://github.com/fireice-uk/xmr-stak-cpu). Otras alternativas son
[wolf's CPUMiner](https://github.com/wolf9466/cpuminer-multi) y
[sgminer-gm](https://github.com/genesismining/sgminer-gm). No obstante, su
configuración es ligeramente distinta y no se estará cubriendo en esta guía.

## Para sistemas Windows

Si estás usando Windows, el desarrollador de xmr-stak-cpu provee los
binarios para descargar en la página de lanzamientos en
[GitHub](https://github.com/fireice-uk/xmr-stak-cpu/releases).

Descarga `xmr-stak-cpu-win64.zip` y extrae los archivos donde puedas
encontrarlos después.

## Para otros sistemas operativos

Si no estás usando Windows, tendrás que compilar xmr-stak-cpu tú mismo.
Por suerte, esto no es tan difícil como suena. Antes de que compiles el minero,
necesitarás instalar algunos prerrequisitos.

Para distros basadas en Debian:

    sudo apt-get install libmicrohttpd-dev libssl-dev cmake build-essential

Para distros basadas en Red Hat:

	sudo yum install openssl-devel cmake gcc-c++ libmicrohttpd-devel

<!-- TODO: Add dependencies for other operating systems? -->

A continuación, sólo necesitas utilizar cmake para generar los archivos de construcción, ejecutar
make y copiar el archivo de configuración:

	mkdir build-$(gcc -dumpmachine)
	cd $_
	cmake ../
	make -j$(nproc)
	cp ../config.txt bin/
	cd bin

Aún no es tiempo de celebrar, el minero necesita ser configurado. Ejecutar el minero
ahora debe dar un bloque de texto para copiar y pegar:

![image1](png/mine_to_pool/1.png)

Abre `config.txt` y *reemplaza* las dos líneas `"cpu_threads_conf"` con el texto
que acabas de copiar. Se debería ver como sigue:

![image2](png/mine_to_pool/2.png)

Desplázate hacia abajo en el archivo hasta que veas las líneas que contienen `"pool_address"`.
*Reemplaza* el contenido del segundo conjunto de comillas con la dirección y puerto de
la pool que elegiste antes. Puedes encontrar esta información en el sitio web de la pool.

Ingresa tu dirección de monedero entre las comillas en wallet_address. Puedes dejar
la contraseña en blanco a no ser que la pool especifique lo contrario.

Después de esto, tu archivo config  se deberá ver algo así:

![image3](png/mine_to_pool/3.png)

# Ejecutando el minero

**Guarda el archivo config** y ejecuta el minero.

![image4](png/mine_to_pool/4.png)

Algunas pools te permiten monitorear tu hashrate al pegar tu dirección en su
sitio web. También puedes monitorear tu hashrate presionando la tecla `h`.

# Optimizando el minero

Es posible que veas mensajes desagradables como este:

	[2017-07-09 12:04:02] : MEMORY ALLOC FAILED: mmap failed

Esto significa que puedes obtener alrededor de un 20% extra de hashrate activando las páginas grandes.

## Páginas grandes en Linux

En primer lugar, detén el minero (si está en ejecución), y ejecuta los siguientes comandos para activar las
páginas grandes e iniciar el minero como root:

	sudo sysctl -w vm.nr_hugepages=128
	sudo ./xmr-stak-cpu

## Páginas grandes en Windows

Tomado de `config.txt`:

>Por defecto trataremos de asignar páginas grandes. Esto significa que necesitas "Ejecutar como Administrador" en Windows.
Necesitas editar las políticas de grupo del sistema para habilitar el bloqueo de páginas grandes. Aquí están los pasos de MSDN
1. En el menú de inicio, haz clic en Ejecutar. En la ventana abierta, escribe gpedit.msc.
2. En la consola de Editor de directivas de grupo local, expande Configuración del equipo, y luego expande Configuración de Windows.
3. Expande Configuración de seguridad, y luego expande Directivas locales.
4. Selecciona la carpeta Asignación de derechos de usuario.
5. Las políticas serán mostradas en el panel de detalles.
6. En el panel, haz doble clic en Bloquear páginas en la memoria.
7. En la pestaña Configuración de seguridad local, haz clic en Agregar usuario o grupo.
8. En el cuadro de dialogo Seleccionar Usuarios, Cuentas de Servicio o Grupos, agrega una cuenta con la que vas a ejecutar el minero.
9. Reinicia para que el cambio haga efecto.
