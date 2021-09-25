---
summary: 'Ciąg 13 lub 25 słów używany do tworzenia kopii zapasowej konta Monero, dostępny w wielu językach'
terms: ["mnemonic-seed", "mnemonic", "kod-mnemoniczny", "kodzie-mnemonicznym", "kodu-mnemonicznego"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Ciąg 13 lub 25 słów używany do tworzenia kopii zapasowej konta Monero,
dostępny w wielu językach. Ten 25-słowny ciąg (13-słowny w przypadku
MyMonero) zawiera wszystkie informacje potrzebne do wglądu i wydawania
funduszy z @konta Monero.

### Szczegółowe informacje

W oficjalnym portfelu kod mnemoniczny porównuje 25 słów z ostatnim słowem
użytym jako suma kontrolna. Słowa te odpowiadają 256-bitowej liczbie
całkowitej, będącej *prywatnym* @kluczem-wydawania konta. *Prywatny*
@klucz-widoczności bierze się z haszowania prywatnego klucza wydawania za
pomocą Keccak-256, tworząc drugą 256-bitową liczbę całkowitą. Odpowiednie
klucze *publiczne* powstają następnie z kluczy prywatnych.

Przechowując 25-słowny klucz mnemoniczny w bezpiecznym miejscu, chronisz
kopię zapasową swoich kluczy prywatnych, a więc także i wszystkich twoich
Monero. Dzieląc się z kimkolwiek swoim kluczem mnemonicznym, pozwalasz na
pełny dostęp do twoich środków.

Zalecane jest nieprzechowywanie więcej, niż jesteś gotowy stracić, w
"gorącym portfelu", to znaczy w portfelu podłączonym do internetu lub
załadowanym na jakimkolwiek urządzeniu, które kiedyś było lub może być w
przyszłości podłączone do internetu lub innego niezaufanego źródła.

Możesz bezpiecznie przechowywać swoje Monero w "zimnym" lub
@papierowym-portfelu.
