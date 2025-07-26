{% include disclaimer.html translated="yes" translationOutdated="no" %}

Czasami, Twoje fundusze utkną - będziesz miał kilka zablokowanych funduszy,
które nigdy nie zostaną odblokowane. Oto jak to naprawić.

- Load your wallet in monero-wallet-cli.

- Type

> seed

do wiersza polecenia. Wpisz swój 25-słowny kod mnemoniczny, jeśli jeszcze
tego nie zrobiłeś. To najlepszy sposób na zapewnienie ciągłego dostępu do
twoich funduszy.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Możesz tego dokonać, kopiując pliki do nowego folderu.

Czasami przy zakładaniu portfela mogłeś go nazwać bez końcówki ".bin". W
takim przypadku plik portfela będzie się nazywał nazwaportfela - bez
końcówki ".bin".

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.

