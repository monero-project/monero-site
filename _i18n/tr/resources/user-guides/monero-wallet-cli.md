# monero-wallet-cli

`monero-wallet-cli` Monero ağacıyla birlikte gelen cüzdan yazılımıdır. Bir konsol programıdır, ve bir hesabı yönetir. Bitcoin cüzdanları, hesap ve blok zincirini aynı anda yönetirken, Monero bunları ikiye ayırır: `monerod` blok zincirini, `monero-wallet-cli` hesabı yönetir.

Bu rehber size `monero-wallet-cli` arayüzünü kullanarak çeşitli operasyonların nasıl yapıldığını gösterecektir. Rehber Monero’nun son sürümünü kullandığınızı ve diğer rehberleri göz önüne alarak bir hesap oluşturduğunuzu varsayar.


## Bakiyenizi kontrol etme

Blok zinciri ve cüzdanı ayrı programlar olduğundan, `monero-wallet-cli` çoğu zaman daemon’la çalışmak durumundadır. Buna adresinize gelen işlemlere bakmak da dahildir. `monero-wallet-cli` ve `monerod` birlikte çalışıyorken `balance` yazın.

Örnek:

Bu, cüzdanın henüz taramadığı blokları daemon’dan çekecek ve bakiyenizi eşleşmesi için güncelleyecektir. Bu işlem normalde arka planda dakikada bir gerçekleşecektir. Bakiyenizi yenilemeden görmek için:

    balance
    Balance: 64.526198850000, unlocked balance: 44.526198850000, including unlocked dust: 0.006198850000

Bu örnekte, `Balance` toplam bakiyenizdir. `unlocked balance` an itibariyle harcamaya müsait bakiyenizdir. Yeni alınan işlemler, kilitleri açılmadan önce blok zinciri üzerinde 10 onaydan geçer. `unlocked dust` hesabınızda toplanmış olan ve harcanmamış, çok küçük miktarlara tekabül eder.

## Monero gönderme

Bunun için göndermek istediğiniz kişinin standard adresine ('4' ile başlayan uzun bir dizi), ve, alıcı kişi istiyorsa, muhtemelen bir ödeme ID’sine ihtiyacınız olacaktır. Ödeme ID’si istenmesi durumunda, alıcı kişi size entegre bir adres verebilir, ki bu adres, ikisinin teke indirgenmiş halidir.

### Standard bir adrese gönderme:

    transfer ADRES MIKTAR ODEMEID

`ADRES`’i göndermek istediğiniz adresle, `MIKTAR`’ı göndermek istediğiniz Monero miktarıyla, ve `ODEMEID`’yi size verilen ödeme ID’siyle değiştirin. Ödeme ID’leri isteğe bağlıdır. Alıcı istememişse, boş bırakabilirsiniz.

### Entegre bir adrese gönderme:

    transfer ADRES MIKTAR

Bu durumda ödeme ID’si entegre adresin içindedir.

### Bir işlem için çıktı sayısı belirtme

    transfer ÇIKTISAYISI ADRES MIKTAR

`ÇIKTISAYISI`’nı kullanmak istediğiniz sayıyla değiştirin. **Özellikle belirtilmemişse, varsayılan değer 4’tür.** Varsayılan değeri kullanmak iyi bir fikirdir, ancak isterseniz bu sayıyı arttırabilirsiniz. Daha yüksek çıktı sayısı, daha büyük işlem, haliyle daha çok işlem masrafı demektir.


## Monero alma

Kendi Monero adresiniz varsa, birine bu standard adresi vermeniz yeterlidir.

Adresinizi şu komutla görebilirsiniz:

    address

Monero anonim olduğundan, size gelen paranın kaynağını göremeyeceksiniz. Mesela ödemenin belli bir müşteriden geldiğini görmek isterseniz, göndericiye bir payment ID kullanmasını söylemeniz gerekecektir, bu ID işleme eklenen herhangi bir etikettir. İşleri kolaylaştırmak için, bir rastgele bir ödeme ID’si içeren entegre bir adres üretebilirsiniz:

    integrated_address

