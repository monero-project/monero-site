{% include disclaimer.html translated="no" translationOutdated="no" %}

### Cel i Ostrzeżenie

Większość ludzi tego nie potrzebuje. Aby korzystać z Monero, wystarczy
uruchomić oprogramowanie, a ono samo zsynchronizuje się z siecią
peer-to-peer. Zazwyczaj jest to znacznie szybsze niż pobieranie i
importowanie blockchaina, jak wyszczególniono w tym przewodniku. Dzieje się
tak dlatego, że będziesz pobierać z wielu serwerów peer-to-peer zamiast z
jednego, a Monero @daemon zweryfikuje każdy blok w momencie jego otrzymania,
zamiast weryfikować go osobno po pobraniu.

Ta opcja jest przydatna głównie podczas programowania, lub jeśli jakiś
nietypowy problem uniemożliwia synchronizację w normalny sposób.

**Never** use the dangerous unverified import option, it is strictly for experts only. Especially, don't use it with any blockchain you download from the Internet. It is only safe to use if a) you are importing a file that you exported locally, yourself *and* b) you are absolutely sure it was already fully and properly verified before exporting.

### Krok 1

Znajdź ścieżkę, gdzie zainstalowane jest oprogramowanie Monero. Na przykład
moja to:

`D:\monero-gui-0.10.3.1`

Twoja ścieżka może być inna w zależności od tego, gdzie zdecydowałeś się
zainstalować oprogramowanie Monero i jaką wersję oprogramowania posiadasz.

### Krok 2

Znajdź ścieżkę do swojego pobranego blockchaina, na przykład moją była:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Twoja może być inna w zależności od tego, gdzie zdecydowałeś się zapisać
pobrany blockchain.

### Krok 3

Otwórz okno Wiersza Poleceń. Możesz to zrobić naciskając klawisz Windows +
R, a następnie wpisując w oknie, które wyskoczy - `CMD` i nacisnąć Enter.

### Krok 4

Teraz musisz wejść za pomocą okna CMD do miejsca gdzie znajduję się
zainstalowane oprogramowanie Monero. Możesz to zrobić wpisując:

`cd C:\TUTAJ\TWOJA\ŚCIEŻKA\MONERO`

Powinno to wyglądać mniej więcej tak:

`cd D:\monero-gui-0.10.3.1`

Jeśli Twoje oprogramowanie Monero jest na innym dysku możesz użyć
`LiteraDysku:` na przykład jeśli Twoje oprogramowanie Monero było na dysku D
to przed użyciem komendy `cd` napisałbyś `D:`.

### Krok 5

Teraz wpisz w oknie wiersza poleceń:

`monero-blockchain-import --input-file C:\TUTAJ\TWOJA\ŚCIEŻKA\DO\BLOCKCHAIN`

Na przykład ja wpisałbym:

`monero-blockchain-import --input-file
C:\Users\KeeJef\Downloads\blockchain.raw`

### Krok 6

Po zakończeniu synchronizacji blockchain możesz normalnie otworzyć swój
portfel Monero. Pobrany blockchain.raw może zostać usunięty.
