---
summary: 'Podobnie jak konto bankowe, konto Monero zawiera wszystkie twoje płatności wychodzące i przychodzące'
terms: ["account", "accounts", "wallet", "wallets", "konto", "konta", "portfel", "portfela"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Dla bardziej zaznajomionych z poprzednikami Monero bliższe będzie określenie
*portfel*. Jest to prywatne konto w posiadaniu i obsłudze użytkownika
Monero.

Konto zawiera wszystkie twoje wychodzące i przychodzące @transakcje
Monero. Saldo jest sumą wszystkich Monero, jakie otrzymałeś, minus Monero,
które wysłałeś. Zauważ, że konto posiada dwa salda: zablokowane i
odblokowane. Saldo odblokowane zawiera fundusze możliwe do natychmiastowego
wydania, a w skład salda zablokowanego wchodzą środki, których nie możesz w
danym momencie wydać. Może się zdarzyć, że otrzymasz wpłatę z ustawionym
@czasem-na-odblokowanie lub że wyślesz Monero i będziesz oczekiwał aż
@reszta zostanie zwrócona do twojego portfela. W obu sytuacjach twoje środki
mogą zostać tymczasowo zablokowane.

Kluczowa różnica między tradycyjną walutą elektroniczną a Monero polega na
tym, że twoje konto Monero podlega jedynie twojej kontroli, przeważnie na
twoim komputerze, i nikt nie ma do niego dostępu, jeśli tylko praktukujesz
[zasady bezpieczeństwa](#prkatykowanie-zasad-bezpieczeństwa).

### Wiele kont

Nie istnieją żadne koszta związane z założeniem konta Monero ani żadne
opłaty, z wyjątkiem opłat za pojedyncze @transakcje, które trafiają do
@górników.

Oznacza to, że każdy może w łatwy sposób założyć konto Monero dla siebie,
jak i konto łączone z partnerem lub indywidualne dla dziecka. Podobnie firma
może założyć osobne konta dla każdego oddziału lub grupy
pracowniczej. Ponieważ opłaty za @transakcje są dość niskie, przekazywanie
środków między kontami nie jest drogie.

### Klucze kryptograficzne

Monero opiera się głównie na zasadzie kryptograficznej znanej jako
*kryptografia kluczy publicznych i prywatnych* lub *kryptografia
asymetryczna*, która została dokładnie opisana w [tym artykule
Wikipedii](https://en.wikipedia.org/wiki/Public-key_cryptography).

Twoje konto bazuje na dwóch kluczach: kluczu wydawania i kluczu
widoczności. @Klucz-wydawania jest jedynym kluczem wymaganym do wydawania
twoich środków Monero, podczas gdy @klucz-widoczności pozwala na ujawnienie
twoich @transakcji osobom trzecim, na przykład dla celów kontrolnych czy
rachunkowych. Klucze te pełnią również istotną rolę w prywatności
@transakcji.

Klucze prywatne w obu przypadkach muszą być chronione przez ciebie, aby
utrzymać prywatność twojego konta. Z drugiej storny, klucze publiczne, jak
sama nazwa wskazuje, mogą zostać ujawnione i tworzą część twojego adresu
konta Monero. Różnica pomiędzy kluczem prywatnym a publicznym polega na tym,
że ktoś może wysłać ci wiadomość zaszyfrowaną jednym z twoich publicznych
kluczy, a jedynie ty możesz ją odszyfrować przy użyciu twoich kluczy
prywatnych.

### Tworzenie kopii zapasowej konta

Po założeniu własnego konta Monero z prywatnym @kluczem-wydawania, jesteś
jedyną osobą odpowiedzialną za bezpieczeństwo twoich środków. Na szczęście
Monero ułatwia proces tworzenia kopii zapasowej konta. Przy zakładaniu konta
po raz pierwszy otrzymałeś unikalny @kod-mnemoniczny składający się z 13 lub
25 słów w wybranym języku. **Ten kod jest jedyną rzeczą potrzebną do
stworzenia kopii zapasowej konta** i konieczne jest jego zapisanie i
bezpieczne przechowanie. Nigdy nie chowaj swojego zapisanego kodu w miejscu,
w którym ktoś mógłby go zobaczyć!

```
List of available languages for your wallet's seed:
0 : Deutsch
1 : English
2 : Español
3 : Français
4 : Italiano
5 : Nederlands
6 : Português
7 : русский язык
8 : 日本語
9 : 简体中文 (中国)
10 : Esperanto
Enter the number corresponding to the language of your choice: 1
Generated new wallet: 4B15ZjveuttEaTmfZjLVioPVw7bfSmRLpSgB33CJbuC6BoGtZrug9TDAmhZEWD6XoFDGz55bgzisT9Dnv61sbsA6Sa47TYu
view key: 4130fa26463d9451781771a8baa5d0b8085c47c4500cefe4746bab48f1d15903
**********************************************************************
Your wallet has been generated.
To start synchronizing with the @daemon, use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing monero-wallet-cli to save your
current session's state. Otherwise, you might need to synchronize
your wallet again (your wallet keys are NOT at risk in any case).

PLEASE NOTE: the following 25 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

aunt knuckle italics moisture hawk thorn iris abort
chlorine smog uphill glass aptitude nowhere sewage plywood
dual relic fierce divers anvil nodes bubble cabin abort
**********************************************************************
Starting refresh...
Refresh done, blocks received: 21939                            
Balance: 0.000000000000, unlocked balance: 0.000000000000
Background refresh thread started
[wallet 4B15Zj]: █
```

Jak wspomniamo w powyższym przykładzie, bardzo ważne jest przechowywanie
tych słów w bezpiecznym miejscu. Jeśli obawiasz się ryzyka straty w swoim
domu, możesz przekazać kopię swojego kodu adwokatowi lub w skrzynce
depozytowej. Zalecane jest także zapisanie kodu w formie listu lub jako
część innych notatek tak, aby nie było oczywiste, że słowa są twoim kodem
mnemonicznym.

### Praktykowanie zasad bezpieczeństwa

Poza stworzenie kopii twojego kodu mnemonicznego, aby mieć dostęp do konta w
przypadku utraty danych, ważne jest także praktykowanie zasad
bezpieczeństwa. Użyj bezpiecznego hasła przy zakładaniu lokalnego konta
Monero (innego niż użyte na stronie [MyMonero] (https://mymonero.com) czy
innych systemach kont internetowych).

Nie ujawniaj swojego hasła do konta Monero nikomu, bo może ono zostać użyte
do uzyskania dostępu do Monero z twojego komputera bez wymagania kodu
mnemonicznego. Upewnij się, że twój antywirus jest włączony i
zaktualizowany, zwłaszcza na komputerze z systemem Windows. Uważaj przy
otwieraniu linków z e-maili lub na nieznanych i niezaufanych stronach
internetowych, ponieważ raz zainstalowane złośliwe oprogramowanie może
czekać z podebraniem twoich pieniędzy aż wejdziesz na swoje konto Monero.

### Przekazywanie konta najbliższym

Przekazanie dostępu do konta Monero twoim najbliższym jest tak proste, jak
stworzenie jego kopii zapasowej. Po prostu zapisz swój @kod-mnemoniczny w
testamencie lub zostaw w bezpiecznym miejscu, które zostanie im ujawnione
przy realizacji twojego testamentu. Kluczową zaletą takiego rozwiązania jest
fakt, że twoi najbliżsi nie będą musieli czekać miesiącami na udostępnienie
funduszy przez osoby trzecie.