Bu komut rastgele bir payment ID üretecek, ve size kendi hesabınız ve üretilen ödeme ID ile oluşturulmuş entegre bir adres verecektir. Eğer belli bir ödeme ID seçmek isterseniz, o da mümkün:

    integrated_address 12346780abcdef00

Sizin hesabınız ve ödeme ID’nizle üretilen adrese yapılan ödemeler sizin hesabınıza gelecek, ilgili ödeme ID aracılığıyla ödemeyi ayırt edebileceksiniz.


## Üçüncü bir şahsa ödeme yaptığınızı kanıtlamak

Bir satıcıya ödeme yapmanıza rağmen satıcı paranızı almadığını iddia ederse, üçüncü bir şahsa, ve hatta satıcının kendisine, ödemeyi yaptığınızı kanıtlamanız gerekebilir. Monero gizlidir, haliyle blok zinciri üstünde işleminizi gösteremezsiniz çünkü kimin ne aldığı veya gönderdiği belli değildir. Ancak bir kişiye, işleme-özel gizli anahtarınızı sağlarsanız o kişi belli bir adrese Monero gönderip gönderilmediğini belirleyebilir. Bu işleme-özel anahtarlar varsayılan olarak etkin değildir, haliyle buna ihtiyacınız olacağını düşünüyorsanız gönderim yapmadan önce etkinleştirmeniz gerekir:

    set store-tx-info 1

Tx anahtarını önceki bir işlemden alabilirsiniz

    get_tx_key 1234567890123456789012345678901212345678901234567890123456789012

Anahtarını bulmak istediğiniz işlemin ID’sini girin. Unutmayın, bir ödeme birden fazla işleme bölünmüş olabilir, haliyle birçok anahtara ihtiyacınız olabilir. Bu anahtar(lar)ı, adres ve işlem ID ile birlikte, işlemi kanıtlamak istediğiniz kişiye gönderebilirsiniz. Ayrıca bu üçüncü şahıs, sizin adresinizi bilmesi durumunda, size ne kadar para üstü verildiğini de görebilecektir.

Eğer üçüncü şahıs sizseniz (yani birisi size Monero gönderdiğini kanıtlamaya çalışıyor demektir), o halde kontrolü şu şekilde gerçekleştirebilirsiniz:

    check_tx_key ISLEMID ISLEMANAHTARI ADRES

`ISLEMID`, `ISLEMANAHTARI` ve `ADRES` bilgilerini size sağlanan işlem ID’si, işleme-özel anahtar ve adresle değiştirin. monero-wallet-cli işlemi kontrol edip size belirtilen adrese ne kadar ödeme yapıldığını gösterecektir.


## Ödemeleri onaylama/iptal etmeden önce onay isteme

Bir ödeme gönderirken son bir onay vermek istiyorsanız:

    set always-confirm-transfers 1


## Size yapılan bir ödeme nasıl bulunur

Belli bir ödeme ID’siyle ödeme almışsanız, şu şekilde kontrol edebilirsiniz:

    payments ODEMEID

Birden fazla ödeme ID’si sağlayabilirsiniz.

Daha genel olarak, gelen ve giden ödemelere şu şekilde bakabilirsiniz:

    show_transfers

Sadece güncel işlemleri listelemek isterseniz isteğe bağlı bir blok boyutu belirtebilir ve sadece gelen/giden işlemleri talep edebilirsiniz. Örneğin,

    show_transfers in 650000

size sadece 650000. bloktan sonra gelen transferleri gösterecektir. Ayrıca bir blok aralığı da belirtebilirsiniz.

Madenciliği başlatmak isterseniz, işlemi cüzdandan yapabilirsiniz:

    start_mining 2

Bu komut madenciliği daemon üstünde 2 paralel kullanarak başlatacaktır. Bunun bir solo madencilik olduğunu unutmayın, haliyle bir blok bulmanız epey vakit alabilir. Madenciliği durdurmak için:

    stop_mining
