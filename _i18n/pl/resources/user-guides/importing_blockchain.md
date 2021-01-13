{% include disclaimer.html translated="no" translationOutdated="no" %}

### Purpose and Warning

Most people don't need this. To use Monero, just start the software and it will synchronize itself with the peer-to-peer network. Normally, this is much faster than downloading and importing the blockchain as detailed in this guide. This is because you'll be downloading from many peers instead of just a single server, and the Monero @daemon will verify each block as it's received, instead of verifying separately after downloading.

This option is mostly useful for development, or possibly if some unusual problem is preventing you from syncing the normal way.

**Never** use the dangerous unverified import option, it is strictly for experts only. Especially, don't use it with any blockchain you download from the Internet, including the official site. It is only safe to use if a) you are importing a file that you exported locally, yourself *and* b) you are absolutely sure it was already fully and properly verified before exporting.

### Step 1

Download the Current bootstrap from https://downloads.getmonero.org/blockchain.raw; you can skip this step if you are importing the blockchain from another source.

### Step 2

Find the path where the Monero software is installed. For example mine is:

`D:\monero-gui-0.10.3.1`

Your path may be different depending on where you decided to install the Monero software, and what version of the software you have.

### Step 3

Find the path of your downloaded blockchain for example mine was:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Yours might be different depending on where you chose to save the downloaded blockchain.

### Step 4

Open a Command Prompt window. You can do this by pressing the Windows key + R, and then typing in the popup box `CMD` and pressing Enter.

### Step 5

Now you need to navigate using the CMD window to the path of your Monero software. You can do this by typing:

`cd C:\YOUR\MONERO\PATH\HERE`

It should look something like:

`cd D:\monero-gui-0.10.3.1`

If your Monero software is on another drive you can use `DriveLetter:` for example if your Monero software was on your D drive then before using the cd command you would do `D:`

### Step 6

Now type in your command prompt window:

`monero-blockchain-import --input-file C:\YOUR\BLOCKCHAIN\FILE\PATH\HERE`

For example I would type :

`monero-blockchain-import --input-file C:\Users\KeeJef\Downloads\blockchain.raw`

### Step 7

After the the blockchain has finished syncing up you can open your Monero wallet normally. Your downloaded blockchain.raw can be deleted.
