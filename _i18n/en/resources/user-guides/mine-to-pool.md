{% assign version = '2.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}

# Introduction
This is a guide on how to set up your own computer to mine Monero with your CPU. This will require you to choose a pool, a miner and then configure the miner. This contributes to the health of the Monero network while also giving you, over time, free Monero that you can spend. There are some reasons however, to not mine which are:
1. The computer is a _poorly cooled laptop_, such as Microsoft Surface or Apple Macbook.
2. The CPU lacks enough L3 cache, something that may be the case in both an _outdated and/or a laptop CPU_.
3. The CPU _doesn't support hardware AES_, which mostly only effects outdated CPUs.

# Selecting a pool

There are many pools to choose from, a list is available at
[moneropools.com](https://moneropools.com). Mining on a larger pool could mean
more consistent payouts, but mining on a smaller pool helps to keep the network
decentralized.

# Selecting a CPU miner

Just like pools, there are a lot of miners to choose from. The one that you
should pick depends on the hardware you want to mine on. This guide will only
use a CPU miner, and will be using
[XMRig](https://github.com/xmrig/xmrig). An alternative would be 
[xmr-stak](https://github.com/fireice-uk/xmr-stak), an all-in-one CPU and graphics card miner. However, it's configuration is slightly different and will not be covered in this guide.

## Download for Windows and Linux Systems

If you are using a Windows or Linux system, the developer of XMRig provides
binaries to download on the
[GitHub release page](https://github.com/xmrig/xmrig/releases).

Download the appropriate version for your operating system and extract it somewhere you'll be able to find it again.

## For Other Operating Systems

If you're not using Windows or Linux, you will have to compile XMRig for yourself,
luckily this isn't as hard as it sounds. Build instructions exist for a variety of operating systems on the
[XMRig GitHub wiki](https://github.com/xmrig/xmrig/wiki/Build).

# Configuring XMRig
Open (or create) `config.json`, which is located in the same folder as the miner and find the  `"pools"` section which contains all of the miner's pool information. Edit the `url` and `user` fields to your chosen pool address with a port and your own Monero address. Once you are done the section should look similar to this:
```js
  "pools": [
        {
            "url": "gulf.moneroocean.stream:80",
            "user": "48XzPBXyrLQfHQrqJQkq2pTRf6sb5aYrwA1sxA5vwt7ZTn8AXDg3unMLosbTvi1DL8YbeLSdjV59NhQABrPGiz5QRGS9jJ3",
            "pass": "email@example.com",
            "rig-id": null,
            "nicehash": false,
            "keepalive": false,
            "variant": 1
        }
    ],
```
The `"pass"` value is optional, while the `"rig-id"`, `"nicehash"`, `"keepalive"` and `"variant"` values are not relevant to this guide. If your pool gives special instructions for the '"pass"' field, then please follow them. Otherwise, you may leave `"pass"` as the default `"x"`.

# Running the miner

**Save the config** file and run the miner!

![1](png/mine_to_pool/1.png)

Almost all pools allow you to monitor your estimated hashrate by pasting your address into their website. From there you will also find options to configure extra options and features. You can also monitor your hashrate by directly from the miner by pressing the `h` key. 

# Large Pages

Large pages give around a **20% increase** when enabled. Most miners will try to automatically enable large pages when given the required privledges, XMRig included. The changes may require your computer to reboot in order to take effect. However, if this fails, you will have to enable large pages manually using the instructions for your operating system.

## Large pages on Linux

Run the following commands to enable large pages and then re-start the miner as root:

	sudo sysctl -w vm.nr_hugepages=128
	sudo ./xmrig

## Large pages on Windows

1. On the Start menu, click Run. In the Open box, type gpedit.msc.
2. On the Local Group Policy Editor console, expand Computer Configuration, and then expand Windows Settings.
3. Expand Security Settings, and then expand Local Policies.
4. Select the User Rights Assignment folder.
5. The policies will be displayed in the details pane.
6. In the pane, double-click Lock pages in memory.
7. In the Local Security Setting – Lock pages in memory dialog box, click Add User or Group.
8. In the Select Users, Service Accounts, or Groups dialog box, add an account that you will run the miner on
9. Reboot for change to take effect.

# Check your hashrate
Once you have enabled large pages, make sure that the change has taken effect. The easiest way to verify this is to find the `Ready` line output by XMRig. Below, you can see that Large Pages have been enabled for all threads being run, and that there are two threads being run.

![2](png/mine_to_pool/2.png)

If you look at that screen shot, and have your own miner running, you should see a much higger hashrate. This is because of the `-AES-NI` listed beside the CPU instead of the usual `AES-NI`, telling the user that there is no hardware AES. If you don't get at around 60 H/s per thread, have hardware AES, and have 2mb of cache per thread, try lowering your threads by one then try again. If your H/s drops over time, lower your maximum CPU usage.