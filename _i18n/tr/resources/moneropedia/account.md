---
layout: moneropedia
entry: "Hesap"
terms: ["hesap", "hesaplar", "cüzdan", "cüzdanlar"]
summary: "bir banka hesabına benzer, gelen/giden tüm işlemlerinizi içerir"
---

### Temel Bilgiler

Monero’dan önceki kripto paraları hatırlayanlar *cüzdan* terimine daha aşina olacaktır. Monero’da biz buna hesap deriz, ve bu özel hesap bir Monero kullanıcısı tarafından yönetilir.

Monero hesabınız alıp gönderdiğiniz bütün @işlemler i içerir. Hesap bakiyeniz almış olduğunuz Monero’ların toplamı eksi göndermiş olduğunuz Monero’lardır. Monero’yu kullanırken hesabınızın kilitli ve kilitsiz olmak üzere iki bakiye tipine sahip olduğuna dikkat etmişsinizdir. Kilitsiz bakiyeniz o anda harcayabileceğiniz, kilitli olan ise harcayamayacağınız para miktarı gösterir. Aldığınız bir işleme @kilit-açma-tarihi konmuş olabilir, veya bir miktar Monero göndermiş, ve @para-üstü bekliyorsunuzdur, iki durumda da paranız belirli bir süre kilitli kalabilir.

