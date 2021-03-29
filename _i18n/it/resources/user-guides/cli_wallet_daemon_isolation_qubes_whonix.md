{% include disclaimer.html translated="no" translationOutdated="no" %}

With [Qubes](https://qubes-os.org) + [Whonix](https://whonix.org) you can
have a Monero wallet that is without networking and running on a virtually
isolated system from the Monero daemon which has all of its traffic forced
over [Tor](https://torproject.org).

Qubes gives the flexibility to easily create separate VMs for different
purposes. First you will create a Whonix workstation for the wallet with no
networking. Next, another Whonix workstation for the @daemon which will use
your Whonix gateway as it's NetVM. For communication between the wallet and
daemon you can make use of Qubes
[qrexec](https://www.qubes-os.org/doc/qrexec3/).

This is safer than other approaches which route the wallets rpc over a Tor
hidden service, or that use physical isolation but still have networking to
connect to the daemon. In this way you don't need any network connection on
the wallet, you preserve resources of the Tor network, and there is less
latency.

## 1. [Create Whonix AppVMs](https://www.whonix.org/wiki/Qubes/Install):

+ usare Whonix template, creare workstations come segue::

  - The first workstation will be used for your wallet, it will referred to
    as `monero-wallet-ws`. You will have `NetVM` set to `none`.

  - The second workstation will be for the `monerod` daemon, it will be
    referred to as `monerod-ws`. You will have `NetVM` set to the Whonix
    gateway `sys-whonix`. Before moving on, make sure this workstation has
    enough private storage. You can estimate how much space you need by
    checking the size of the [raw blockchain]({{ site.baseurl
    }}/downloads/#blockchain). Keep in mind that the blockchain will take up
    more space with time.

## 2. In the AppVM `monerod-ws`:

+ Create a `systemd` file.

``` user@host:~$ sudo nano /home/user/monerod.service ```

Paste the following contents:

``` [Unit] Description=Monero Full Node After=network.target

[Service] User=user Group=user

Type=forking PIDFile=/home/user/.bitmonero/monerod.pid

ExecStart=/usr/bin/monerod --detach --data-dir=/home/user/.bitmonero \
    --no-igd --pidfile=/home/user/.bitmonero/monerod.pid \
    --log-file=/home/user/.bitmonero/bitmonero.log --p2p-bind-ip=127.0.0.1

Restart=always PrivateTmp=true

[Install] WantedBy=multi-user.target ```

+ Make `monerod` daemon run on startup by editing the file
`/rw/config/rc.local`.

``` user@host:~$ sudo nano /rw/config/rc.local ```

Add these lines to the bottom:

``` cp /home/user/monerod.service /lib/systemd/system/ systemctl start
monerod.service ```

Make file executable.

``` user@host:~$ sudo chmod +x /rw/config/rc.local ```

+ Create rpc action file.

``` user@host:~$ sudo mkdir /rw/usrlocal/etc/qubes-rpc user@host:~$ sudo
nano /rw/usrlocal/etc/qubes-rpc/user.monerod ```

Add this line:

``` socat STDIO TCP:localhost:18081 ```

+ Shutdown `monerod-ws`.

## 3. In the AppVM `monero-wallet-ws`:

+ Edit the file `/rw/config/rc.local`.

``` user@host:~$ sudo nano /rw/config/rc.local ```

Add the following line to the bottom:

``` socat TCP-LISTEN:18081,fork,bind=127.0.0.1 EXEC:"qrexec-client-vm
monerod-ws user.monerod" ```

Make file executable.

``` user@host:~$ sudo chmod +x /rw/config/rc.local ```

+ Shutdown `monero-wallet-ws`.

## 4. In `dom0`:

+ Create the file `/etc/qubes-rpc/policy/user.monerod`:

``` [user@dom0 ~]$ sudo nano /etc/qubes-rpc/policy/user.monerod ```

Add the following line:

``` monero-wallet-ws monerod-ws allow ```
