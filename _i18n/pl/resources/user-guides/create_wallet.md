{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
### Systemy operacyjne:  Ubuntu

- Ściągnij [oficjalne pliki binarne](https://getmonero.org/downloads/) lub skompiluj ostatnie dostępne źródło na [Github](https://github.com/monero-project/bitmonero).

![image1](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/1.png)
![image2](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/2.png)

- Wypakuj pliki za pomocą programu do zarządzania plikami (takim samym jak WinZip w Windowsie). Znajdź ścieżkę z plikami "monerod" i "monero-wallet-cli".

![image3](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/3.png)
![image4](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/4.png)

- Ten krok jest jednorazowy: otwórz terminal (ctrl+alt+t) i zainstaluj wymagane zależności, wpisując: "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*". Kliknij Y, aby potwierdzić i Enter, aby kontynuować.

![image5](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/5.png)
![image6](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/6.png)

- Otwórz terminal i załaduj ścieżkę, gdzie wypakowane zostały pliki binarne (zobacz drugi krok), wpisując: "*cd yourPathFromStep2*".

![image7](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/7.png)

- Załaduj monerod, wpisując w terminalu: "*./monerod*". Zaczekaj na synchronizację z siecią (monerod aktualizuje łańcuch bloków, który ściągnąłeś w kroku 4 lub ściąga go od zera). Za pierwszym razem może to zająć dużo czasu, więc bądź cierpliwy.

![image8](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/8.png)
![image9](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/9.png)
![image10](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/10.png)
![image11](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/11.png)

- Kiedy monerod już się zsynchronizuje z siecią. otwórz nowy terminal, zmień folder i uruchom funkcję monero-wallet-cli, wpisując: "*./monero-wallet-cli*".

![image12](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/12.png)

- Wpisz nazwę, którą chcesz nadać swojemu portfolio i postępuj zgodnie z instrukcjami terminala.

![image13](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/13.png)
![image14](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/14.png)
![image15](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/15.png)
![image16](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/16.png)

*To jest twój prywatny klucz. Zapisz go i zachowaj w bezpiecznym miejscu!*

![image17](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/17.png)

*To jest twój klucz widoczności.
This is your view key. Potrzebujesz go do stworzenia portfela tylko do wyświetlania (zobacz także: powiązany przewodnik dla użytkowników).*

![image18](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/18.png)

*To jest adres twojego portfela.*

![image19](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/19.png)
![image20](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/20.png)
![image21](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/21.png)
![image22](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/22.png)
![image23](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/23.png)

- Aby wyjść z monerod lub monero-wallet-cli, wpisz "*exit*" w powiązanym terminalu.

Aby otworzyć nowoutworzone portfolio, uruchom funkcję monerod, poczekaj na jej synchronizację z siecią, uruchom funkcję monero-wallet-cli i wpisz nazwę swojego portfolio oraz hasło.


