{% include disclaimer.html translated="yes" translationOutdated="no" %}

Het kan gebeuren dat je geld vast komt te zitten. Je Monero wordt
vergrendeld maar nooit ontgrendeld. Dat kun je op de volgende manier
oplossen.

- Load your wallet in monero-wallet-cli.

- Type

> seed

op de opdrachtregel. Schrijf je hersteltekst van 25 woorden op, als je dat
nog niet eerder hebt gedaan. Dit is de beste manier om ervoor te zorgen dat
je over je geld kunt blijven beschikken.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

Dit kun je doen door de bestanden naar een nieuwe map te kopiëren.

Het is mogelijk dat je je portemonnee een naam hebt gegeven zonder de
toevoeging .bin. In dat geval heet het portemonneebestand portemonnee zonder
.bin erachter.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked
  funds will now become unlocked.

