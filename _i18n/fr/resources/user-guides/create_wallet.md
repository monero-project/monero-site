### Système d'exploitation :  Ubuntu

- Téléchargez les [binaires officiels](https://getmonero.org/downloads/) ou compilez les dernières sources disponibles sur [Github](https://github.com/monero-project/bitmonero)

![image1](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/1.png)
![image2](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/2.png)

- Décompressez les fichiers avec le gestionnaire d'archive (comme avec Winzip sur Windows). Notez le répertoire dans lequel les fichiers "monerod" et "monero-wallet-cli" se trouvent

![image3](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/3.png)
![image4](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/4.png)

- Vous n'aurez besoin d'effectuer cette étape qu'une seule fois : ouvrez un terminal (Ctrl+Alt+t) et installez les dépendances requises en tapant : "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*". Lorsque cela vous sera demandé, tapez sur les touches O (ou Y sur une installation en langue Anglaise) puis Entrer pour continuer

![image5](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/5.png)
![image6](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/6.png)

- Ouvrez un terminal et déplacez-vous dans le répertoire où les binaires ont été extrait (voir l'étape 2) en tapant : "*cd répertoireÉtape2 *"

![image7](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/7.png)

- Lancez monerod en tapant la commande suivante dans votre terminal : "*./monerod*". Patientez le temps de la synchronisation avec le réseau (monerod met à niveau la chaîne de blocs que vous avez téléchargé à l'étape 4 ou la télécharge intégralement). Cela peut prendre un très grand moment, alors soyez patient.

![image8](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/8.png)
![image9](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/9.png)
![image10](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/10.png)
![image11](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/11.png)

- Une fois monerod synchronisé avec le réseau, ouvrez un nouveau terminal, chagez de répertoire (voir l'étape 5) et lancez le portefeuille CLI en tapant "*./monero-wallet-cli*"

![image12](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/12.png)

- Entrez le nom que vous souhaitez pour votre portefeuille et suivez les instructions du terminal

![image13](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/13.png)
![image14](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/14.png)
![image15](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/15.png)
![image16](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/16.png)

*Voici votre clef privée. Notez-là et conservez-là en lieu sûr !*

![image17](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/17.png)

*Voici votre clef privée d'audit. Vous en aurez besoin pour créer un portefeuille d'audit. (voir le guidu utilisateur associé)*

![image18](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/18.png)

*Voici l'adresse de votre portefeuille.*

![image19](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/19.png)
![image20](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/20.png)
![image21](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/21.png)
![image22](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/22.png)
![image23](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/23.png)

- Pour quiter le portefeuille CLI tapez simplement "*exit*" dans le terminal correspondant.

À partir de maintenant, pour accéder au portefeuille que vous venez de créer, vous aurez besoin de démarrer monerod, d'attendre qu'il soit syncrhonisé avec le réseau, de lancer le portefeuille CLI, et de taper le nom de votre portefeuille et son mot de passe.
