{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Jak bezpiecznie kupować i przechowywać Monero?

Ten przewodnik opisuje, jak kupować i bezpiecznie przechowywać Monero, zgodnie ze stanem na czerwiec 2017 roku.

#### Krok 1: Kup Bitcoin.

Istnieje wiele sposobów na zakupo Bitcoina. Dwie na wpół niezawodne organizacje to Xapo <http://www.xapo.com/> oraz Coinbase <http://www.coinbase.com/>. Proces obejmuje przesłanie swojego dokumentu (dowodu osobistego, paszportu itp.) i zajmie od 2 do 10 dni (lub więcej). Zanim dokonasz dużego zakupu, zweryfikuj ich opinię na Reddit. Xapo korzysta z Wire Transfer, a Coinbase z Bank Transfer (ACH w USA). Xapo zazwyczaj jest szybszy niż Coinbase. Coinbase pozwala także na małe, natychmiastowe kupna za pośrednictwem karty debetowej, ale ta opcja obarczona jest wysoką opłatą. Po zakupie Bitcoina jesteś gotowy na wymianę go na Monero!

#### Krok 2: Ściągnij i utwórz papierowy portfel na bezpiecznym i odłączonym od sieci komputerze.

Ściągnij generator papierowego portfela ze strony https://moneroaddress.org i skopiuj go na USB (bezpośredni link: https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip).

Rozpakuj i otwórz generator papierowego portfela (monero-wallet-generator.html) w przeglądarce na odłączonym od sieci komputerze, który nie był wcześniej używany lub posiada świeżo zainstalowany system operacyjny.

Twój papierowy portfel posiada cztery ważne informacje:

Publiczny adres Monero
Publiczny adres jest używany do otrzymywania płatności. Przekazujesz go osobie, która prześle pieniądze do twojego portfela.

Kod mnemoniczny Monero
Kod mnemoniczny jest metodą przechowywania całego portfela, łatwo rozpoznawalną dla ludzi. Jest wszystkim, czego potrzebujesz, aby przywrócić swój portfel.

Prywatny klucz wydawania Monero
Prywatny klucz wydawania jest używany do wysyłania pieniędzy z twojego portfela.

Prywatny klucz widoczności Monero
Prywatny klucz widoczności służy to wyświetlania transakcji przychodzących na konto. Często jest on używany do zakładania portfela tylko do odczytu, który wyświetla transakcje przychodzące, będące aktualnie przesyłane w łańcuchu bloków do zimnego portfela.

W tym miejscu masz wiele opcji. Możesz wydrukować swój portfel, zapisać jako PDF lub plik tekstowy na USB, nagrać na CD/DVD itd. Najpewniej będziesz potrzebował przynajmniej dwóch lub trzech jego kopii, bezpiecznie zachowanych w różnych miejscach. Jeśli zapisujesz je na dysku, ochroń wszystko silnym hasłem. Jeśli zachowujesz portfel na papierze, nie pokazuj go nikomu, aby nie zapamiętano twojego 25-słownego kodu lub nie zrobiono zdjęcia bez twojej zgody. Przesyłanie zdjęcia twojego portfela jest równoznaczne z oddaniem wszystkich twoich pieniędzy.

Jakąkolwiek metodę wybierzesz, upewnij się, że żadna kopia twojego portfela Monero nie została na urządzeniu, którego używałeś. Bezpiecznie usuń portfel po zapisaniu go na dysku lub upewnij się, że drukarka nie zachowała żadnej kopii w swojej pamięci.

*Jeśli stracisz dostęp do swojego papierowego portfela, twoje Monero nigdy nie będzie dostępne ani dla ciebie, ani dla nikogo innego. Nie będziesz mógł ich odzyskać!

#### Adnotacja
Opcją zaszyfrowania kodu mnemonicznego Monero jest https://xmr.llcoins.net/. Ściągnij stronę html i otwórz ją na odłączonym od sieci komputerze. Sprawdź część "Encrypt/Decrypt Mnemonic Seed" i upewnij się, że używasz "CN Add" z mocnym hasłem. Dzięki, manicminer5.



#### Krok 3: Zamień Bitcoin na Monero i prześlij je do swojego papierowego portfela.

Przejdź do komputera z połączeniem internetowym i wejdź na stronę www.shapeshift.io. Wybierz "Deposit Bitcoin" i "Receive Monero" (szybko).

Naciśnij Dalej.

Twój adres Monero (publiczny adres Monero w twoim papierowym portfelu Monero)
Wklej publiczny adres Monero z papierowego portfela w miejscu podpisanym "Your Monero Address". Ponieważ twój publiczny adres znajduje się na komputerze odłączonym od sieci (prawda?), przepisz go ręcznie lub skopiuj tylko publiczny adres na czysty dysk USB.

Adres zwrotny (publiczny adres Bitcoin, na który otrzymujesz pieniądze)
Wprowadź adres Bitcoin, który kontrolujesz i gdzie ewentualny zwrot zostanie wysłany, jeśli zaistnieje problem z transakcją. Na Xapo i Coinbase adres ten nazywa się adresem otrzymywania i może się czasami zmieniać.

Numer identyfikacyjny płatności
Zostaw pole z numerem identyfikacji płatności puste, jeśli wysyłasz do własnego portfela Monero lub do papierowego portfela Monero.

Zaznacz zgodę z warunkami i zmień suwak na "Reusable Address".  

Kliknij "Start Transaction".

Adres wpłat (publiczny adres Bitcoina, stworzony jedynie do otrzymywania funduszy na Shapeshift.io)
Z nowego okna skopiuj adres wpłat (ctrl+c lub menu Edit - Copy). Za pomocą tego adresu prześlesz Bitcoin z Xapo lub Coinbase na Shapeshift.io.

Przejdź do swojego konta Xapo lub Circle i znajdź przycisk Transfer lub Send. Wklej adres wpłat Bitcoina  wpole Destination i wpisz kwotę w Bitcoinach, którą chcesz zamienić na Monero. Kwota musi się zmieścić w minimalnym i maksymalnym zakresie wpłat Shapeshift.io. Kliknij Send i zautoryzuj transakcję, jeśli zostaniesz o to poproszony.

Kiedy wysyłka zostanie zainicjowana przez Xapo lub Coinbase, pojawi się pewne opóźnienie przy wejściu transakcji do łańcucha bloków Bitcoina i oczekiwaniu na potwierdzenie. Może ono zająć kilka minut lub godzin. Możesz sprawdzić, czy płatność została wysłana, wyszukując adres wpłat Shapeshift.io na stronie blockchain.info. Pojawi się tam twoja transakcja do Shapeshift.io.

Po potwierdzeniu twojej wpłaty Bitcoinów, Shapeshift.io rozpocznie wymianę Bitcoinów (BTC) na Monero (XMR) na jednej z giełd, a gdy ją zakończy, wyśle Monero na adres twojego zimnego papierowego portfela. Zajmie to kilka minut lub godzin. W przypadku problemów, skontaktuj się z ekipą Shapeshift.io, jest ona bardzo pomocna.

Gdy Shapeshift.io poinformuje o ukończeniu twojej transakcji, powinieneś już mieć swoje Monero w papierowym portfelu!


#### Adnotacje i jak zweryfikować fundusze
Ponieważ łańcuch bloków Monero jest prywatny i niewykrywalny, nie będziesz mógł wyszukać swojego publicznego adresu Monero i potwierdzić, że fundusze doszły, tak jak to można zrobić w przypadku Bitcoina. To jest dobre dla prywatności, ale niewygodne.

Aby bezpiecznie zweryfikować, czy pieniądze wpłynęły na twoje konto, będziesz musiał założyć portfel tylko do odczytu. Do tego przyda się klucz widoczności. Aby założyć portfel tylko do odczytu, przejdź do części [Portfele tylko do odczytu]({{site.baseurl}}/resources/user-guides/view_only.html).

Aby zweryfikować, czy pieniądze *nadal* są w twoim portfelu i nie zostały wydane, musisz założyć zimny portfel za pomocą swojego kodu mnemonicznego, na komputerze odłączonym od sieci z aktualną kopią łańcucha bloków Monero. Po skończeniu, bezpiecznie usuń portfel lub połącz go z internetem, aby stał się gorącym portfelem.



