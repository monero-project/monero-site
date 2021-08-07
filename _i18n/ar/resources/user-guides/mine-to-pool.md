{% include disclaimer.html translated="no" translationOutdated="no" %}

## Wallet

Before starting, you already need to have a wallet configured and
working. The pool needs to know your wallet address to be able to send
payments there. See the [Accepting Monero guide]({{ site.baseurl
}}/get-started/accepting) for more information.

## Profitability

Before mining, you should decide if it is worth it or not for you. You have
to decide this for yourself, based on your power costs and the hardware that
you have available. There are many sites, such as
[CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr)  that
allow you to enter your miner's speed and power draw, and it will show you
the profit (or loss) per week/month.

## Download Miner

The first step is to download mining software onto your computer.

### Windows

The XMRig developer provides pre-built binaries for Windows users. They are
available on the [GitHub release
page](https://github.com/xmrig/xmrig/releases/latest).

Scroll down until you see `xmrig-VERSION-msvc-win64.zip`. Download this file
and extract the archive somewhere memorable, like your desktop.

### Ubuntu Linux

The XMRig developer provides pre-built binaries for Ubuntu Bionic (18.04)
and Focal (20.04). They may work on other Ubuntu versions, and on other
distributions, but this is not guaranteed.

These binaries are available on the [GitHub release
page](https://github.com/xmrig/xmrig/releases/latest).

Scroll down to 'Assets' until you see the correct version for your
system. Download this file, extract the archive somewhere memorable, like
your desktop.

### Other distributions and operative systems

Binaries are available for multiple distributions and operative systems, but
you can also build the miner by yourself. Take a loot at [XMrig's
docs](https://xmrig.com/docs/miner)

## Selecting a pool

There are lots of pools to choose from. You can find a list at
[miningpoolstats.stream/monero](https://miningpoolstats.stream/monero).

Choosing a larger pool means that you will see more frequent (but smaller)
payouts, but choosing a smaller pools helps keep the network
decentralised. [Miners will not lose any revenue by mining on a smaller
pool](https://redd.it/g6uh2l).

## Configuring the miner

See the [official docs](https://xmrig.com/docs/miner/config), for
instructions and suggestions.

## Starting the miner

Windows users can double click on xmrig.exe. Users of other operating
systems should `cd` into the directory that contains XMRig and then type
`./xmrig` and press return.

If you see green messages saying that shares have been accepted,
congratulations, everything is working!

## Troubleshooting

### Anti-virus keeps removing XMRig

Some anti-viruses flag XMRig as malware because it is often deployed to
infected computers to mine without the owner's consent. As it is your
computer and you are configuring the miner to mine for you, it is safe to
add XMRig to your anti-virus whitelist.

### Cannot read/set MSR

On some CPUs, XMRig tries to increase performance by disabling certain
features like your CPU's instruction prefetcher. These operations require
root/administrator, so try right clicking xmrig.exe and running it as
administrator, or running `sudo ./xmrig` on other systems.

### Algo not known

Find the line in config.json that says `algo: null` and change it to `algo:
"rx/0"`. By default, XMRig expects the pool to tell it which hashing
algorithm to use.

### Huge Pages 0%

#### Allowing large pages on Windows

Taken from [the
MSDN](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15):

1. On the Start menu, click Run. In the Open box, type gpedit.msc.
2. On the Local Group Policy Editor console, expand Computer Configuration,
   and then expand Windows Settings.
3. Expand Security Settings, and then expand Local Policies.
4. Select the User Rights Assignment folder.
5. The policies will be displayed in the details pane.
6. In the pane, double-click Lock pages in memory.
7. In the Local Security Setting – Lock pages in memory dialog box, click
   Add User or Group.
8. In the Select Users, Service Accounts, or Groups dialog box, add an
   account that you will run the miner on
9. Reboot for change to take effect.

You may also need to launch the miner as administrator.

#### Allowing large pages on Linux

Firstly stop the miner (if it's running), run the following commands to
enable large pages and then start the miner as root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

You may have to increase 1168 depending on how many NUMA nodes your CPU(s)
have.

#### Allowing large pages on macOS

Huge pages are not supported on macOS.

### Balance Not Increasing

Most pools are <abbr title="Pay Per Last N Shares">PPLNS</abbr> pools,
which means that you only get paid when a miner on the pool finds a
block. If the pool you are mining on is small, this can take a few
days to weeks.

Additionally, any blocks found must mature before they can be paid out. This
takes 60 blocks (approx. 2 hours).

## Getting Help

An active Monero mining community on Reddit is
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). You can also
join [#monero-pools on
Libera](https://web.libera.chat/?channel=#monero-pools) or Matrix
(#monero-pools:monero.social).

## Going Futher

* Consider using a subaddress just for mining, to prevent your address being
  linked to different services.
* [Consider using Tor to connect to the
  pool](https://xmrig.com/docs/miner/tor) (or to a hidden service pool like
  HashVault, RespectXMR and MoneroOcean). This hides mining activity from
  your ISP, and prevents the pool from knowing who you are.
