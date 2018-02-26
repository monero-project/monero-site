# Blok Zincirinin Monero GUI Cüzdana Aktarılması (Windows)

### 1. Adım

Mevcut bootstrap dosyasını https://downloads.getmonero.org/blockchain.raw adresinden indirin; blok zincirini başka bir kaynaktan aktarıyorsanız bu adımı geçebilirsiniz.

### 2. Adım

Monero cüzdanınızın dizinini bulun (cüzdanı açtığınız dizin). Mesela benimki:

`D:\monero-gui-0.10.3.1`

Cüzdanınızı nereye indirdiğinize ve Monero cüzdan sürümünüze bağlı olarak dizininiz farklılık gösterebilir.

### 3. Adım

İndirdiğiniz blok zincirinin dizinini bulun, mesela benimki:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Blok zincirini indirdiğiniz yere göre sizinki farklı olabilir.

### 4. Adım

Bir Komut Satırı penceresi açın. Bunun için Windows + R tuşladıktan sonra gelen ekrana `CMD` yazabilirsiniz

### 5. Adım

Şimdi CMD penceresini kullanarak Monero cüzdanının olduğu dizine gitmeniz gerek. Bunun için şu komutu girin:

`cd C:\SIZIN\MONERO\CUZDAN\DOSYASI\ADRESINIZ\BURADA`

Komutunuz şuna benzemeli:

`cd D:\monero-gui-0.10.3.1`

Monero cüzdanınız farklı bir sürücüdeyse `Sürücü:` komutunu kullanabilirsiniz, mesela D sürücündeyse, cd komutundan önce `D:` yapmanız gerek

### 6. Adım

Şimdi komut satırınıza şu komutu yazın:

`monero-blockchain-import --verify 1 --input-file C:\SIZIN\BLOKZINCIRI\DOSYANIZIN\DIZINI\BURADA`

Mesela benim için şöyle :

`monero-blockchain-import --verify 1 --input-file C:\Users\KeeJef\Downloads\blockchain.raw`

Blok zincirini güvenilir, bilinen bir kaynaktan indirmişseniz `verify 0` olarak girebilirsiniz, böylece blok ziniciri senkronize süresi azalmış olur.  

### 7. Adım

Blok zinciri senkronizasyonu tamamlandıktan sonra Monero cüzdanınızı normal bir şekilde açabilirsiniz. İndirmiş olduğunuz blockchain.raw dosyasını silebilirsiniz.


Yazar: Kee Jefferys
