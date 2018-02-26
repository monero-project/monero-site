## Monero nasıl alınır ve güvenle depolanır.

Haziran 2017 itibariye Monero’nun nasıl alınacağına ve güvenle depolanacağına dair rehberdir.

#### 1. Adım: Bitcoin Satın Alın

Bitcoin satın almanın birçok yolu var. Şu an için güvenli diyebileceğimiz iki firma mevcut: Xapo <http://www.xapo.com/> ve Coinbase <http://www.coinbase.com/>. Bu süreçte kişisel bilgilerinizi (Kimlik No, Pasaport, vs.) yüklemeniz gerekecek ve süreç tahminen 2 ila 10 iş günü (daha uzun da olabilir) sürecektir. Xapo Wire Transfer kullanır, Coinbase ise bank transferi kullanır (Amerika’da ACH olarak bilinir). Xapo Coinbase’den daha hızlıdır. Coinbase ek olarak debit kart ile ufak miktarlarda “hızlı” alım yapmanıza olanak sağlar ancak bunun için yüksek miktarda ücret keser. Bitcoin aldıktan sonra artık onu Monero’ya dönüştürmeye hazırsınız!

#### 2. Adım: Güvenli ve yalıtımlı bir bilgisayarda Kağıt Cüzdan üretin.

Kağıt cüzdan üreten yazılımı https://moneroaddress.org adresinden indirin ve bir USB diske kopyalayın (Direk bağlantı: https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip).

Daha önce hiç kullanılmamış yalıtımlı bir bilgisayarda, veya yeni kurulmuş bir işletim sisteminin web tarayıcısında indirmiş olduğunuz cüzdan üreticisini (monero-wallet-generator.html) açın.

Kağıt cüzdanınızın dört önemli özelliği olacaktır:

Monero Genel Adres
Bu adres cüzdana para almak için kullanılır. Cüzdanınıza para gönderecek kişilere bu adresi vereceksiniz.

Monero Mnemonic Seed
Mnemonic seed, tüm cüzdanı insanlar tarafından kolay okunabilir bir halde depolamanın yoludur. İhtiyaç olması halinde, cüzdanınızı geri yüklemeniz için bu bilgi yeterlidir.

Monero Özel Harcama Anahtarı
Özel anahtar cüzdandan para göndermek için kullanılır.

Monero Özel Görüntüleme Anahtarı
Özel görüntüleme anahtarı cüzdana gelen işlemleri görüntülemek içindir. Genelde, blok zincirindeki işlemleri soğuk depolama cüzdanına gönderilirken canlı olarak görüntülemenize yarayan, salt-görüntülenir bir cüzdan oluşturmak için kullanılır.

Bu noktada birçok seçeneğiniz var. Cüzdanı kağıda çıktı alabilir, PDF veya metin dosyası olarak USB diske kaydedebilir veya CD/DVD’ye yazabilirsiniz, vs. Muhtemelen farklı lokasyonlarda bulunan, en az iki veya üç kopya oluşturmak isteyeceksinizdir. Eğer dijital olarak saklayacaksanız, her şeyi güçlü bir parolayla şifreleyin. Eğer kağıt üstünde saklayacaksanız, cüzdanı 25 kelimelik anahtarı ezberleyebilecek veya izniniz olmadan resmini çekebilecek hiçkimseye göstermeyin. Birine cüzdanınızın resmini göndermenizle direk paranızı göndermeniz arasında hiçbir fark yoktur.

Hangi yöntemi seçerseniz seçin, kullandığınız cihazda Monero cüzdanına dair hiçbir kopya kalmadığından emin olun. Bir diske kaydetmişseniz Monero cüzdanını güvenle silmeniz veya çıktı almışsanız yazıcının hafızasında kopya kalmadığından emin olmanız gerekebilir.

*Eğer Monero kağıt cüzdanınıza erişimi kaybederseniz, Monero’nuzu ne siz ne de bir başkası kullanabilir. Paranızı bir daha geri alamazsınız!

#### Ek Not
XMR mnemonic seed’i şifrelemek için seçenek:
https://xmr.llcoins.net/
Html sayfasını indirin ve yalıtımlı bilgisayarınıza yerleştirin. "Encrypt/Decrypt Mnemonic Seed" yazan kısma bakın ve iyi bir şifreyle “CN Add" çalıştırdığınızdan emin olun. Bunun için manicminer5’e teşekkürler.



#### 3. Adım: Bitcoin’inizi Monero’ya çevirin ve Monero kağıt cüzdanınıza yollayın

