---
summary: 'Algorytmy kryptograficzne pozwalające osobie udowadniającej na zobowiązanie się do pewnej wartości bez ujawniania jej ani nie będąc w stanie jej zmienić'
terms: ["commitments", "commitment", "pedersen", "pedersen-commitment", "pedersen-commitments", "zobowiązanie", "zobowiązania", "zobowiązaniu", "zobowiązaniom", "zobowiązanie-pedersena", "zobowiązaniu-pedersena", "zobowiązaniem-pedersena"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Algorytmy kryptograficzne pozwalające osobie udowadniającej na zobowiązanie
się do pewnej wartości bez ujawniania jej ani nie będąc w stanie jej
zmienić.

Przy płatnościach Monero wartość wkładu, którą użytkownik wydaje, oraz
wartość wyjściowa są zaszyfrowane i nieprzejrzyste dla wszystkich, z
wyjątkiem odbiorcy każdego z wyjść. Zobowiązanie Pedersena pozwala na
wysyłanie Monero bez ujawniania wartości transakcji. Umożliwia ono także
weryfikację, czy transakcje w łańcuchu bloków są prawdziwe i nie tworzą
monet z niczego.

### Co to oznacza

Dopóki zaszyfrowane wartości wyjściowe (w skład których wchodzi wyjście dla
odbiorcy oraz @reszta zwracana nadawcy) razem z nieszyfrowanymi opłatami za
transakcję są równe sumie wydanego wkładu, transakcja jest prawdziwa i może
zostać potwierdzona, że nie wytworzyła Monero z niczego.

Zobowiązanie Pedersena oznacza, że sumy są potwierdzone jako równe, jednak
wartość Monero każdej z sum oraz wkładu i wyjścia pozostają niemożliwe do
określenia. Znaczy to także, że ukryty jest też stosunek jednego wkładu do
drugiego lub jednego wyniku do drugiego.

Mimo że pozostaje niejasne, czy wkłady faktycznie zostały wydane
(@podpis-pierścieniowy zapisuje zarówno prawdziwe wkłady, jak i te fałszywe,
stąd właściwie nie wiadomo, które wartości zobowiązanie Pedersena sumuje),
nie jest to problemem, ponieważ podpisy pierścieniowe
@poufnych-transakcji-pierścieniowych muszą udowodnić jedynie to, czy suma
wyjść jednej kombinacji jest równa sumie wkładów w tej samej kombinacji. Z
matematycznego punktu widzenia jest to niemożliwe do sfałszowania.

### Szczegółowe informacje

Przeczytaj więcej w dokumencie Shena Noethera z Laboratorium Badawczego
Monero na temat [Poufnych Transakcji
Pierścieniowych](https://eprint.iacr.org/2015/1098.pdf).
