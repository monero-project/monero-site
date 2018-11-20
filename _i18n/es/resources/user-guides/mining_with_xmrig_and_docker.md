{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## Introducción

Esta guía es doble: facilidad de uso para minar en distribuciones Linux y algo de seguridad extra para minar, puesto que gran parte de estos mineros no han tenido auditoría de seguridad.

Al final de esta guía serás capaz de dormir un poco más tranquilo sabiendo que si el minero se ve comprometido el problema no va a migrar a tu sistema operativo.

### Por qué Docker

[Docker](https://www.docker.com/) será utilizado ya que es el más conocido y tiene mayor probabilidad de estar ya instalado.

El contenedor que se está utilizando es [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/) nombre según basado en [Alpine Linux](https://www.alpinelinux.org/).

Si estás interesado en comenzar con Docker, se cuenta con algunas referencias muy buenas.
* [Página de Docker](https://wiki.archlinux.org/index.php/Docker) en la wiki de Arch Linux.
* [Hoja de Seguridad](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf) en Container Solutions.
* [Dockerfile Howto](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images) en Digital Oceans.

Para instalación en distribuciones específicas favor de referirse a [Docker Docs](https://docs.docker.com/engine/installation/) website.

### Por qué XMRig

[XMRig](https://github.com/xmrig/xmrig) es un minero sólido. Tiene buenas salidas y estadísticas, sin interfaces web de usuario ostentosas o dependencias. XMRig pesa aproximadamente 4 MB lo que lo hace extremadamente portable.

#### Paso 1: Minando con XMRig

Ejecuta los siguientes comandos:

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### Paso 2: No hay paso 2

Ya has hecho todo lo que necesitas hacer. Ahora estás minando en un contenedor docker con XMRig. Presiona `ctrl+c` para salir del minero o sólo agrega `-d` justo después de `docker run` para minar en segundo plano.

