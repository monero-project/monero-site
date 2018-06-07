{% include untranslated.html %}
## Finding a node
First things first, you need to find a node to connect to! [moneroworld.com](https://moneroworld.com/#nodes) has some great resources for finding nodes. One of the easiest methods
would be to use a node run by moneroworld, but they have a tool for finding random nodes too.

## Connecting to the node from the GUI wallet
After you enter your password for your wallet, you will see a pop up that will give you the option to "use custom settings". Click on it. You will then be
sent to the "Settings" page in the GUI. At this point you should see two text boxes to the right of a label that says "Daemon address". In the first box (the on to the left) you need to enter the address of the node that you want to
connect to. This address might look like `node.moneroworld.com` or it could look like any old ip address. The smaller box to the right is where you enter the node's port. The default port is `18081` but if you are using a random node the port that is used will vary. The port for node.moneroworld.com uses 18089.
### Your screen should look a bit like this
<img src="png/remote_node/remote-node-screenshot.png" width="(600)">
