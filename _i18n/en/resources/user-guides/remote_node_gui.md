{% include disclaimer.html translated="no" translationOutdated="no" %}

## Finding a node
First things first, you need to find a node to connect to! [moneroworld.com](https://moneroworld.com/#nodes) has some great resources for finding nodes. One of the easiest methods
would be to use a node run by moneroworld, but they have a tool for finding random nodes too.

## Opening wallet in Advanced mode
### From an open wallet
If your wallet is already open in a mode, click "Settings" > "Wallet" > "Close wallet"
![Close Wallet](png/remote_node/close_open_wallet.png){:width="600px"}
### From the Welcome screen
At the bottom of the Welcome screen, click ![Change wallet mode](png/remote_node/change_wallet_mode.png), and select "Advanced mode". Open your wallet.

## Connecting to the node from the GUI wallet
A moment after the wallet opens a pop up will appear and give the option to "use custom settings". Click on it, and you will be sent to "Settings" > "Node" in the GUI. 

On this page select 'Remote Node' and there will be four text boxes labeled "Address", "Port", "Daemon username" and "Daemon password". Fill the address of the node that you want to connect to. This address might look like `node.moneroworld.com` or it could look like any old IP address. Then fill the "Port" box with the node's port. The default port is `18081` but if you are using a random node the port that is used will vary. The port for node.moneroworld.com uses 18089. Optionally, fill the username and password if your remote note requires them.

### Your screen should look a bit like this
![Node testing broke image](png/remote_node/remote-node-screenshot.png){:width="600px"}
