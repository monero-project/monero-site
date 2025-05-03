{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Portfel

Zanim zaczniesz, musisz mieć już skonfigurowany i działający portfel. Pool
musi znać adres Twojego portfela, aby móc wysyłać tam płatności. Zobacz
[Przewodnik przyjmowania Monero]({{ site.baseurl }}/get-started/accepting)
po więcej informacji.

## Rentowność

Przed rozpoczęciem kopania powinieneś zdecydować, czy jest to dla Ciebie
opłacalne, czy nie. Musisz zdecydować to dla siebie, w oparciu o koszty
energii i sprzętu, który masz dostępny. Istnieje wiele stron, takich jak
[CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr)  które
pozwalają wprowadzić prędkość koparki i pobór prądu, a ona pokaże ci zysk
(lub stratę) na tydzień/miesiąc.

## Pobierz koparkę

Pierwszym krokiem jest pobranie oprogramowania do kopania na swój komputer.

### Windows

Twórca XMRig dostarcza gotowe binarki dla użytkowników Windows. Są one
dostępne na [stronie publikacji na
GitHubie](https://github.com/xmrig/xmrig/releases/latest).

Przewiń w dół, aż zobaczysz `xmrig-WERSJA-msvc-win64.zip`. Pobierz ten plik
i rozpakuj archiwum gdzieś łatwo do zapamiętania, na przykład na pulpit.

### Linux Ubuntu

Twórca XMRig dostarcza gotowe binarki dla Ubuntu Bionic (18.04) i Focal
(20.04). Mogą one działać na innych wersjach Ubuntu, a także na innych
dystrybucjach, ale nie jest to pewne.

Te binarki są one dostępne na [stronie publikacji na
GitHubie](https://github.com/xmrig/xmrig/releases/latest).

Przewiń w dół do 'Assets' aż zobaczysz odpowiednią wersję dla Twojego
systemu. Pobierz ten plik i rozpakuj archiwum gdzieś łatwo do zapamiętania,
na przykład na pulpit.

### Inne dystrybucje i systemy operacyjne

Binarki są dostępne dla wielu dystrybucji i systemów operacyjnych, ale
możesz również zbudować koparkę samodzielnie. Zajrzyj do [dokumentacji
XMrig](https://xmrig.com/docs/miner)

## Wybór puli

Jest wiele puli do wyboru. Znajdziesz listę pod adresem
[miningpoolstats.stream/monero](https://miningpoolstats.stream/monero).

Wybór większej puli oznacza, że będziesz mieć do czynienia z częstszymi (ale
mniejszymi) wypłatami, ale wybór mniejszej puli pomaga utrzymać sieć w
stanie decentralizacji. [Kopacze nie stracą żadnych przychodów, wydobywając
w mniejszej puli](https://redd.it/g6uh2l).

## Konfiguracja koparki

Zobacz [oficjalną dokumentację](https://xmrig.com/docs/miner/config), aby
uzyskać instrukcje i sugestie.

## Uruchomienie koparki

Użytkownicy Windows mogą kliknąć dwukrotnie na xmrig.exe. Użytkownicy innych
systemów operacyjnych powinni przejść `cd` do katalogu zawierającego XMRig,
a następnie wpisać `./xmrig` i nacisnąć enter.

Jeśli widzisz zielone komunikaty informujące o zaakceptowaniu udziałów,
gratulacje, wszystko działa!

## Rozwiązywanie problemów

### Antywirus ciągle usuwa XMRig

Niektóre antywirusy oznaczają XMRig jako złośliwe oprogramowanie, ponieważ
jest on często instalowany na zainfekowanych komputerach w celu kopania bez
zgody właściciela. Ponieważ jest to twój komputer i to ty konfigurujesz
koparkę, aby kopała dla ciebie, możesz bezpiecznie dodać XMRig do swojej
białej listy antywirusowej.

### Nie można odczytać/ustawić MSR

Na niektórych procesorach, XMRig próbuje zwiększyć wydajność poprzez
wyłączenie pewnych funkcji, takich jak prefetcher instrukcji procesora. Te
operacje wymagają roota/administratora, więc spróbuj kliknąć prawym
przyciskiem myszy na plik xmrig.exe i uruchomić go jako administrator, lub
uruchomić `sudo ./xmrig` na innych systemach.

### Nieznany algorytm

Znajdź linię w config.json, zawierającą `algo: null` i zmień ją na `algo:
"rx/0"`. Domyślnie XMRig oczekuje, że pula powie mu, który algorytm
haszowania ma być użyty.

### Huge Pages 0%

#### Zezwalanie na duże strony w systemie Windows

Pobrane z
[MSDN](https://docs.microsoft.com/pl-pl/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15):

1. W menu Start kliknij przycisk Uruchom. W otwartym oknie wpisz gpedit.msc.
2. W panelu edytora lokalnych zasad grupy rozwiń pozycję konfiguracja
   komputera, a następnie rozwiń pozycję ustawienia systemu Windows.
3. Rozwiń ustawienia zabezpieczeń, a następnie rozwiń reguły lokalne.
4. Wybierz folder Uprawnienia użytkownika.
5. Zasady będą widoczne w okienku szczegółów.
6. W okienku kliknij dwukrotnie Blokowanie stron w pamięci.
7. W oknie dialogowym Lokalne ustawienia zabezpieczeń - Zablokuj strony w
   pamięci kliknij przycisk Dodaj użytkownika lub grupę.
8. W oknie dialogowym wyboru użytkowników, kont usług lub grup dodaj konto,
   na którym będziesz uruchamiał koparkę
9. Uruchom ponownie komputer, aby zmiany zadziałały.

Może być również konieczne uruchomienie koparki jako administrator.

#### Zezwalanie na duże strony w Linuksie

Najpierw zatrzymaj koparkę (jeśli jest uruchomiona), wykonaj następujące
polecenia, aby włączyć duże strony, a następnie uruchom koparkę jako
użytkownik root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

Być może trzeba będzie zwiększyć 1168 w zależności od tego, ile węzłów NUMA
ma(ją) twój(e) procesor(y).

#### Zezwalanie na duże strony na macOS

Wielkie strony nie są obsługiwane w systemie macOS.

### Saldo nie wzrasta

Większość pul to pule <abbr title="Pay Per Last N Shares">PPLNS</abbr>,
co oznacza, że otrzymujesz zapłatę tylko wtedy, gdy jeden z kopaczy z puli znajdzie
blok. Jeśli pula, na której kopiesz jest mała, może to potrwać od kilku
dni do tygodni.

Dodatkowo, wszystkie znalezione bloki muszą dojrzeć zanim można je
wypłacić. Zajmuje to 60 bloków (ok. 2 godziny).

## Uzyskanie pomocy

Aktywna społeczność kopania Monero na Reddicie to
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). Możesz również
dołączyć do [#monero-pools na
Libera](https://web.libera.chat/?channel=#monero-pools) lub Matrix
(#monero-pools:monero.social).

## Idąc dalej

* Rozważ użycie podadresu tylko do celów kopania, aby zapobiec łączeniu
  Twojego adresu z różnymi usługami.
* [Rozważ użycie sieci Tor do połączenia się z
  pulą](https://xmrig.com/docs/miner/tor) (lub z ukrytym serwisem puli,
  takim jak HashVault, RespectXMR i MoneroOcean). Ukrywa to aktywność
  kopania przed Twoim dostawcą usług internetowych i uniemożliwia puli
  dowiedzenie się, kim jesteś.
