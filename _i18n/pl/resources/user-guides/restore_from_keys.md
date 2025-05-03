{% include disclaimer.html translated="yes" translationOutdated="no" %}

Przywracanie portfela za pomocą prywatnych kluczy jest całkiem proste. Jeśli
posiadasz potrzebne informacje, z tym przewodnikiem będziesz mógł całkowicie
przywrócić swój portfel. Zauważ, że nie musisz posiadać swojego hasła, aby
przywracać za pomocą kluczy.

Potrzebujesz trzech różnych informacji z twojego portfela lub plików .keys,
które zawierają te informacje oraz hasło do ich odszyfrowania. Trzy
komponenty portfela, których potrzebujesz, to:

1. **Adres**
2. **Ukryty klucz do wydawania**
3. **Ukryty klucz widoczności**


#### CLI

Następnie uruchom funkcję portfela:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Zostaniesz poproszony o adres, klucz do wydawania, klucz widoczności i na
końcu o nowe hasło do odwtorzonego portfela.

Ukończenie tego z poprawnymi parametrami odtworzy pliki twojego portfela i
pozwoli na ustalenie nowego hasła.

W przypadku problemów, uruchomienie funkcji `./monero-wallet-cli --help`
wyświetli dostępne opcje. Uruchomienie funkcji `help` wewnątrz portfela
wyświetli pomoc dotyczącą funkcji dostępnych wewnątrz portfela.

#### GUI

Uruchom Graficzny Interfejs Użytkownika Monero. Jeśli uruchamiasz go po raz
pierwszy, przejdź do następnego kroku, jeśli nie - kliknij `Anuluj`:

![cancel
opening](/img/resources/user-guides/en/restore_from_keys/cancel-opening.avif)

Kliknij w `Odzyskaj portfel z kluczy lub mnemonicznego seeda`:

![choose
restore](/img/resources/user-guides/en/restore_from_keys/choose-restore.avif)

Select `Restore from keys`, give your wallet a name & storage location, and
complete the `Account address (public)`, `View key (private)` & `Spend key
(private)`. Optionally, specify a `Restore height (optional)` to avoid
scanning of oldest blocks. Then click the `Next` button:

![restore
wallet](/img/resources/user-guides/en/restore_from_keys/restore-wallet.avif)

On the next page, give your wallet a strong password and confirm it before
clicking the `Next` button:

![wallet
password](/img/resources/user-guides/en/restore_from_keys/wallet-password.avif)

Specify your daemon settings and click the `Next` button:

![daemon
settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.avif)

Click on `Create wallet` to complete the restoration process:

![all set
up](/img/resources/user-guides/en/restore_from_keys/all-set-up.avif)
