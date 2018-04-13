{% include untranslated.html %}
### Operating Systems:  Ubuntu

- Download the [official binaries](https://getmonero.org/downloads/) or compile the last source available on [Github](https://github.com/monero-project/bitmonero)

![image1](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/1.png)
![image2](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/2.png)

- Extract the files with the archive manager (same as Winzip on Windows). Note the path where the files "monerod" and "monero-wallet-cli" are

![image3](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/3.png)
![image4](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/4.png)

- You only need to do this step once : open a terminal (ctrl+alt+t) and install the required dependencies by typing : "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*". When asked, press the Y key and then Enter to continue

![image5](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/5.png)
![image6](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/6.png)

- Open a terminal and load the path where your binaries are extracted (cf. step 2) by typing : "*cd yourPathFromStep2*"

![image7](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/7.png)

- Load monerod by typing in your terminal : "*./monerod*". Wait for the synchronization with the network (monerod is updating the blockchain you have downloaded in step 4 or is downloading it from scratch). This can take a lot of time the first time, so be patient

![image8](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/8.png)
![image9](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/9.png)
![image10](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/10.png)
![image11](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/11.png)

- Once monerod is synchronized with the network, open a new terminal, change the directory (cf. step 5), and launch monero-wallet-cli by typing "*./monero-wallet-cli*"

![image12](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/12.png)

- Enter the name you want for your portfolio and follow the instructions from the terminal
 
![image13](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/13.png)
![image14](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/14.png)
![image15](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/15.png)
![image16](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/16.png)

*This is your private key. Write it down and keep it in a safe place!*

![image17](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/17.png)

*This is your view key. You need it to create a view only wallet (cf. associated user guide)*

![image18](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/18.png)

*This is the address of your wallet*

![image19](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/19.png)
![image20](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/20.png)
![image21](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/21.png)
![image22](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/22.png)
![image23](https://github.com/luuul/monero-site/blob/master/knowledge-base/user-guides/png/create_wallet/23.png)

- To exit monerod or monero-wallet-cli just type "*exit*" in the associated terminal

Now to access the portfolio you have just created you will have to launch monerod, wait for it to be synchronized with the network, launch monero-wallet-cli, and type the name of your portfolio and your password.


