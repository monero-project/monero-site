{% include disclaimer.html translated="yes" translationOutdated="no" %}

Przywracanie portfela za pomocą prywatnych kluczy jest całkiem proste. Jeśli posiadasz potrzebne informacje, z tym przewodnikiem będziesz mógł całkowicie przywrócić swój portfel. Zauważ, że nie musisz posiadać swojego hasła, aby przywracać za pomocą kluczy.

Potrzebujesz trzech różnych informacji z twojego portfela lub plików .keys, które zawierają te informacje oraz hasło do ich odszyfrowania. Trzy komponenty portfela, których potrzebujesz, to:

1. **Adres**
2. **Ukryty klucz do wydawania**
3. **Ukryty klucz widoczności**


### CLI

Następnie uruchom funkcję portfela:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Zostaniesz poproszony o adres, klucz do wydawania, klucz widoczności i na końcu o nowe hasło do odwtorzonego portfela.

Ukończenie tego z poprawnymi parametrami odtworzy pliki twojego portfela i pozwoli na ustalenie nowego hasła.

W przypadku problemów, uruchomienie funkcji `./monero-wallet-cli --help` wyświetli dostępne opcje. Uruchomienie funkcji `help` wewnątrz portfela wyświetli pomoc dotyczącą funkcji dostępnych wewnątrz portfela.

#### GUI

Uruchom Graficzny Interfejs Użytkownika Monero. Jeśli uruchamiasz go po raz pierwszy, przejdź do następnego kroku, jeśli nie - kliknij `Anuluj`:

![cancel opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.png)

Wybierz odpowiedni język `Polski`:

![choose language](/img/resources/user-guides/en/restore_from_keys/choose-language.png)

Kliknij w `Odzyskaj portfel z kluczy lub mnemonicznego seeda`:

![choose restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.png)

Wybierz `Przywróć portfel z kluczy`, nazwij swój portfel i wybierz jego lokalizację i uzupełnij pola `Adres konta (publiczny)`, `Klucz tylko do odczytu (prywatny)` & `Klucz do wydawania (prywatny)`. Możesz opcjonalnie uściślić wysokość bloku w polu `Wysokość początkowa przywracania portfela (opcjonalne)`, aby uniknąć skanowania starszych bloków. Następniej kliknij w strzałkę w `prawo`:

![restore wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.png)

Na następnej stronie ustaw silne hasło i potwierdź je, zanim ponownie klikniesz w strzałkę w `prawo`:

![wallet password](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

Sprecyzuj ustawienia swojego demona i kliknij w strzałkę w `prawo`:

![daemon settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

Kliknij w `UŻYJ MONERO`, aby skorzystać ze swojego przywróconego portfela:

![all set up](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)
