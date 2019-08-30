{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
With [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) you can have a Monero wallet that is without networking and running on a virtually isolated system from the Monero daemon which has all of its traffic forced over [Tor](https://torproject.org).

Qubes gives the flexibility to easily create separate VMs for different purposes. First you will create a Whonix workstation for the wallet with no networking. Next, another Whonix workstation for the daemon which will use your Whonix gateway as it's NetVM. For communication between the wallet and daemon you can make use of Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

This is safer than other approaches which route the wallets rpc over a Tor hidden service, or that use physical isolation but still have networking to connect to the daemon. In this way you don't need any network connection on the wallet, you preserve resources of the Tor network, and there is less latency.


## 1. [Create Whonix AppVMs](https://www.whonix.org/wiki/Qubes/Install):

+ Using a Whonix workstation template, create two workstations as follows:

  - The first workstation will be used for your wallet, it will referred to as `monero-wallet-ws`. You will have `NetVM` set to `none`.

  - The second workstation will be for the `monerod` daemon, it will be referred to as `monerod-ws`. You will have `NetVM` set to the Whonix gateway `sys-whonix`.

## 2. In the AppVM `monerod-ws`:

+ Download, verify, and install Monero software.

```
user@host:~$ curl -O "https://downloads.getmonero.org/cli/monero-linux-x64-v0.11.1.0.tar.bz2" -O "https://getmonero.org/downloads/hashes.txt"
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
+ Create a `systemd` file.

```
user@host:~$ sudo gedit /home/user/monerod.service
```

Paste the following contents:

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

+ Copy `monero-wallet-cli` executable to the `monero-wallet-ws` VM.

```
user@host:~$ qvm-copy-to-vm monero-wallet-ws monero-v0.11.1.0/monero-wallet-cli
```

+ Make `monerod` daemon run on startup by editing the file `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Add these lines to the bottom:

```
cp /home/user/monerod.service /lib/systemd/system/
systemctl start monerod.service
```

Make file executable.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Create rpc action file.

```
user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo gedit /rw/usrlocal/etc/qubes-rpc/user.monerod
```

Add this line:

```
socat STDIO TCP:localhost:18081
```

+ Shutdown `monerod-ws`.

## 3. In the AppVM `monero-wallet-ws`:

+ Move the `monero-wallet-cli` executable.

```
user@host:~$ sudo mv QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
```

+ Edit the file `/rw/config/rc.local`.

```
user@host:~$ sudo gedit /rw/config/rc.local
```

Add the following line to the bottom:

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws user.monerod"
```

Make file executable.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```

+ Shutdown `monero-wallet-ws`.

## 4. In `dom0`:

+ Create the file `/etc/qubes-rpc/policy/user.monerod`:

```
[user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod
```

Add the following line:

```
monero-wallet-ws monerod-ws allow
```
