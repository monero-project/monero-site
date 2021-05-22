{% include disclaimer.html translated="no" translationOutdated="no" %}

## Check if your wallet is in advanced mode

To use a custom remote node, your wallet must be in advanced mode. Simple mode and Simple mode (bootstrap) don't support this feature.

To check if your wallet is in advanced mode, go to `Settings` > `Info` and see `Wallet mode`. 

If your wallet is not in Advanced mode, you will have to change it to Advanced mode (see next step).

If your wallet is already in Advanced mode, you can skip the next step.

![Wallet mode](/img/resources/user-guides/en/remote_node/wallet_mode_info.png){:width="600px"}

## Change your wallet to advanced mode

If your wallet is open, you need to close it first. Go to `Settings` > `Wallet` > `Close this wallet`

![Close Wallet](/img/resources/user-guides/en/remote_node/close_open_wallet.png){:width="600px"}

The main menu (`Welcome to Monero` screen) will open. At the bottom left, click on `Change wallet mode` button, and on the next page select `Advanced mode`. Next, open your wallet file again.

![Change Wallet Mode](/img/resources/user-guides/en/remote_node/change_wallet_mode.png){:width="600px"}

![Advanced Mode](/img/resources/user-guides/en/remote_node/advanced_mode.png){:width="600px"}

## Finding a public remote node

First, you will need to find a public remote node to connect to. The website [moneroworld.com](https://moneroworld.com/#nodes) has some great resources for finding nodes. One of the easiest methods would be to use a public remote node run by moneroworld, but they have a tool for finding random nodes too.

## Configuring your wallet to connect to a custom public remote node

When opening your wallet, a pop up will appear with the option `Use custom settings`. Click on it, and you will be sent to `Settings` > `Node` page. 

If you don't see this pop up, go to `Settings` > `Node` page.

![Configure Remote Node](/img/resources/user-guides/en/remote_node/remote_node_config.png){:width="600px"}

On this page select `Remote Node`.

In `Address` you should fill the address of the remote node that you want to connect to. This address might look like `node.moneroworld.com` or it could look like any IP address. 

In `Port` you should fill the port of the remote node. If a remote node is listed as `node.moneroworld.com:18089`, the address is `node.moneroworld.com` and the port is `18089`. The default port is `18081`, but it can vary depending on the node you are connecting to.

If your remote node requires authentication, you can enter a username in `Daemon username` and a password in `Daemon password`.

Finally, click on `Connect` button and wait for your wallet to connect.
