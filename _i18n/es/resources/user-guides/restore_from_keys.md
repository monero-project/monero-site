{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
### Restaurar desde claves

Restaurar un monedero desde las claves privadas es muy simple. Si cuentas con la información necesaria, con esta guía puedes restaurar tu monedero completamente. Nota: no necesitas tener tu contraseña para restaurar desde claves privadas.

Necesitas tener 3 piezas de información de tu monedero, o tu archivo .keys el cual guarda esta información y la contraseña para des-encriptar. Los 3 componentes de tu monedero que necesitas son:

1. **Dirección**
2. **Clave secreta de compra**
3. **Clave secreta de visualización**


#### CLI

Corre el comando de monedero:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

A continuación, se te preguntará por la dirección, la clave de utilización y de visualización, y finalmente una nueva contraseña para el monedero restaurado.

Correr esto con los parámetros correctos volverá a generar tus archivos de monedero y te permitirá dar una nueva contraseña.

Si te ocurre algún problema, correr `./monero-wallet-cli --help` mostrará las opciones disponibles en tu monedero. Una vez dentro de tu monedero, correr el comando `help` listará los comandos de ayuda disponibles para ti en tu monedero.

#### GUI

Abre `monero-wallet-gui`. Si es la primera vez que lo abres ve al siguiente paso, de otro modo haz clic en `Cancel`:

![cancel opening](png/restore_from_keys/cancel-opening.png)

Selecciona el lenguaje apropiado `Español`:

![choose language](png/restore_from_keys/choose-language.png)

Haz clic en `Restaurar monedero de claves o semilla mnemónica`:

![choose restore](png/restore_from_keys/choose-restore.png)

Selecciona `Restaurar desde claves`, da a tu monedero un nombre y la ubicación de guardado, y llena  `Dirección de cuenta (pública)`, `Clave de visualización (privada)` & `Clave de utilizacicón (privada)`. Opcionalmente, especifica la `Altura de restauración (opcional)` para evitar escaneo de bloques viejos. Ahora haz clic en la flecha de `Siguiente`:

![restore wallet](png/restore_from_keys/restore-wallet.png)

En la página siguiente, da a tu monedero una contraseña fuerte y confírmala antes de hacer clic en la flecha de `Siguiente`:

![wallet password](png/restore_from_keys/wallet-password.png)

Especifica las configuraciones del daemon y haz clic en la flecha de `Siguiente`:

![daemon settings](png/restore_from_keys/daemon-settings.png)

Haz clic en `USAR MONERO` para disfrutar de tu monedero restaurado:

![all set up](png/restore_from_keys/all-set-up.png)
