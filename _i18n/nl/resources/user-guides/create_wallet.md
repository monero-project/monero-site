{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
### Besturingssystemen:  Ubuntu

- Download de [officiële binaries](https://getmonero.org/downloads/) of compileer de nieuwste broncode die beschikbaar is op [Github](https://github.com/monero-project/bitmonero).

![image1](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/1.png)
![image2](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/2.png)

- Pak de bestanden uit met Archiefbeheer (hetzelfde als Winzip in Windows). Noteer het pad waar de bestanden "monerod" en "monero-wallet-cli" staan.

![image3](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/3.png)
![image4](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/4.png)

Deze stap hoef je maar één keer uit te voeren. Open een terminal (Ctrl+Alt+T) en installeer de vereiste afhankelijkheden door het volgende te typen: "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*". Druk wanneer erom gevraagd wordt op de toets Y en vervolgens op Enter om door te gaan.

![image5](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/5.png)
![image6](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/6.png)

- Open een terminal en laad het pad waar de binaries zijn uitgepakt (zie stap 2) door het volgende te typen: "*cd jePadUitStap2*"

![image7](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/7.png)

- Laad monerod door dit in je terminal te typen: "*./monerod*". Wacht totdat monerod is gesynchroniseerd met het netwerk. (De blockchain die je bij stap 4 hebt gedownload wordt bijgewerkt, of de blockchain wordt vanaf het begin gedownload.) De eerste keer kan dit lang duren. Even geduld alsjeblieft.

![image8](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/8.png)
![image9](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/9.png)
![image10](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/10.png)
![image11](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/11.png)

- Wanneer monerod is gesynchroniseerd met het netwerk, open je een nieuwe terminal, wijzig je de directory (zie stap 5) en start je monero-wallet-cli door "*./monero-wallet-cli*" te typen.

![image12](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/12.png)

- Voer een naam in voor je portemonnee en volg de instructies in de terminal.

![image13](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/13.png)
![image14](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/14.png)
![image15](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/15.png)
![image16](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/16.png)

*Dit is je privésleutel. Schrijf deze sleutel op en bewaar deze op een veilige plek!*

![image17](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/17.png)

*Dit is je alleen-lezen sleutel. Deze heb je nodig om een alleen-lezen portemonnee te maken (zie de gebruikershandleiding daarover)*

![image18](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/18.png)

*Dit is het adres van je portemonnee.*

![image19](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/19.png)
![image20](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/20.png)
![image21](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/21.png)
![image22](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/22.png)
![image23](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/23.png)

Typ "*exit*" in de gebruikte terminal om monerod of monero-wallet-cli af te sluiten.

Je kunt de portemonnee die je net hebt gemaakt als volgt openen: start monerod, wacht totdat de node is gesynchroniseerd met het netwerk, en typ de naam van je portemonnee en je wachtwoord.


