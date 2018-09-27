---
terms: ["scalability", "Évolutivité"]
summary: "Potentiel de croissance de Monero, ressources nécessaires, et méthodes d'augmentation de l'efficacité"
---

### Les Bases

Monero n'a pas de taille de bloc maximale programmée en dur, ce qui signifie que contrairement à Bitcoin il n'a pas une limite de taille de bloc à 1 Mo empêchant l'évolution. Cependant, un mécanisme de pénalité de récompense de bloc est intégré dans le protocol pour éviter un accroissement trop excessif de la taille de bloc : La taille du nouveau bloc (TNB) est comparée à la taille médiane M100 des 100 derniers blocs. Si TNB > M100, la récompense de bloc est réduite avec une dépendance quadratic du dépassement de TNB vis à vis de M100. P.ex. si TNB est [10%, 50%, 80%, 100%] plus grand que M100, la récompense de bloc nominale est réduite de [1%, 25%, 64%, 100%]. Généralement, les blocs plus grands que 2*M100 e sont pas autorisés, et les blocs <= 60 ko sont toujours exempt de pénalités de récompense de bloc.
