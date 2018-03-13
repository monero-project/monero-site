Salt-görüntülenir bir cüzdan sadece hangi gelen işlemlerin size ait olduğunu görebilir. Monero’nuzu harcayamaz, hatta cüzdandan giden işlemlere bile bakamaz. Bu sebeple salt-görüntülenir cüzdanın şu gibi faydaları vardır:

* Geliştiriciler ödemeleri doğrulamak için kütüphane yazabilir
* Son kullanıcılar soğuk cüzdanlara gelen işlemleri doğrulayabilir

### Bir Salt-Görüntülenir Cüzdan Oluşturma

Herhangi bir cüzdanı kullanarak salt-görüntülenir bir cüzdan oluşturabilirsiniz.

Mevcut bir cüzdanı açın veya `monero-wallet-cli` kullanarak yeni bir tane oluşturun. Cüzdanda `address` ve `viewkey` yazarak cüzdanın adres ve özel görüntüleme-anahtarını gösterin. `exit` yazarak cüzdandan çıkın.

Sonrasında `monero-wallet-cli --generate-from-view-key cuzdan-adi` yazarak salt-görüntülenir cüzdanınızı oluşturun. Son değişken yeni cüzdan adınız olacaktır. Sizden `Standard Address` ve `View key` girmeniz istenecektir. Orijinal cüzdan adresinizi ve özel görüntüleme anahtarınızı yapıştırın. Sonrasında yeni cüzdanınız için bir parola belirleyin. İşleminiz tamamdır.
