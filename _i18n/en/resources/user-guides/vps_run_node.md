{% include disclaimer.html translated="no" translationOutdated="no" %}

# monerod

`monerod` is the @daemon software that ships with the Monero tree. It is a console program, and manages the blockchain. While a bitcoin wallet manages both an account and the blockchain, Monero separates these: `monerod` handles the blockchain, and `monero-wallet-cli` handles the account.

This guide assumes you have already set up your VPS account and are using SSH to tunnel into the server console.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Make sure that port 18080 is open

`monerod` uses this port to communicate with other nodes on the Monero network.

Example if using `ufw`: `sudo ufw allow 18080`
Example if using `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Download the current Monero Core binaries

    wget https://downloads.getmonero.org/linux64

### Make a directory and extract the files.

    mkdir monero
    tar -xjvf linux64 -C monero

### Launch the daemon

    cd monero
    ./monerod

### Options:

Show list of all options and settings:

    ./monerod --help

Launch the daemon as a background process:

    ./monerod --detach

Monitor the output of `monerod` if running as daemon:

    tail -f ~/.bitmonero/bitmonero.log

Keep the VPS secure with autoupdate:

https://help.ubuntu.com/community/AutomaticSecurityUpdates


