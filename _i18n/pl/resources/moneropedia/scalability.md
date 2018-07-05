---
entry: "Skalowalność"
terms: ["scalability", "skalowalność", "skalowalności", "skalnowalnością"]
summary: "Potencjał wzrostu Monero oraz metoda zwiększania efektywności."
---

### Podstawy

Monero nie posiada ustalonego maksymalnego rozmiaru bloku, co oznacza, że, w przeciwieństwie do Bitcoina, którego limit bloku wynosi 1 MB, nie posiada limitu zapobiegającego skalowaniu. Jednak do protokołu wbudowany został mechanizm kary za wynagrodzenie za blok w celu uniknięcia zbytniego wzrostu rozmiaru bloku - nowy rozmiar bloku (NBS) jest porównywalny do rozmiaru mediany M100 ostatnich 100 bloków. Jeśli NBS>M100, wynagrodzenie za blok zostaje zmniejszone o funkcję kwadratową ilości, o którą NBS przekroczył M100, na przykład jeśli NBS jest [10%, 50%, 80%, 100%] większe od M100, wnagrodzenie nominalne za blok zmniejszy się o, odpowiednio, [1%, 25%, 64%, 100%]. Przeważnie bloki większe niż 2*M100 nie są dozwolone, a bloki <= 60kB są zawsze wolne od jakichkolwiek kar.
