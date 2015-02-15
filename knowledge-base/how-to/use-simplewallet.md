---
layout:			default
---

#How to Use simplewallet

The native application for managing your Monero account is simplewallet.

simplewallet is a command line application, and is available in all of the official Monero packages. To use it you will need to start your local terminal application:

- If you are on Windows your terminal application is "Command Prompt", accessible from the Windows start menu or by typing ```cmd``` in the Windows "Run" box.

- In OS X it is Terminal.app, available from Spotlight or Launchpad.

- In Linux or FreeBSD it is natively in the command-line interface or using XTerm or similar, dependent on your preference and environment.

##Using simplewallet in Interactive Mode

In your terminal application, navigate to the directory where you downloaded simplewallet. Start simplewallet by entering ```simplewallet.exe``` (on Windows) or ```./simplewallet``` (on OS X / Linux / FreeBSD) and pressing enter.

By default simplewallet starts in "interactive mode", and you should see a screen similar to the one below. Further down in this guide you will learn how to get simplewallet to take specific actions straight off the command-line, but for now we'll cover the easiest way to use it.

    bitmonero wallet v0.8.8.5-final
    Specify wallet file name (e.g., wallet.bin). If the wallet doesn't exist, it will be created.
    Wallet file name:

At this stage you can use simplewallet to either open an existing wallet or to generate a new wallet. If this is your first time using simplewallet then you will want to generate a new wallet.



Simple Wallet will ask for the name of the wallet you'd like to open. In the case where you do not yet have a wallet, or perhaps you'd like to create a new wallet, enter a name for the wallet that does not correspond to any wallet you've created before. 
The wallet name should be in the following format: walletname.bin. A message will indicate that the wallet name you've entered does not already exist, and therefore Simple Wallet is generating you a new wallet.

Specify wallet file name (e.g., wallet.bin). If the wallet doesn't exist, it will be created.
Wallet file name: test.bin
The wallet doesn't exist, generating new one
password: *****

You will next be prompted for a password. This is to set the password needed to access this wallet in the future. Therefore, even if someone stole the physical wallet .bin file off of your computer, they would still need this password to access the funds. Enter your password of choice, there are no password restrictions, but it's still advisable to use something that is secure. 

 






New Wallet Address and View Key:
You will be presented be presented with your new wallet address, where you'll be able to receive transfers. This address will be available again once logged into the wallet, and can be recalled by using the address function. Your specific view key is the Simple Wallet client will use in order to scan the blockchain for transactions belonging to your particular address.

Generated new wallet: 46wsPNzQFk5EfHLMWDnuKa4LtdLzpwf4qa1AVLrnzbFGaRUA4h4Go6BcBuGrcxdMztm8GsYS8Rx1JPSfm4SPP94b1Fw26be
view key: b9e1fde664a2fda8f74f3e3e970a9cf480420d4bbcc40g438bd244e1132cb80e

Your Recovery Seed:
You will be presented with a 24 word mnemonic which will act as the your recovery key if you ever lose your wallet file, or forget your password. It will also allow you to restore your wallet on a different computer. These 24 words should be stored in a secure place, ideally not on your local machine. This mnemonic will act as your only method of recovering your wallet in the situation where your machine is stolen, damaged or compromised.

**********************************************************************
Your wallet has been generated.
To start synchronizing with the daemon use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing simplewallet to save
current session's state. Otherwise, you will possibly need to synchronize 
your wallet again. Your wallet key is NOT under risk anyway.


PLEASE NOTE: the following 24 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

cheek tough hill gone nose chocolate wash soothe weakness teacher slowly march cheat plastic cover brother ourselves relationship erase begun ever sorry outside men 
**********************************************************************





















OPENING YOUR WALLET

In your terminal application, navigate to the directory where Simple Wallet is stored, and open up simplewallet.

 

Specify Wallet File Name and Password:
Simple Wallet will prompt the user to enter their wallet's name. Note, that if you have not created a wallet before, Simple Wallet will create a new wallet for you using the name you enter. The wallet file uses a .bin extension, which you must use when creating or opening a wallet. 

Specify wallet file name (e.g., wallet.bin). If the wallet doesn't exist, it will be created.
Wallet file name: testing.bin
password: *****

Simple Wallet will now ask for the password related to this wallet you've selected. This password is masked, but once entered correctly will log you into the wallet.

The First Page:
Once you've logged into Simple Wallet successfully, it was present your wallet address to you, and start refreshing from the blockchain, which has been downloaded through the bitmonerod, and once it is up to date, it will display your current balance.

