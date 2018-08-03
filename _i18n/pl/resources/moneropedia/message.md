---
entry: "Message"
tags: ["kovri"]
terms: ["Message", "Messages", "wiadomość", "wiadomości", "wiadomością", "wiadomościami", "wiadomościom", "wiadomościach"]
summary: "Mechanizm, dzięki któremu informacje są przekazywane wewnątrz sieci I2P."
---

### Podstawy

*Wiadomości* (które istnieją w wierzchniej warstwie @transportu), zawierają różne informacje potrzebne sieci, ale przede wszystkim to, co widzisz, robisz, wysyłasz i otrzymujesz, jest transportowane za pomocą *wiadomości*.

Istnieją dwa podstawowe rodzaje *wiadomości* w sieci @I2P:

- wiadomości tunelowe
- wiadomości I2NP

Zasadniczo to: *wiadomości tunelowe* **zawierają** **fragmenty wiadomości** @I2NP, które następnie są [składane w całość](https://geti2p.net/en/docs/tunnels/implementation) w pewnym momencie ścieżki tunelowej.

### Szczegółowe informacje

Wiadomości @I2NP są blisko związane z wiadomościami tunelowymi, co sprawia, że łatwo pomylić pojęcie *wiadomości* przy czytaniu specyfikacji sieci @Java-I2P:

>
1. Najpierw furtka tunelu zbiera wiele wiadomości I2NP i przetwarza je w wiadomości tunelowe do wysłania.
2. Następnie furtka szyfruje przetworzone dane i przekazuje je do pierwszego hopu.
3. Peer i kolejni uczestnicy tunelu odkrywają warstwę szyfrowania, weryfikując ją przeciwko duplikatom, a następnie przekazuje dalej do kolejnego peeru.
4. Na końcu wiadomość tunelowa dochodzi do punktu końcowego, gdzie pierwotnie zwinięte przy furtce wiadomości I2NP są składane w całość i przekazywane zgodnie z poleceniem.

### Adnotacje

- Wiadomości I2NP muszą być podzielone, ponieważ różnią się rozmiarem (od 0 do prawie 64 KB), a wiadomości tunelowe mają stały rozmiar (około 1 KB).
- Aby dowiedzieć się więcej na temat szczegółów i specyfikacji, przejdź do strony [specyfikacji I2NP](https://geti2p.net/spec/i2np) oraz [specyfikacji wiadomości tunelowych](https://geti2p.net/spec/tunnel-message).
