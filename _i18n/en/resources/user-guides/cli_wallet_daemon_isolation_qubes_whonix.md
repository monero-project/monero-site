{% include disclaimer.html translated="no" translationOutdated="no" %}

With [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) you can have a Monero wallet that is without networking and running on a virtually isolated system from the Monero daemon, which has all of its traffic forced over [Tor](https://torproject.org).

Qubes gives the flexibility to easily create separate VMs for different purposes. First you will create a Whonix workstation for the wallet with no networking. Next, another Whonix workstation for the @daemon which will use your Whonix gateway as it's NetVM. For communication between the wallet and daemon you can make use of Qubes [qrexec](https://www.qubes-os.org/doc/qrexec3/).

This is safer than other approaches which route the wallets rpc over a Tor hidden service, or that use physical isolation but still have networking to connect to the daemon. In this way you don't need any network connection on the wallet, you preserve resources of the Tor network, and there is less latency.

## 1. Install Monero in template(s)

The first step is to install Monero daemon and wallet in the template(s).

Monero daemon needs to be installed in a whonix-workstation template, so that all traffic is routed over Tor.

In this guide we will use the official Monero GUI Qt wallet installed in a whonix-workstation template, but any non-custodial wallet, where you can specify what node to use, should work. You can use a different template for your wallet if you want (and it might even be easier to install if the distribution used for the template contains an up-to-date version of your preferred wallet in the repositories).

### Before installation

+ Go to the template settings and change net qube from none to sys-whonix (remember to change it back to none after installation is completed!).

### Installation

+ Open a terminal in the template.

+ (Optional) update the system.

```
[template workstation user ~]% sudo apt update && sudo apt upgrade
```

+ Install wget (if not already installed)

```
[template workstation user ~]% sudo apt install wget
```

+ Download the latest Monero release.

```
[template workstation user ~]% wget 'https://downloads.getmonero.org/gui/linux64'
```

+ Extract the archive.

```
[template workstation user ~]% tar xf linux64
```

+ Install the binaries (name of the Monero folder might be different for you depending on the current Monero version).

```
[template workstation user ~]% cd monero-gui-v0.18.3.3
[template workstation user ~/monero-gui-v0.18.3.3]% sudo install extras/* monerod monero-wallet-gui /bin
```

### (Optional if you intend to use CLI wallet) Configure desktop entry for Monero GUI and icon

+ Create a desktop entry for Monero GUI wallet.

```
[template workstation user ~]% sudo nano /usr/share/applications/monero.desktop                              
```

Paste the following contents:

```
[Desktop Entry]
Name=Monero GUI
Exec=monero-wallet-gui
Type=Application
Terminal=false
Categories=Network;Qt;Finance;Office;
Icon=/usr/share/icons/monero.png
StartupNotify=true
```

+ Download Monero icon and move to the appropriate location

```
[template workstation user ~]% wget https://github.com/monero-project/monero-gui/blob/master/images/appicons/256x256.png
[template workstation user ~]% sudo mv 256x256.png /usr/share/icons/monero.png
```

### After installation

+ (Optional) Remove installation files

```
[template workstation user ~]% rm linux64                 
[template workstation user ~]% rm -rf monero-gui-v0.18.3.3 
```

+ Shutdown the template

+ Go to the template settings and change net qube back to none.

### Updating Monero

If you want to update Monero - simply follow all the steps listed in this section again, except the section about configuring the desktop entry and icon.

## 2. Create `monero-wallet-ws` and `monerod-ws` AppVMs:

We need to create two AppVMs to isolate the wallet from the daemon.

* Create `monero-wallet-ws` AppVM that will be used for Monero wallet using whonix-workstation as the template and set networking to none.

* Create `monerod-ws` AppVM that will be used for Monero daemon using whonix-workstation as the template and set networking to sys-whonix. Before moving on, make sure that this AppVM has enough private storage. At the time of writing this guide, it is recommended to allocate at least 100GB for a pruned node and at least 300GB for a full node. Keep in mind that the blockchain will take up more space with time.

## 3. Configure `monerod-ws` AppVM:

+ Open a terminal in the `monerod-ws` AppVM.

+ Create a `systemd` service file.

```
[workstation user ~]% mkdir -p ~/.config/systemd/user
[workstation user ~]% nano ~/.config/systemd/user/monerod.service
```

Paste the following contents:

```
[Unit]
Description=Monero Full Node
After=network.target

[Service]
Type=simple
PIDFile=/home/user/.bitmonero/monerod.pid

# You can add --prune-blockchain to the flags below, if you want to sync a pruned blockchain which requires less space.
ExecStart=/usr/bin/monerod --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1 \
    --non-interactive

Restart=always
PrivateTmp=true

[Install]
WantedBy=default.target
```

+ Reload systemd daemon

```
[workstation user ~]% systemctl --user daemon-reload 
```

+ Start and make `monerod` daemon run on startup by enabling the created service.

```
[workstation user ~]% systemctl --user enable --now monerod
```

## 4. Configure `dom0`:

We need to configure a policy to allow `monero-wallet-ws` AppVM to connect to `monerod-ws` AppVM using TCP port 18081.

+ Create a qubes policy:

```
[user@dom0 ~]$ sudo nano /etc/qubes/policy.d/20-monero.policy
```

Paste the following contents:

```
qubes.ConnectTCP +18081 monero-wallet-ws @default allow target=monerod-ws
```

## 5. Configure `monero-wallet-ws` AppVM:

We need to forward port 18081 from `monero-wallet-ws` AppVM to `monerod-ws` AppVM.

+ Edit the file `/rw/config/rc.local`.

```
user@host:~$ sudo nano /rw/config/rc.local
```

Add the following line to the bottom:

```
qvm-connect-tcp ::18081
```

## 6. Post setup

### (Optional) Make `monerod-ws` AppVM auto-start.

Configuring `monerod-ws` AppVM to auto-start helps to make sure that Monero daemon is always active and the blockchain is always up-to-date, so that you don't need to wait a few or more minutes before starting to use your wallet.

+ Go to settings of the `monerod-ws` AppVM and tick the box 'Start qube automatically on boot'.

### (Optional if you intend to use CLI wallet) Enable Monero GUI desktop entry

+ Go to settings of the `monero-wallet-ws` AppVM and click on the Applications tab. Click 'Refresh applications' if Monero Gui desktop entry is not available in the left panel. Click on the 'Monero GUI' application in the left panel, press '>' button, then press Apply and OK.

### Start using your Monero wallet

You are ready to start using your isolated Monero wallet now! Simply launch Monero GUI that should be available in `monero-wallet-ws` AppVM, or alternatively launch a terminal in the same AppVM and use `monero-wallet-cli` if you did not install the GUI.

During the first setup choose to use remote node, and use `127.0.0.1:18081` address.
