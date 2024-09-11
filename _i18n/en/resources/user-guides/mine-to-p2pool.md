{% include disclaimer.html translated="no" translationOutdated="no" %}

## Wallet

Before starting, you already need to have a wallet configured and
working. The pool needs to know your wallet address to be able to send
payments there. See the [Accepting Monero guide]({{ site.baseurl
}}/get-started/accepting) for more information.

## Profitability

Before mining, you should decide if it is worth it or not for you. You
have to decide this for yourself, based on your power costs and the
hardware that you have available. There are many sites, such as
[CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr)
that allow you to enter your miner's speed and power draw, and it will
show you the profit (or loss) per week/month.

## Downloading The Required Software

The first step is to downloading the miner and P2Pool software onto your computer;

* You can download XMRig from: [XMRig.com](https://xmrig.com/download)
* You can download P2Pool from: [P2Pool Github Repo](https://github.com/SChernykh/p2pool/releases/latest)

## Configuring P2Pool

1. Open port `37889` in your firewall for better connectivity. (Optional)
2. Run `./p2pool --host NODE_IP_ADDRESS --wallet WALLET_ADDRESS`.

* It's suggested to run your own node, if that's the case `NODE_IP_ADDRESS` should be `127.0.0.1`.
* `WALLET_ADDRESS` must be your main address but not subaddress. (Main addresses start with `4`, subaddresses start with `8`)

3. Wait for the synchronization, It should take no more than 5-10 minutes.

See the [official docs](https://github.com/SChernykh/p2pool/blob/master/docs/COMMAND_LINE.MD) for more details about P2Pool.

## Configuring XMRig

Run `./xmrig -o 127.0.0.1:3333` to start mining.

If you see green messages saying that shares have been accepted,
congratulations, everything is working!

See the [official docs](https://xmrig.com/docs/miner/config) for more details about XMRig.

## Troubleshooting

### Anti-virus keeps removing XMRig

Some anti-viruses flag XMRig as malware because it is often deployed
to infected computers to mine without the owner's consent. As it is
your computer and you are configuring the miner to mine for you, it is
safe to add XMRig to your anti-virus whitelist.

### Cannot read/set MSR

On some CPUs, XMRig tries to increase performance by disabling certain
features like your CPU's instruction prefetcher. These operations
require root/administrator, so try right clicking xmrig.exe and
running it as administrator, or running `sudo ./xmrig` on other
systems.

### Algo not known

Find the line in config.json that says `algo: null` and change it to
`algo: "rx/0"`. By default, XMRig expects the pool to tell it which
hashing algorithm to use.

### Huge Pages 0%

#### Allowing large pages on Windows

Taken from [the MSDN](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15):

1. On the Start menu, click Run. In the Open box, type gpedit.msc.
2. On the Local Group Policy Editor console, expand Computer Configuration, and then expand Windows Settings.
3. Expand Security Settings, and then expand Local Policies.
4. Select the User Rights Assignment folder.
5. The policies will be displayed in the details pane.
6. In the pane, double-click Lock pages in memory.
7. In the Local Security Setting – Lock pages in memory dialog box, click Add User or Group.
8. In the Select Users, Service Accounts, or Groups dialog box, add an account that you will run the miner on
9. Reboot for change to take effect.

You may also need to launch the miner as administrator.

#### Allowing large pages on Linux

Firstly stop the miner (if it's running), run the following commands to enable
large pages and then start the miner as root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

You may have to increase 1168 depending on how many NUMA nodes your
CPU(s) have.

#### Allowing large pages on macOS

Huge pages are not supported on macOS.

### Balance Not Increasing

P2Pool uses <abbr title="Pay Per Last N Shares">PPLNS</abbr> system,
which means that you only get paid when a miner on the pool finds a
block. If the pool you are mining on is small, this can take a few
days to weeks.

Additionally, any blocks found must mature before they can be paid
out. This takes 60 blocks (approx. 2 hours).

## Getting Help

An active Monero mining community on Reddit is
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). You can
also join [#monero-pools on
Libera](https://web.libera.chat/?channel=#monero-pools) or Matrix (#monero-pools:monero.social).

## Going Futher

* [Consider using Tor to connect to the pool](https://xmrig.com/docs/miner/tor). This hides mining
  activity from your ISP, and prevents the pool from knowing who you are.
