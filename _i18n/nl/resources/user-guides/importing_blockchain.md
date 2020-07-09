{% include disclaimer.html translated="yes" translationOutdated="yes" %}

### Stap 1

Download het huidige bootstrap-bestand van https://downloads.getmonero.org/blockchain.raw. Deze stap kun je overslaan als je de blockchain uit een andere bron importeert.

### Stap 2

Zoek het pad van je Monero-portemonnee op (de map waar je de Monero-software hebt uitgepakt). Mijn pad is bijvoorbeeld:

`D:\monero-gui-0.10.3.1`

Je kunt een ander pad hebben, afhankelijk van waar je de portemonnee hebt gedownload en welke versie van de Monero-portemonnee je gebruikt.

### Stap 3

Zoek het pad op van de blockchain die je hebt gedownload. Voor mij is het bijvoorbeeld:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Voor jou kan het anders zijn, afhankelijk van waar je de blockchain hebt gedownload.

### Stap 4

Open een opdrachtregelvenster. Dit kun je doen door op de Windows-toets + R te drukken en vervolgens in het pop-upvenster `CMD` te typen.

### Stap 5

Nu moet je in het CMD-venster naar het pad van je Monero-portemonnee navigeren. Dit kun je doen door het volgende te typen:

`cd C:\HIER\HET\BESTANDSPAD\VAN\JE\MONERO-PORTEMONNEE`

Bijvoorbeeld zoiets:

`cd D:\monero-gui-0.10.3.1`

Als je Monero-portemonnee op een ander station staat, gebruik je `Stationsletter:`. Bijvoorbeeld: als je portemonnee op station D staat, voer je `D:` in voordat je de `cd`-opdracht gebruikt.

### Stap 6

Typ nu het volgende in het opdrachtregelvenster:

`monero-blockchain-import --input-file C:\HIER\HET\BESTANDSPAD\VAN\JE\BLOCKCHAIN`

Ik zou bijvoorbeeld het volgende typen:

`monero-blockchain-import --input-file C:\Users\KeeJef\Downloads\blockchain.raw`

Als je de blockchain hebt gedownload van een bron die je vertrouwt, kun je de instelling `verify 0` opgeven. Hiermee wordt de blockchain sneller gesynchroniseerd.  

### Stap 7

Nadat de blockchain is gesynchroniseerd, kun je je Monero-portemonnee op de normale manier openen. Het gedownloade bestand blockchain.raw kun je verwijderen.


Geschreven door: Kee Jefferys.
