{% include disclaimer.html translated="no" translationOutdated="no" %}

Below we'll show an example configuration that allows you to run a Monero @daemon (eg on a home server or VPS) that you can connect to from another computer running your wallet.  We do this over the Tor anonymity network to retrieve the transaction information needed by your wallet.  The benefit of this approach is that the daemon (`monerod`) can stay on all of the time sending / receiving blocks, while the wallet can connect when needed and have access to the full blockchain. [Monerujo](https://www.monerujo.io/) should also work via [Orbot](https://guardianproject.info/apps/org.torproject.android/).  Because Tor hidden services provide encryption and authentication, you can be confident that your RPC credentials will not be sent in the clear.  Tor also solves problems often seen on home servers related to port-forwarding, IP addresses changing, etc -- it just works.  This setup will also obfuscate the fact that you are connecting to a remote Monero node. Tested with Monero `v0.15.0.1` connecting a Mac laptop wallet to a remote Linux node (Ubuntu 18.04.2).

## Create a Tor hidden service for RPC

Make sure [Tor is installed](https://community.torproject.org/relay/setup/bridge/debian-ubuntu/) and running correctly, then proceed.

We only need to configure the RPC server to run as a hidden service here on port `18081`.

File: `/etc/torrc`

```
HiddenServiceDir /var/lib/tor/monero-service/
HiddenServicePort 18081 127.0.0.1:18081
```
Restart Tor:
```
sudo systemctl restart tor@default
```

Make sure Tor started correctly:
```
sudo systemctl status tor@default.service
```

If everything looks good, make a note of the hidden service (onion address) name:
```
sudo cat /var/lib/tor/monero-service/hostname
```
It will be something like 4dcj312uxag2r6ye.onion -- use this for `HIDDEN_SERVICE` below.

### Configure Daemon to allow RPC

In this example, we don't use Tor for interacting with the p2p network, just to connect to the monero node, so only RPC hidden service is needed.

File: `~/.bitmonero/bitmonero.conf` (in the home directory of the Monero user)

```
no-igd=1
restricted-rpc=1
rpc-login=USERNAME:PASSWORD
```
(Make up a USERNAME and PASSWORD to use for RPC)

Restart the Daemon: `monerod stop_daemon; sleep 10; monerod --detach`

Make sure the daemon started correctly:
```
tail -f ~/.bitmonero/bitmonero.log
```

## Connecting to your node from a local wallet

Make sure you have Tor running locally so you can connect to the Tor network. One simple way on the Mac is to just start the Tor browser and use its Tor daemon.

Then test a simple RPC command, eg:
```
curl --socks5-hostname 127.0.0.1:9150 -u USERNAME:PASSWORD --digest -X POST http://HIDDEN_SERVICE.onion:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```
Replace `USERNAME`, `PASSWORD`, and `HIDDEN_SERVICE` with values from above.  Change `9150` to another port if needed by your local Tor daemon.

When you execute the command, you should get some info about the remote daemon if everything is working correctly.  If not, add a ` -v ` to the beginning and try to debug why it's not connecting, check firewalls, password, etc.

Once it is working, you can connect using your cli wallet:
```
./monero-wallet-cli --proxy 127.0.0.1:9150 --daemon-host HIDDEN_SERVICE.onion --trusted-daemon --daemon-login USERNAME:PASSWORD --wallet-file ~/PATH/TO/YOUR/WALLET
```
Replace values above as needed.

## GUI

If you are interested in experimenting with the GUI over Tor, you can try `torsocks` (note this may leak info -- do not rely on it if your life depends on maintaining anonymity).  Here is an example on MacOS, adjust as needed for the Linux GUI:
```
torsocks --port 9150 /Applications/monero-wallet-gui.app/Contents/MacOS/monero-wallet-gui
```

This will allow the GUI to communicate with the Tor network.  Once the GUI is open and a wallet loaded, you must configure it to connect to your Tor hidden service by adding your onion address to:  "Settings > Node > Remote node > Address".

In future versions of the GUI, we expect to add direct Tor / I2P support so that `torsocks` + commandline are not needed.

# Additional resources

* [ANONYMITY_NETWORKS.md](https://github.com/monero-project/monero/blob/master/ANONYMITY_NETWORKS.md)
* [Using Tor](https://github.com/monero-project/monero#using-tor) (Monero README)
