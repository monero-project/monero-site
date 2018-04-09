Przywracanie portfela za pomocą prywatnych kluczy (w wierszu poleceń) jest całkiem proste. Jeśli posiadasz potrzebne informacje, z tym przewodnikiem będziesz mógł całkowicie przywrócić swój portfel. Zauważ, że nie musisz posiadać swojego hasła, aby przywracać za pomocą kluczy.

Potrzebujesz trzech różnych informacji z twojego portfela lub plików .keys, które zawierają te informacje oraz hasło do ich odszyfrowania. Trzy komponenty portfela, których potrzebujesz, to:

1. **Adres**
2. **Ukryty klucz do wydawania**
3. **Ukryty klucz widoczności**


Następnie uruchom funkcję portfela:

`./monero-wallet-cli --generate-from-keys New_Wallet_Name.abc`

Zostaniesz poproszony o adres, klucz do wydawania, klucz widoczności i na końcu o nowe hasło do odwtorzonego portfela.

Ukończenie tego z poprawnymi parametrami odtworzy pliki twojego portfela i pozwoli na ustalenie nowego hasła.

W przypadku problemów, uruchomienie funkcji `./monero-wallet-cli --help` wyświetli dostępne opcje. Uruchomienie funkcji `help` wewnątrz portfela wyświetli pomoc dotyczącą funkcji dostępnych wewnątrz portfela.
