{% include disclaimer.html translated="no" translationOutdated="no" %}

## Operating Systems:  Various versions of Linux and Windows 7, 8

### Wallet Software:  Simplewallet

#### Resource for Creating Bootable Disks:  [Linux](http://www.pendrivelinux.com/),       [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

#### Resource for Monero Binaries:  [Monero Binaries]({{ site.baseurl_root }}/downloads/)

- Take any computer you have lying around, even your normal workstation. You may find it easier to use an older computer that has no wifi or bluetooth if you're particularly paranoid

- Create a Linux or Windows bootable disk, and make sure you have the Monero binaries on the same disk or on a second disk (for Linux make sure you have also downloaded copies of the dependencies you will need, libboost1.55 and miniupnpc for instance)

- Disconnect the network and/or Internet cables from your computer, physically remove the wifi card or switch the wifi/bluetooth off on a laptop if possible

- Boot into your bootable OS, install the dependencies if necessary

- Copy the Monero binaries to a RAM disk (/dev/shm in Linux, Windows bootable ISOs normally have a Z: drive or something)

- Don't run the Monero @daemon. Instead, using the command line, use monero-wallet-cli to create a new Monero @account

- When prompted for a name, give it any name, it doesn't really matter

- When prompted for a password, type in like 50 - 100 random characters. Don't worry that you don't know the password, just make it LONG

- **CRITICAL STEP**: Write down (on paper) your 25 word @mnemonic-seed  
**WARNING**:  If you forget to write down this information your funds may be lost forever

- Write down (on your phone, on paper, on another computer, wherever you want) your address and view key

- Switch off the computer, remove the battery if there is one, and leave it physically off for a few hours

The account you've created was created in RAM, and the digital files are now inaccessible. If some adversary manages to somehow obtain the data, they will lack the long password to open it. If you need to receive payments, you have your public address, and you have the view key if needed. If you need access to it, you have your 25 word @mnemonic-seed, and you can now write out several copies of it, including an offsite copy (e.g. a bank deposit box).

Related:  [Offline Account Generator](http://moneroaddress.org/)
