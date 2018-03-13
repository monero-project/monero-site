### İşletim Sistemi:  Ubuntu

- Şuradan resmi sürümü [indirin](https://getmonero.org/downloads/) veya GitHub'da bulunan son kaynak kodu [derleyin](https://github.com/monero-project/bitmonero)

![image1](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/1.png)
![image2](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/2.png)

- Dosyaları arşiv yöneticisiyle  (Windows’taki WinZip gibi) açın. “monerod” ve “monero-wallet-cli" dosyalarının bulunduğu dizini not edin

![image3](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/3.png)
![image4](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/4.png)

- Bu işlemi yalnızca bir kez yapmanız gerek: bir terminal açın (ctrl+alt+t) ve şunu yazarak zorunlu gereklilikleri yükleyin : "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*". Sorulursa, Y yazdıktan sonra Göndere basıp devam edin

![image5](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/5.png)
![image6](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/6.png)

- Bir terminal açık indirdiğiniz dosyaların çıkarıldığı (bkz. 2. adım) giderek şu komutu çalıştırın : "*cd yourPathFromStep2*"

![image7](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/7.png)

- Terminalde monerod yazarak uygulamayı çalıştırın : "*./monerod*". Ağla senkronizasyonun bitmesini bekleyin (monerod 4. adımda indirmiş olduğunuz blok zincirini güncelliyor veya baştan indiriyor olabilir). İlk sefer çalıştırdığınızda uzun sürebilir, sabırlı olun

![image8](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/8.png)
![image9](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/9.png)
![image10](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/10.png)
![image11](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/11.png)

- Monerod ağ ile eşlendiğinde yeni bir terminal açın, dizini değiştirin (bkz. 5. adım) ve monero-wallet-cli çalıştırmak için şu komutu yazın "*./monero-wallet-cli*"

![image12](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/12.png)

- Portfolyonuz için bir isim girin ve terminal’deki talimatları takip edin

![image13](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/13.png)
![image14](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/14.png)
![image15](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/15.png)
![image16](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/16.png)

*Bu sizin özel anahtarınızdır. Bir yere not alın ve iyi saklayın!*

![image17](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/17.png)

*Bu sizin görüntüleme anahtarınızdır. Salt görüntülenir bir cüzdan oluşturabilmeniz için gereklidir (bkz. ilgili kullanıcı rehberi)*

![image18](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/18.png)

*Bu cüzdanınızın adresidir*

![image19](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/19.png)
![image20](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/20.png)
![image21](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/21.png)
![image22](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/22.png)
![image23](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/23.png)

- Monerod veya monero-wallet-cli’yi kapatmak için ilgili terminalde "*exit*" yazın

Şimdi, oluşturduğunuz portfolyoya erişmek için monerod’yi çalıştırmanız, ağla senkronizasyonun bitmesini beklemeniz, monero-wallet-cli’yi açmanız, portfolyonuzun adını ve parolanızı yazmanız gerek.
