---
tags: ["kovri"]
terms: ["encryption", "encrypted", "encrypting", "decryption", "decrypted", "decrypting", "kryptering", "kryptert", "avkoding", "avkodet"]
summary: "Prosessen med å kode meldinger eller informasjon på en måte som bare autoriserte parter kan avkode og lese"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### Det grunnleggende

Fritt oversatt fra: [Encryption](https://en.wikipedia.org/wiki/Encryption):

>
I kryptografi er kryptering prosessen å kode meldinger eller informasjon på en slik måte at kun autoriserte parter kan avkode og lese hva som er sendt. Kryptering hindrer ikke oppfanging i seg selv, men hindrer at oppfangeren får tilgang til meldingsinnholdet.

### Inngående informasjon

Fritt oversatt fra: [Encryption](https://en.wikipedia.org/wiki/Encryption):

>
I et krypteringsopplegg er den tiltenkte informasjonen eller meldingen (referert til som *klartekst*) kryptert ved å bruke en krypteringsalgoritme som genererer chiffertekst som bare kan leses om den er avkodet. Et krypteringsopplegg benytter av tekniske årsaker som regel en pseudotilfeldig nøkkel som er generert av en algoritme. Det er i prinsippet mulig å avkode meldingen uten å eie nøkkelen, men for et godt utformet krypteringsopplegg er det nødvendig med omfattende dataressurser og ferdigheter for å få det til. En autorisert mottaker kan enkelt avkode meldingen med nøkkelen som er gitt av opphavspersonen til mottakerne, men ikke til uautoriserte avlyttere.

>
Hensikten med kryptering er å sikre at det kun er en som er autorisert til å få tilgang til data (f.eks. en SMS eller fil) som vil kunne lese det ved å bruke avkodingsnøkkelen. En som ikke er autorisert kan ekskluderes, fordi han eller hun ikke innehar den nødvendige nøkkelen som er nødvendig for å lese den krypterte informasjonen.

### Kovri

Kovri implementerer ulike typer kryptering i *minst* fire essensielle kapasiteter:

- @Reseed for bootstrapping
- @Garlic-routing: tre lag med kryptering («@garlic-encryption») brukes for å verifisere den sikre leveringen av @meldinger til mottakeren/motparten/@destinasjonen
- @Tunnelkryptering: garlic-meldinger passeres gjennom en @tunnel og krypteres av @tunnelportalen til @tunnelsluttpunktet
- @Transportlagkryptering hindrer muligheten til å avkode @meldinger på [medialag](https://en.wikipedia.org/wiki/OSI_model)

For detaljer om krypteringstyper og kryptografiske @signaturer som er brukt i @Kovri og @I2P, kan du se @Java-I2Ps artikkel om [kryptografi](https://geti2p.net/spec/cryptography)
