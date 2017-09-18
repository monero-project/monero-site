---
layout: static_page
title: Wallet/Daemon Isolation with Qubes + Whonix
---

With [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) we can have a Monero wallet that is without networking and running on a virtualy isolated system from the Monero daemon which has all of its traffic forced over [Tor](https://torproject.org).

Qubes gives us the flexibility to easily create separate VMs for different purposes. We first create a Whonix gateway which routes all traffic over Tor. Next a Whonix workstation for the wallet with no networking. Lastly, another Whonix workstation for the daemon which will use our Whonix gateway as it's NetVM. For communication between the wallet and daemon we will make use of Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

This is a safer approach than other guides I've seen which route the wallets rpc over a Tor hidden service, or that use physical isolation but still have networking to connect to the daemon. In this way we don't need any network connection on the wallet at all, we preserve resources of the Tor network, and there is less latency.

This is slightly less safe than having a non-networked hardware wallet.

## 1. In dom0: 

+ Create a template for the workstations, we will refer to it as `template-monero-workstation`.

```
[user@dom0~]$ qvm-clone whonix-ws template-monero-workstation
```

+ Create the file `/etc/qubes-rpc/policy/user.monerodSSH` with a text editor.

```
[user@dom0~]$ sudo nano /etc/qubes-rpc/policy/user.monerodSSH
```

Put the following lines:

```
monero-wallet-ws monerod-ws ask
$anyvm $anyvm deny
```

Save the file `/etc/qubes-rpc/policy/user.monerodSSH`.

## 2. In template `template-monero-workstation`:

+ Update, upgrade, and add packages.

```
user@template-monero-workstation:~$ sudo apt update && sudo apt dist-upgrade
user@template-monero-workstation:~$ sudo apt install git build-essential cmake pkg-config libssl-dev openssh-server
```

+ Get `boost_1_64_0` and install it.

```
user@template-monero-workstation:~$ wget https://sourceforge.net/projects/boost/files/boost/1.64.0/boost_1_64_0.tar.bz2
user@template-monero-workstation:~$ tar xvfo boost_1_64_0.tar.bz2
user@template-monero-workstation:~$ cd boost_1_64_0
user@template-monero-workstation:~/boost_1_64_0$ ./bootstrap.sh
user@template-monero-workstation:~/boost_1_64_0$ sudo ./b2
user@template-monero-workstation:~/boost_1_64_0$ sudo ./bjam install
(if successfull, it is safe to remove boost files)
user@template-monero-workstation:~$ cd /home/user/
user@template-monero-workstation:~$ rm -rf /home/user/boost_1_64_0*
```

+ Create user for running `monerod` daemon.

```
user@template-monero-workstation:~$ sudo adduser --disabled-password -q --gecos "" monerod
```

+ Edit `/etc/ssh/sshd_config`.

```
user@template-monero-workstation:~$ sudo gedit /etc/ssh/sshd_config
```

Add these lines to the bottom:

```
AuthorizedKeysFile      %h/.ssh/authorized_keys
AllowUsers monerod@127.0.0.1
ListenAddress 127.0.0.1
```

Save changes to `/etc/ssh/sshd_config`.

+ Edit `/etc/ssh/ssh_config`.

```
user@template-monero-workstation:~$ sudo gedit /etc/ssh/ssh_config
```

Add these lines to the bottom:

```
Host monerod-ws
    ProxyCommand qrexec-client-vm %h user.monerodSSH
    StrictHostKeyChecking no
```

Save changes to `/etc/ssh/ssh_config`.

+ Create `qrexec` rpc-action file. Open file `/etc/qubes-rpc/user.monerodSSH` with an editor.

```
user@template-monero-workstation:~$ sudo gedit /etc/qubes-rpc/user.monerodSSH
```

Put the following line:

```
exec socat STDIO TCP-CONNECT:localhost:22
```

Save changes to `/etc/qubes-rpc/user.monerodSSH`.

+ Create file `/lib/systemd/system/monerod.service`.

```
user@template-monero-workstation:~$ sudo gedit /lib/systemd/system/monerod.service
```

Put the following lines:

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
User=monerod
Group=monerod

Type=forking
PIDFile=/home/monerod/.bitmonero/monerod.pid
ExecStart=/usr/local/bin/monerod --detach --no-igd \
    --p2p-bind-ip=127.0.0.1 --data-dir=/home/monerod/.bitmonero \
    --pidfile=/home/monerod/.bitmonero/monerod.pid \
    --log-file=/home/monerod/.bitmonero/bitmonero.log
ExecStop=/usr/local/bin/monerod exit

Restart=always
PrivateTmp=true
TimeoutStopSec=60s
TimeoutStartSec=2s
StartLimitInterval=120s
StartLimitBurst=5

[Install]
WantedBy=multi-user.target
```

Save changes to `/lib/systemd/system/monerod.service`.

+ Shutdown `template-monero-workstation`.

## 3. Create Whonix AppVMs. 

+ First create only the gateway by [following the Whonix documentation](https://www.whonix.org/wiki/Qubes/Install), no special template is needed. We will refer to this gateway as `sys-monerod`.

+ Next, using `template-monero-workstation` as the template for each, create two workstations as follows:

  - One workstation will have `NetVM` set to `none`. This will be for the wallet, we will refer to it as `monero-wallet-ws`.

  - The second workstation will use `sys-monerod` as its `NetVM`, we will refer to it as `monerod-ws`.

## 4. In AppVM `monerod-ws`: 

+ Clone, verify, and build Monero software.

```
user@monerod-ws:~$ git clone https://github.com/monero-project/monero /home/user/monero
user@monerod-ws:~$ gpg --with-fingerprint /home/user/monero/utils/gpg_keys/fluffypony.asc
pub  2048R/0x7455C5E3C0CDCEB9 2013-04-08 Riccardo Spagni <ric@spagni.net>
      Key fingerprint = BDA6 BD70 42B7 21C4 67A9  759D 7455 C5E3 C0CD CEB9
sub  2048R/0x55432DF31CCD4FCD 2013-04-08
      Key fingerprint = 94B7 38DD 3501 32F5 ACBE  EA1D 5543 2DF3 1CCD 4FCD
user@monerod-ws:~$ gpg --import /home/user/monero/utils/gpg_keys/fluffypony.asc
user@monerod-ws:~$ cd /home/user/monero
user@monerod-ws:~/monero$ git checkout v0.11.0.0
user@monerod-ws:~/monero$ git verify-commit HEAD
(check for a good signature)
user@monerod-ws:~/monero$ make
user@monerod-ws:~/monero$ sudo cp /home/user/monero/build/release/bin/monerod /usr/local/bin/
```

+ Copy `monero-wallet-cli` executable to `monero-wallet-ws` VM.

```
user@monerod-ws:~$ qvm-copy-to-vm monero-wallet-ws /home/user/monero/build/release/bin/monero-wallet-cli
```

+ Make `monerod` daemon run on startup by editing the file `/rw/config/rc.local`.

```
user@monerod-ws:~$ sudo gedit /rw/config/rc.local
```

Add this line at the bottom:

```
systemctl start monerod
```

Make file executable.

```
user@monerod-ws:~$ sudo chmod +x /rw/config/rc.local
```

## 5. In AppVM `monero-wallet-ws`:

+ Create ssh key and copy public key to `monerod-ws` VM.

```
user@monero-wallet-ws:~$ mkdir /home/user/.ssh
user@monero-wallet-ws:~$ chmod 0700 /home/user/.ssh/
user@monero-wallet-ws:~$ ssh-keygen -t ed25519 -f /home/user/.ssh/monerodkey -q -N "" < /dev/null
user@monero-wallet-ws:~$ qvm-copy-to-vm monerod-ws /home/user/.ssh/monerodkey.pub
```

+ Edit file `/rw/config/rc.local` to create our tunnel on startup.

```
user@monero-wallet-ws:~$ sudo nano /rw/config/rc.local
```

Add the following line to the bottom:

```
sudo -u user ssh -i /home/user/.ssh/monerodkey -f -N -L 18081:127.0.0.1:18081 monerod@monerod-ws
```

Make file executable.

```
user@monero-wallet-ws:~$ sudo chmod +x /rw/config/rc.local
```

+ Move `monero-wallet-cli` file to a persistent folder in `$PATH`.

```
user@monero-wallet-ws:~$ sudo mv /home/user/QubesIncoming/monerod-ws/monero-wallet-cli /usr/local/bin/
user@monero-wallet-ws:~$ rm -rf /home/user/QubesIncoming
```

+ Shutdown `monero-wallet-ws`.

## 6. In AppVM `monerod-ws`:

+ Set up ssh keys for user `monerod`.

```
user@monerod-ws:~$ sudo mkdir /home/monerod/.ssh
user@monerod-ws:~$ sudo chmod 0700 /home/monerod/.ssh
user@monerod-ws:~$ cat /home/user/QubesIncoming/monero-wallet-ws/monerodkey.pub > /home/user/authorized_keys
user@monerod-ws:~$ chmod 0600 /home/user/authorized_keys
user@monerod-ws:~$ sudo mv /home/user/authorized_keys /home/monerod/.ssh/
user@monerod-ws:~$ sudo chown -R monerod:monerod /home/monerod/.ssh
user@monerod-ws:~$ rm -rf /home/user/QubesIncoming
```

+ Shutdown `monerod-ws`.

