---
summary: 'Gesamtanzahl möglicher Unterzeichner in einer Ringsignatur'
terms: ["ring-size", "Ringgröße"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Die Ringgröße bezieht sich auf die Gesamtzahl von Unterzeichnern einer
@Ringsignatur. Vor der [0.13.0-"Beryllium Bullet"-Version]({{ site.baseurl
}}/2018/10/11/monero-0.13.0-released.html) war es möglich, eine beliebige
Anzahl von Unterzeichnern auszuwählen. Im Zuge der Version 0.13 wurde
entschieden, diese Zahl auf 11 festzusetzen, um eine
Transaktionseinheitlichkeit zu schaffen.

`Ringgröße (11) = fremde Outputs (10) + dein Output (1)`

Fremde Outputs werden in der Regel "Decoys" (dt.: Köder) genannt; die Anzahl
dieser Köder wurde zuvor als "Mixin"-Größe bezeichnet.
