{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
### Sistemas Operativos:  Ubuntu

- Descarga los [binarios oficiales](https://getmonero.org/downloads/) o compila la última fuente disponible en [Github](https://github.com/monero-project/bitmonero)

![image1](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/1.png)
![image2](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/2.png)

- Extrae los archivos con el administrador de archivos (igual que Winzip en Windows). Anota dónde se encuentran los archivos "monerod" y "monero-wallet-cli"

![image3](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/3.png)
![image4](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/4.png)

- Sólo necesitas hacer este paso una vez: abre una terminal (ctrl+alt+t) e instala las dependencias requeridas escribiendo: "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*". Cuando se pregunte, presiona la tecla Y y después Enter para continuar.

![image5](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/5.png)
![image6](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/6.png)

- Abre una terminal e ingresa la dirección donde fueron extraídos tus binarios (paso 2) escribiendo: "*cd yourPathFromStep2*"

![image7](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/7.png)

- Carga monerod escribiendo en la terminal: "*./monerod*". Espera por la sincronización con la red (monerod está actualizando la blockchain que has descargado en el paso 4 o la está descargando desde cero). Esto puede tomar mucho tiempo la primera vez, así que sé paciente.

![image8](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/8.png)
![image9](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/9.png)
![image10](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/10.png)
![image11](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/11.png)

- Una vez que monerod esté sincronizado con la red, abre una nueva terminal, cambia el directorio (paso 5), y carga monero-wallet-cli escribiendo "*./monero-wallet-cli*"

![image12](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/12.png)

- Ingresa el nombre que deseas para tu portafolio y sigue las instrucciones de la terminal

![image13](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/13.png)
![image14](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/14.png)
![image15](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/15.png)
![image16](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/16.png)

*Esta es tu llave privada. Escríbela y guárdala en un lugar seguro!*

![image17](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/17.png)

*Esta es tu llave de visualización. La necesitas para crear un monedero de solo visualización (guía de usuario asociada)*

![image18](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/18.png)

*Esta es la dirección de tu monedero*

![image19](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/19.png)
![image20](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/20.png)
![image21](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/21.png)
![image22](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/22.png)
![image23](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/23.png)

- Para salir de monerod o monero-wallet-cli sólo escribe "*exit*" en la terminal asociada

Ahora, para acceder al portafolio que acabas de crear tendrás que abrir monerod, esperar a que se sincronice con la red, abrir monero-wallet-cli y escribir el nombre de tu portafolio y tu contraseña.


