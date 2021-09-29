---
summary: 'Background process which runs and controls a Monero node'
terms: ["daemon"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

'Daemon' is the general term for a piece of software running in the
background. In Monero, the Daemon is started through the 'monerod'
program. If you run the Daemon locally, you are running a local @node. If
the Daemon is running on another device it's a @remote-node. A @wallet, like
the CLI or the GUI, needs to connect to a Daemon (local or remote) to relay
@transactions to the network.

It's possible to send commands to the Daemon directly or through the RPC
interface. See the [Daemon RPC guide]({{ site.baseurl_root
}}/resources/developer-guides/daemon-rpc.html), which contains a detailed
explanation (with examples) of the available RPC calls. For more detailed
and technical information about the Daemon, see the Monerodocs reference at
the bottom of this page.

---

##### Other Resources

<sub>1. The [monerod reference on Monerodocs.org](https://monerodocs.org/interacting/monerod-reference/)</sub><br>

<sub>2. 'Daemon' entry [on Wikipedia](https://en.wikipedia.org/wiki/Daemon_(computing))</sub><br>

<sub>3. Monerod-tagged questions [on StackExchange](https://monero.stackexchange.com/?tags=monerod)</sub>
