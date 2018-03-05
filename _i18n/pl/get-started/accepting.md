<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="full">
                    <div class="info-block text-adapt">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Instrukcje dla Interfejsu Wiersza Poleceń</h2>
                            </div>
                        </div>
<div markdown="1">
                           
### Podstawy

Monero działa trochę inaczej niż inne kryptowaluty, do których mogłeś się przyzwyczaić. W przypadku cyfrowej waluty, takiej jak Bitcoin i jego pochodne, system płatności handlowych przeważnie tworzy nowy adres odbiorcy dla każdej płatności lub każdego użytkownika.

Jednak Monero posiada jednorazowe adresy i nie musi tworzyć osobnego adresu odbiorcy przy każdej płatności lub nowym użytkowniku, a pojedynczy adres konta może zostać upubliczniony. Aby otrzymać płatność, sprzedający udostępnia kupującemu swój numer identyfikacyjny.

Numer identyfikacyjny to heksadecymalny ciąg 64 znaków, przeważnie tworzony losowo przez odbiorcę. Przykładem numeru identyfikacyjnego jest:

```
666c75666679706f6e7920697320746865206265737420706f6e792065766572
```

### Weryfikacja płatności w monero-wallet-cli

Jeśli chcesz zweryfikować daną płatność za pomocą monero-wallet-cli, użyj polecenia "payments" i wpisz numer lub numery identyfikacyjne, na które zrealizowano wpłatę. Na przykład:

```
[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
 666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █
```

Jeśli chcesz zaprogramować weryfikację płatności, przejdź do sekcji poniżej.

### Otrzymywanie płatności krok po kroku

* Wygeneruj losowo heksadecymalny ciąg 64 znaków 
* Przekaż swój nowy numer identyfikacyjny i adres Monero osobie, która dokonuje wpłaty
* Zweryfikuj płatność przy użyciu polecenia "payments" w monero-wallet-cli.

### Programowanie weryfikacji płatności

Aby zaprogramować weryfikację płatności, możesz użyć funkcji get_payments lub get_bulk_payments JSON RPC API.

*get_payments*: ta funkcja wymaga parametru payment_id z jednorazowym numerem identyfikacyjnym.

*get_bulk_payments*: to preferowana metoda, która wymaga dwóch parametrów: payment_ids - szereg JSON numerów identyfikacyjnych - oraz, opcjonalnie, min_block_height - wysokość bloku, który będzie skanowany.

W rezultacie otrzymujemy następujący wynik:

```
[ monero->~ ]$ curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
{
  "id": "test",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 30000000000000,
      "block_height": 441942,
      "payment_id": "666c75666679706f6e7920697320746865206265737420706f6e792065766572",
      "tx_hash": "7ba4cd810c9b4096869849458181e98e18b6474ab66415de0f4ccf7ab1162fdf",
      "unlock_time": 0
    }]
  }
}
```

Warto zauważyć, że otrzymane wartości są w podstawowych jednostkach Monero, a nie w jednostkach normalnie używanych w aplikacjach użytkownika końcowego. Transakcja przeważnie będzie miała wiele wyników, które się sumują do całej kwoty płatności, dlatego kwota powinna być pogrupowana na funkcje tx_hash lub payment_id i następnie zsumowana. Ponadto wiele wyników może mieć tę samą wartość i ich filtrowanie nie może się odbywać jedynie za pomocą funkcji get_bulk_payments.

Przed skanowaniem płatności zalecane jest sprawdzenie, czy wyłączony został daemon RPC API (funkcja get_info RPC) i czy nie zostały nałożone dodatkowe blokady. Następnie warto skanować jedynie począwszy od otrzymanego bloku, precyzując go w funkcji min_block_height i get_bulk_payments.

### Programowanie skanowania płatności

* Sprawdź w daemonie obecną wysokość bloku, kontynuuj tylko jeśli się zwiększył od ostatniego skanowania
* Użyj funkcji get_bulk_payments RPC API z ostatnio zeskanowaną przez nas wysokością i z listą wszystkich numerów identyfikacyjnych w naszym systemie
* Zachowaj obecną wysokość bloku jako ostatnio zeskanowaną
* Usuń duplikaty, biorąc pod uwagę hasze transakcji, które już otrzymaliśmy i przetworzyliśmy.

                           
</div>
                    </div>
                </div>
    
                
                <!-- end right one-third block-->
            </div>
        </section>
                
