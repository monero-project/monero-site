{% include disclaimer.html translated="yes" translationOutdated="no" %}

# CLI-Wallet-/Hintergrunddienstisolierung mit Qubes + Whonix

Mit [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) ist es möglich, ein nicht vernetztes Wallet in einem System zu betreiben, welches quasi vom Hintergrunddienst isoliert ist und seinen Datenverkehr über [Tor](https://torproject.org/de/) laufen lässt.

Qubes ermöglicht es, flexibel und einfach separate VMs für unterschiedliche Zwecke zu erstellen. Zunächst erstellst du eine Whonix-Workstation für das nicht vernetzte Wallet. Als Nächstes eine weitere Whonix-Workstation für den Hintergrunddienst, der dein Whonix-Gateway als seine NetVM nutzt. Zur Kommunikation zwischen Wallet und Hintergrunddienst kannst du Qubes' [Qrexec](https://www.qubes-os.org/doc/qrexec3/) nutzen.

Dies ist sicherer als andere Methoden, die etwa den RPC des Wallets durch einen durch Tor verborgenen Service leiten oder physisch isoliert sind, aber dennoch im Netzbetrieb sind, um zum Hintergrunddienst zu verbinden. Du benötigst auf diese Weise keine Netzwerkverbindung für dein Wallet, du schützt die Ressourcen des Tor-Netzwerks und es gibt weniger Verzögerung.

## 1. [Erstellen von Whonix-AppVMs](https://www.whonix.org/wiki/Qubes/Install):

+ Erstelle unter Verwendung einer Whonix-Workstation-Vorlage zwei Workstations auf die folgende Weise:

  - Die erste Workstation wird für dein Wallet genutzt und als `monero-wallet-ws` bezeichnet. `NetVM` wird hier auf `none` festgelegt.

  - Die zweite Workstation wird für den Hintergrunddienst `monerod` verwendet und als `monerod-ws` bezeichnet. `NetVM` ist in diesem Fall auf das Whonix-Gateway `sys-whonix` festgelegt. Stelle vor dem Fortfahren sicher, dass diese Workstation ausreichend privaten Speicher hat. Wie viel Speicher du benötigen wirst, kannst du schätzen, indem du die Größe der ["rohen" Blockchain]({{ site.baseurl }}/downloads/#blockchain) überprüfst. Behalte im Hinterkopf, dass die Blockchain mit der Zeit mehr Platz einnehmen wird.

## 2. In der AppVM `monerod-ws`:

+ Monero-Software herunterladen, verifizieren und installieren.

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
+ Erstelle eine `systemd`-Datei.

```
user@host:~$ sudo nano /home/user/monerod.service
```

Füge die folgenden Inhalte ein:

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
User=user
Group=user

Type=forking
PIDFile=/home/user/.bitmonero/monerod.pid

ExecStart=/usr/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

+ Kopiere die `monero-wallet-cli`-Programmdatei in die `monero-wallet-ws`-VM.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
```

+ Stelle durch Abändern der Datei `/rw/config/rc.local` ein, dass der `monerod`-Hintergrunddienst bei Systemstart ausgeführt wird.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Füge die folgenden Zeilen am unteren Ende hinzu:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Mache die Datei lauffähig.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Erstelle eine RPC-Action-File.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo nano /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Füge folgende Zeile hinzu:

```
socat STDIO TCP:localhost:18081
```

+ Fahre `monerod-ws` herunter.

## 3. In der AppVM `monero-wallet-ws`:

+ Verschiebe die `monero-wallet-cli`-Programmdatei.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

+ Bearbeite die Datei `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Füge folgende Zeilen am unteren Ende hinzu:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Mache die Datei lauffähig.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Fahre `monero-wallet-ws` herunter.

## 4. In `dom0`:

+ Erstelle die Datei `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Füge die folgende Zeile hinzu:

```
monero-wallet-ws monerod-ws allow
```
