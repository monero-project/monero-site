## Systemy operacyjne:  Windows, Linux, Mac

### Oprogramowanie konta:  monero-wallet-cli

- Przygotuj swój 25-słowny kod mnemoniczny, który zachowałeś przy zakładaniu swojego starego portfela Monero
 
- Otwórz wiersz polecenia i przejdź do dysku i folderu zawierającego monero-wallet-cli

- W wierszu poleceń wpisz: `monero-wallet-cli --restore-deterministic-wallet`

- Po wciśnięciu Enter zostaniesz poproszony o podanie nowej nazwy pliku portfela. Nazwij go jakkolwiek

- Naciśnij Enter ponownie i zostaniesz poproszony o hasło. Nadaj swojemu portfelowi nowe, długie hasło

- Naciśnij Enter ponownie i zostaniesz poproszony o powtórzenie hasła

- Naciśnij Enter ponownie i zostaniesz poproszony o 25-słowny kod mnemoniczny, który przygotowałeś wcześniej

-  Następnie pojawi się wiadomość "Przywróć z określonej wysokości łańcucha bloków (opcjonalne, domyślnie 0)". Domyślnie proces przywracania zacznie się od początku łańcucha bloków monero. Jeśli nie znasz dokładnej wysokości łańcucha, naciśnij Enter. Uściślenie wysokości łańcucha rozpocznie proces przywracania od tej konkretnej wysokości. Oszczędzi to trochę czasu przy skanowaniu, jeśli wiesz, na jakiej wysokości łańcucha twoje pierwsze fundusze zostały przesłane dla tego konta.

Po wpisaniu 25-słownego kodu mnemonicznego i wybraniu wysokości łańcucha bloków, monero-wallet-cli wygeneruje taki sam adres publiczny i klucz widoczności jak w twoim starym portfelu i automatycznie rozpocznie proces aktualizacji. Bądź cierpliwy, aktualizacja może zająć chwilę.

