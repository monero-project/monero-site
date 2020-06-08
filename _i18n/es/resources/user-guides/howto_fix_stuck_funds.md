{% include disclaimer.html translated="yes" translationOutdated="no" %}

Algunas veces, tus fondos estarán estancados - tendrás fondos bloqueados que nunca se podrán desbloquear. Esta es la forma de arreglarlo.

- Carga tu monedero en monero-wallet-cli.

- Escribe

> seed

en la consola. Escribe tu semilla de 25 palabras si aún no lo has hecho. Esta es la mejor forma de asegurar que no pierdas acceso a tus fondos.

- Cierra monero-wallet-cli escribiendo

> exit

- Respalda todos los archivos relacionados con tu monedero. Estos incluyen:

> nombredetumonedero.bin
> nombredetumonedero.bin.keys
> nombredetumonedero.bin.address.txt

Esto se logra copiando los archivos a una nueva carpeta.

Algunas veces, cuando creas un monedero, la pudiste haber llamado de alguna forma sin el final como .bin. En ese caso, el archivo del monedero será llamado nombredetumonedero sin .bin al final.

- Elimina tumonedero.bin

- Abre monero-wallet-cli, escribe el nombre del monedero que acabas de eliminar.

- Ingresa la contraseña. El monedero se actualizará y posiblemente tus fondos bloqueados estarán ahora desbloqueados.

