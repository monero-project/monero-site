{% include disclaimer.html translated="no" translationOutdated="no" %}

## Check if your wallet is in advanced mode

To use a custom remote node, your wallet must be in advanced mode. Simple mode and Simple mode (bootstrap) don't support this feature.

To check if your wallet is in advanced mode, go to `Settings` > `Info` and see `Wallet mode`.

If your wallet is not in Advanced mode, you will have to change it to Advanced mode (see next step).

If your wallet is already in Advanced mode, you can skip the next step.

![Wallet mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.avif){:width="600px"}

## Change your wallet to advanced mode

If your wallet is open, you need to close it first. Go to `Settings` > `Wallet` > `Close this wallet`

![Close Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.avif){:width="600px"}

The main menu (`Welcome to Monero` screen) will open. At the bottom left, click on `Change wallet mode` button, and on the next page select `Advanced mode`. Next, open your wallet file again.

![Change Wallet Mode](/img/resources/user-guides/en/remote_node/change_wallet_mode.avif){:width="600px"}

![Advanced Mode](/img/resources/user-guides/en/remote_node/advanced_mode.avif){:width="600px"}

## Finding a remote node

First, you will need to find a node to connect to.

It is important to note that there are publicly advertised remote nodes which are run by malicious actors with the sole purpose of deanonymizing users.

It is highly recommended that you either A) Run your own node, or B) Use a Trusted remote node - one that is controlled by someone that you trust.

Though highly discouraged, you may opt to use an untrusted remote node. To maximize privacy, Tor or I2P nodes are preferred. The website [monero.fail](https://monero.fail) has a list of such nodes.

## Configuring your wallet to connect to a custom remote node

When opening your wallet, a pop up will appear with the option `Use custom settings`. Click on it, and you will be sent to `Settings` > `Node` page. 

If you don't see this pop up, go to `Settings` > `Node` page.

![Configure Remote Node](/img/resources/user-guides/en/remote_node/remote_node_config.avif){:width="600px"}

On the following page, select `Remote Node`.

In the `Address` field you will enter the address (or IP) of the node that you want to connect to, and in `Port` field you will enter the port of the node.

Example: If a node is listed as `node.getmonero.org:18089`, the address is `node.getmonero.org` and the port is `18089`. Note: `node.getmonero.org:18089` is for illustration purposes only. It is not a real node address.

![Configure Remote Node 2](/img/resources/user-guides/en/remote_node/remote_node_config-2.avif){:width="600px"}

If the node requires authentication, you can enter the username in `Daemon username` and the password in `Daemon password`.

Finally, click on the `Connect` button and wait for your wallet to connect.
