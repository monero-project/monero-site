<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="full">
                    <div class="info-block text-adapt">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Komut-Satırı Arayüzü için Talimatlar</h2>
                            </div>
                        </div>
<div markdown="1">

### Temel Bilgiler

Monero, diğer kripto paralarda (@cryptocurrencies) alışılagelmişin aksine biraz farklı çalışır. Bitcoin benzeri dijital para ve türevlerinde satıcı ödeme sistemleri genellikle her ödeme veya kullanıcı için yeni bir alıcı adresi (@address) oluşturur.

Monero görünmez adres (@stealth-addresses) kullandığından her ödeme veya kullanıcı için ayrı alıcı adresi oluşturmak gerekmez, ve tek bir hesap adresi (@account) yayınlanabilir. Bu sayede, ödeme alırken satıcı, ilgili kişiye sadece bir “ödeme ID” sağlayacaktır.

Ödeme IDsi (@payment-ID) 64 karakter uzunluğunda bir heksadesimal harf öbeği olup genellikle satıcı tarafından rastgele oluşturulur. Örnek olarak:
```
666c75666679706f6e7920697320746865206265737420706f6e792065766572
```

### monero-wallet-cli ile Ödeme Kontrolü

Eğer monero-wallet-cli ile bir ödemeyi kontrol etmek isterseniz “payments” komutunu, önüne “payment ID” (ödeme IDsi) veya çoklu “payment ID”leri girerek kullanabilirsiniz. Mesela:

```
[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
 666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █
```

Ödemeyi program aracılığıyla kontrol etmek isterseniz, detaylar bir sonraki bölümde.

### Adım-Adım Bir Ödeme Alma

* Ödeme için 64 karakterlik bir heksadesimal sözcük öbeği oluşturun
* Ödeme ID’sini (payment ID) ve Monero adresinizi ödemeyi yapacak kişiyle paylaşın
* Ödemenizi monero-wallet-cli ile “payments” komutunu kullanarak kontrol edin

### Program Aracılığıyla Ödeme Kontrol Etme

Program aracılığıyla ödeme kontrol etmek için get_payments veya get_bulk_payments isimli JSON RPC API çağrılarını kullanabilirsiniz.

*get_payments*: parametre olarak tek bir ödeme ID’si (payment ID) gerektirir.

*get_bulk_payments*: bu tercih edilen yöntemdir, ve iki parametre gerektirir, payment_ids - JSON tipinde ödeme ID dizisi - ve isteğe bağlı min_block_height - taranacak blok büyüklüğü.

Örnek bir dönen veri çıktısı:

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

Şunu not etmek gerekir ki dönen veride görünen miktarlar Monero birimidir ve son-kullanıcı uygulamalarda görünen birimlerden farklıdır. Ayrıca, bir işlem tipik olarak birden fazla çıktıyla toplam ödeme miktarına erişeceğinden, miktarlar tx_hash’e veya payment_id göre gruplanmalı ve toplanmalıdır. Ek olarak, birden fazla çıktı aynı miktara sahip olabileceğinden, dönen verinin tek bir get_bulk_payments çağrısıyla filtrelenmemesi önem arz eder.

Ödemeleri taramadan önce ek bloklar alınması ihtimaline karşın daemon’u RPC API (get_info RPC çağrısı) ile kontrol etmekte fayda vardır. Haliyle inen son bloğu “min_block_height” ile belirtip get_bulk_payments ile ödemelerinizi tarayabilirsiniz.

### Program Aracılığıyla Ödeme Tarama

* Son taramadan beri artmışsa, Daemon’dan mevcut blok büyüklüğünü alın
* Taranmış son blok büyüklüğünü ve sistemdeki tüm payment ID’leri kullanarak get_bulk_payments RPC API’ı çağırın  
* Mevcut blok büyüklüğünü taranmış son büyüklük olarak depolayın
* Alınmış ve işlenmiş olan işlem hash’leri kullanarak mükerrer ödemeleri temizleyin

</div>
                    </div>
                </div>


                <!-- end right one-third block-->
            </div>
        </section>
