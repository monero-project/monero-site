Bazen paranız sıkışıp kalabilir veya paranız bir daha açılamayacak şekilde kilitlenmiş olabilir. Bu sorunun çözümü burada.

- Cüzdanınızı monero-wallet-cli ile açın.

- Komut satırına şunu

> seed

girin. 25 kelimeden oluşan seed’inizi bir yere not alın. Paranıza erişimi kaybetmemenizin en kolay yolu budur.

- Şunu yazarak monero-wallet-cli'den çıkın

> exit

- Cüzdanla alakalı bütün dosyaları yedekleyin:

> cuzdanadiniz.bin
> cuzdanadiniz.bin.keys
> cuzdanadiniz.bin.address.txt

Dosyaları basitçe diğer bir klasöre kopyalayabilirsiniz.

Cüzdanınızı oluştururken bazen .bin kısmı olmadan isimlendirmiş olabilirsiniz. Bu durumda cüzdan dosyası sonunda .bin uzantısı olmadan cuzdanadiniz olarak görünecektir.

- cuzdanadiniz.bin dosyasını siliniz.

- monero-wallet-cli çalıştırıp, henüz silmiş olduğunuz cüzdanın adını giriniz

- Parolanızı giriniz. Cüzdanınız şimdi yeniden yüklenecek ve kilitli olan paranızın kilidi muhtemelen açılmış olacaktır.
