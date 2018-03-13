Para gönderdiğiniz şahıs eğer ödemeye itiraz ediyorsa, ödemenin yapıldığını kanıtlayabilmeniz gerekmektedir.

Bitcoin’le bu genelde ilgili işlem ID’si ile yapılır, ve böylece alan ve gönderen adres ile miktar görüntülenebilir.

Ancak Monero gizlidir: bu bilgi blok zinciri üzerinde görünmez. Haliyle ilgili adımlar biraz daha karışıktır.

Alice, Bob’a ödeme yaptığını kanıtlayabilmek için Charlie’ye üç adet bilgi sunmalıdır:

- işlem ID’si, tıpkı Bitcoin’deki gibi
- Bob’un adresi, tıpkı Bitcoin’deki gibi
- işlem anahtarı, ki bu sadece Monero ve diğer CryptoNote bazlı paralara hastır

Alice işlemi gerçekleştirdiğinde bu işleme özel tek seferlik bir anahtar otomatik olarak üretilir. Alice bu anahtarı monero-wallet-cli ile görüntüleyebilir (simplewallet’ın yeni adı):

> get_tx_key ISLEMID

Alice’in ISLEMID gördüğü yere kendi işlem ID’sini girmesi gerekmektedir. Her şey yolunda giderse, tek seferlik işlem anahtarı görüntülenecektir.

Ayrıca monero-wallet-cli’in işlem anahtarlarını kaydettiğinden emin olunuz. Kontrol etmek için:

> set

Eğer gelen değer 0’sa, 1’e çekiniz:

> set store-tx-info 1

Alice artık Charlie’ye işlem anahtarını, işlem ID’sini ve Bob’un adresini gönderebilir.

Not: eğer birden çok işlem yapıldıysa, bu süreç her işlem için tekrarlanmalıdır.


---

Charlie artık bu üç bilgiyi aldığına göre Alice’in doğruyu söyleyip söylemediğini kontrol edebilir: güncel bir blok zinciri üstünde, Charlie monero-wallet-cli’a girip şunu yazar:

> check_tx_key ISLEMID ISLEMANAHTARI ADRES

Alice’in göndermiş olduğu bilgiler bu komuta güzelce yerleştirilir. monero-wallet-cli işlem anahtarını kullanarak işlemi açar ve bu işlemin ilgili adrese ne kadar göndermiş olduğunu gösterir. Tabii ki Charlie, Bob’un adresinin ilgili adres olup olmadığını kontrol etmek isteyecektir - tıpkı Bitcoin’de olduğu gibi.

Ek olarak işlem anahtarı GUI’nin Geçmiş sekmesinden de elde edilebilir. Herhangi bir işlemin anahtarını görmek için detaylara tıklayabilirsiniz.

Not: eğer birden çok işlem yapıldıysa, bu süreç her işlem için tekrarlanmalıdır.
