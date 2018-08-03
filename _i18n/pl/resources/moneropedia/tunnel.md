---
entry: "Tunel"
tags: ["kovri"]
terms: ["Tunnel", "Tunnels", "tunel", "tunele", "tunelem", "tunelowi", "tunelom", "tunelami", "tunelowe", "tunelu"]
summary: "Jednokierunkowe ścieżki wirtualne, które przekazują wiadomości przez ustaloną sekwencję routerów sieci I2P."
---

### Podstawy

Gdy korzystasz z sieci @I2P (odwiedzasz @eepsite lub używasz @serwisu-czosnkowego), najpierw musisz połączyć się z peerem za pomocą środka @transportu, a następnie stworzyć wirtualne *tunele*. Tunele te są czasowymi, jednokierunkowymi ścieżkami, które przekazują @wiadomości przez ustaloną sekwencję routerów sieci I2P aż do @węzła-końcowego. Są zbudowane i korzystają z warstwowego @szyfrowania-czosnkowego, a ich głównym przeznaczeniem jest transport wszystkich wiadomości @I2NP.

Każdy peer buduje przynajmniej *dwa* jednokierunkowe tunele: jeden dla  **ruchu wejściowego** i jeden dla **ruchu wyjściowego**. Tunele te są nazywane albo **tunelami wejścia** (gdzie wiadomości skierowane są do twórcy tunelu) lub **tunelami wyjścia** (gdzie to twórca tunelu wysyła wiadomości), stąd aby wiadomość została przekazana w obie strony i odpowiedziana węzłowi końcowego potrzebne są *cztery* tunele (dwa dla twórcy i dwa dla odbiorcy).

### Szczegółowe informacje

Za: @Java-I2P:

>
Wewnątrz sieci I2P wiadomości przekazywane są w jednym kierunku przez wirtualne tunele peerów, które używają jakiegokolwiek dostępnego środka, aby przesłać wiadomość do następnego hopu. Wiadomości dochodzą do furtki @tunelu, są łączone i/lub dzielone do stałych rozmiarów i następnie przekazywane dalej do następnego hopu w tunelu, który je przetwarza i weryfikuje ich ważność i przesyła dalej aż dotrą do końca tunelu. Punkt końcowy przekazuje złączoną przy furtce wiadomość zgodnie z instrukcjami - do kolejnego routera, do innego tunelu lub lokalnie.

>
Wszystkie tunele działają tak samo, ale mogą być podzielona na dwie grupy: tunele wejścia i tunele wyjścia. Tunele wejścia posiadają niezaufaną furtkę, która przekazuje wiadomości w kierunku twórcy tunelu będącego jego punktem końcowym. W tunelach wyjścia to twórca służy jako furtka przekazująca wiadomości do oddalonego punktu końcowego.

>
Twórca tunelu wybiera który konkretny peer weźmie udział w tunelu i zapewnia wszystkim niezbędne dane konfiguracyjne. Tunele mogą składać się z dowolnej liczby hopów. Założeniem jest utrudnić członkom oraz osobom trzecim odgadnięcie długości tunelu, a nawet nie ujawniać uczestnikom, czy należą do tego samego tunelu (z wyjątkiem sytuacji, gdy znajdują się oni obok siebie).

### Adnotacje

Za: @Java-I2P:

>
I2P jest z natury siecią z komutacją pakietów, nawet posiadając tunele, co pozwala na uruchomienie wielu tuneli równolegle, zwiększając jej elastyczność i obciążenie równoważące. Mimo że tunele w sieci I2P przypominają sieć z komutacją łączy, wszystko wewnątrz niej jest ściśle oparte na wiadomościach, a tunele są jedynie środkiem na organizację ich dostawy. Nie ma żadnych założeń dotyczących niezawodności lub porządkowania wiadomości, a retransmisje pozostają na wyższych poziomach (np. w bibliotece strumieniowej warstwy klienta I2P).

### Dokumenty

Aby przeczytać specyfikacje i szczegółową dokumentację, przejdź do strony [trasowania tunelowego](https://geti2p.net/en/docs/how/tunnel-routing) i [implementacji tunelów](https://geti2p.net/en/docs/tunnels/implementation).
