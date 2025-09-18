{% include disclaimer.html translated="no" translationOutdated="no" %}

## Paso 1: Adquiere Monero

There are multiple ways to acquire Monero: You can mine it, you can exchange
services or goods for it, or you can convert other cryptocurrencies and fiat
money to XMR. If you choose the latter, the most convenient way to do it is
to use an exchange.

Hay múltiples servicios de intercambio donde puedes comprar o vender
Monero. Algunos son centralizados, los cuales usualmente tienen mucha
liquidez y un servicio rápido, pero requieren que proveas de información
personal antes de empezar a comerciar (KYC). Otros son descentralizados y no
requieren ninguna identificación, pero usualmente tienen menos volumen y
pueden ser más difíciles de usar. También hay servicios que permiten que las
personas concerten encuentros y realicen intercambios sin la intervención de
terceros.

An incomplete list of Exchanges that support Monero is on our [Merchants
page]({{ site.baseurl }}/community/merchants/#exchanges).

## Paso 2: Descarga y crea un Monedero en Papel en un ordenador aislado y seguro.

Download the @paper-wallet generator at: [getmonero.org/generator]({{
site.baseurl}}/generator) and copy it to a USB stick (direct link:
[wallet-generator.zip]({{ site.baseurl
}}/resources/wallet-generator/wallet-generator.zip)).

Extra y abre el generador de monedero en papel (wallet-generator.html) en un
navegador en una computadora aislada (@airgap) que no haya sido usada antes,
o que haya tenido una instalación limpia del sistema operativo.

Tu monedero en papel tendrá cuatro puntos importantes:

- Monero Public @Address: The public address is used to receive funds to the
  @wallet. You give this to anyone who will be sending funds to your wallet.

- Monero @Mnemonic-Seed: The mnemonic seed is a method of storing the entire
  wallet that is easily recognizable to humans.  This is all you need to
  restore your wallet at a later date.

- Monero @Spend-Key: The private spend key is used to send funds from the
  wallet.

- Monero @View-Key: The private view key is to view transactions entering
  the wallet. Commonly this is used to setup a view-only wallet which can
  see incoming transactions live on the blockchain as they are sent to a
  cold storage wallet.

At this point you have many options. You can print the wallet on paper, save
it as a PDF or text on a USB stick, burn it to CD/DVD, etc. Most likely you
will want at least two or three copies, stored securely in different
locations. If storing digitally, encrypt everything with a strong password.
If storing on paper, do not show the wallet to anyone else who can memorize
your 25 word key, or take a picture of the wallet without your permission.
Sending someone a picture of the wallet is the same as giving away all of
your funds.

Whichever method you chose, be sure there's no copy of the Monero wallet
left over on the device you used. You may need to securely delete the Monero
wallet if you saved it to a disk, or make sure your printer does not save a
copy in memory.

*If you lose access to your Monero paper wallet the Monero will not be available to you or anyone else, ever. You wont be able to recover them!*

#### Nota Aparte

Option to encrypt an XMR mnemonic seed: https://xmr.llcoins.net/  
Download the html page and place it on your airgapped computer. Check the
part "Encrypt/Decrypt Mnemonic Seed" and make sure you use "CN Add" with a
decent password. Thanks manicminer5.

## Step 3: Send your Moneroj to the paper wallet

Now that you have everything you need, you are ready to send your XMR to your paper wallet. Simply send the coins to the wallet address you noted earlier. Make sure the address is correct, even if you copy-pasted it! Remember that if you send the coins to a wrong address, there is no way to have them back!  

#### Notes and How to Verify Funds

Because the Monero blockchain is private and untraceable, you won't be able
to lookup your Monero Public Address and confirm that the funds have arrived
like you might with Bitcoin. This is good for privacy, but bad for
convenience.

To securely verify the funds have arrived at your wallet, you will need to
setup a View Only wallet. This is where that view-key comes in. To create a
view-only wallet see the entry: [View Only
Wallets]({{site.baseurl}}/resources/user-guides/view_only.html)

To verify the funds are *still in* your wallet and have not been spent you
need to create a Cold Wallet with your mnemonic key (all your funds) on an
airgapped computer with an up-to-date copy of the Monero Blockchain. When
finished you will have to securely erase the wallet or connect it to the
internet and it becomes a Hot Wallet.
