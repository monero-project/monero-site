{% include untranslated.html %}
## How to purchase Monero and securely store it.

This is a guide to purchase and securely store Monero as of June 2017. 

#### Step 1: Buy Bitcoin

There are many ways to buy Bitcoin. Two semi-reliable companies at this time are Xapo <http://www.xapo.com/> and Coinbase <http://www.coinbase.com/>. The process will involve uploading your personal identification (State ID, Passport, etc.) and will take anywhere from 2 to 10 days (or longer).  Verify their reputation on Reddit before making a large purchase.  Xapo uses Wire Transfer and Coinbase uses Bank Transfer (ACH in the USA).  Xapo should be faster than Coinbase.  Coinbase also allows small "instant" buys via a debit card but adds a large fee for this option. Once you have purchased Bitcoin, you are ready to convert it to Monero!

#### Step 2: Download and create a Paper Wallet on a secure and air-gapped computer.

Download the paper wallet generator at: https://moneroaddress.org and copy it to a USB stick (Direct link: https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip). 

Unzip and open the paper wallet generator (monero-wallet-generator.html) into a web browser on an air-gapped computer that hasn't been used before, or has had a clean installation of the OS. 

Your paper wallet will have four important items:

Monero Public Address
The public address is used to receive funds to the wallet.  You give this to anyone who will be sending funds to your wallet.

Monero Mnemonic Seed
The mnemonic seed is a method of storing the entire wallet that is easily recognizable to humans.  This is all you need to restore your wallet at a later date.

Monero Private Spend Key
The private spend key is used to send funds from the wallet.

Monero Private View Key
The private view key is to view transactions entering the wallet. Commonly this is used to setup a view-only only wallet which can see incoming transactions live on the blockchain as they are sent to a cold storage wallet.

At this point you have many options.  You can print the wallet on paper, save it as a PDF or text on a USB stick, burn it to CD/DVD, etc.  Most likely you will want at least two or three copies, stored securely in different locations.  If storing digitally, encrypt everything with a strong password.  If storing on paper, do not show the wallet to anyone else who can memorize your 25 word key, or take a picture of the wallet without your permission.  Sending someone a picture of the wallet is the same as giving away all of your funds.

Whichever method you chose, be sure there's no copy of the Monero wallet left over on the device you used.  You may need to securely delete the Monero wallet if you saved it to a disk, or make sure your printer does not save a copy in memory.

*If you lose access to your Monero paper wallet the Monero will not be available to you or anyone else, ever.  You wont be able to recover them!

#### Side Note
Option to encrypt an XMR mnemonic seed:
https://xmr.llcoins.net/
Download the html page and place it on your airgapped computer. Check the part "Encrypt/Decrypt Mnemonic Seed" and make sure you use "CN Add" with a decent password. Thanks manicminer5.



#### Step 3: Convert your Bitcoin to Monero and have it sent to your Monero Paper Wallet

Switch to your internet connected computer and go to www.shapeshift.io. Choose "Deposit Bitcoin" and "Receive Monero" (quick).

Press Continue.

Your Monero Address (the Monero Public Address on your Monero Paper Wallet)
Paste the Monero Public address from your paper wallet where it says "Your Monero Address".   But wait, since your Monero Public Address is on an airgapped computer (right?), you can't copy and paste anything...  Copy it over by hand, or get a blank USB drive and copy only the Public Address to it.

Refund Address (Bitcoin Public Address you can receive funds at)
Enter a Bitcoin address that you control where a refund can be sent in case there's a problem with the transaction.  It's very important that you enter a Bitcoin Public Address you control or can receive funds at.  At Xapo and Coinbase this is called a Receive Address and it may change periodically.

Payment ID
Leave Payment ID blank if you are sending to your own Monero wallet or Monero paper wallet.

Agree to the Terms and hit the slider to make this a "Reusable Address".  

Press "Start Transaction".

Deposit Address (Shapeshift.io's Public Bitcoin Address created only to receive your funds)
In the new screen that pops up, copy the Deposit Address into your clipboard (select and hit ctrl+c or edit-copy).  You will send Bitcoin from Xapo/Coinbase to Shapeshift.io via this address.

Go to your Xapo or Circle account, and find a Transfer or Send button. Paste the Bitcoin Deposit address into the Destination field and enter the amount of bitcoin you would like to have converted to Monero.  It must be within the Deposit Min and Deposit Max range specified by Shapeshift.io.  Press Send and authorize the transaction, if required.

Once the send has been initiated by Xapo/Coinbase there will be a delay while the transaction enters the Bitcoin blockchain and awaits confirmation.  This may be minutes or hours.  You can check if the payment has been sent by looking up the Shapeshift.io Deposit address at blockchain.info.  Your transaction to Shapeshift.io will show up there.

When your Bitcoin transaction has been confirmed, Shapeshift.io will then begin exchanging Bitcoin (BTC) for Monero (XMR) at one of the exchanges and when it's complete, send the Monero to the address of your Cold Storage Paper Wallet!  This can take minutes to hours.  If there's an issue, contact Shapeshift.io.  They have good support.

When the Shapehift.io webpage says your transaction has been completed, you should now have Monero in your Paper Wallet!


#### Notes and How to Verify Funds
Because the Monero blockchain is private and untraceable, you won't be able to lookup your Monero Public Address and confirm that the funds have arrived like you might with Bitcoin.  This is good for privacy, but bad for convenience.

To securely verify the funds have arrived at your wallet, you will need to setup a View Only wallet.  This is where that view-key comes in.  To create a view-only wallet see the entry: [View Only Wallets]({{site.baseurl}}/resources/user-guides/view_only.html)

To verify the funds are *still in* your wallet and have not been spent you need to create a Cold Wallet with your mnemonic key (all your funds) on an airgapped computer with an up-to-date copy of the Monero Blockchain. When finished you will have to securely erase the wallet or connect it to the internet and it becomes a Hot Wallet.



