{% include disclaimer.html translated="no" translationOutdated="no" %}

## Steps:

1. Download the [Monero CLI]({{  site.baseurl }}/downloads/#cli).
2. Download and unzip the latest (non-GUI) version of I2P-zero: https://github.com/i2p-zero/i2p-zero/releases
3. Run I2P-zero by entering the i2p-zero unzipped directory and  typing: `router/bin/i2p-zero`
4. (optional) Find out your randomly assigned I2P port by typing: `router/bin/tunnel-control.sh router.externalPort`. For privacy reasons, do not disclose this port number to other people. Tell your firewall to forward traffic through to this port so that your I2P node is publicly reachable. If you have no ability to allow incoming connections, everything will still work, but your I2P node will not be helping the I2P network as much as it could.
5. Create a socks tunnel for outgoing I2P connections by typing: `router/bin/tunnel-control.sh socks.create 8060`
6. Create a server tunnel for incoming I2P connections by typing: `router/bin/tunnel-control.sh server.create 127.0.0.1 8061`.
7. The command above will result in an I2P address being printed to the command line, which will end with `.b32.i2p`. This is your new I2P address.
8. Run monerod by typing the following, replacing `XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p` with your own I2P address that was printed from step 6: `monerod --tx-proxy i2p,127.0.0.1:8060 --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061 --detach`

That's it! Do not replace the dsc****.b32.i2p address with yours, only replace the XXXXXXX.b32.i2p one. The dsc****.b32.i2p is a seed node that will help you discover other I2P-accessible monero nodes.

## Setting up Linux services so that monerod and I2P-zero are automatically started

If you are running Linux, it would be useful to set this all up to run automatically if the machine is ever rebooted. You can do this by creating systemd service files:

Note: take care to replace version numbers in the files below with the version numbers of monero and i2p-zero that you download. Also replace `<username>` and `<usergroup>` with your Linux user and group names (use `whoami` and `groups` commands if you don't know them).

### /etc/systemd/system/i2pzero.service

````                                                
[Unit]
Description=i2pzero
After=network.target

[Service]
Type=simple
ExecStart=/home/<username>/i2p-zero-linux.v1.17/router/bin/i2p-zero
User=<username>
Group=<usergroup>

[Install]
WantedBy=multi-user.target
````

### /etc/systemd/system/monerod.service

````
[Unit]
Description=monerod
After=network.target

[Service]
Type=forking
PIDFile=/home/<username>/monerod.pid
ExecStart=/home/<username>/monero-x86_64-linux-gnu-v0.16.0.0/monerod --tx-proxy i2p,127.0.0.1:8060 --add-peer core5hzivg4v5ttxbor4a3haja6dssksqsmiootlptnsrfsgwqqa.b32.i2p --add-peer dsc7fyzzultm7y6pmx2avu6tze3usc7d27nkbzs5qwuujplxcmzq.b32.i2p --add-peer sel36x6fibfzujwvt4hf5gxolz6kd3jpvbjqg6o3ud2xtionyl2q.b32.i2p --add-peer yht4tm2slhyue42zy5p2dn3sft2ffjjrpuy7oc2lpbhifcidml4q.b32.i2p --anonymous-inbound XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.b32.i2p,127.0.0.1:8061 --detach --pidfile /home/<username>/monerod.pid
User=<username>
Group=<usergroup>

[Install]
WantedBy=multi-user.target
````

After creating these two files, run:
````
systemctl daemon-reload
service i2pzero start
service monerod start
````

To see the output of these services, use `journalctl -u i2pzero` and `journalctl -u monerod`

## Running your own seed node (mipseed)

If you want to run your own seed node (known as a 'mipseed') to help other people discover I2P-accessible Monero nodes, follow instructions [in the i2p-zero repo](https://github.com/i2p-zero/i2p-zero/blob/master/mipseed.md).

*The original version of this guide was originally uploaded on the [i2p-zero repository](https://github.com/i2p-zero/i2p-zero/blob/master/monerod-with-i2p-zero.md).*