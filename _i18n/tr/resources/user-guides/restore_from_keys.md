Cüzdanınızı özel anahtardan (komut satırı ile) geri yüklemeniz oldukça basittir. Gerekli verilere sahipseniz, bu rehberle cüzdanınızı tamamen geri yükleyebilirsiniz. Not: anahtardan geri yükleme için cüzdan parolanıza ihtiyacınız YOKTUR.

Cüzdan veya .keys dosyanızdan 3 parça veriye ihtiyacınız olacak. Bu 3 veri::

1. **Adres**
2. **Secret Spendkey (Gizli Harcama Anahtarı)**
3. **Secret Viewkey (Gizli Görüntüleme Anahtarı)**


Cüzdan komutunu çalıştırın:

`./monero-wallet-cli --generate-from-keys Yeni_Cuzdan_Adi.abc`

Sonrasında sizden adres, spendkey, viewkey ve son olarak yeni oluşturulan cüzdan için yeni bir şifre girmeniz istenecektir.

Bu komutu doğru parametrelerle çalıştırmanız cüzdan dosyalarınızı tekrar oluşturup yeni bir parola belirlemenize imkan sağlayacaktır.

Herhangi bir sorunla karşılaşırsanız, `./monero-wallet-cli --help` çalıştırarak mevcut seçenekleri görüntüleyebilirsiniz. Cüzdanınızı çalıştırdıktan sonra `help` yazmanız durumundaysa cüzdanın içinde kullanabileceğiniz komutların bir listesi sunulur.
