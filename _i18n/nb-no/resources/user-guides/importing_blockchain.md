{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Hensikt og advarsel

De fleste trenger ikke dette. For å bruke Monero, kan du bare starte
programvaren, så vil den synkroniseres med seg selv med
p2p-nettverket. Dette går normalt mye raskere enn å laste ned og importere
blokkjeden, som beskrevet i denne guiden. Dette er fordi du må laste ned fra
mange noder i stedet for en enkel server, og Monero @daemonen vil verifisere
hver blokk mens den mottas istedenfor å verifisere den separat etter
nedlasting.

Dette valget er mest nyttig for utviklere, eller muligens dersom et uvanlig
problem hindrer deg fra å synkronisere på en normal måte.

**Never** use the dangerous unverified import option, it is strictly for experts only. Especially, don't use it with any blockchain you download from the Internet. It is only safe to use if a) you are importing a file that you exported locally, yourself *and* b) you are absolutely sure it was already fully and properly verified before exporting.

### Trinn 1

Finn stien som Monero-programvaren er installert på. Min er for eksempel:

`D:\monero-gui-0.10.3.1`

Stien din kan være en annen, avhengig av hvor du bestemte deg for å
installere Monero-programvaren og hvilken versjon av programvaren du har.

### Trinn 2

Finn stien til den nedlastede blokkjede. Min var for eksempel:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Din er kanskje en annen, avhengig av hvor du valgte å lagre blokkjeden.

### Trinn 3

Åpne kommandolinjevinduet. Du kan gjøre dette ved å holde inne
Windows-tasten + R, deretter taste inn `CMD` i popupboksen, og deretter
trykke på Enter.

### Trinn 4

Du må nå navigere ved å bruke CMD-vinduet til stien som Monero-programvaren
din befinner seg i. Du kan gjøre dette ved å taste inn:

`cd C:\YOUR\MONERO\PATH\HERE`

Det bør se ut noe som dette:

`cd D:\monero-gui-0.10.3.1`

Hvis Monero-programvaren din ligger på en annen disk, kan du bruke
`DriveLetter`: Hvis Monero-programvaren din for eksempel lå på D-disken din,
må du, før du bruker cd-kommandoen, bruke `D:`

### Trinn 5

Tast deretter inn i dette i ledetekstvinduet:

`monero-blockchain-import --input-file C:\YOUR\BLOCKCHAIN\FILE\PATH\HERE`

Jeg hadde for eksempel tastet inn:

`monero-blockchain-import --input-file
C:\Users\KeeJef\Downloads\blockchain.raw`

### Trinn 6

Etter blokkjeden er ferdig med å synkronisere, kan du åpne Monero-lommeboken
din som normalt. Din nedlastede blockchain.raw kan slettes.
