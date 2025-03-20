{% include disclaimer.html translated="no" translationOutdated="no" %}

### Purpose and Warning

Most people don't need this. To use Monero, just start the software and it
will synchronize itself with the peer-to-peer network. Normally, this is
much faster than downloading and importing the blockchain as detailed in
this guide. This is because you'll be downloading from many peers instead of
just a single server, and the Monero @daemon will verify each block as it's
received, instead of verifying separately after downloading.

Esta opción es más que nada útil para el desarrollo, o posiblemente en el
caso de que algún problema inusual te está impidiendo sincronizar de forma
normal.

**Never** use the dangerous unverified import option, it is strictly for experts only. Especially, don't use it with any blockchain you download from the Internet. It is only safe to use if a) you are importing a file that you exported locally, yourself *and* b) you are absolutely sure it was already fully and properly verified before exporting.

### Paso 1

Find the path where the Monero software is installed. For example mine is:

`D:\monero-gui-0.10.3.1`

Tu ruta de acceso podrá ser diferente dependiendo de dónde hayas decidido
instalar el software de Monero, y que versión del software tengas.

### Paso 2

Find the path of your downloaded blockchain for example mine was:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Yours might be different depending on where you chose to save the downloaded
blockchain.

### Paso 3

Open a Command Prompt window. You can do this by pressing the Windows key +
R, and then typing in the popup box `CMD` and pressing Enter.

### Paso 4

Now you need to navigate using the CMD window to the path of your Monero
software. You can do this by typing:

`cd C:\YOUR\MONERO\PATH\HERE`

Debería parecer algo asi:

`cd D:\monero-gui-0.10.3.1`

If your Monero software is on another drive you can use `DriveLetter:` for
example if your Monero software was on your D drive then before using the cd
command you would do `D:`

### Paso 5

Now type in your command prompt window:

`monero-blockchain-import --input-file C:\YOUR\BLOCKCHAIN\FILE\PATH\HERE`

For example I would type :

`monero-blockchain-import --input-file
C:\Users\KeeJef\Downloads\blockchain.raw`

### Paso 6

After the blockchain has finished syncing up you can open your Monero wallet
normally. Your downloaded blockchain.raw can be deleted.
