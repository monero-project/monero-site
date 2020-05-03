{% include disclaimer.html translated="yes" translationOutdated="no" %}

Het kan gebeuren dat je geld vast komt te zitten. Je Monero wordt vergrendeld maar nooit ontgrendeld. Dat kun je op de volgende manier oplossen.

- Laad je portemonnee in monero-wallet-cli.

- Typ

> seed

op de opdrachtregel. Schrijf je hersteltekst van 25 woorden op, als je dat nog niet eerder hebt gedaan. Dit is de beste manier om ervoor te zorgen dat je over je geld kunt blijven beschikken.

- Typ het volgende om monero-wallet-cli af te sluiten:

> exit

- Maak een back-up van alle bestanden die bij je portemonnee horen. Dit zijn:

> portemonnee.bin
> portemonnee.bin.keys
> portemonnee.bin.address.txt

Dit kun je doen door de bestanden naar een nieuwe map te kopiëren.

Het is mogelijk dat je je portemonnee een naam hebt gegeven zonder de toevoeging .bin. In dat geval heet het portemonneebestand portemonnee zonder .bin erachter.

- Verwijder portemonnee.bin

- Laad monero-wallet-cli en typ daarbij de naam in van de portemonnee die je net hebt verwijderd.

- Voer je wachtwoord in. De portemonnee wordt nu vernieuwd. Hopelijk wordt je vergrendelde geld daardoor ontgrendeld.

