---
layout: moneropedia
entry: "Para Üstü"
terms: ["para-üstü"]
summary: "Gönderdiğiniz Monero’nun alıcıya gitmeyen, size geri dönen kısmı, para üstü"
---

### Temel Bilgiler

{{ page.summary | capitalize }}.

### Daha Fazla Bilgi

Monero yazılımındaki @cüzdan değişiklikleri otomatik olarak halleder; bir işlem gönderdiğinizde, kontrol ettiğiniz bir @girdi alıp Monero ağına ne yapmanız gerektiğini söylemiş olursunuz. Buradaki @girdi hesabınıza daha önce gelmiş olan ve harcayabileceğiniz bir mevduattır. @Çıktılar ise işlemin Monero ağına parayı nereye gönderdiğinizi bildiren kısmıdır.

Hesabınızda birden fazla farklı değerde birçok girdi olabilir (Örneğin: Cuma günü 0.5 XMR, Cumartesi 0.75 XMR aldınız). Varsayalım ki, 0.5. XMR’lık bir girdiniz var, bunun sadece 0.1’lik kısmını harcamak istediğinizde, işleminiz @madenciler e  ödenecek olan bir miktar @masraf ve alıcıya gidecek olan 0.1 XMR’lık miktarı içerecek, kalan miktarsa (yani “0.5 - 0.1 - masraf”) kendinize tekrardan bir çıktı işlem olarak geri dönecektir (bu geri gelen miktara “para üstü” deniyor). İşlem tamamlandığında, para üstü tekrardan bölüp harcayabileceğiniz bir girdi olarak kullanılabilir hale gelir.
