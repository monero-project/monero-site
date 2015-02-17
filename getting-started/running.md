---
layout: static_page
title: "How to Run a Monero Node"
title-pre-kick: "How to Run a "
title-kick: "Monero Node"
title-post-kick: ""
kick-class: "yellow-kicks"
icon: "icon_node"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### Why Run a Full Node?

Because of the decentralized and peer-to-peer nature of the Monero network it becomes more robust and resilient as it becomes larger. We encourage all users to run a full node, if they are able to.

Running a Monero node does not require a huge amount of processing power, but it does require a few gigabytes worth of disk space to store the blockchain, and there will be some impact on your bandwidth especially from connected nodes that are catching up on the blockchain.

The easiest way to run a Monero node, without affecting your home bandwidth, is to purchase a VPS (Virtual Private Server). We strongly recommend [InterServer.net](https://interserver.net/dock/vps-231552.html) using the 'MONERO' coupon code to get a discount over and above their already cheap $6/month VPS. Using this coupon code and/or [our affiliate link](https://interserver.net/dock/vps-231552.html) will also assist in the ongoing funding of Monero development.

Monero will run on most hardware, including ARM and 32-bit systems. In order to prepare to run the node download the Monero binaries [from the downloads page](/downloads).

### Running the Node

Once you have the files downloaded and unpacked you don't need to do anything beyond running the Monero daemon.

- On Windows: locate bitmonerod.exe in Windows Explorer and double-click on it. If it opens and then closes, or crashes after starting, then you may want to start it from within Command Prompt in order to see what errors arise.

- On OS X: locate bitmonerod in Finder and double-click on it. As with Windows, if it opens and then closes, or crashes after starting, then you can start it from within Terminal.

- On Linux: dependent on whether you are running it on a desktop or server operating system, you will want to start bitmonerod either in a screen session or in a console window of its own.

### Ensuring Your Node is Running Correctly

When starting Monero for the first time you will see something similar to this screen:

{:.cli-code}
2015-Feb-18 00:09:45.699104 Core initialized OK  
2015-Feb-18 00:09:45.700143 Starting core RPC server\.\.\.  
2015-Feb-18 00:09:45.700229 Run net_service loop( 2 threads)\.\.\.  
2015-Feb-18 00:09:45.700472 [SRV_MAIN]Core RPC server started ok  
2015-Feb-18 00:09:45.700543 [SRV_MAIN]Starting P2P net loop\.\.\.  
2015-Feb-18 00:09:45.701066 [SRV_MAIN]Run net_service loop( 10 threads)\.\.\.  
2015-Feb-18 00:09:46.702787 [P2P1]  
<span style="color: yellow;">2015-Feb-18 00:09:54.923018 [P2P6][5.9.25.103:28080 OUT]Sync data returned unknown top block: 228593 -> 228609 [16 blocks (0 days) behind]<br>
SYNCHRONIZATION started<br>
2015-Feb-18 00:09:57.803744 [P2P1][197.242.158.240:28080 OUT]Sync data returned unknown top block: 228593 -> 228609 [16 blocks (0 days) behind]<br>
SYNCHRONIZATION started</span><br>
<span style="color: lime;">2015-Feb-18 00:10:01.719800 [P2P4][197.242.158.240:28080 OUT] SYNCHRONIZED OK</span><br>

The yellow text indicates it is receiving blocks as it synchronises up with the rest of the Monero network. The green "synchronized ok" text will appear once it has correctly synched up. Once you see this there's nothing further you need to do, you are now running a Monero node!

To exit the node at any time you can type "exit" into the daemon window and press enter, and it will shut itself down.