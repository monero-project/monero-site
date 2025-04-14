{% include disclaimer.html translated="yes" translationOutdated="no" %}

Av og til vil midlene dine bli «sittende fast» – du vil ha noen låste midler
som aldri blir ulåst. Slik kan du fikse det:

- Load your wallet in monero-wallet-cli.

- Type

> seed

i ledeteksten. Skriv ned frøet ditt på 25 ord dersom du ikke allerede har
gjort det. Dette er den beste måten å sørge for at du ikke mister tilgang
til midlene dine på.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Dette kan gjøres ved å kopiere filene til en ny mappe.

Av og til, når du oppretter lommeboken din, må du gi den et navn uten
.bin-delen. I dette tilfellet vil lommebokfilen kalles for dinlommebok uten
.bin på slutten.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.

