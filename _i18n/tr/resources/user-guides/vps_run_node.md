# monerod

`monerod` Monero ağacıyla birlikte gelen cüzdan yazılımıdır. Bir konsol programıdır, ve bir hesabı yönetir. Bitcoin cüzdanları, hesap ve blok zincirini aynı anda yönetirken, Monero bunları ikiye ayırır: `monerod` blok zincirini, `monero-wallet-cli` hesabı yönetir.

Bu rehber bir VPS hesabı oluşturduğunuzu ve SSH kullanarak sunucu konsola tünelle bağlandığınızı varsayar.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### 18080 port’unun açık olduğundan emin olun
Monero ağındaki diğer düğümlerle iletişim kurmak için `monerod` bu portu kullanır.

`ufw` kullanıyorsanız örnek : `sudo ufw allow 18080`
`iptables` kullanıyorsanız örnek : `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Mevcut Monero Çekirdek dosyalarını indirin

    wget https://downloads.getmonero.org/linux64

### Bir dizin oluşturup dosyaları dışarı çıkarın.

    mkdir monero
    tar -xjvf linux64 -C monero

### Daemon'u çalıştırın

    cd monero
    ./monerod

### Seçenekler:

Tüm seçenek ve ayarları listele:

    ./monerod --help

Daemon’u bir arka plan process’i olarak çalıştır:

    ./monerod --detach

Daemon olarak çalıştırılmışsa `monerod`’nin çıktısına bak:

    tail -f ~/.bitmonero/bitmonero.log

VPS’i otomatik güncelleyerek güvenli tutun:

https://help.ubuntu.com/community/AutomaticSecurityUpdates
