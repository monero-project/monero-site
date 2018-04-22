---
entry: "Taille de cercle"
terms: ["ring-size", "taille-de-cercle"]
summary: "Le nombre total de signataires possibles dans une signature de cercle"
---

### Les Bases
La taille de cercle réfère au nombre total de signataires possibles dans une @signature-de-cercle. Si une taille de cercle de 4 est sélectionnée pour une @transaction donnée, cela signifie qu'il y a 3 sorties distantes en plus de votre sortie "réelle". Une grande taille de cercle va typiquement fournir plus de confidentialité qu'une plus petite. cependant, réutiliser une taille de cercle curieuse et reconnaissable pour des transactions va potentiellement faire sortir ces transactions du lot.

`Taille de cercle = sorties distantes + 1 (votre sortie)`