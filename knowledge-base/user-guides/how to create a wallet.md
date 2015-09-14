---
layout: static_page
title: "Creating a Monero wallet"
title-pre-kick: "Creating a Monero wallet "
title-kick: "on Ubuntu "
title-post-kick: ""
kick-class: "purple-kicks"
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### Operating Systems:  Ubuntu

- Download the [official binaries](https://getmonero.org/downloads/) or compile the last source available on [Github](https://github.com/monero-project/bitmonero)

- Extract the files with the archive manager (same as Winzip on Windows). Note the path where the files "bitmonerod" and "simplewallet" are

- You only need to do this step once : open a terminal (ctrl+alt+t) and install the required dependencies by typing : "*sudo apt-get install libboost-all-dev libssl-dev libevent-dev libdb++-dev*"

- This step is optional : download the [blockchain](https://getmonero.org/downloads/) and save it in "/home/yourUserName/.bitmonero/"

- Open a terminal and load the path where your binaries are extracted (cf. step 2) by typing : "*cd yourPathFromStep2*"

- Load bitmonerod by typing in your terminal : "*./bitmonerod*". Wait for the synchronisation with the network (bitmonerod is updating the blockchain you have downloaded in step 4 or is downloading it from scratch). This can take a lot of time the first time, so be patient

- Once bitmonerod is synchronised with the network, open a new terminal, change the directory (cf. step 5), and launch simplewallet by typing "*./simplewallet*"

- Enter the name you want for your portfolio and follow the instructions from the terminal

- To exit bitmonerod or simplewallet just type "*exit*" in the associated terminal

Now to access the portfolio you have just created you will have to launch bitmonerod, wait for it to be synchronised with the network, launch simplewallet, and type the name of your portfolio and your password.


