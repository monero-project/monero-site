{% include disclaimer.html translated="no" translationOutdated="no" %}

### Spis treści

* [Windows](#windows)
* [Mac OS X](#mac-os-x)
* [Linux](#linux)
* [Uwagi końcowe](#a-few-final-notes)

### Windows

Najpierw musimy się upewnić, że jesteśmy wystarczająco przygotowani. Wiąże
się to z następującymi kwestiami:

- Ten przewodnik zakłada, że masz już zainicjalizowany portfel Ledger, a tym
  samym wygenerowany mnemoniczny seed z 24 słów.

- Musisz uruchomić / używać CLI v0.12.2.0, który znajdziesz
  [tutaj]({{site.baseurl}}/downloads/)

-  Musisz zainstalować aplikację Ledger Monero i skonfigurować swój
  system. Instrukcje znajdziesz
  [tutaj](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf)
  (w szczególności sekcje 3.1.1 i 3.2.3). Dodatkowo upewnij się, że sieć
  jest ustawiona na `Mainnet`

- Twój Ledger musi być podłączony do prądu, a aplikacja Ledger Monero
  powinna być uruchomiona.

- Albo twój @daemon (`monerod.exe`) powinien być uruchomiony i najlepiej w
  pełni zsynchronizowany, albo powinieneś połączyć się ze zdalnym węzłem.

Teraz, kiedy jesteśmy już wystarczająco przygotowani, zaczynajmy!

- Przejdź do katalogu / folderu gdzie znajdują się monerod.exe i
  monero-wallet-cli.exe.

- Otwórz nowy wiersz poleceń / powershell. W tym celu najpierw upewnij się,
  że kursor nie znajduje się na żadnym z plików, a następnie wykonaj SHIFT +
  kliknięcie prawym przyciskiem myszy. To da Ci opcję "Otwórz tutaj okno
  poleceń". Jeśli używasz systemu Windows 10 w najnowszej wersji, da Ci to
  opcję "Otwórz tutaj okno PowerShell".

- Teraz wpisz:

```monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200``` (Win 7 + 8)

```.\monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200``` (Win 10)

Zauważ, że jest to po prostu zmienna dla rzeczywistej nazwy portfela. Jeśli,
na przykład, chcesz nazwać swój portfel `MoneroWallet`, polecenie byłoby w
następujący sposób:

```monero-wallet-cli.exe --generate-from-device MoneroWallet
--subaddress-lookahead 3:200``` (Win 7 + 8)

```.\monero-wallet-cli.exe --generate-from-device MoneroWallet
--subaddress-lookahead 3:200``` (Win 10)

- CLI, po wykonaniu powyższej komendy, poprosi o podanie hasła. Upewnij się,
  że ustawiasz silne hasło i potwierdź je następnie.

- Ledger zapyta, czy chcesz wyeksportować prywatny klucz widoku, czy
  nie. Przede wszystkim, Twoje środki nie mogą być zagrożone tylko za pomocą
  prywatnego klucza widoku. Eksportowanie klucza prywatnego widoku umożliwia
  aplikacji ( na komputerze - Monero v0.12.2.0) skanowanie bloków w
  poszukiwaniu transakcji, które należą do Twojego portfela / adresu. Jeśli
  ta opcja nie jest wykorzystywana, urządzenie (Ledger) będzie skanować
  bloki, co będzie znacznie wolniejsze. Istnieje jednak jedno
  zastrzeżenie. To jest, jeśli system zostanie skompromitowany, napastnik
  będzie potencjalnie w stanie skompromitować Twój prywatny klucz widoku, co
  jest szkodliwe dla prywatności. Jest to praktycznie niemożliwe, gdy
  prywatny klucz widoku nie jest eksportowany.

- Może być konieczne dwukrotne kliknięcie potwierdzenia, aby rozpocząć.

- Twój portfel Ledger Monero zostanie teraz wygenerowany. Należy pamiętać,
  że może to potrwać do 5-10 minut. Co więcej, nie będzie natychmiastowej
  informacji o tym ani w CLI ani na Ledgerze.

- `monero-wallet-cli` rozpocznie odświeżanie. Poczekaj aż się w pełni
  odświeży.

Gratulacje, możesz teraz korzystać z portfela Monero Ledger w połączeniu z
CLI.

### Mac OS X

Najpierw musimy się upewnić, że jesteśmy wystarczająco przygotowani. Wiąże
się to z następującymi kwestiami:

- Ten przewodnik zakłada, że masz już zainicjalizowany portfel Ledger, a tym
  samym wygenerowany mnemoniczny seed z 24 słów.

- Musisz uruchomić / używać CLI v0.12.2.0, który znajdziesz
  [tutaj]({{site.baseurl}}/downloads/).

- Musisz zainstalować aplikację Ledger Monero i skonfigurować swój
  system. Instrukcje znajdziesz
  [tutaj](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf)
  (w szczególności sekcje 3.1.1 i 3.2.2). Dodatkowo upewnij się, że sieć
  jest ustawiona na `Mainnet`

- Zauważ, że instrukcje dotyczące konfiguracji systemu (sekcja 3.2.2) na Mac
  OS X są dość rozbudowane i mogą być postrzegane jako nieco zagmatwane. Na
  szczęście, tficharmers stworzył przewodnik
  [tutaj](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in),
  z którego możesz skorzystać w celu uzyskania pomocy.

- Twój Ledger musi być podłączony do prądu, a aplikacja Ledger Monero
  powinna być uruchomiona.

- Albo twój demon (`monerod`) powinien być uruchomiony i najlepiej w pełni
  zsynchronizowany, albo powinieneś połączyć się ze zdalnym węzłem.

Teraz, kiedy jesteśmy już wystarczająco przygotowani, zaczynajmy!

- Użyj Findera, aby przejść do katalogu / folderu w którym znajduje się
  `monero-wallet-cli` (CLI v0.12.2.0).

- Przejdź na swój pulpit.

- Otwórz nowe okno terminala (jeśli nie wiesz jak otworzyć terminal, zobacz
  [tutaj](https://apple.stackexchange.com/a/256263)).

- Przeciągnij `monero-wallet-cli` do terminala. Powinno to dodać pełną
  ścieżkę w terminalu. Nie naciskaj enter.

- Teraz wpisz:

```--generate-from-device <new-wallet-name> --subaddress-lookahead 3:200```

Zauważ, że jest to po prostu zmienna dla rzeczywistej nazwy portfela. Jeśli,
na przykład, chcesz nazwać swój portfel `MoneroWallet`, polecenie byłoby w
następujący sposób:

```--generate-from-device MoneroWallet --subaddress-lookahead 3:200```

Zauważ, że powyższy tekst zostanie dołączony do ścieżki
`monero-wallet-cli`. Tak więc, zanim wciśniesz enter, twój terminal powinien
wyglądać jak:

```/pełna/ścieżka/do/monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200```

Gdzie pełna ścieżka jest, intuicyjnie, rzeczywistą ścieżką w systemie Mac OS
X.

- CLI, po wykonaniu powyższej komendy, poprosi o podanie hasła. Upewnij się,
  że ustawiłeś silne hasło i potwierdź je następnie.

- Ledger zapyta, czy chcesz wyeksportować prywatny klucz widoku, czy
  nie. Przede wszystkim, Twoje środki nie mogą być zagrożone tylko za pomocą
  prywatnego klucza widoku. Eksportowanie klucza prywatnego widoku umożliwia
  aplikacji ( na komputerze - Monero v0.12.2.0) skanowanie bloków w
  poszukiwaniu transakcji, które należą do Twojego portfela / adresu. Jeśli
  ta opcja nie jest wykorzystywana, urządzenie (Ledger) będzie skanować
  bloki, co będzie znacznie wolniejsze. Istnieje jednak jedno
  zastrzeżenie. To jest, jeśli system zostanie skompromitowany, napastnik
  będzie potencjalnie w stanie skompromitować Twój prywatny klucz widoku, co
  jest szkodliwe dla prywatności. Jest to praktycznie niemożliwe, gdy
  prywatny klucz widoku nie jest eksportowany.

- Może być konieczne dwukrotne kliknięcie potwierdzenia, aby rozpocząć.

- Twój portfel Ledger Monero zostanie teraz wygenerowany. Należy pamiętać,
  że może to potrwać do 5-10 minut. Co więcej, nie będzie natychmiastowej
  informacji o tym ani w CLI ani na Ledgerze.

- `monero-wallet-cli` rozpocznie odświeżanie. Poczekaj aż się w pełni
  odświeży.

- Gratulacje, możesz teraz korzystać z portfela Monero Ledger w połączeniu z
  CLI.

### Linux

Najpierw musimy się upewnić, że jesteśmy wystarczająco przygotowani. Wiąże
się to z następującymi kwestiami:

- Ten przewodnik zakłada, że masz już zainicjalizowany portfel Ledger, a tym
  samym wygenerowany mnemoniczny seed z 24 słów.

- Musisz uruchomić / używać CLI v0.12.2.0, który znajdziesz
  [tutaj]({{site.baseurl}}/downloads/)

- Musisz zainstalować aplikację Ledger Monero i skonfigurować swój
  system. Instrukcje można znaleźć
  [tutaj](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf)
  (w szczególności sekcje 3.1.1 i 3.2.1). Dodatkowo upewnij się, że sieć
  jest ustawiona na `Mainnet`

- Twój Ledger musi być podłączony do prądu, a aplikacja Ledger Monero
  powinna być uruchomiona.

- Albo twój demon (`monerod`) powinien być uruchomiony i najlepiej w pełni
  zsynchronizowany, albo powinieneś połączyć się ze zdalnym węzłem.

Teraz, kiedy jesteśmy już wystarczająco przygotowani, zaczynajmy!

- Przejdź do katalogu / folderu, w którym znajdują się monero-wallet-cli i
  monerod.

- Otwórz nowy terminal

- Teraz wpisz:

```./monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200```

Zauważ, że jest to po prostu zmienna dla rzeczywistej nazwy portfela. Jeśli,
na przykład, chcesz nazwać swój portfel `MoneroWallet`, polecenie byłoby w
następujący sposób:

```./monero-wallet-cli --generate-from-device MoneroWallet
--subaddress-lookahead 3:200```

- CLI, po wykonaniu powyższej komendy, poprosi o podanie hasła. Upewnij się,
  że ustawiasz silne hasło i potwierdź je następnie.

- Ledger zapyta, czy chcesz wyeksportować prywatny klucz widoku, czy
  nie. Przede wszystkim, Twoje środki nie mogą być zagrożone tylko za pomocą
  prywatnego klucza widoku. Eksportowanie klucza prywatnego widoku umożliwia
  aplikacji ( na komputerze - Monero v0.12.2.0) skanowanie bloków w
  poszukiwaniu transakcji, które należą do Twojego portfela / adresu. Jeśli
  ta opcja nie jest wykorzystywana, urządzenie (Ledger) będzie skanować
  bloki, co będzie znacznie wolniejsze. Istnieje jednak jedno
  zastrzeżenie. To jest, jeśli system zostanie skompromitowany, napastnik
  będzie potencjalnie w stanie skompromitować Twój prywatny klucz widoku, co
  jest szkodliwe dla prywatności. Jest to praktycznie niemożliwe, gdy
  prywatny klucz widoku nie jest eksportowany.

- Może być konieczne dwukrotne kliknięcie potwierdzenia, aby rozpocząć.

- Twój portfel Ledger Monero zostanie teraz wygenerowany. Należy pamiętać,
  że może to potrwać do 5-10 minut. Co więcej, nie będzie natychmiastowej
  informacji o tym ani w CLI ani na Ledgerze.

- `monero-wallet-cli` rozpocznie odświeżanie. Poczekaj aż się w pełni
  odświeży.

Gratulacje, możesz teraz korzystać z portfela Monero Ledger w połączeniu z
CLI.

### Kilka uwag na koniec

- Radzimy najpierw przetestować cały proces. To znaczy, wysłać niewielką
  kwotę do portfela, a następnie przywrócić go (za pomocą wyżej wymienionego
  przewodnika), aby sprawdzić, czy można odzyskać portfel. Należy pamiętać,
  że po odtworzeniu / przywracania portfela, należy uzupełnić flagę
  `--restore-height` (z wysokością bloku przed wysokością pierwszej
  transakcji do portfela) do polecenia w kroku 3 (Windows), krok 5 (Mac OS
  X), lub krok 3 (Linux). Więcej informacji na temat wysokości przywracania
  i jak ją przybliżyć można znaleźć
  [tutaj](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

- Jeśli używasz zdalnego węzła, dodaj opcję `--daemon-address host:port` do
  polecenia w kroku 3 (Windows), kroku 5 (Mac OS X), lub kroku 3 (Linux).

- Jeśli chcesz, możesz ręcznie dostosować wartość
  `--subaddress-lookahead`. Pierwsza wartość jest liczbą kont, a druga jest
  liczbą podadresów na konto. Tak więc, jeśli, na przykład, chcesz wstępnie
  wygenerować 5 kont z 100 podadresami każde, użyj `--subaddress-lookahead
  5:100`. Należy pamiętać, że im więcej subadresów wstępnie wygenerujesz,
  tym dłużej potrwa dla Ledger, aby utworzyć portfel.

- Musisz tylko użyć znacznika `--generate-from-device` raz (tj. przy
  tworzeniu portfela). Po tym, w zasadzie można go używać podobnie do tego,
  jak normalnie korzystać z CLI. To jest:
   - Upewnij się, że Twój Ledger jest podłączony i aplikacja Monero jest
     uruchomiona.
   - Otwórz `monero-wallet-cli`.
   - Wpisz nazwę swojego portfela Ledger Monero.
   - Wprowadź hasło, aby otworzyć portfel.

   Jeśli pliki portfela Ledger nie są w tym samym katalogu co `monero-wallet-cli`, powinieneś otworzyć `monero-wallet-cli` z opcją `--wallet-file /ścieżka/do/pliku/wallet.keys`. Alternatywnie, możesz skopiować pliki portfela Ledger do tego samego katalogu co `monero-wallet-cli`.

- Jeśli masz dalsze pytania lub potrzebujesz pomocy, proszę napisz komentarz
  w oryginalnej odpowiedzi
  [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli).
