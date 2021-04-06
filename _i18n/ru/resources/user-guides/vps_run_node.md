{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` является демон-программой в составе дерева Monero. Это консольная программа, используемая для управления блокчейном. Если кошелек Bitcoin позволяет управлять как аккаунтом, так и блокчейном, то в Monero эти функции разделены: `monerod` работает с блокчейном, а `monero-wallet-cli` управляет аккаунтом.

Настоящее руководство подразумевает, что у вас уже создан VPS аккаунт, и вы используете SSH для получения доступа к серверной консоли.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Убедитесь в том, что порт 18080 открыт

`monerod` использует этот порт для связи с другими узлами сети Monero.

Пример использования `ufw`: `sudo ufw allow 18080`
Пример использования `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Загрузить актуальные двоичные файлы Monero Core

    wget https://downloads.getmonero.org/linux64

### Создать директорию и извлечь файлы.

    mkdir monero
    tar -xjvf linux64 -C monero

### Запустить демон-программу

    cd monero
    ./monerod

### Опции:

Открыть список всех опций и настроек:

    ./monerod --help

Запустить демон-программу фоновым процессом:

    ./monerod --detach

Следить за выходом `monerod` при запуске в качестве демон-программы:

    tail -f ~/.bitmonero/bitmonero.log

Обезопасить VPS посредством автоматического обновления:

https://help.ubuntu.com/community/AutomaticSecurityUpdates
