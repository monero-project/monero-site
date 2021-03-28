{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Udowodnij płatności

Jeżeli dokonasz płatności osobie, która później ją zakwestionuje, musisz być w stanie udowodnić, że pieniądze zostały przesłane.

W przypadku Bitcoina zazwyczaj dokonuje się tego, wyszukując numer identyfikacyjny transakcji, gdzie adres nadawcy i odbiorcy oraz przesłana kwota są ujawnione.

Jednak Monero jest prywatne - te informacje nie są publicznie dostępne w łańcuchu bloków. W związku z tym, kroki są trochę bardziej skomplikowane.

Aby udowodnić Pawłowi, że Ewa przesłała pieniądze Jackowi, musi ona przekazać Pawłowi trzy informacje:

- numer identyfikacyjny transakcji, tak jak się to dzieje w przypadku Bitcoina
- adres Jacka, tak jak się to dzieje w przypadku Bitcoina
- klucz transakcji, który jest wyłącznością Monero i innych walut CryptoNote.

Gdy Ewa dokonywała transakcji, jendorazowy klucz został wygenerowany tylko dla tej płatności.

#### CLI

Ewa może więc odnaleźć go w monero-wallet-cli (nowa nazwa dawnego simplewallet):

> get_tx_key TXID

Ewa zamieni TXID na swój numer identyfikacyjny transakcji. W wyniku tego, wyświetlony zostanie jednorazowy klucz transakcji.

Zauważ, że to zadziała tylko wtedy, gdy monero-wallet-cli zostanie ustawiony na zapisywanie kluczy transakcji. Aby się upewnić, że tak jest, wpisz:

> set

Jeśli ustawione jest na 0, zmień na 1:

> set store-tx-info 1

#### GUI

Ewa może otworzyć swój Graficzny Interfejs Użytkownika i przejść do Historii, gdzie wyszuka szczegóły transakcji:

![History](/img/resources/user-guides/en/prove-payment/history.png)

Stąd może ona skopiować numer identyfikacyjny transakcji oraz adres Jacka, klikając na nie.
Następnie po kliknięciu `P`, Ewa wygeneruje dowód płatności (klucz transakcji).

![Payment proof](/img/resources/user-guides/en/prove-payment/payment-proof.png)


---

Ewa może teraz przesłać Pawłowi klucz transakcji razem z numerem identyfikacyjnym transakcji oraz adresem Jacka.

Zauważ, że jeśli zostało dokonanych wiele transakcji, cały proces musi zostać powtórzony dla każdej transakcji.

### Sprawdź płatności

Paweł otrzymał trzy informacje i chce sprawdzić, czy Ewa mówi prawdę - w aktualnym łańcuchu bloków

#### CLI

Paweł wpisuje w wierszu poleceń:

> check_tx_key TXID TXKEY ADDRESS

Paweł zamienił symbole na informacje dostarczone przez Ewę. monero-wallet-cli użyje klucza transakcji do odszyfrowania jej i wyświetli kwotę przesłaną na ten konkretny adres.

Oczywiście, Paweł będzie chciał się upewnić, czy adres Jacka rzeczywiście do niego należy - tak samo jak w przypadku Bitcoina.

#### GUI

Paweł otworzy swój Graficzny Interfejs Użytkownika i przejdzie do strony Advanced > Prove/Check, aby wypełnić pole Check informacjami dostarczonymi przez Ewę.

![Check payment](/img/resources/user-guides/en/prove-payment/check-payment.png)

Po kliknięciu "Check" Paweł dowie się, jaka kwota została przelana na ten adres w tej konkretnej transakcji oraz ile potwierdzeń miała transakcja.

![Payment checked](/img/resources/user-guides/en/prove-payment/payment-checked.png)


---

Oczywiście, Paweł będzie chciał się upewnić, czy adres Jacka rzeczywiście do niego należy - tak samo jak w przypadku Bitcoina.

Zauważ, że jeśli zostało dokonanych wiele transakcji, cały proces musi zostać powtórzony dla każdej transakcji.