Geleneksel elektronik paralarla Monero arasındaki önemli farklardan birisi hesabınızın yalnızca sizin kontrolünüz altında olması ve [iyi güvenlik önlemleri](#iyi-guvenlik-onlemleri) aldığınız takdirde bu hesaba sizden başka hiç kimsenin erişemeyecek olmasıdır.

### Çoklu Hesaplar

Monero hesabı açmanın herhangi bir maliyeti yoktur, @madenciler e giden @işlem ücretleri dışında herhangi bir ücret de kesilmez.

Yani isteyen herkes kendisi veya eşi ve çocukları için gerek kişisel, gerekse ortak paylaşılabilir bir hesap oluşturabilir. Benzer şekilde bir işletme kendi altındaki bölüm veya gruplar için ayrı hesaplar oluşturabilir. Monero’nun @işlem ücretleri oldukça düşük olduğundan, hesaplar arasında para aktarmak çok da pahalı bir uygulama değildir.

### Kriptografik Anahtarlar

Monero, *genel/özel anahtar kriptografisi* veya *asimetrik kriptografi* olarak da bilinen, ve [şu Wikipedia yazısında](https://en.wikipedia.org/wiki/Public-key_cryptography) detaylı şekilde açıklanan kriptografik temelleri yoğun bir şekilde kullanır.

Hesabınız iki anahtar üzerinde kuruludur, bir @harcama-anahtarı ve bir @görüntüleme-anahtarı. Monero’nuzu harcamak için @harcama-anahtarı kullanmanız gerekir, ek olarak @görüntüleme-anahtarı kullanarak gerçekleştirdiğiniz herhangi bir @işlem görüntülenebilir, veya denetleme ve mali nedenlerden ötürü üçüncü bir partiye sunulabilir. Hesabınızdaki bu anahtarlar Monero’nun @işlem-gizliliği açısından önemli rol oynar.

Hesabınızın gizliliğini korumak için bu iki anahtara denk özel anahtarlar da iyi bir şekilde muhafaza edilmelidir. Diğer yandan genel anahtarlarınız halka açıktır (Monero hesap adresinizin bir parçasıdır). Normal bir genel/özel anahtar kriptografisi şöyle çalışır: birisi size özel bir mesajı genel anahtarlarınızdan birini kullanarak şifreleyerek gönderir, siz de bu mesajı ona denk gelen özel anahtarınızı kullanarak açarsınız.

### Hesabınızın Yedeğini Alma

Monero hesabınızı özel @harcama-anahtarı ile yönettiğinizde, kendi paranızdan kendiniz sorumlu olursunuz. Şansınıza, Monero hesabınızın yedeğini almanız oldukça kolaydır. Monero hesabınızı ilk kez oluşturduğunuzda, size, istediğiniz dilde 13-25 kelimeden oluşan özel bir @mnemonic-seed verilir. **Hesabınızı yedeklemeniz izin ihtiyacınız olan tek şey bu seed’dir**, o sebeple bunu bir kenara not almanız ve güvenle depolamanız kritik önemdedir. Bu bilgiyi başkalarının erişebileceği bir yerde ve şekilde asla saklamayın!

```
List of available languages for your wallet's seed:
0 : Deutsch
1 : English
2 : Español
3 : Français
4 : Italiano
5 : Nederlands
6 : Português
7 : русский язык
8 : 日本語
9 : 简体中文 (中国)
10 : Esperanto
Enter the number corresponding to the language of your choice: 1
Generated new wallet: 4B15ZjveuttEaTmfZjLVioPVw7bfSmRLpSgB33CJbuC6BoGtZrug9TDAmhZEWD6XoFDGz55bgzisT9Dnv61sbsA6Sa47TYu
view key: 4130fa26463d9451781771a8baa5d0b8085c47c4500cefe4746bab48f1d15903
**********************************************************************
Your wallet has been generated.
To start synchronizing with the daemon, use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing monero-wallet-cli to save your
current session's state. Otherwise, you might need to synchronize
your wallet again (your wallet keys are NOT at risk in any case).

PLEASE NOTE: the following 25 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

aunt knuckle italics moisture hawk thorn iris abort
chlorine smog uphill glass aptitude nowhere sewage plywood
dual relic fierce divers anvil nodes bubble cabin abort
**********************************************************************
Starting refresh...
Refresh done, blocks received: 21939                            
Balance: 0.000000000000, unlocked balance: 0.000000000000
Background refresh thread started
[wallet 4B15Zj]: █

```

Yukarıdaki örnekte görüldüğü üzere, bu sözcükleri güvenli bir yerde tutmak çok önemlidir. Eğer bu bilgiyi bulunduğunuz evde kaybetme riskiniz varsa, seed’in ikinci bir kopyasını avukatınızda saklayabilir veya bir güvenli depozito kutusu kullanabilirsiniz. Ek olarak seedi’inizi not alırken bunun bir “seed” olduğunu belli etmeyecek şekilde not almanız, mesela mektup yazarmış gibi, ek bir önlem olarak düşünülebilir.

### İyi Güvenlik Önlemleri

Kritik bir veri kaybı sonrasında hesabınıza tekrar ulaşmak için kullanacağınız @mnemonic-seed inizin yedeğine ek olarak iyi güvenlik önlemleri almanızda fayda var. Yerel bir Monero hesabı oluştururken güvenli bir parola kullanın ([MyMonero](https://mymonero.com) veya diğer web-tabanlı sayfalarda kullanılmamış olsun).

Monero hesap parolanızı asla hiç kimseye vermeyin, çünkü bu parola, @mnemonic-seed iniz bilinmeden de bilgisayarınızdaki hesabınıza erişmek için kullanılabilir. Benzer olarak, özellikle Windows bilgisayarlarda, güncel bir anti-virüs programı çalıştırdığınızdan emin olun. Son olarak, ne olduğu belirsiz e-posta veya web sayfalardaki bağlantılara tıklarken dikkatli olun, çünkü zararlı yazılımlar bilgisayarınıza yerleşip Monero hesabınıza giriş yapmanızı bekleyebilir.

### Hesabınızı Bir Yakınınıza Bırakma

Monero hesabınızı bir yakınınıza bırakmanız hesabı yedeklemeniz kadar kolaydır. Basitçe vasiyetinizde @mnemonic-seed bilginizin yakınınıza verilmesi gerektiğini belirtin veya ilgili bilgiyi, vasiyetinizin uygulamaya konulduğu zaman teslim edilmesi için güvenli bir yerde saklayın. Bu işlemin önemli bir artısı paranın size devredilmesi için yakınınızın üçüncü bir şahsı aylarca beklemeyecek olmasıdır.