Opened wallet: 42nLgrRf38tGEpXnmzvJ6kg2Jro5FutQYL4CWbfNVQtW4CPXZjG4CJPid4pAqgMznAXQfTDBrQTu2TtdCMmSFejT9oMpRGr
Starting refresh...
Refresh done, blocks received: 11
balance: 2.000000000000, unlocked balance: 2.000000000000
*************************************************************


BASIC COMMANDS

Using simple wallet will rely on a few basic commands:

Address:
Using the address command in Simple Wallet will have the application display the address for the wallet which you currently have open.

[wallet 42nLgr]: address
42nLgrRf38tGEpXnmzvJ6kg2Jro5FutQYL4CWbfNVQtW4CPXZjG4CJPid4pAqgMznAXQfTDBrQTu2TtdCMmSFejT9oMpRGr

Balance:
The balance command will display your last verified balance in the account, since the last time your wallet was synced with the blockchain.

[wallet 42nLgr]: balance
balance: 2.000000000000, unlocked balance: 2.000000000000

Refresh:
In order to sync your wallet with the current blockchain, the refresh command needs to be used. This is not automatic, and therefore any transfers received into your account will not reflect until a refresh is manually done. Note that your current balance will be displayed after a refresh is successful.

[wallet 42nLgr]: refresh
Starting refresh...
Refresh done, blocks received: 186                              
balance: 2.000000000000, unlocked balance: 2.000000000000

Seed:
In order to view your 24-word mnemonic again, you may use the seed command in order to display it again in the terminal.

[wallet 46wsPN]: seed

PLEASE NOTE: the following 24 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

check tough will gone nose coffee wash soothe weak teacher slowly march cheat plastic cover sister ourselves relationship erase begun every sorry outs

TRANSFERING AND RECEIVING

Transfering:
The transfer command is what you will use when transferring XMR to another account, whether it's to one of your own accounts, or if you're making a payment to someone. Once you enter the word transfer into the terminal, it will require three arguments to succeed it:
1.	The mix-in amount, which can be thought of as the level of ambiguity of your transaction. Your transaction will get mixed in with this number of other user's transactions, thereby making it anonymous. The higher the mix-in value however, the larger the transaction will be, which will result in a larger transaction fee.
2.	The address of the recipient.
3.	The amount of XMR that you'd like to transfer.
These arguments will only be separated by a single space.

[wallet 42nLgr]: transfer 3 427bfXsSKL9e9PBjHh3QBNbMsLggEVmE1BpzwQet1Z6QUuEUW7XJAc2SwaSg6FhxcgjCPBqAUS1hqS8SqBNKLJFJVRr5MTy 0.2
Money successfully sent, transaction <26ed42a8143c22766dbc52bed8416cb226c2964d06a683cc165153bfb78fa6b3>


Receiving:
When receiving an amount no action is need by you as the user, other than to refresh Simple Wallet in order for the received amount to reflect in your total balance, once the block holding your transaction has been mined and confirmed. When you refresh Simple Wallet, it will display any transactions that have involved your wallet since the last refresh. If a transaction has occurred on your wallet, It will provide the height of the blockchain where the transaction occurred, the transaction ID, and either a received amount or spent amount.


[wallet 46wsPN]: refresh
Starting refresh...
Height 272122, transaction <499cee1f18db20ec0b7eec069e40d5e377afbfeb9b1df16d120a7650c171de0f>, received 0.200000000000
Refresh done, blocks received: 865                              
balance: 0.200000000000, unlocked balance: 0.200000000000

Transaction History:

In order to check the history of all your received transfers you can use the incoming_transfers command. This will display all your received amounts into the wallet you currently have open. In addition, it will indicate whether those amounts have been spent through a spent flag, either (f)alse or (t)rue. It will also provide the global index and transaction ID for reference purposes. 

[wallet 46wsPN]: incoming_transfers
        amount       	          spent    	  global index	                              tx id
       0.200000000000	  F  	      576828	         <499cee1f18db20ec0b7eec069e40d5e377
       afbfeb9b1df16d120a7650c171de0f>











CLOSING YOUR WALLET

Saving:
In order to save the synchronized blockchain data to the Simple Wallet directory, you will use the save command. Saving this data eliminates the need to re-sync your wallet with data that has already been synchronized during your current session. Therefore, the next time you open you wallet, Simple Wallet will only refresh from this save point. 

[wallet 46wsPN]: save
Wallet data saved

Exiting:
Once you are ready to close your wallet, you will use the exit command. This will initiate a save, close your wallet and return you to the terminal home directory.
