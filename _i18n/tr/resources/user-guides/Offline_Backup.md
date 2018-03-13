## İşletim Sistemleri:  Çeşitli Linux Sürümleri ve Windows 7, 8

### Cüzdan Yazılımı:  Simplewallet

#### Başlat Diski Oluşturmak için Kaynak:  [Linux](http://www.pendrivelinux.com/),       [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

#### Monero Dosyaları için Kaynak:  [Monero Dosyaları](https://getmonero.org/downloads/)

- Boşta duran herhangi bir bilgisayarı, hatta iş istasyonunuzu bile değerlendirebilirsiniz. Paranoyaksanız wifi veya bluetooth bağlantısı olmayan eski bir bilgisayarı da kullanabilirsiniz

- Bir Linux veya Windows başlat diski oluşturun, ve Monero dosyalarının bu disk, veya ikinci bir diskte, olduğundan emin olun (Linux için gereksinimleri indirmeniz gerek, mesela libboost1.55 ve miniupnpc)

- Ağ ve/veya internet kablolarını bilgisayarınızdan çıkarın, wifi kartını fiziksel olarak sökün veya laptop kullanıyorsanız wifi/bluetooth’un kapatıldığından emin olun

- İşletim sisteminizi başlatın, lazımsa gereksinimleri yükleyin

- Monero dosyalarını bir RAM diskine koplayayın (Linux için /dev/shm, Windows ISO’ları için muhtemelen Z: veya benzeri)

- Monero daemon’u çalıştırmayın. Onun yerine komut satırını kullanarak  monero-wallet-cli ile yeni bir Monero hesabı (@account) yaratın

- İstendiğinde herhangi bir isim verin, ne olduğu çok da önemli değil

- Parola istendiğinde, 50 - 100 adet rastgele karakter girin. Parolayı bilmiyorum diye telaşlanmayın, sadece uzun olduğundan emin olun

- **KRİTİK ADIM**: Bir kağıda 25 kelimelik @mnemonic-seed inizi not alın
**UYARI**:  Bu bilgiyi yazmayı unutursanız paranız sonsuza dek kaybolabilir

- (Telefon, kağıt, farklı bir bilgisayar, nereye isterseniz)  Adres ve görüntüleme anahtarınızı not alın

- Bilgisayarınızı kapatın, pili varsa sökün, ve birkaç saat kadar fiziksel olarak kapalı bırakın

Oluşturmuş olduğunuz hesap RAM’de yaratılmıştı, ve bu dijital dosyalara artık erişilemez. Kötü niyetli kişiler bir şekilde verilerinize ulaşsa dahil ellerinde bu dosyaları açmak için uzun şifreniz olmayacaktır. Ödeme almak istiyorsanız, genel adresiniz, ve ihtiyacınız olursa, görüntüleme anahtarınız var. Hesabınız erişmek isterseniz kullanabileceğiniz 25 kelimelik @mnemonic-seed mevcut, bunu istediğiniz sayıda çoğaltabilir ve hatta banka kutularında bile saklayabilirsiniz.

Yazan:  Riccardo Spagni

İlgili:  [Çevrimdışı Hesap Yaratıcısı](http://moneroaddress.org/)
