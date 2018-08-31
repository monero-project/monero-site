{% assign version = '2.0.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
# Wallet/Daemon Isolation with Qubes + Whonix
With [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) you can have a Monero wallet that has no network connection, and runs on a virtually isolated system from the daemon which has all of its traffic forced over [Tor](https://torproject.org).

Qubes gives the flexibility to easily create separate VMs for different purposes. First you will create a Whonix workstation for the daemon which will use a Whonix gateway for networking. Next, another Whonix workstation for the wallet with no connection to the network. For communication between the wallet and daemon you can make use of Qubes [`qrexec`](https://www.qubes-os.org/doc/qrexec3/).

This is safer than other approaches which route the wallet's rpc over a Tor hidden service, or that use physical isolation but still have networking to connect to the daemon. In this way you don't need any network connection on the wallet, you preserve resources of the Tor network, and you incur less latency.
## Table of contents:
1. **[Create the TemplateVM and AppVMs](#1-create-templatevm-and-appvms)**
+ 1.1. [Create TemplateVM: `whonix-ws-14-monero`](#11-create-templatevm-whonix-ws-14-monero)
+ 1.2. [Create daemon's AppVM: `monerod-ws`](#12-create-daemons-appvm-monerod-ws)
+ 1.3. [Create wallet's AppVM: `monero-wallet-ws`](#13-create-wallets-appvm-monero-wallet-ws)
+ 1.4. [Create `qrexec` policy](#14-create-qrexec-policy)
2. **[Set Up the TemplateVM](#2-set-up-the-templatevm)**
+ 2.1. [Create system user](#21-create-system-user)
+ 2.2. [Create `systemd` unit](#22-create-systemd-unit)
3. **[Set Up the Daemon's AppVM](#3-set-up-the-daemons-appvm)**
+ 3.1. [Get Monero software](#31-get-monero-software)
  + 3.1.1. [Install command-line only tools](#311-install-command-line-only-tools)
  + 3.1.2. [Install GUI tools](#312-install-gui-tools)
+ 3.2. [Create `qrexec` action file](#32-create-qrexec-action-file)
4. **[Set Up the Wallet's AppVM](#4-set-up-the-wallets-appvm)**
+ 4.1. [Install wallet binaries](#41-install-wallet-binaries)
+ 4.2. [Create communication channel with daemon on boot](#42-create-communication-channel-with-daemon-on-boot)
5. **[Using the Daemon](#5-using-the-daemon)**
+ 5.1. [Control the daemon](#51-control-the-daemon)
+ 5.2. [Monitor the daemon](#52-monitor-the-daemon)
6. **[Using the Wallet](#6-using-the-wallet)**
+ 6.1. [Command-line](#61-command-line)
+ 6.2. [GUI](#62-gui)
7. **[Advanced Tips](#7-advanced-tips)**
+ 7.1. [Enable AppArmor](#71-enable-apparmor)
+ 7.2. [Enable Stagenet and Testnet Ports](#72-enable-stagenet-and-testnet-ports)
+ 7.3. [Qubes `sudo` prompt](#73-qubes-sudo-prompt)
+ 7.4. [VM hardening](#74-vm-hardening)

## 1. Create TemplateVM and AppVMs
#### Complete this section's commands in a `dom0` terminal.
### 1.1. Create TemplateVM: `whonix-ws-14-monero`
```
[user@dom0 ~]$ qvm-clone whonix-ws-14 whonix-ws-14-monero
```
### 1.2. Create daemon's AppVM: `monerod-ws`
+ Use a Whonix gateway, typically named `sys-whonix`, for networking.

```
[user@dom0 ~]$ qvm-create --label green --property netvm=sys-whonix --template whonix-ws-14-monero monerod-ws
```
+ Extend the private volume of `monerod-ws` to make space for the blockchain.

```
[user@dom0 ~]$ qvm-volume extend monerod-ws:private 70G
```
+ Enable `qvm-service`.

```
[user@dom0 ~]$ qvm-service --enable monerod-ws monerod-mainnet
```
### 1.3. Create wallet's AppVM: `monero-wallet-ws`
```
[user@dom0 ~]$ qvm-create --label green --property netvm='' --template whonix-ws-14-monero monero-wallet-ws
```
### 1.4. Create `qrexec` policy
```
[user@dom0 ~]$ sudo su -c "echo 'monero-wallet-ws monerod-ws allow' > /etc/qubes-rpc/policy/whonix.monerod-mainnet"
```
## 2. Set Up the TemplateVM
#### Complete this section's commands in a `whonix-ws-14-monero` terminal.
### 2.1. Create system user
```
user@host:~$ sudo useradd --create-home --system --user-group monerod
```
### 2.2. Create `systemd` unit
```
user@host:~$ sudo kwrite /lib/systemd/system/monerod-mainnet.service
```
+ Enter the following text and save the file.

```
[Unit]
Description=Monero Full Node Mainnet
ConditionPathExists=/var/run/qubes-service/monerod-mainnet
After=qubes-sysinit.service

[Service]
User=monerod
Group=monerod
Type=forking
PIDFile=/home/monerod/.bitmonero/monerod.pid
ExecStart=/usr/local/bin/monerod --detach --no-igd --p2p-bind-ip=127.0.0.1 \
    --pidfile=/home/monerod/.bitmonero/monerod.pid
Restart=always

[Install]
WantedBy=multi-user.target
```
+ Fix permissions.

```
user@host:~$ sudo chmod 0644 /lib/systemd/system/monerod-mainnet.service
```
+ Enable the unit.

```
user@host:~$ sudo systemctl enable monerod-mainnet.service
```
+ Shutdown `whonix-ws-14-monero`.

```
user@host:~$ sudo shutdown now
```
## 3. Set Up the Daemon's AppVM
#### Complete this section's commands in a `monerod-ws` terminal.
### 3.1. Get Monero software
This section will cover installing either the command-line only tools, or the GUI tools. There is no reason to install both because the GUI includes the command-line only tools.

Please note that the current version number changes frequently as the Monero software is upgraded. In an effort to not give outdated information, this guide will replace the current software current version number with the placeholder `<VERSION NUMBER>`.

The steps in this section will not work unless you replace `<VERSION NUMBER>` with the actual version number. You can get this information on Monero's [official site](https://getmonero.org/downloads/#linux).
### 3.1.1. Install command-line only tools
+ [`Linux, 64-bit Command-Line Tools Only`](https://downloads.getmonero.org/cli/linux64)
  + Use Monero's [guide](https://getmonero.org/resources/user-guides/verification-allos-advanced.html) to verify the software.


+ Extract the software and install the daemon binaries.

```
user@host:~$ tar xf monero-linux-x64-<VERSION NUMBER>.tar.bz2 -C ~
user@host:~$ sudo install -g staff -m 0755 -o root ~/monero-<VERSION NUMBER>/monero-blockchain-* ~/monero-<VERSION NUMBER>/monerod -t /usr/local/bin/
```
+ Copy wallet binaries to their AppVM. Enter `monero-wallet-ws` in the `dom0` prompt.

```
user@host:~$ qvm-copy ~/monero-<VERSION NUMBER>/monero-gen-trusted-multisig ~/monero-<VERSION NUMBER>/monero-wallet-*
```
### 3.1.2. Install GUI tools
+ [`Linux, 64-bit GUI`](https://downloads.getmonero.org/gui/linux64)
  + Use Monero's [guide](https://getmonero.org/resources/user-guides/verification-allos-advanced.html) to verify the software.


+ Extract the software and install the daemon binaries.

```
user@host:~$ tar xf monero-gui-linux-x64-<VERSION NUMBER>.tar.bz2 -C ~
user@host:~$ sudo install -g staff -m 0755 -o root ~/monero-gui-<VERSION NUMBER>/monero-blockchain-* ~/monero-gui-<VERSION NUMBER>/monerod -t /usr/local/bin/
```
+ Copy wallet binaries to their AppVM. Enter `monero-wallet-ws` in the `dom0` prompt.

```
user@host:~$ qvm-copy ~/monero-gui-<VERSION NUMBER>/monero-gen-trusted-multisig ~/monero-gui-<VERSION NUMBER>/monero-wallet-*
```
### 3.2. Create `qrexec` action file
```
user@host:~$ sudo mkdir -m 0755 /rw/usrlocal/etc/qubes-rpc
user@host:~$ sudo su -c "echo 'socat STDIO TCP:localhost:18081' > /rw/usrlocal/etc/qubes-rpc/whonix.monerod-mainnet"
```
+ Fix permissions.

```
user@host:~$ sudo chmod 0644 /rw/usrlocal/etc/qubes-rpc/whonix.monerod-mainnet
```
+ Shutdown `monerod-ws`.

```
user@host:~$ sudo shutdown now
```
## 4. Set Up the Wallet's AppVM
#### Complete this section's commands in a `monero-wallet-ws` terminal.
### 4.1. Install wallet binaries
```
user@host:~$ sudo install -g staff -m 0755 -o root ~/QubesIncoming/monerod-ws/monero-gen-trusted-multisig ~/QubesIncoming/monerod-ws/monero-wallet-* -t /usr/local/bin/
```
### 4.2. Create communication channel with daemon on boot
+ Edit the file `/rw/config/rc.local`.

```
user@host:~$ sudo kwrite /rw/config/rc.local
```
+ Enter the following below any existing text, and save the file.

```
socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm monerod-ws whonix.monerod-mainnet" &
```
+ Make the file executable.

```
user@host:~$ sudo chmod +x /rw/config/rc.local
```
+ Shutdown `monero-wallet-ws`.

```
user@host:~$ sudo shutdown now
```
## 5. Using the Daemon
Before using the wallet you must synchronize the blockchain on the AppVM `monerod-ws`. The initial sync can take anywhere from 5 hours to multiple days, depending on your hardware and network.

Any time you start `monerod-ws` the blockchain will begin to sync from where it last left off. At any point you can shutdown `monerod-ws` and the blockchain will safely stop at its current position.
#### Complete this section's commands in a `monerod-ws` terminal.
### 5.1. Control the daemon
+ Control the service.

```
user@host:~$ sudo systemctl stop monerod-mainnet
user@host:~$ sudo systemctl start monerod-mainnet
user@host:~$ sudo systemctl status monerod-mainnet
```
+ Issue any command to the running daemon as user `monerod`. For instance, to see the help menu:

```
user@host:~$ sudo -u monerod monerod help
```
### 5.2. Monitor the daemon
+ Check the sync status.

```
user@host:~$ sudo -u monerod monerod status
Height: 1642996/1643496 (99.9%) on mainnet, not mining, net hash 475.35 MH/s, v7, up to date, 5(out)+0(in) connections, uptime 0d 0h 0m 5s
```
+ Watch the debug log.

```
user@host:~$ sudo tail -f /home/monerod/.bitmonero/bitmonero.log
```
+ You may use your wallet when the sync status shows `100.0%`.

```
Height: 1643497/1643497 (100.0%) on mainnet, not mining, net hash 462.02 MH/s, v7, up to date, 8(out)+0(in) connections, uptime 0d 0h 6m 26s
```
+ Or when the debug log shows `SYNCHRONIZED OK`.

```
**********************************************************************
You are now synchronized with the network. You may now start monero-wallet-cli.

Use the "help" command to see the list of available commands.
**********************************************************************
2018-08-21 01:29:15.743 [P2P2]  INFO    global  src/cryptonote_protocol/cryptonote_protocol_handler.inl:1561  SYNCHRONIZED OK
```
## 6. Using the Wallet
#### Complete this section's commands in a `monero-wallet-ws` terminal.
### 6.1. Command-line
+ To create a new wallet, run `monero-wallet-cli` and follow the instructions.

```
user@host:~$ monero-wallet-cli
```
+ Get help menu from the wallet prompt.

```
[wallet 4xxxxx]: help
```
+ For more information refer to the [command-line guide](https://getmonero.org/resources/user-guides/monero-wallet-cli.html).

### 6.2. GUI
+ Launch the GUI.

```
user@host:~$ monero-wallet-gui
```
+ For more information refer to the [GUI guide](https://github.com/monero-ecosystem/monero-GUI-guide/blob/master/monero-GUI-guide.md). 

## 7. Advanced Tips
### 7.1. Enable AppArmor

+ Use the Whonix wiki for enabling AppArmor: 
  + [https://www.whonix.org/wiki/AppArmor](https://www.whonix.org/wiki/AppArmor)
  + [https://www.whonix.org/wiki/Qubes/AppArmor](https://www.whonix.org/wiki/Qubes/AppArmor)

+ Make use of experimental Monero profiles:
  + [AppArmor Pofiles](https://github.com/0xB44EFD8751077F97/apparmor-profiles/tree/master/apparmor-monero-qubes-whonix)

### 7.2. Enable Stagenet and Testnet Ports
+ [Stagenet Testnet Ports Guide](https://github.com/0xB44EFD8751077F97/guides/blob/master/qubes-whonix-guides/monero/enable-stagenet-testnet-ports.md)

### 7.3. Qubes `sudo` prompt:
+ [https://www.qubes-os.org/doc/vm-sudo/](https://www.qubes-os.org/doc/vm-sudo/)

### 7.4. VM hardening
+ [https://github.com/tasket/Qubes-VM-hardening](https://github.com/tasket/Qubes-VM-hardening)
