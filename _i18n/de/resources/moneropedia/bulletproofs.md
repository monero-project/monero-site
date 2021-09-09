---
summary: "Eine neue Art von 'Range-Proofs', welche Ring-CT in Transaktionen ersetzen, um die gesendeten Beträge zu verschleiern"
terms: ["bulletproofs", "bulletproof"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

@Ring-CT wurde und wird eingesetzt, um Transaktionsbeträge zu verschleiern. Ein Ziel von @Ring-CT ist es, nachzuweisen, dass der Endbetrag von Inputs zu Outputs gleich null ist, und alle Outputs positive Zahlen sind.  
Um dies zu erreichen, werden zwei Arten von Ringsignaturen konstruiert: eine Ringsignatur für die gesamte Transaktion (um nachzuweisen, dass die Endsumme null ergibt) und eine Reihe von Ringsignaturen für die Teilmengen von Transaktionsstücken (um nachzuweisen, dass die Outputs positive Zahlen sind). Diese werden anschließend kombiniert (zu Beginn passierte das durch Schnorr-Signaturen, welche später von Borromäischen Ringsignaturen abgelöst wurden). 
Während dies grundsätzlich funktioniert, gibt es einen großen Haken an der
Sache: die immense Größe einer solchen Ring-CT-Transaktion.

### Wo Bulletproofs ins Spiel kommen

Im Jahr 2017 veröffentlichte die [Applied Crypto Group der Stanford University](https://crypto.stanford.edu/bulletproofs/) ein [Paper](https://eprint.iacr.org/2017/1066.pdf), in welchem sie eine neue Art von "Range-Proofs" vorstellte: sogenannte Bulletproofs. 

> Bulletproofs are short non-interactive zero-knowledge proofs that require no trusted setup. 

Bulletproofs sind, im Gegensatz zu Borromäischen oder Schnorr-Signaturen, eine sehr effiziente Art von 'Range-Proofs'. Die Bereitstellung eines großen Datensatzes generiert lediglich einen kleinen Proof (Nachweis), und die Größe dessen wächst logarithmisch mit der Größe der überprüften/nachgewiesenen Daten. 
Die Nutzung von Bulletproofs bedeutet also, dass eine zunehmende Anzahl von Outputs die Größe des Proofs selbst nur leicht erhöht.  
Bulletproofs haben außerdem den Vorteil, dass sie es erlauben, nachzuweisen,
dass sich mehrere überwiesene Beträge gleichzeitig im gewünschten Bereich
befinden. Es gibt keinen Grund dazu, jeden einzelnen Output zu jedem Ziel in
separaten Proofs zu überprüfen - die kompletten Transaktionsbeträge können
in einem umfassenderen (und dennoch sehr kleinen) Bulletproof
überprüft/nachgewiesen werden.

### Ein umfassender Prüfungsablauf und Implementierung

Bulletproofs waren ziemlich neu, und obwohl die ursprüngliche Implementierung durch die Gruppe sehr ausführlich und umfassend war, benötigte es eine Neufassung, die sich auf unseren speziellen Anwendungsfall bezog. Dies machte es nicht gerade einfach, Bulletproofs innerhalb Moneros zu implementieren.  
Der Code wurde mehrfach umgeschrieben, um der (noch immer in Entwicklung befindlichen) neuen Version der Bulletproofs zu entsprechen. Nachdem die finale Umsetzung zum Abschluss gebracht wurde, durfte sie nur unter hoher Sorgfalt zum Einsatz kommen.  
Aus diesem Grund initiierte die Community einen Prüfungssprozess: Forscher traten in Kontakt mit Benedikt Bünz, dem leitenden Autor des Bulletproofs-Papers, und darüber hinaus mit [OSTIF](https://ostif.org/), einer Organisation, die Open-Source-Technologien dabei hilft, sich zu verbessern und abzusichern.  
OSTIF verwies die Gruppe an etliche Organisationen, welche über die für die Überprüfung benötigten Kompetenzen verfügten. Während eine davon darum bat, nicht namentlich erwähnt zu werden und damit vom öffentlich stattfindenden Prozess ausgeschlossen werden musste, wurden zwei andere (QuarksLab und Kudelski Security) ausgewählt, um die Prüfung durchzuführen.  
Unsere (schlussendlich drei) Prüfer wurden durch die Community finanziert
und sollten testen, ob die Implementation der Bulletproofs kritische Bugs
oder andere Probleme (wie Malware) enthielt.  Die abschließenden Berichte
wurden im Sommer 2018 veröffentlicht und enthielten einige nützliche
Anregungen zu Fehlerbehebungen und anderen Nachbesserungen. Die finale
Bulletproof-Implementation ist zunächst zum Monero-Stagenet und während des
Netzwerkupgrades im Oktober 2018 schließlich auch zum Hauptnetzwerk
hinzugefügt worden.

Seit der Bereitstellung von Bulletproofs ist die Größe einer
durchschnittlichen Transaktion um mindestens 80 Prozent gesunken; das
Gleiche gilt für die Transaktionsgebühren.

Weitere Erläuterungen zu Moneros Implementierung von Bulletproofs finden
sich auf dem Youtube-Kanal der Monero Community Workgroup in einem [Gespräch
mit Sarang Noether](https://www.youtube.com/watch?v=6lEWqIMLzUU).
