{% include disclaimer.html translated="yes" translationOutdated="no" %}

Restaurar un monedero desde las claves privadas es muy simple. Si cuentas
con la información necesaria, con esta guía puedes restaurar tu monedero
completamente. Nota: no necesitas tener tu contraseña para restaurar desde
claves privadas.

Necesitas tener 3 piezas de información de tu monedero, o tu archivo .keys
el cual guarda esta información y la contraseña para des-encriptar. Los 3
componentes de tu monedero que necesitas son:

1. **Dirección**
2. **Clave secreta de compra**
3. **Clave secreta de visualización**


#### CLI

Ejecuta el comando de monedero:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

A continuación, se te preguntará por la dirección, la clave de utilización y
de visualización, y finalmente una nueva contraseña para el monedero
restaurado.

Ejecutar esto con los parámetros correctos volverá a generar tus archivos de
monedero y te permitirá dar una nueva contraseña.

Si te ocurre algún problema, ejecutar `./monero-wallet-cli --help` mostrará
las opciones disponibles en tu monedero. Una vez dentro de tu monedero,
ejecuta el comando `help` listará los comandos de ayuda disponibles para ti
en tu monedero.

#### GUI

Abre `monero-wallet-gui`. Si es la primera vez que lo abres ve al siguiente
paso, de otro modo haz clic en `Cancel`:

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Haz clic en `Restaurar monedero de claves o semilla mnemónica`:

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
