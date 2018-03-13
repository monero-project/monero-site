## İşletim Sistemleri:  Windows, Linux, Mac

### Hesap Yazılımı:  monero-wallet-cli

- Eski Monero cüzdanınızı (@wallet) oluştururken kaydettiğiniz 25 kelimelik @mnemonic-seed i bulun.

- Bir komut satırı açıp monero-wallet-cli’yi içeren ilgili sürücüye ve dizine gidin

- Komut satırına şunu yazın: `monero-wallet-cli --restore-deterministic-wallet`

- Girişe bastığınızda sizden bir cüzdan adı girmeniz istenecek. Herhangi bir isim verin

- Sonrasında sizden bir parola istenecek. Cüzdanınıza yeni ve uzun bir parola belirleyin

- Girişe basın ve parolanızı tekrar girin

- Girişe basın ve daha önce bulmuş olduğunuz 25 kelimelik electrum stilindeki mnemonic seed’inizi girin

-  Karşınıza “Belirli bir blok zincirinden itibaren geri yükle (isteğe bağlı, varsayılan 0):” gelecektir. Varsayılan şekilde geri yükleme süreci Monero’nun ilk bloğundan başlar. Eğer cüzdanınızın hangi blok zincirinde olduğunu bilmiyorsanız girişe basın. (Özel bir blok zinciri değeri belirtmeniz süreci o bloktan başlatır. Hesabınızı oluştururken hangi blokta oluştuğunu biliyorsanız, bu seçenek size geri yükleme esnasında biraz zaman kazandırabilir)

25 kelimelik mnemonic seed’inizi girdikten ve özel blok zinciri büyüklüğünü belirttikten sonra monero-wallet-cli eski cüzdanınızla aynı olan genel adres ve görüntüleme anahtarını geri yükleyecek ve senkronizasyon sürecini otomatik olarak başlatacaktır. (Senkronizasyon epey vakit alabilir, lütfen sabırlı olun.)
