---
summary: "Un standard qui permet d'utiliser une syntaxe d'adresse e-mail ou de nom de domaine pour payer quelqu'un au lieu d'une adresse, p.ex. donate@getmonero.org ou donate.getmonero.org"
terms: ["OpenAlias"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

L'équipe cœur de Monero a publié un standard appelé OpenAlias qui permet aux
adresses d'être plus facilement lisibles et répond au triangle de
Zooko. OpenAlias peut être utilisé par toutes les cryptomonnaies et est déjà
implémenté dans Monero, Bitcoin (dans les dernières versions Electrum) et
HyperStake.

OpenAlias cherche à fournir un moyen de simplifier la mise en place d'alias
dans un climat de technologies en constantes mutations. Les utilisateurs
essayent de franchir le seuil des infrastructures et systèmes confidentiels
et sécurisés cryptographiquement, mais beaucoup d'entre eux commencent à
peine à se souvenir des adresses emails de leurs amis et de leur famille.

Au cours du développement continue du projet de cryptomonnaie Monero, nous nous sommes demandés : comment pouvons-nous simplifier les paiements pour les utilisateurs qui n'ont pas l'habitude des cryptomonnaies ? Les adresses furtives de Monero font au moins 95 caractères, les mémoriser n'est pas une option, et demander à quelqu'un d'envoyer un paiement à <une-chaîne-de-95-caractères> va seulement créer de la confusion.

Dans sa forme la plus simple, OpenAlias est une entrée DNS TXT sur un FQDN
(fully qualified domain name). En combinant cela avec les technologies du
DNS, nous avons créé un standard d'alias qui est extensible pour les
développeurs, intuitif et familier pour les utilisateurs, et peu interopérer
avec les systèmes de domaines centralisés et décentralisés.

Un standard qui permet d'utiliser une syntaxe d'adresse e-mail ou de nom de
domaine pour payer quelqu'un au lieu d'une adresse,
p.ex. donate@getmonero.org ou donate.getmonero.org

Plus d'information sont disponibles sur le [site web
d'OpenAlias](https://openalias.org)
