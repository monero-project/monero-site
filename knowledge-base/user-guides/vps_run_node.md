---
layout: static_page
title: "Monero tools"
title-pre-kick: "Monero tools "
title-kick: "for the network "
title-post-kick: ""
kick-class: "purple-kicks"
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---
# bitmonerod

`bitmonerod` is the daemon software that ships with the Monero tree. It is a console program, and manages the blockchain. While a bitcoin wallet manages both an account and the blockchain, Monero separates these: `bitmonerod` handles the blockchain, and `simplewallet` handles the account.

This guide assumes you have already set up your VPS account and are using SSH to tunnel into the server console. 

## Linux, 64-bit (Ubuntu 14.04)

### Make sure that port 18080 is open
`bitmonerod` uses this port to communicate with other nodes on the Monero network.

Example if using `ufw`: `sudo ufw allow 18080`
Example if using `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Download the current Monero Core binaries
    
    wget https://downloads.getmonero.org/linux64

### Make a directory and extract the files.
    
    mkdir bitmonero
    tar -xjvf linux64 -C bitmonero

### Launch the daemon
    
    cd bitmonero
    ./bitmonerod
    
### Options:

Show list of all options and settings:

    ./bitmonerod --help

Launch the daemon as a background process:

    ./bitmonerod --detach
    
Monitor the output of `bitmonerod` if running as daemon:

    tail -f ~/.bitmonero/bitmonero.log

    