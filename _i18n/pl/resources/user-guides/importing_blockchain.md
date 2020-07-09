{% include disclaimer.html translated="yes" translationOutdated="yes" %}

### Krok 1

Ściągnij aktualny bootrstap ze strony https://downloads.getmonero.org/blockchain.raw. Możesz pominąć ten krok, jeśli importujesz łańcuch bloków z innego źródła.

### Krok 2

Znajdź ścieżkę swojego portfela Monero (folder, do którego wypakowałeś swój portfel). Na przykład moja to:

`D:\monero-gui-0.10.3.1`

Twoja ścieżka może być inna, w zależności od tego, gdzie zdecydowałeś się ściągnąć swój portfel i od twojej wersji portfela Monero.

### Krok 3

Znajdź ścieżkę ściągniętego łańcucha bloków. Na przykład moja to:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Twoja ścieżka może być inna, w zależności od tego, gdzie ściągnąłeś łańcuch bloków.

### Krok 4

Otwórz okno wiersza polecenia. Możesz tego dokonać, klikając w przycisk Windows + R i następnie wpisując `CMD` w nowym okienku.

### Krok 5

Używając okienka CMD, przejdź do lokalizacji twojego portfela Monero. Możesz tego dokonać, wpisując:

`cd C:\YOUR\MONERO\WALLET\FILE\PATH\HERE`

Powinno to wyglądać mniej więcej tak:

`cd D:\monero-gui-0.10.3.1`

Jeśli twój portfel Monero znajduje się na innym dysku, użyj `DriveLetter:`. Na przykład, jeśli twój portfel znajduje się na dysku D, przed użyciem funkcji cd, wpisz `D:`.

### Krok 6

Wpisz w oknie wiersza poleceń:

`monero-blockchain-import --verify 1 --input-file C:\YOUR\BLOCKCHAIN\FILE\PATH\HERE`

Na przykład:

`monero-blockchain-import --verify 1 --input-file C:\Users\KeeJef\Downloads\blockchain.raw`

Jeśli ściągnąłeś łańcuch bloków z zaufanego, renomowanego źródła, możesz ustawić `verify 0`. To zmniejszy czas synchronizacji łańcucha.

### Krok 7

Po ukończeniu synchronizacji łańcucha bloków, możesz normalnie otworzyć swój portfel Monero. Ściągnięty plik blockchain.raw może zostać usunięty.


Autor: Kee Jefferys