İnternete bağlı bilgisayarınızla www.shapeshift.io sayfasına gidin. "Bitcoin Çekme” ve "Monero Alma" (hızlı)'yı' seçin.

Devam'a basın.

Monero Adresiniz (Monero Kağıt Cüzdanınızdaki Monero Genel Adresiniz)
Monero Genel Adresiniz'i kağıt cüzdanınızdan “Monero Adresiniz” yazan yere yapıştırın. Fakat bir dakika, Monero Genel Adresiniz yalıtımlı bir bilgisayarda olduğundan (değil mi?) hiçbir şey kopyalayıp yapıştıramazsınız… Adresi elle kopyalayın, veya boş bir USB sürücü alıp içine yalnızca Genel Adresinizi atın.

İade Adresi (para alabileceğiniz Genel Bitcoin Adresi)
İşlemde bir hata oluşması halinde paranın iade edilebileceği ve sizin kontrolünüzde olan bir Bitcoin adresi girin. Sizin kontrol ettiğiniz ve para alabileceğiniz bir Bitcoin Genel Adres girmeniz çok önemlidir. Xapo ve Coinbase’de buna “Alım Adresi” de denebiliyor ve bu isim zamanla değişebiliyor.

Ödeme ID
Kendi Monero cüzdan veya Monero kağıt cüzdanınıza göneriyorsanız burayı boş bırakın.

Koşulları kabul edin ve kaydırıcıyı kullanarak adresi “Tekrar Kullanılabilir Adres” yapın.  

“İşlemi Başlat”a basın.

Gönderme Adresi (Shapeshift.io’nun sadece sizin paranızı alması için kullandığı Genel Bitcoin Adresi)
Gelen yeni ekranda, Gönderme Adresi'ni panonuza kopyalayın (alanı seçip ctrl+c veya düzenle-kopyala). Xapo/Coinbase’den Shapeshift.io’ya Bitcoin’i bu adres ile göndereceksiniz.

Xapo veya Circle hesabınıza gidin, “Transfer” veya “Gönder” butonunu bulun. Bitcoin Gönderme Adresi’ni, Hedef kutusuna yapıştırın ve Monero’ya çevirmek istediğiniz Bitcoin miktarını girin. Miktar Shapeshift.io tarafından belirtilen “Min Gönderme” ve “Max Gönderme” aralığı arasında olmalıdır. Gönder’e basın ve gerekirse işlemi onaylayın.

Xapo/Coinbase’den gönderme işlemi başlatıldığında işlem Bitcoin blok zincirine girip onay beklediği için bir miktar gecikme olacaktır. Bu işlem birkaç dakika veya saat sürebilir. Ödemenin Shapeshift.io gönderme adresine gelip gelmediğine blockchain.info adresinden bakabilirsiniz. Shapeshift.io’ya olan işleminiz orada görünecektir.

Bitcoin işleminiz onaylandığında Shapeshift.io, borsalardan birinde Bitcoin’inizi Monero’ya çevirmeye başlayacak, ve işlem tamamlandığında Monero’nuzu Soğuk Depo Kağıt Cüzdan’ınıza yollayacaktır. Bu işlem dakika veya saatler alabilir. Sorun olursa Shapeshift.io’ya ulaşın. Destek ekipleri iyidir.

Shapehift.io işleminizin tamamlandığını belirttiğinde, Monero’nuz artık kağıt cüzdanınıza gönderilmiş demektir!


#### Notlar ve Paranızın Nasıl Doğrulanacağına Dair
Monero blok zinciri gizlidir ve takip edilemez, haliyle Bitcoin’deki olduğu gibi paranızın gelip gelmediğine Monero Genel Adresinizle bakamazsınız. Bu gizlilik açısından iyi olsa da kullanım kolaylığı için aynı şey söylenemeyebilir.

Paranın cüzdanınıza gelip gelmediğine bakabilmeniz için, bir Salt Görüntülenebilir Cüzdan oluşturmanız gerek. Görüntüleme-anahtarı burada devreye girmekte. Salt-okunur cüzdan üretmek için bakınız: [Salt Görüntülenebilir Cüzdanlar]({{site.baseurl}}/resources/user-guides/view_only.html)

Paranızın *hala* cüzdanında olduğunu görmek ve harcanmadığından emin olmak için mnemonic anahtarınızı kullanarak yalıtımlı bir bilgisayarda Monero blok zincirinin güncel bir kopyası ile Soğuk Cüzdan oluşturmanız gerek. İşleminiz tamamlandığında cüzdanı güvenli bir şekilde silmeniz veya internete bağlamanız gerekecek, ki o zaman cüzdanınız bir “Sıcak Cüzdan” olur.
