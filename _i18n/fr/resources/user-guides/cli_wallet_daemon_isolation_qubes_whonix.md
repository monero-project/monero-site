{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Isolation du Portefeuille CLI et du Démon avec Qubes et Whonix

Avec [Qubes](https://qubes-os.org) et [Whonix](https://whonix.org) vous pouvez disposer d'un portefeuille Monero hors connexion fonctionnant sur un système virtuel isolé du démon Monero dont tout le trafic est forcé à passer à travers [Tor](https://torproject.org).

Qubes permet de créer facilement des machines virtuelles pour différents besoins. Tout d'abord, vous crérez une station de travail Whonix sans réseau pour le portefeuille. Ensuite, une seconde station de travail Whonix pour le démon qui utilisera votre passerelle Whonix comme réseau de machine virtuelle. La communication dentre le portefeuille et le démon pourra être réalisée en utilisant Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

Il s'agit d'une approche plus sûre que d'autres solutions routant les appels de procédure distantes du portefeuille à travers un service Tor caché, ou utilisant une isolation physique mais disposant toujours du réseau pour le raccordement au démon. De cette manière vou sn'avez besoin d'aucune connectivité réseau sur le portefeuille, vous préserver les ressources du réseau Tor et vous minimisez la latence.


## 1. [Créer une machine virtuelle applicative Whonix](https://www.whonix.org/wiki/Qubes/Install):

+ En utilisant un modèle Whonix de station de travail, créez deux stations de travail comme suit :

  - La première station de travail sera utilisé pour le portefeuille, on s'y réfèrera en tant que `monero-wallet-ws`. Vous aurez `NetVM` définit à `none`.

  - La seconde station de travail sera pour le démon `monerod`, on s'y réfèrera en tant que `monerod-ws`. Vous aurez `NetVM` définit sur la passerelle Whonix `sys-whonix`.

## 2. Dans la machine virtuelle applicative `monerod-ws`:

+ Télécharger, vérifier et installer l'application Monero.

```
user@host:~$ curl -O "https://downloads.getmonero.org/cli/monero-linux-x64-v0.11.1.0.tar.bz2" -O "{{ site.baseurl }}/downloads/hashes.txt"
user@host:~$ gpg --recv-keys BDA6BD7042B721C467A9759D7455C5E3C0CDCEB9
user@host:~$ gpg --verify hashes.txt
gpg: Signature made Wed 01 Nov 2017 10:01:41 AM UTC
gpg:                using RSA key 0x55432DF31CCD4FCD
gpg: Good signature from "Riccardo Spagni <ric@spagni.net>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
     Subkey fingerprint: 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
user@host:~$ echo '6581506f8a030d8d50b38744ba7144f2765c9028d18d990beb316e13655ab248  monero-linux-x64-v0.11.1.0.tar.bz2' | shasum -c
monero-linux-x64-v0.11.1.0.tar.bz2: OK
user@host:~$ tar xf monero-linux-x64-v0.11.1.0.tar.bz2
user@host:~$ sudo cp monero-v0.11.1.0/monerod /usr/local/bin/
```
+ Créez un fichier `systemd`.

```
user@host:~$ sudo gedit /home/user/monerod.service
```

Collez-y le contenu suivant :

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
User=user
Group=user

Type=forking
PIDFile=/home/user/.bitmonero/monerod.pid

ExecStart=/usr/local/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

+ Copiez l'exécutable `monero-wallet-cli` dans la VM `monero-wallet-ws`.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
```

+ Configurez le lancement du démon `monerod` au démarrage en éditant le fichier `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Ajoutez les lignes suivantes à la fin du fichier :

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Rendez le fichier exécutable.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Créez le fichier d'action d'appel de procédure distante.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo gedit /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Ajoutez cette ligne :

```
socat STDIO TCP:localhost:18081
```

+ Éteignez `monerod-ws`.

## 3. Dans la machine virtuelle applicative `monero-wallet-ws`:

+ Déplacez l'exécutable `monero-wallet-cli`.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

+ Éditez le fichier `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Ajoutez-y la ligne suivante à la fin :

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Rendez le fichier exécutable.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Éteignez `monero-wallet-ws`.

## 4. Dans `dom0`:

+ Créez le fichier `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Ajoutez la ligne suivante :

```
monero-wallet-ws monerod-ws allow
```
