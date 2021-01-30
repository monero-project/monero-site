{% include disclaimer.html translated="no" translationOutdated="no" %}

## Table Of Contents
- [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Monero Multisig in a Nutshell](#monero-multisig-in-a-nutshell)
- [The Architecture of the MMS](#the-architecture-of-the-mms)
- [The MMS User Experience](#the-mms-user-experience)
  - [A Messaging System](#a-messaging-system)
  - [Signers and Messages](#signers-and-messages)
- [Getting the MMS](#getting-the-mms)
- [Installing and Configuring PyBitmessage](#installing-and-configuring-pybitmessage)
- [Further PyBitmessage Tweaks](#further-pybitmessage-tweaks)
- [MMS Command Overview](#mms-command-overview)
- [Configuring a Wallet for Use with the MMS](#configuring-a-wallet-for-use-with-the-mms)
  - [Addresses and Labels](#addresses-and-labels)
  - [Running CLI Wallet](#running-cli-wallet)
  - [Initializing the MMS](#initializing-the-mms)
  - [Configuring Signers](#configuring-signers)
  - [Manually Configuring Signers](#manually-configuring-signers)
  - [Auto-Config](#auto-config)
  - [Sending Signer Configuration](#sending-signer-configuration)
- [Establishing the Multisig Address](#establishing-the-multisig-address)
- [Funding the Multisig Wallet](#funding-the-multisig-wallet)
- [Syncing Wallets](#syncing-wallets)
- [Making Multisig Transactions](#making-multisig-transactions)
- [The Commands in Detail](#the-commands-in-detail)
  - [mms init](#mms-init)
  - [mms info](#mms-info)
  - [mms signer](#mms-signer)
  - [mms list](#mms-list)
  - [mms next](#mms-next)
  - [mms sync](#mms-sync)
  - [mms transfer](#mms-transfer)
  - [mms delete](#mms-delete)
  - [mms send](#mms-send)
  - [mms receive](#mms-receive)
  - [mms note](#mms-note)
  - [mms show](#mms-show)
  - [mms export](#mms-export)
  - [mms set](#mms-set)
  - [mms start\_auto\_config](#mms-start_auto_config)
  - [mms auto\_config](#mms-auto_config)
  - [mms stop\_auto\_config](#mms-stop_auto_config)
  - [mms send\_signer\_config](#mms-send_signer_config)
- [Security](#security)
  - [Use of Encryption and Signatures](#use-of-encryption-and-signatures)
  - [Communication MMS to PyBitmessage](#communication-mms-to-pybitmessage)
  - [Impersonation](#impersonation)
  - [Attacker-Controlled Data](#attacker-controlled-data)
- [Troubleshooting](#troubleshooting)
  - [Solving Syncing Troubles](#solving-syncing-troubles)
  - [Redirecting a Transaction to Another Signer](#redirecting-a-transaction-to-another-signer)
  - [Ignoring Uncooperative Signers when Syncing](#ignoring-uncooperative-signers-when-syncing)
  - [Recovering from Lost or Duplicate Messages](#recovering-from-lost-or-duplicate-messages)
  - [Correcting / Updating Signer Information](#correcting--updating-signer-information)
  - [Starting from Scratch](#starting-from-scratch)
  - [MMS / PyBitmessage Interactions](#mms--pybitmessage-interactions)

## Introduction

This manual describes the *Multisig Messaging System*, abbreviated as *MMS*. It's a system that aims to **simplify multisig transactions** for Monero and similar CrypoNote-based cryptocurrencies by making it easy to exchange info like key sets and sync data between wallets and by offering some "workflow support" guiding you through the various steps.

The MMS so far presents itself to the user as a set of new commands in the CLI wallet. This is not surprising, as currently the CLI wallet is the only way to do multisig transactions interactively anyway. Hopefully this will be extended in the future; the MMS was designed with other wallets like e.g. the Monero GUI wallet in mind.

This manual has some tutorial-like aspects and is intended to be read in sequential fashion, best without skipping any chapter before chapter *The Commands in Detail*.

If you have high requirements regarding security and are not sure whether using the MMS is acceptable for you in the first place, you may read the chapter *Security* first.

This first version of the manual was written around year-end 2018 by René Brunner (*rbrunner7*), the original author of the MMS.

## Monero Multisig in a Nutshell

Probably it will be pretty hard to understand the MMS without at least a basic grasp of how Monero multisig transactions work in principle. Here a short overview together with info about the *terminology* that this manual uses; for more details and more *technical* explanations you will have to look elsewhere.

*Multisig* means that a transaction needs multiple signatures before it can be submitted to the Monero network and executed. Instead of one Monero wallet creating, signing, and submitting transactions all on its own, you will have a whole group of wallets and collaboration between them to transact.

In this manual those wallets, or if you prefer, the people controlling them, are called *authorized signers*. Depending on the type of multisig used, not **all** authorized signers need to sign before a transaction becomes valid, but only a subset of them. The corresponding number (which is equal to or smaller than the number of authorized signers) is called *required signers*.

The usual notation in use here is *M/N*, with *M* standing for the number of required signers, and *N* standing for the total number of authorized signers. For example, probably the most useful and most popular type of multisig is written as *2/3*: Out of a total of **three** authorized signers, any **two** are needed to make a transaction valid.

For technically "simple" coins like Bitcoin and its forks doing multisig transactions consists of the following steps:

* Configure the multisig wallets and establish the multisig address
* Fund the multisig wallets / the multisig address so there is something to spend in the first place
* Do as many multisig transactions as you like

Monero adds one more type of step, necessary for internal bookkeeping so to speak. Simply told all the mechanisms that make Monero transactions truly private complicate things and lead to a necessity to exchange information between wallets to enable them to correctly process transactions, both incoming and outgoing.

The MMS uses the term *syncing* for the process to making wallets ready to transact again after sending or receiving transactions, and *multisig sync data* or simply *sync data* for the information that has to be exchanged to achieve that.

So the steps for Monero multisig look like that:

* Configure the multisig wallets and establish the multisig address
* Fund the multisig wallets / the multisig address so there is something to spend in the first place
* Sync the wallets for a first time
* Do 1 multisig transaction
* Sync the wallets again
* Do another multisig transaction and/or receive more funds
* Sync the wallets yet again
* ...

The "value" of the MMS is making it easy and painless to exchange all those data packets between the wallets, and telling the signers at which point of the "workflow" they currently are and what has to be the next action in order to proceed.

## The Architecture of the MMS

The MMS basically has 3 parts:

* A set of new commands in the CLI wallet
* A running instance of PyBitmessage reachable from the computer running the CLI wallet, doing message transport on behalf of the wallet
* Internal code extensions to wallet code managing a new `.mms` file per wallet with the messages in it and interfacing with PyBitmessage

[PyBitmessage](https://bitmessage.org/wiki/Main_Page) is currently the only supported program for message transport, the MMS won't "speak" to any other system. You can't use e-mail nor any other of the myriad of communication programs out there. If you don't like PyBitmessage or can't run it for any reason you won't be able to use the current version of the MMS.

The author of the MMS hopes that you will give it a try: PyBitmessage is fully open source, is under continued development, has enough users to almost assure message transport at any time, and takes privacy very seriously - just like Monero.

Hopefully a future MMS will build on Monero's "native" private communication system, [Kovri](https://kovri.io/), but we are probably still quite some time away from a Kovri release ready for broad use.

MMS communications should be **safe**: The Bitmessage system is considered safe as it's completely invisible who sends messages to whom, and all traffic is encrypted. For additional safety the MMS encrypts any message contents itself as well: Nobody except the receiver of an MMS message can decrypt and use its content, and the messages are signed, meaning the receiver can be sure they come from the right sender.

## The MMS User Experience

To see the "user experience" of multisig in the CLI wallet **without** MMS you can e.g. check [here](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/22-multisig-in-cli-wallet) and [here](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/23-multisig-in-cli-wallet).

Those pages are also useful to familiarize yourself with the steps for multisig transactions in general, as the MMS will not change the order of the steps or make any of them superfluous, but will just make execution considerably easier, and the MMS will be able to tell you the next step in order automatically in most cases.

### A Messaging System

The general approach of the MMS is very **similar to e-mail**: You send messages around, with the MMS command set in the CLI wallet playing the part of your e-mail client, allowing you to send messages, receive messages and manage a list of stored messages, something like a combined inbox and outbox.

The contents of those messages are of course all those things that must be transported between the wallets of the signers: key sets, wallet sync data, transactions to sign and/or submit to the network.

PyBitmessage is used for the actual message transport and thus plays the part of your e-mail server. Once configuration is done sending and receiving messages is fully automatic i.e. needs no manual intervention.

You don't use e-mail addresses, but Monero addresses to tell where messages should go, and you only ever send messages to other authorized signers: E.g. with 2/3 multisig you only have 2 partners to send something to.

Like with e-mail people don't have to be online at the same time for message transport to work: PyBitmessage will keep messages for up to 2 days, giving you time to fetch them.

The approach is in general quite flexbile and robust: If you need messages from several signers to proceed the MMS will wait until it finds all of them in the list of received messages, and the order of reception does not matter either, which results in a quite unstressed experience.

If another signer tells you that a particular message did not arrive or was lost somehow you can send it again anytime, picking it from the message list, like you would re-send an e-mail in a similar situation.

### Signers and Messages

So, where a "normal" Monero wallet without MMS simply told manages three types of data (addresses, accounts and transactions), the MMS adds two more: Signers and messages.

The MMS manages, for each multisig wallet separately, a list of *authorized signers*. With 2/3 multisig that list has **three** entries. On a technical level, each entry represents a Monero wallet containing keys that can be used to sign multisig transactions. On a conceptual level it's easier to imagine a group of 3 people, i.e. yourself and 2 partners, as those "authorized signers". (Often there will be indeed 3 distinct people controlling the 3 wallets, but not always of course.)

The MMS also manages a single list of *messages* per wallet: All messages you send, plus all messages you receive. While the list of authorized signers is the same in all involved wallets, those messages of course differ. The more authorized signers there are to send you messages, and the longer you transact, the more messages will accumulate.

## Getting the MMS

Right now, at the time of writing this manual (year-end 2018), the MMS is only available as part of the latest Monero code (`master` branch on Monero's [GitHub repository](https://github.com/monero-project/monero)). To use it, you have to check out that source code and compile it yourself. Doing so is easiest on a Linux system.

With the next hardfork in Spring 2019 the MMS will become an integral standard part of the Monero software: You install Monero, you have it.

A word of caution: At the time of writing using the latest development Monero version does not lead to conflicts and complications with any regular Monero release software and downloaded blockchain on the same system, but that may change between now and the hardfork, especially near the hardfork.

## Installing and Configuring PyBitmessage

Installing PyBitmessage is easy enough: You find links to downloads and install instructions from the [Bitmessage Wiki homepage](https://bitmessage.org/wiki/Main_Page). There are versions for all the major OS that Monero also supports: Linux, Windows, and macOS.

After installing run it, configure a Bitmessage address for you and note it, as you will later need it to configure your multisig wallet.

Don't worry right away if PyBitmessage does not seem to connect to the Bitmessage network when you run it the first time: Due to the decentral nature of that network it can take quite some time for your initial connect. It seems this often takes **half an hour**.

Likewise sending the very first message to a brand-new Bitmessage address can take time because there is a key exchange involved, sometimes another half of an hour. Once the key exchange is done messages are typically delivered within a few minutes however, sometimes within seconds.

You don't need to configure more than one Bitmessage address for you. You can run several multisig wallets over a **single** address without any problems because the MMS will be able to pick the right messages for the right wallets. You can even continue to use the same address for "normal" messages; those won't disturb the MMS, it will simply ignore any messages not intended for it.

Out of the box your PyBitmessage installation is not yet ready for use with the MMS because it does not allow other programs to use its API per default, you have to enable this explicitely (which makes sense, of course, for security reasons).

You find instructions how to **enable the API** on the [Bitmessage wiki API reference page](https://bitmessage.org/wiki/API_Reference). You will use the user name and the password you choose here later as command-line parameters for the CLI wallet so that the MMS will be able to log in to PyBitmessage.

## Further PyBitmessage Tweaks

The current official release version 0.6.3.2 has a [Dandelion++ protocol extension](https://arxiv.org/abs/1805.11060) built-in that hardens the network further against attacks that try to track message flow to find out who sends messages to whom. Unfortunately it seems that it has still a bug somewhere that can lead to wildly differing and very long message transmission times which is quite unfortunate when using the MMS.

There is a way to switch off Dandelion++ which, in general, is not recommended of course, but useful for using the MMS as of now:

* Locate PyBitmessage's config file `keys.dat`
* Make a new section there named `[network]`
* Add the following line to this new section: `dandelion = 0`
* Restart PyBitmessage

As a "good citizen" you may consider to open your PC for access from other Bitmessage nodes to your node from the outside by opening port 8444. You find background info about that in their [FAQ](https://bitmessage.org/wiki/FAQ). It's not strictly necessary however for your client to function.

## MMS Command Overview

There is only **one** new command in the CLI wallet that gives access to the MMS, sensibly called `mms`. That command has however quite a number of subcommands to handle all the various functions of the MMS. Here a list of the commands; for details each command has its own chapter later in the manual:

    init        Initialize and configure the MMS
    info        Display current MMS configuration
    signer      Define a signer by giving a single-word label, a transport address, and a Monero address, or list all defined signers
    list        List all messages
    next        Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
    sync        Force generation of multisig sync data regardless of wallet state, to recover from special situations like "stale data" errors
    transfer    Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there
    delete      Delete a single message by giving its id, or delete all messages by using 'all'
    send        Send a single message by giving its id, or send all waiting messages
    receive     Check right away for new messages to receive
    note        Send a one-line note message to a signer, identified by its label, or show all unread notes
    show        Show detailed info about a single message
    export      Export the content of a message to file
    set         Set options, 'auto-send' being the only one so far
    
    start_auto_config   Start the auto-config process at the auto-config manager's wallet by creating new tokens
    auto_config         Start auto-config by using the token received from the auto-config manager
    stop_auto_config    Delete any tokens and abort an auto-config process
    send_signer_config  Send your complete signer configuration to all other signers
    
You get the list of commands by issuing `help mms`, and help for a particular subcommand by using `help mms <subcommand>`, e.g. `help mms next`. You can alternatively use `mms help <subcommand>` if that feels more natural.

## Configuring a Wallet for Use with the MMS

### Addresses and Labels

First for better understanding some basic facts about addressing and referring to signers (or their wallets respectively) in the MMS:

If you create a new wallet it gets (of course) its own, unique public Monero address. If you later configure the wallet for multisig, the wallet **changes** its public address to the common multisig address that you share with all the other authorized signers.

The MMS uses the first, "original" public Monero address over the whole wallet lifetime for addressing, before **and** after "going multisig". It may be a little confusing that a wallet should have **two** public addresses somehow, but once you got the original address into your signer configuration you can more or less forget about it.

The MMS uses *labels* that allow you to name yourself and the other signers, and that the MMS commands use when referring to signers. (Using Monero addresses or Bitmessage addresses in such commands would be quite cumbersome.)

Labels must be one word, and they must be unique within a single wallet. The example later on in this manual uses the labels `alice` and `bob` for a case of 2/2 multisig.

### Running CLI Wallet

When you start the CLI wallet for use with the MMS there are the following two new (optional) command line parameters for connecting to PyBitmessage:

    --bitmessage-address	Use PyBitmessage instance at URL <arg>
    --bitmessage-login		Specify <arg> as username:password for PyBitmessage API

If you have PyBitmessage running on the same machine as the CLI wallet the default for the first parameter will do, and you should not need to set anything different. If it does not seem to find it despite running locally try to use `http://localhost` or `http://127.0.0.1` as argument for the first parameter.

Beside that, you need of course either `--testnet` or `--stagenet` to connect to the right network. Also using `--log-level 0` could be useful: This instructs the wallet to write detailed info into its logfile that might help to find bugs or problems with the MMS.

So a complete command line for the CLI wallet could look like this:

    ./monero-wallet-cli --testnet --bitmessage-login mmstest:p4ssw0rd --log-level 0

### Initializing the MMS

After creating a new wallet you have to initialize it for use with the MMS; without that crucial first step you won't be able to use any MMS features. The command to do so is `mms init`:

    mms init <required_signers>/<authorized_signers> <own_label> <own_transport_address>

`own_transport_address` is the Bitmessage address that you configured in your own PyBitmessage program. A full `init` command could look like this:

    mms init 2/2 alice BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e

Use that `init` command **only once**: Executing it a second time will completely re-initialize the MMS by deleting any signer info and any messages, which you don't want except in special circumstances.

If you want to go through a MMS test as fast as possible you can instruct the wallet to ask for the password only when strictly necessary for technical reasons, and tell the MMS to send any generated message right away instead of prompting before doing so:

    set ask-password 0
    mms set auto-send 1

(Both those settings are active during the 2/2 multisig example shown in this manual.)

### Configuring Signers

About each signer the MMS needs to know three things:

* The one-word *label* that you will use to refer to that signer
* The *transport address* which currently means their Bitmessage address as long as this is the only supported message transport system
* The *Monero address* i.e. the "original" Monero address of their wallet

(See also above chapter *Addresses and Labels*.)

You don't have to create signers; after the `mms init` command they are already all "there", although without any info yet with the exception of yourself. The commands for setting signer information refer to them by number, 1 up to the total number of authorized signers, so 1 and 2 in the following 2/2 multisig example with signers named *Alice* and *Bob* and thus with the labels *alice* and *bob*.

After the above sample `init` command the list of signers looks like that:

     # Label                Transport Address
       Auto-Config Token    Monero Address
     1 alice                BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
                            A1VRwm8HT8CgA5bSULDZKggR9Enc9enhWHNJuDXDK4wDD6Rwha3W7UG5Wu3YGwARTXdPw1AvFSzoNPBdiKfpEYEQP1b5cCH
    
     2 <not set>            <not set>
                            <not set>

Note that signer #1 is always "me" i.e. your own label, transport address and Monero address. So in Alice's signer list #1 will be Alice and #2 will be Bob, while in Bob's wallet it will be exactly the other way round.

There are **three ways** to complete signer information: You can enter it manually, or you can use the auto-config mechanism that the MMS offers, which has a second, "semi-automatic" variant. With 2/2 there is hardly a difference in effort, but with higher numbers of signers auto-config is easier and more reliable. In any case, one advantage of auto-config is a secure transport of addresses because PyBitmessage is used.

So pick **one** method from the three following chapters *Manually Configuring Signers*, *Auto-Config* and *Sending Signer Information*:

### Manually Configuring Signers

The command to manually enter signer info and display the list of signers is `mms signer`:

	mms signer [<number> <label> [<transport_address> [<monero_address>]]]

Without any argument the command displays the list of signers. With at least a number and a label you can set or change info about a particular signer. A full command to set everything about signer #2 could look like this:

	mms signer 2 bob BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa 9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj

A command to later change only the label of signer #2 could be:

	mms signer 2 bob-the-builder

With this manual method it's up to the signers *how* they all get to know each other's addresses.

Be careful while entering signer information: Any mistakes like wrong Bitmessage addresses will probably make it impossible to correctly transact later on.

Before you go out and start to exchange signer information over insecure channels like IRC or plain unencrypted e-mail, please note that there are certain dangers in doing so. If somebody can e.g. intercept your e-mails and get hold of your addresses that you send to a signer that person can then impersonate the signer.

There is also the danger that in a 2/3 multisig scenario for *escrow* signer Bob can set up a second wallet for the trusted third-party Trent beside his own and trick Alice into sending everything to that wallet instead of Trent's. After this Bob will be able to transact alone and steal coins from Alice.

You find a more detailed explanation of this second danger in chapter *Security* towards the end of the manual or [here](https://taiga.getmonero.org/project/rbrunner7-really-simple-multisig-transactions/wiki/multisig-and-insecure-communication-channels). Auto-config mitigates this danger to quite some extent.

Alice's complete signer list looks like this:

     # Label                Transport Address
       Auto-Config Token    Monero Address
     1 alice                BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
                            A1VRwm8HT8CgA5bSULDZKggR9Enc9enhWHNJuDXDK4wDD6Rwha3W7UG5Wu3YGwARTXdPw1AvFSzoNPBdiKfpEYEQP1b5cCH
    
     2 bob                  BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa
                            9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj

### Auto-Config

MMS auto-config is based on so-called *auto-config tokens*. Such tokens are always 11 characters long, the fixed string "mms" followed by 8 hexadecimal digits. Examples for such tokens are `mms561832e3eb` and `mms62cb2b87e2`.

The basic trick: Unlike Bitmessage addresses and Monero addresses those tokens are short enough to type them easily and e.g. use reasonably safe smartphone messenger apps or SMS to transmit them, or dictate them over the phone, again not perfectly safe, but still much safer than plain e-mail or IRC.

The workflow is as follows - it's simpler than it looks at first sight, go once through it in practice and it makes sense:

* One signer takes on the job to lead and organize configuration, furthermore called *manager*
* The manager assigns a label to each signer and enters all labels into the signer configuration, either using `mms signer` commands or giving them as arguments of the `mms start_auto_config` command in the next step
* The manager uses the command `mms start_auto_config` to generate auto-config tokens for all other signers, one distinct token per signer
* The manager transmits the tokens to their respective signers outside of the MMS
* All other signers enter their token with `mms auto_config <token>`
* Their wallets will generate messages that send their addresses to the manager's wallet, already using PyBitmessage
* As soon as all those messages arrive there the manager can in turn send messages to all other signers containing the complete signer information by doing `mms next`
* The other signers process those messages to complete their signer information with `mms next`

Several points are noteworthy here. Manual configuration with e.g. 5 signers could mean 5 times 4 = 20 initial manual information transfers, if each of the 5 signers sends addresses to 4 others. Even a more clever approach with someone collecting all addresses first and sending the complete list to all others then would take 4 plus 4 = 8 information transfers. With auto-config there are only **4** such manual transfers - 4 tokens from the manager out to the other signers; after that point it's already messages over PyBitmessage.

You may wonder how the other signers' wallets can send their Bitmessage addresses back to the manager by using PyBitmessage. Doesn't this snake bite its own tail? The solution: A temporary, "throw-away" Bitmessage address is derived from each token and used just for this transfer, and temporary keys are derived as well for encrypting message content.

Part of the increased safety of the auto-config process is the fact that each signer gets its own, distinct token. In 2/3 multisig, just make sure Bob cannot get hold of Trent's own token, and already Bob has no way to "play" Trent and set up a second wallet to be able to sign transactions all on his own.

### Sending Signer Configuration

Beside full auto-config there is a second, alternative way to make configuration easier, based on a command called `send_signer_config`. It's less "automatic", but you may prefer it because it's more transparent what happens.

Here the workflow is as follows:

* One signer takes on the job to lead and organize configuration, furthermore called *manager*
* The manager receives from all other signers their addresses over channels outside the MMS, e.g. encrypted and signed e-mail
* The manager enters complete signer information into their wallet, using `mms member` commands
* The manager uses the `mms send_signer_config` command to send the completed information to all other signers
* The other signers process the messages containing signer information with `mms next`

For all signers except the manager this is nearly as comfortable as auto-config. Note however that the security of the scheme depends on securing the sending of info to the manager: If some signer can posit as not only themselves, but as other signers as well, they will be able to control several wallets and undermine the whole signing process. (See also chapter *Manually Configuring Signers* for more about such dangers.)

## Establishing the Multisig Address

In general, there are no MMS commands to execute particular steps regarding multisig transactions (with the exception of starting a transfer using `mms transfer` and force sync with `mms sync`). You just use the `mms next` command, and the MMS will do whatever is next in the "multisig workflow", and if nothing is ready, e.g. because some messages are still missing, will tell you the reason why nothing is "next" yet.

So, after you completed the info about all signers, either manually or through auto-config, you just issue a `mms next` command, and the MMS will start with the first step needed to establish the multisig address: Calculate *key sets* for all coalition members and set up messages to send those to them. The whole scene might look like this for Alice:

    [wallet A1VRwm]: mms next
    prepare_multisig
    MultisigV18uEUr5L7EvFDqKWvbnK2ys395ddRPuG6zaxNTwbDq3WoUNJtkPUPbRAEQKBaCC52g5iJXi8XUF4aUP9984hdFrHsP1y3W8yQkm
    YUSDYXzouhzd479tMmpL4LJKUoW5e54bubEg5E4J3BZtJQiGNzvVsiBKGAKgT7J4bcNN66Xq7hpL4V
    Send this multisig info to all other participants, then use make_multisig <threshold> <info1> [<info2>...] with others' multisig info
    This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants 
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       1 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. key set                     0   0 ready to send   2018-12-26 07:46:21, 1 seconds ago      
    Queued for sending.

The `prepare_multisig` output there is a hint that the MMS works by putting something like a "wrapper" about the CLI wallet `pepare_multisig` command, it even displays the `MultisigV1` string for confirmation. Now you don't have to send that manually to the other signer somehow: The MMS prepares a message for that and sends it in a fully automatic way.

After Alice receives Bob's key set, another `mms next` command will process it and establish the multisig address:

    [wallet A1VRwm]: mms next
    make_multisig
    Wallet password: 
    2/2 multisig address: 9uWY5Kq6XocGGqUByp22ty4HYxj4CfjCXdRrZ24EKvYW2U7fudSzCvTRRT35tMNx5heQfqKmVmFjahWUZ1BENnzH8UvyVF7

The wallet may be "out of sync" after this step; if yes, just do a quick `refresh`.

In the case of non-symmetrical M/N multisig, with M different from N, like e.g. in 2/3, it's not enough that each signer sends one key set to every other signer: There will be several *rounds* of key set exchanges. However the MMS knows about this and will automatically take care of almost everything: For a particular wallet it waits until the key sets of all other signers have arrived before going on. If there is another key exchange round necessary, `mms next` will then start a new one. If not, the command will process the last key set(s) and establish the multisig address.

It's possible that a future enhanced version of the MMS will do this in a fully automatic way, i.e. sending all necessary key sets around without further intervention until the multisig address is configured. For now however you have to push things along yourself by issuing `mms next` commands.

## Funding the Multisig Wallet

With the multisig address established the wallet is now ready to receive funds. Here the MMS plays no role, nor does multisig in general: Just transfer some coins to the address, to have something to transfer out later, and wait until they arrive.

## Syncing Wallets

Every time after receiving or sending coins multisig wallets must exchange some info with each other to get "into sync" again. That's the case whenever the CLI wallet tells you about *partial key images* like in this `balance` command output:

    [wallet 9uWY5K]: balance
    Currently selected account: [0] Primary account
    Tag: (No tag assigned)
    Balance: 7.000000000000, unlocked balance: 7.000000000000 (Some owned outputs have partial key images - import_multisig_info needed)

That "import_multisig_info needed" thing is perhaps the single most tiresome aspect of CryptoNote multisig transactions and quite some work e.g. in the case of 3/3 or 2/3 multisig where already a total of **six** pieces of information must be passed around each time, only to finalize reception of some coins and/or being able to transfer again after a transfer.

At least, with the MMS, it's only a case of issuing `mms next` commands until all sync data is sent and received and the wallets get into sync again: It guides you automatically through the necessary `export_multisig_info` and `import_multisig_info` commands. Here again how Alice sees this:

    [wallet 9uWY5K]: mms next
    export_multisig_info
    Multisig info exported to MMS
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       5 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. multisig sync data          1   0 ready to send   2018-12-26 08:58:14, 0 seconds ago      
    Queued for sending.
    MMS received new message
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       6 in   bob: BM-2cStcTfCx8D3McrMcmGZ.. multisig sync data          1   0 waiting         2018-12-26 08:59:45, 0 seconds ago      
    [wallet 9uWY5K]: mms next
    import_multisig_info
    Height 1117984, txid <b515082063a6242f1b62f21c80f95c90801f14ce3f48f51094d069e3580a78aa>, 7.000000000000, idx 0/0
    Multisig info imported03

Don't worry if you receive such sync messages from other signers already before you are able to start sending yours: The MMS will handle this situation quite fine and send first, process afterwards.

Check the chapter *Troubleshooting* if you ever get stuck somehow: E.g. there is a way to force sync even if `mms next` gets confused and thinks that syncing is not necessary or not possible. 

## Making Multisig Transactions

For initiating multisig transactions there is the command `mms transfer` instead of the normal `transfer` command. The MMS variant supports all the parameter variations of the normal command; thus to get help use `help transfer`.

The MMS does not care about subaddresses and accounts; whatever address you use for sending (and receiving) transactions, the MMS only cares about the data that the particular event creates, about the right moment to process that and about sending it to the right recipient(s).

If you don't like your transaction data to become part of the `.mms` file in the form of stored message content, you can use the normal `transfer` command, but then it's of course your problem to send the partially signed transaction to the next signer.

With multisig the `mms transfer` command does of course not yet transfer, but produces a partially-signed transaction instead. This stretches the concept of messages a bit because `mms transfer` produces a message to "me" i.e. the owner of the wallet itself, with the partially-signed transaction as content. Check message #7 below to Alice:

    [wallet 9uWY5K]: mms transfer 9zo5QDV9YivQ8Fdygt7BNdGo1c98yfAWxAz6HMwsf15Vf1Gkme9pjQG2Typ9JnBKv5goziC2MT93o3YDUfoWdU9XUinX5kS 5
    No payment id is included with this transaction. Is this okay?  (Y/Yes/N/No): y
    
    Transaction 1/1:
    Spending from address index 0
    Sending 5.000000000000.  The transaction fee is 0.000094300000
    Is this okay?  (Y/Yes/N/No): y
    Unsigned transaction(s) successfully written to MMS
    [wallet 9uWY5K]: mms list
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
      ...
       7 in   alice: BM-2cUVEbbb3H6ojddYQz.. partially signed tx         1   0 waiting         2018-12-26 09:10:42, 40 seconds ago     

The idea behind this: In this state, with the transaction waiting, and depending on the number of required signers, `mms next` will result in a question what to do with it: Especially in the case of 2/3 multisig, it's central to be able to decide **where** to send the transaction for the second signature that will make it valid, i.e. to **which** of the two possible signers.

This could look like in this case of 2/4 multisig:

    Unsigned transaction(s) successfully written to MMS
    [wallet 9vAbBk]: mms next
    Choose processing:
    1: Send the tx for signing to two: BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
    2: Send the tx for signing to three: BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa
    3: Send the tx for signing to four: BM-2cUjNoSxPkUY7ho4sPcEA6Rr26jqcasKiE

In the case of the 2/2 multisig example in this manual, there is no choice however: The transaction started by Alice has to go to Bob as the only other authorized and required signer:

    [wallet 9uWY5K]: mms next
    Send tx
      Id I/O  Authorized Signer              Message Type           Height   R Message State   Since                                   
       8 out  bob: BM-2cStcTfCx8D3McrMcmGZ.. partially signed tx         1   0 ready to send   2018-12-26 09:29:30, 0 seconds ago      
    Queued for sending.

After receiving Bob signs, as usual not with a dedicated signing command that does not exist, but by simply using `mms next`:

    [wallet 9uWY5K]: mms next
    sign_multisig
    Loaded 1 transactions, for 7.000000000000, fee 0.000094300000, sending 5.000000000000 to
     9zo5QDV9YivQ8Fdygt7BNdGo1c98yfAWxAz6HMwsf15Vf1Gkme9pjQG2Typ9JnBKv5goziC2MT93o3YDUfoWdU9XUinX5kS, 1.999905700000 change to
     9uWY5Kq6XocGGqUByp22ty4HYxj4CfjCXdRrZ24EKvYW2U7fudSzCvTRRT35tMNx5heQfqKmVmFjahWUZ1BENnzH8UvyVF7, with min ring size 11,
     no payment ID. Is this okay? (Y/Yes/N/No): y
    Transaction successfully signed to file MMS, txid c1f603a9045f28b28f221eddf55be41e95f2ac7213384a32d35cadc0a8be3026
    It may be relayed to the network with submit_multisig

Yet another `mms next` does result in a choice for Bob, because he can either submit the transaction to the network himself, **or** send it back to Alice for doing so:

    [wallet 9uWY5K]: mms next
    Choose processing:
    1: Submit tx
    2: Send the tx for submission to alice: BM-2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e
    Choice: 

As already mentioned elsewhere after the transaction is submitted to the network and processed you have to sync the wallets before you can do another transfer. Also note that regardless of any syncing needs it's a restriction of Monero multisig that you must do **strictly one transaction after the other**. For example you can't put away fully-signed transactions for submitting them later and already start a new one to submit that first. (For some such scenarious the MMS is not smart enough to prevent you from trying; see chapter *Troubleshooting* about how you can recover by deleting messages containing unprocessable transactions and forcing sync.)

As already mentioned you can keep out your transaction data out of the `.mms` file in the form of stored message content and use the normal `transfer` command, but then it's of course your problem to send the partially signed transaction to the next signer. Note also that the MMS does not support cold signing; that would be another reason to directly use `transfer` instead of `mms transfer`. You can, however, export transaction data contained in a message with the `mms export` command.

## The Commands in Detail

### mms init

    mms init <required_signers>/<authorized_signers> <own_label> <own_transport_address>

Example:

    mms init 2/2 alice 2cUVEbbb3H6ojddYQziK3RafJ5GPcFQv7e

Prepare a wallet for use with the MMS. You can later change your own label and your own transport address using `mms signer`, but the two numbers, required signers and authorized signers, cannot be changed without issuing `mms init` again which will erase all signer information and all messages. The command will lead to the creation of an additional file with an extension of `.mms` for the wallet.

For wallets created in "pre-MMS times" (before the MMS code was included in Monero) it's only possible to initialize the MMS if the wallet is not yet multisig. For wallets created with Monero code already present it's possible to initialize even with the wallet multisig already: When the wallet switched to multisig the "original" Monero address needed by the MMS was saved before it got replaced by the common multisig address.

There is no command to deactivate the MMS. If you no longer want to use it for a particular wallet, just delete the `.mms` file or at least move it out of the way.

### mms info

    mms [info]

Display whether the MMS is active or not, and if yes, show the number of required signers and number of authorized signers. This is the only MMS command allowed with the MMS inactive.

### mms signer

    mms signer [<number> <label> [<transport_address> [<monero_address>]]]

Examples:

    mms signer
	mms signer 2 bob BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa 9yXKZ6UUdd8NnNN5UyK34oXV7zp7gjgZ4WTKHk8KzWsAAuyksfqoeRMLLkdWur85vnc1YL5E2rrMdPMHunA8WzUS9EL3Uoj
	mms signer 2 bob-the-builder

Without argument, show the list of signers and their info, as far as known. Things never set and therefore still unknown are displayed as `<not set>`. Note that you don't have to and can't create signers: After `mms init` they already all "exist", although without any information set, with the exception of signer #1 which is always "me" i.e. the current wallet itself. Their number is fixed, it's the number of authorized signers as specified with `mms init`.

With at least a number and a label as argument, set information about a signer, or change any information already set. You can always freely change labels and transport addresses, but for technical reasons Monero addresses can only be changed as long as there are no messages. In the worst case do `mms init` again and start from scratch.

Numbers start with 1 and go up to the number of authorized signers.

A *label* must be a single word. Use characters like minus "-" or underscore "_" to write more complex labels like e.g. `alice_in_wonderland`. Labels must be unique for all signers. There is no fixed maximal length for labels but some output will look strange or become hard to read with very long labels.

A *transport address* can currently only be a Bitmessage address like e.g. `BM-2cStcTfCx8D3McrMcmGZYZcF4csKcQT2pa`, PyBitmessage being the only supported program for actual message transport. Transport addresses are not checked for syntax or validity by the MMS; if you enter a malformed address you will get an error message from PyBitmessage only later at first (attempted) use.

If you enter a wrong address i.e. not the correct address for the respective signer most probably nothing will happen, the messages will just not reach the intended recipient; if nobody holds the key for that address, with a Bitmessage client configured to receive messages to it, the message will just "float around" the Bitmessage network for a while and finally expire.

### mms list

    mms list

List all stored messages. There are no separate inbox and outbox; all messages are contained in a single chronological list. The columns in detail:

* `Id`: The unique id of the message that you can use to refer to the message in commands like `mms show` and `mms send`. Message ids count strictly upwards from 1. Ids of deleted messages won't get "recycled".
* `I/O`: Message direction. `in` denotes a message that you received, `out` a message that you sent. Note than for some message types you can receive a message from yourself, e.g. a partially signed transaction that you started yourself.
* `Authorized Signer`: In case of a received message, the sender, in case of a sent message, the recipient. Listed are the label and, within the width limit of the column, the transport address of the signer.
* `Message Type`: The type of the message telling what kind of data it contains. For a complete list of possible message types see below.
* `Height`: The number of transfers contained in the wallet at the time of message construction or reception. Used to group the "right" sync data messages which all must be from the same "height" for all other signers before sync can be successful. This height is unimportant for you except in cases where something went wrong; for more see chapter *Troubleshooting*.
* `R`: The number of the key exchange round a key set belongs to, if the type of multisig requires more than one round in the first place, like e.g. 2/3. 0 for all other message types.
* `Message State`: The current state of the message. `waiting` or `sent` for outgoing messages, `waiting` or `processed` for incoming messages. You can't directly change this state, it's always the result of the execution of commands.
* `Since`: Point in time and time span since the message got its current message state. Times are in UTC, not local time. If you re-send a message, this timestamp is not adjusted and continues to display the time of the first sending.

The complete list of message types:

* `key_set`: Data about keys that wallets must exchange with each other for establishing multisig addresses
* `additional_key_set`: A key set for an additional key exchange round, after the original one, as necessary for non-symmetric multisig types like e.g. 2/3
* `multisig_sync_data`: Data that wallets must exchange with each other to correctly and completely interpret incoming and outgoing transactions; see also chapter *Syncing Wallets*
* `partially_signed_tx`: A transaction that has not yet the necessary number of signatures (= number of required signers) to commit it
* `fully_signed_tx`: A transaction with a full set of required signatures, ready for submission to the Monero network; any signer could submit this
* `note`: A message containing a note; see command `mms note`
* `signer_config`: Full information about all signers, to be sent as part of an auto-config process or as a result of a `mms send_signer_config` command
* `auto_config_data`: Address data from a signer to send back to the auto-config manager after entering a token with `mms auto_config`

### mms next

    mms next [sync]

*The* central and probably most useful command of the MMS: Check the state of the wallet plus the received and sent messages and their message state, and decide which action is the next one to execute, and then actually execute it.

When in doubt, just issue a `mms next` command; the MMS will either execute the proper next command according to Monero's "multisig workflow rules", or tell you what it's waiting for before it can proceed. For "dangerous" things you can count on confirming prompts before the real action happens. Worst case a `mms next` can execute something earlier than you might have intended, but otherwise can hardly do any harm. 

Note how for many actions there is **no** dedicated command, and `mms next` the **only** way to move things forward. Don't look e.g. for commands to selectively process certain messages: If it's time to process some received messages in state *waiting*, the command will do so.

Interestingly and maybe surprisingly, in Monero it's **always** clear what has to happen next regarding multisig, except in the case of partially signed transactions where you can decide **which** signer sending them to, and in the case of fully signed transactions that you can submit yourself to the network or send them to another signer for submission by them.

The special command form `mms next sync` is for cases where sync data is waiting that the MMS on its own would not process because it "thinks" the wallet is in a state needing no new sync - which might be wrong. More about this in chapter *Troubleshooting*.

### mms sync

    mms sync

Manually start a round of syncing forcibly i.e. even if the MMS is of the opinion that no exchange of sync data is currently necessary. More about this in chapter *Troubleshooting*.

### mms transfer

    mms transfer <transfer_command_arguments>

Start a transfer under the control of the MMS, the difference to the standard `transfer` command being that the resulting partially signed transaction won't be written to a file that you have to handle further yourself, but that a message containing the transaction will result. Use `mms next` after `mms transfer` to ask the MMS to actually process the message which in effect means deciding which signer send it to for the next signature and create another message for that.

The arguments of the `mms transfer` command are exactly the same of those of the standard `transfer` command. Check the info about that command with `help transfer` to learn about all the various possible parameters and parameter combinations.

Note that quite in general the MMS does not care about addresses, subaddresses and acccounts. Regardless of what you specify in this regard for a `mms transfer` command afterwards there will always be a single new message containing the partially signed transaction.

Even with MMS active you can still use the standard `transfer` command; you are then simply on your own regarding handling the transaction. Try to use the right command variant; `transfer` won't ask for confirmation whether you really intend to use it instead of `mms transfer`. If you issued `transfer` but really wanted the MMS variant, ignore the written transaction file and simply go on with `mms transfer`.

The MMS does not, or at least not yet, keep track how many signatures a transaction actually has and who signed already and who not yet. Because of this weakness it can include choices that do not make sense, e.g. a choice to send a partially signed transaction to somebody who signed already.

This hardly matters with multisig types like 2/2 or 2/3, but of course the higher the number of authorized signers, the more acute this can become. Some attention by the signers is needed to do the right thing. You can't go wrong in an absolute sense however: The CLI wallet, or more exactly the CLI commands called internally by the MMS, will reject any attempts to do invalid actions.

### mms delete

    mms delete (<message_id> | all)

Delete a single message given its message id, or delete all messages by using the `all` parameter. Single messages will be deleted without confirmation even if not yet sent or not yet processed. A deleted message is gone for good, there is no undo, and it's gone from PyBitmessage's store as well. (If you lose a message you can ask the sender to re-send it to you.)

There are situations where you have to clear by deleting messages that did not get processed, got unprocessable and now "disturb the workflow"; more see chapter *Troubleshooting*. Deleting is also useful when somebody re-sends you a message and the original message finally reaches you as well later on.

You could say that the value of a sent or processed message itself is not very high as in most cases you won't ever need it again, and for many messages there are no commands to process them again on demand anyway. But of course the list of messages itself can be quite valuable to see what happened, and when, so better not delete messages without a good reason.

### mms send

    mms send [<message_id>]

Example:

    mms send 14

Without parameter send any messages in status *ready to send*. With a message id as parameter send or re-send that particular message. To be able to re-send a message is part of the "messaging system UX" and makes for a quite robust processing because there are very few situations that you can't recover from: The Bitmessage network ate your message? No problem, re-send. PyBitmessage crashed? No problem, restart PyBitmessage and re-send your message.

Whether messages are immediately sent or whether the MMS asks for confirmation to do so first depends on the value of the `auto-send` parameter; see `mms set` command. Getting each message to send presented that way may be useful for beginners because it's clearer to see what happens; on the other hand it hardly ever makes sense to postpone sending because something else has to be sent first.

"Sending" does not mean really send; the MMS just submits the message to PyBitmessage and *that* program will actually send. The MMS cannot give any feedback whether a message is still waiting to go out to the Bitmessage network or went out already. When in doubt, check in PyBitmessage itself.

Any mistakes in Bitmessage addresses will only be detected at the moment of sending; the MMS itself does not check those addresses.

### mms receive

    mms receive

Force an immediate check for received messages, or more exactly force an immediate query of the MMS to PyBitmessage whether there are any new messages.

The MMS checks for new incoming messages with the same frequence the CLI wallet checks for incoming transactions: Once very 90 seconds. And the setting to decide whether checking automatically or not is the same as well, `auto-refresh`.

### mms note

    mms note [<label> <text>]

Examples:

    mms note
    mms note bob Did you already submit the last transaction?
    mms note alice Yes, just waiting for the next block :)

Without parameters display any notes not yet read. With a label and further text as parameters send the text as a message of type `note` to the signer with the label.

Sending notes to each other directly from one Monero wallet to the next might be a fun way to avoid having to use additional communication channels for talking to signers.

If you want to read or re-read a particular note use the `mms show` command and look at the last line with the message content, in this case the text of the note.

### mms show

    mms show <message_id>

Show detailed information about the message with the id used as command parameter. Useful to read or re-read notes. Binary message content is not displayed; use the `mms export` command and inspect the resulting file if you need to check such a message content.

### mms export

    mms export <message_id>

Export the content of the message with the given id into a file with the fixed name `mms_message_content` in the current directory. An already existing file will be silently overwritten.

There is no `mms import` counterpart command yet.

### mms set

    mms set <option_name> [<option_value>]

Example:

    mms set auto-send 1

The MMS equivalent of the general `set` command. With only the name of an option show the current value of that option. With option name and option value set that option to the given value.

The only MMS-specific setting so far that this command handles is the `auto-send` setting. If set messages are not sent out automatically right after they are created but the MMS asks for confirmation first. See also `mms send` command. As soon as you are familiar with the MMS and comfortable using it it may be a good idea to set `auto-send` to 1 for less prompts and speedier progressing.

### mms start\_auto\_config

    mms start_auto_config [<label> <label> ...]

Example:

    mms start_auto_config bob trent

Start an auto-config process at the wallet of the "config manager" by creating auto-config tokens for every signer expect "me" i.e. the first one and do a `mms signer` command to display the tokens. Asks for confirmation if auto-config is seemingly already running because there are already tokens for signers in the signer configuration.

The manager has to transmit the auto-config tokens to the respective signers outside the MMS. Note that those tokens are sensitive information: A token in the hand of a non-signer or in the hand of the wrong signer will enable that person to impersonate the rightful signer i.e. take part in all transactions in stead of that signer.

Precondition for starting auto-config is *all* signers having a label assigned. The idea is that auto-config establishes the **same** labels in the wallets of all signers to make it clear to everybody who is who. (Only the order of the signers in each wallet will be different, because the owner of the wallet will always be signer #1.) Later the signers are free to change labels they don't like, as long as there is no danger to confound signers of course.

You can establish labels for all signers using the `mms signer` command beforehand, or more comfortably right with the `mms start_auto_config` command itself, by listing all labels except the label for "me" in the correct order as command arguments.

The command can be issued at basically any time, although of course it makes most sense at the beginning where for the wallets of all signers only `mms init` commands were executed yet.

Check chapter *Auto-Config* for a description of the following steps after this command.

### mms auto\_config

    mms auto_config <auto_config_token>

Example:

    mms auto_config mms561832e3eb

Process an auto-config token that you received from the "config manager" during an auto-config process through some reasonably secure communication channel outside of the MMS, e.g. SMS, smartphone messenger app, encrypted e-mail or phone call. Each signer gets their own distinct token. Treat any MMS auto-config tokens as confidential information.

This will result in a message of type `auto-config data` to send your Bitmessage address and your Monero address to the manager. (Transmission of that message is already as secure as any later MMS message, as long as nobody else knows your token.)

There is some tolerance in the way the MMS interprets entered tokens (e.g. they are not case-sensitive), and any typo will result in an invalid token with a high degree of probability and will be detected.

If it was decided to do auto-config best refrain from entering any signer information yourself manually with `mms signer`. (The MMS won't prevent it however.)

Check chapter *Auto-Config* for a complete list of all steps of an auto-config process.

### mms stop\_auto\_config

    mms stop_auto_config

Delete any auto-config tokens from signer configuration and stop any running auto-config process that way. 

Deleted tokens cannot be recoverd or reconstructed, as they are random. If you are the "config manager" and delete tokens you will never become able again to receive auto-config messages that other signers send to you using those deleted tokens. (Nobody else will receive them either, however.) Everybody will need new tokens issued by you.

### mms send\_signer\_config

    mms send_signer_config

Manually send your complete signer configuration to all other signers as messages of type `signer config`. After receiving your message they will be able to replace their signer configuration by yours with a `mms next` command. There will be a security prompt before that happens.

Each signer will get their label overwritten with the label you entered for them, but their own Bitmessage address and Monero address will be preserved.

This command and its capability to "broadcast" a particular signer configuration can serve as a building block for something like a "semi-auto-config". See also chapter *Sending Signer Configuration*. Sending out a complete signer configuration is also part of fully-automatic config, although without needing a separate `mms send_signer_config` command.

## Security

The MMS was carefully designed and implemented as a system offering a high degree of security.

Which was not particularly easy: Monero multisig itself is already a multi-faceted if not to say complex process and thus not trivial to secure, and the MMS is a powerful if not to say complex system on top of that, so it's no wonder that there are various possible security issues.

Note that this the very **first** version of the MMS, and it may well be that people using it in different circumstances will uncover new security problems beyond those mentioned here, or let some of them appear in a different light. There is reasonable hope however that the MMS does not have any deep and basically "unrepairable" conceptual flaws.

TL;DR: If in doubt, start to use the MMS only after you have configured your multisig wallets yourself on your own, presumably in more secure ways than the MMS could provide (not trivial, but doable). If in even more doubt, don't use the MMS.

### Use of Encryption and Signatures

All message content is encrypted either using the Monero viewkeys of the signers' Monero wallets, or with randomly generated keys of the same strength in the case of auto-config message contents. This may seem a little excessive given that PyBitmessage encrypts all messages itself already, but first PyBitmessage is a third-party software that you may not want to trust, and second with this feature the MMS is already prepared to some degree for less secure communication systems that don't encrypt themselves.

Messages are signed by the sender using their view private key. This is used for authentication: The MMS will reject a message from a signer that does not carry a valid signature that only that signer, and nobody else, could have made. Furthermore, a hash secures the message content against any changes. Lastly only messages from signers are accepted: A message from a Monero address that is not listed in the signer configuration gets rejected, even if it carries a valid signature.

The viewkey is also used to encrypt the content of the `.mms` file that contains signer configuration and all sent and received messages.

Still, regarding data transmission security requirements one should probably stay realistic: Of course you don't want the various data packets that get shuttled back and forth between the signers' wallets to get into the wrong hands, but it would not be easy to cause real harm for an attacker holding some of that data. After all, the whole point of multisig is that only a group of people **cooperating** can sign off and submit a transaction. An attacker that gets hold of a partially signed transaction won't be able to do much with it.

(An attacker eavesdropping on **all communication** from the very start probably could, if data was not encrypted, collect all keys and build a fully working Monero "single-sig" wallet for the multisig address and steal coins, but that's a pretty drastic scenario, and data sent by the MMS **is** encrypted.)

### Communication MMS to PyBitmessage

Communication between the MMS and PyBitmessage is, unfortunately, not encrypted. Here, HTTP is used, not its encrypted counterpart HTTPS. Message content is of course encrypted **before** the MMS transmits a message to PyBitmessage, and any content changes would be detected when receiving messages, but somebody listening there could learn things from the "metadata": Who sends what to whom at which point in time.

As long as your Monero wallet with the MMS and PyBitmessage run on the same machine, that's not a big danger in itself, because anybody who can listen on such strictly local communication `localhost` to `localhost` already sits inside your computer, in which case you have probably lost anyway, with the trojan listening to the traffic between MMS and PyBitmessage being the least of your worries.

But because of this it's not a good idea to set up a PyBitmessage instance reachable over the Internet, as some kind of "public node".

There is a second problem: The PyBitmessage API is only secured by a username and a password that has to be transmitted in cleartext with every HTTP request. It would be not very hard for an attacker to pick up username and password and starting DOS-type attacks, e.g. by deleting all messages in 10-second intervals.

(In PyBitmessage's defense one must say that is was **not** designed as a server that can face the big wide bad Internet, but as a program to run locally; it's hardly surprising that running it outside its intended use case leads to problems.)

### Impersonation

If Alice the buyer and Bob the seller use 2/3 multisig for *escrow* there will be Trent as a trusted third person that can arbitrate in case of problems and either help Alice get her money back if Bob does not deliver by signing a transaction started by Alice, or helping Bob getting his money if Alice likely got her wares but pretends otherwise and refuses to sign the payment to Bob.

In this *escrow* situation you really want **three** distinct persons in play. If Bob somehow can *impersonate* Trent by posing as him, by pretending to Alice to be two persons Bob plus Trent, and set up **two** different wallets with two sets of keys, Bob will be able to make those 2/3 multisig transactions valid all on his own and cheat.

How big this danger of impersonation is depends on how secure the initial exchange of key sets is at the very beginning of the whole process, when configuring the wallets and finally "going multisig": If you can assure that only the right people get the right key sets, and nobody can pose somehow as somebody else, everything is alright. If not, you may lose.

If you use the full capabilities of the MMS you don't use it only to transact, but already before that, to exchange key sets between all signers. Especially for higher forms of multisig like 2/4 with multiple key exchange rounds this is very helpful and less error-prone than some manual process. So, the task to prevent impersonation shifts from securing the exchange of keys to securely setting up signer addresses in the MMS: If Bob can somehow trick Alice into accepting one of **his** Monero and Bitmessage addresses in stead of those of Trent, he has won.

The three methods of setting up signer addresses that the MMS supports, manually configuring signers, auto-config and the "semi-automatic" sending of completed signer information, all have different risks associated with them regarding impersonation. Check the respective chapters *Manually Configuring Signers*, *Auto-Config* and *Sending Signer Information* for some more info about this.

Auto-config is by far the easiest to secure: You only have a tiny bit of information, an 11-character auto-config token, to transmit securely to each signer, and if you can do that, you have already won. (The "config manager" is of course assumed as trustworthy here.)

If this all sounds too complicated and therefore not trustworthy to you, you do have the option to configure wallets and establishing the multisig address leaving the MMS completely out of the picture and only later using it to comfortably send partially signed transactions around and relieve you from the tedious manual syncing of wallets after each transaction.

### Attacker-Controlled Data

There are two situations where your MMS-using wallet receives data from another signer where that other signer, if acting in bad faith, could try to deceive you or trick you into doing something harmful:

Notes as transmitted by the `mms note` command can be used for "social engineering". An attacker could e.g. try to formulate a note that looks like an error message in an attempt to deceive. The technical possibilities here are quite limited however: Notes are strictly textual only, and when displaying them the MMS filters out characters with ASCII codes less than 32 and the two characters "<" and ">" that could be used to build HTML or XML that might get interpreted somehow (very unlikely in the CLI wallet, but somewhat more likely in GUI-based wallets.) There is also a length limit for notes.

The second way is an attempt to deceive with labels that are sent through `mms send_signer_config`. Bob could label Alice as *trent* and Trent as *alice*, send that signer configuration to Alice and somehow convince her to use that. This is the reason why a message of type `singer config` if sent outside of auto-config with an explicit `mms send_signer_config` is not processed right away, but displayed first together with a confirmation prompt.

## Troubleshooting

### Solving Syncing Troubles

As explained in the chapter *Syncing Wallets* Monero multisig requires the exchange of some data between wallets after sending as well as receiving transactions, called *multisig sync data* in the MMS.

Sometimes things get out of sync somehow. There are four possible signs that this may have happened:

* The `balance` command shows a message *Some owned outputs have partial key images - import\_multisig\_info needed* that "refuses go away"
* The wallet tells you *That signature was made with stale data* and refuses to process a transaction further
* The wallet tells you about missing keys when you try to sign a transaction
* The wallet accuses you of a double-spending attempt with you probably trying nothing like that

In some such cases the MMS fails to become aware of the problem and simply tells you after `mms next` that there is nothing to do instead of starting a sync round.

Because of this there is a way to **force sync** at basically any time:

* All signers issue a `mms sync` command instead of simply `mms next` to send sync info to each other
* After receiving those messages all signers issue a `mms next sync` command - note the extra argument `sync`

For syncing to work all information must be from the same "height" i.e. produced with the same number of transfers recorded in the wallets of all signers: If for example one signer somehow does not receive a transaction and sends out sync information in this state, it will be of no value to other signers with complete wallets.

If the MMS seems to ignore not yet processed sync data messages in state `waiting` most probably it does so because of this reason. When in doubt check the column `Height` in a list of messages that you get with `mms list`.

Sometimes such not yet processed messages that became unprocessable trip up the `mms next` command. If that happens use `mms delete` to delete any message with a too-low height.

### Redirecting a Transaction to Another Signer

If in cases like 2/3 multisig you sent a partially-signed tx to somebody, but later change your mind and want to send it to somebody else, there is a little trick to do so: Locate the message of type `partially signed tx` addressed **to yourself** and issue a `mms send` command for that message. After reception, do `mms next`. You will be given choice again what to do with it.

Of course you are free to ignore that transaction and start a new one. Just consider that this new transaction might run into a roadblock later on if the first one gets fully signed and submitted to the network **earlier** than this second one.

### Ignoring Uncooperative Signers when Syncing

The normal MMS wallet syncing process assumes that all signers are cooperative and send out sync data messages after sending or receiving a transaction. `mms next` will therefore wait until it holds sync data messages (for the same "height") from **all** other signers before usually processing them.

However, with *M* being smaller than *N* in configurations like 2/3 multisig you can successfully sync with only (number of required signers minus 1) sync messages. `mms next` will tell you when you have reached this lower threshold and give a hint how to override and go ahead early: Use `mms next sync`.

If later you receive more sync data messages nevertheless just delete them with `mms delete`: They are unneeded, unprocessable for you and worst case will mess up the the next sync round.

Usually if you initiate sync the MMS will create messages to *all* other signers. If you want to prevent that to make it as hard as possible for other signers to transact further, make sure to set `auto-send` to false, answer "No" when first being asked to send, and manually delete any unwanted messages before sending the rest out with `mms send`.

### Recovering from Lost or Duplicate Messages

If you miss a message for any reason, because PyBitmessage failed to deliver it or because you deleted it too early, ask the sender of the message to send it again using the `mms send` command.

Note that messages sent multiple times do *not* automatically cancel out each other on the receiving end. If you resend e.g. just because somebody is impatient the addressed signer may end up receiving *two* messages of the same type with the same content.

If later the missing message belatedly shows up, that's not good, but you can solve this easily by using a `mms delete` command and get rid of one of the two copies.

### Correcting / Updating Signer Information

You can use the `mms signer` command to change a label `bob` that you don't like anymore:

    mms member 2 bob-the-builder

With one more argument you can change Bitmessage addresses if needed:

    mms member 2 bob BM-2cSrgmut9AD6bdU8b8GXd36iUYDjCS9xJb

You can even change Monero addresses in the same way (with the exception of your own of course), but with a limitation, only as long as there are no received messages. As soon as wallets are multisig it does not make sense anymore to change any Monero addresses anymore anyway.

### Starting from Scratch

If the state of the MMS for a wallet is messed-up beyond repair and you want to start from scratch, or if you want to stop using the MMS for a particular wallet, locate the wallet files in the file system and just delete the file with the `.mms` extension.

### MMS / PyBitmessage Interactions

Here some details about the interaction between the MMS and PyBitmessage to better understand any problems that may occur there:

The MMS tries to limit the number of messages that pile up in PyBitmessage's store and deletes them. However, for enhanced reliability it does not delete right after receiving already but only after a message changes its state from `waiting` to `processed`, or if you delete it from the message store. Sometimes messages get orphaned and the MMS has no chance to delete; you can safely delete such messages interactively in PyBitmessage itself.

If you use auto-config new addresses / identities will be created in PyBitmessage automatically for the MMS. It tries to delete those after finishing config, but note that the current version of PyBitmessage continues to display deleted addresses until next program restart: Harmless in principle, but somewhat confusing.

If such dynamic auto-config addresses don't get deleted at all e.g. because you delete a wallet beforehand unfortunately it seems there is no simple way in the current PyBitmessage version to get rid of them: You will have to manually locate and edit the `keys.dat` file and delete the corresponding lines (while hopefully not damaging anything else in there...)

Sometimes messages seem to get stuck and not sent out; try to restart PyBitmessage in such cases.