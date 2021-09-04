---
summary: "Un nœud auquel un démon se connecte pour permettre l'utilisation immédiate des portefeuilles pendant sa synchronisation"
terms: [\"bootstrap-node\", \"bootstrap-nodes\", \"nœud-d'amorce\", \"nœuds-d'amorce\"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Le démon s'exécutant sur un @nœud local doit se synchroniser avec les autres
@nœuds (distants). Tant qu'il n'est pas totalement synchronisé, un
@portefeuille peut être connecté au nœud local. A ce moment-là, le
@portefeuille ne peut pas accéder aux @blocs qui ne sont pas encore
synchronisés sur le @nœud local.

Pour permettre au @portefeuille d'être utilisable immédiatement, le démon du
@nœud local utilise un nœud d'amorce auquel il transmet les requêtes RPC,
fournissant un accès aux @blocs manquants.

Remarque : les réponses du nœud d'amorce pourraient ne pas être dignes de
confiance.
