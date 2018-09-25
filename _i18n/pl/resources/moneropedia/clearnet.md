---
tags: ["kovri"]
terms: ["Clearnet", "Clearnecie", "clearnetu"]
summary: "Internet, na którym zbudowane są anonimowe sieci nakładkowe"
---

### Podstawy

Gdy używasz internetu do czytania wiadomości, sprawdzania e-maila, social media i nawet Monero, najprawdopodobniej używasz połączenia clearnet. Oznacza to, że *wszystkie* twoje połączenia mogą być śledzone i monitorowane przez:

- przez twojego [dostawcę usług internetowych](https://en.wikipedia.org/wiki/ISP)
- stronę, serwis lub osobę, z którą się komunikujesz
- ewentualnie podmiot [Sojuszu Pięciorga Oczu] (https://en.wikipedia.org/wiki/5_Eyes).

I nawet jeśli korzystasz z [HTTPS](https://en.wikipedia.org/wiki/HTTPS) lub podobnego rozwiązania (które *szyfruje* twoją transmisję), twoja ścieżka nie jest ukryta ani anonimowa. Stąd, jest ona *jasna*.

### Szczegółowe informacje

Ponieważ tradycyjna [VPN](https://en.wikipedia.org/wiki/VPN) nie uchroni cię od clearnetu (bo nadal używasz *clearnetu*, mimo że za pewnego rodzaju pośrednictwem), powinieneś korzystać z *anonimowej sieci nakładkowej*, aby uniknąć clearnetu:

- @Kovri
- @Java-I2P
- [Tor](https://torproject.org/)

Powyższe technologie chronią przed clearnetem poprzez tworzenie anonimowej sieci **ponad** clearnetem, aby twoje transmisje były zaszyfrowane **i** anonimowe.

Tutaj znajdziesz dokładny, [interaktywny diagram](https://www.eff.org/pages/tor-and-https) stworzony przez [EFF](https://www.eff.org/), który opisuje *clearnet* w porównaniu z siecią **Tor**. Pojęcie to odnosi się po części do sieci @Kovri i @I2P pod względem anonimowości, z poniższymi różnicami:

- @Kovri nie korzysta z węzłów wyjściowych przy połączeniu z @eepsite
- twoje obciążenie nigdy nie musi opuszczać sieć I2P
- nie potrzebujesz HTTPS, aby używać Kovri (za wyjątkiem @reseeda).
