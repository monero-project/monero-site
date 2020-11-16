{% include disclaimer.html translated="yes" translationOutdated="yes" %}

Portfel tylko do odczytu wyświetla jedynie twoje przychodzące transakcje. Nie może on dokonać żadnej płatności, nie może nawet wyświetlić żadnej transakcji wychodzącej. Portfel tylko do odczytu może być ciekawą opcją dla:

* deweloperów, którzy tworzą biblioteki w celu sprawdzania poprawności płatności
* użytkowników końcowych, którzy sprawdzają poprawność transakcje przychodzące do zimnych portfeli.

### Tworzenie portfela tylko do odczytu

Możesz przetworzyć swój istniejący portfel na portfel tylko do odczytu.

#### CLI

Otwórz istniejący portfel lub stwórz nowy, za pomocą funkcji `monero-wallet-cli`. W portfelu wpisz `address` i `viewkey`, aby wyświetlić adres i klucz widoczności portfela. Wpisz `exit`, aby zamknąć portfel.

Następnie stwórz swój portfel tylko do odczytu, wpisując `monero-wallet-cli --generate-from-view-key wallet-name`. Ostatni argument będzie nazwą twojego nowego portfela. Zostaniesz poproszony o `Standard address` oraz `View key`. Wklej adres i klucz widoczności swojego oryginalnego portfela. Następnie wpisz i potwierdź hasło do nowego portfela i gotowe.

#### GUI

Otwórz istniejący portfel lub stwórz nowy, za pomocą funkcji `monero-wallet-gui`. W portfelu przejdź do strony `Ustawienia` > `Portfel`.

![settings](/img/resources/user-guides/en/view-only/settings.png)

Kliknij w przycisk `Utwórz portfel tylko do podglądu` > `Utwórz portfel`, the wallet will be created within the same directory and using your current password.

Możesz dwukrotnie kliknąć w okno `Sukces`, aby skopiować wiadomość, a następnie kliknij `OK`, aby je zamknąć:

![Success](/img/resources/user-guides/en/view-only/Success.png)
