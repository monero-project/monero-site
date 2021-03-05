{% include disclaimer.html translated="yes" translationOutdated="no" %}

Av og til vil midlene dine bli «sittende fast» – du vil ha noen låste midler som aldri blir ulåst. Slik kan du fikse det:

- Last inn lommeboken din i monero-wallet-cli.

- Tast inn

> seed

i ledeteksten. Skriv ned frøet ditt på 25 ord dersom du ikke allerede har gjort det. Dette er den beste måten å sørge for at du ikke mister tilgang til midlene dine på.

- Lukk monero-wallet-cli ved å taste inn

> exit

- Sikkerhetskopier alle de lommebokrelaterte filene dine. Disse inkluderer:

> dinlommebok.bin
> dinlommebok.bin.keys
> dinlommebok.bin.address.txt

Dette kan gjøres ved å kopiere filene til en ny mappe.

Av og til, når du oppretter lommeboken din, må du gi den et navn uten .bin-delen. I dette tilfellet vil lommebokfilen kalles for dinlommebok uten .bin på slutten.

- Slett dinlommebok.bin

- Last inn monero-wallet-cli, og tast inn navnet på lommeboken du nettopp slettet.

- Skriv inn passordet. Lommeboken vil nå oppdateres, og forhåpentligvis vil de låste midlene dine nå bli ulåst.

