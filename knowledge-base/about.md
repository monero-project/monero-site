---
layout: static_page
title: "About Monero"
title-pre-kick: "About "
title-kick: "Monero"
title-post-kick: ""
kick-class: "kicks"
icon: "icon_about"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### What is Monero?

In order to effectively learn about Monero, it is important to assess your current understanding of cryptocurrencies. Therefore, this document has been broken down into 3 primary sections that you can use to learn about Monero based on your current knowledge. These sections build on each other, and by the time you reach the end of the document, you will hopefully be a master of the ideas behind both Monero and cryptocurrencies in general. It should be noted that this document will not be technical - instead, it will discuss the fundamentals of the technology and links will be provided for further explanation. The three sections are:

- I know nothing about cryptocurrencies. 
- I know about bitcoin, but I don't really understand how it works
- I know how bitcoin works

I hope you enjoy this document, and I hope you find that Monero holds the potential to be a viable alternative to contemporary monetary systems. 


### I know nothing about cryptocurrencies

Welcome to the future of money! There are many ways to describe cryptocurrencies and explain how they work. One of the fundamental components of cryptocurrencies is a very fancy type of ledger called a blockchain.

***What is a ledger?***

A ledger is a document in which people record information by adding information to the document. This is such a fundamental component of cryptocurrencies that this point must be repeated, because it is easy to think that something digital (any file) can be modified in any imaginable way. By design, a ledger can only be modified by adding things to it. Think of the difference between the following: There's 10 dollars in my wallet at the start of the day, and during the day I spend 5$ and receive 10$. If I wanted to record the amount of money I had at any given time, this could be done it two ways. 

A. At the start of the day, I could write down 10$. At the end of the day, I could erase that and write down the current amount in my wallet, which is 15$.  

B. At the start of the day, I could write down 10$ on line 1. When I spend 5$, I write on line 2 that I use the 10$ bill and that 5$ is given back to me as change. Later, when someone gives me 10$, I write down that I recieved 10$. At the end of the day, I can then look at my ledger and see how many of the dollars are mine. 

( For those that are catching on, you can see the difference between A and B is that A treats money as a thing, whereas B treats money as a unit of account)

***What is so special about a cryptocurrency ledger?***

The problem with a ledger is that you have to trust the person keeping the ledger. Imagine if you borrow money (cash) from your friend. You and your friend both write down how much cash you borrowed. Over time, you need to borrow more and you make some payments on your debt. You and your friend both keep records of this activity. Imagine that many years have passed and you finally make your final payment, only to learn that your friend thinks you owe more money based on the numbers in *their* ledger. But according to *your* ledger, your debt is paid. Who has the correct ledger? 

This problem of trust is solved in cryptocurrencies by using a *distributed* ledger. This means that all of the transactions that occur are recorded by everyone using the cryptocurrency, so they can each keep their own copy of the ledger. In our cash borrowing example from above, you and your friend could have used the same approach by asking 10 people to record every credit and payment between you and your friend. If you and your friend had done this, you compare your ledger to the 10 other peoples, and if their ledger matched yours, then your debt was indeed paid off.

***Okay, I understand that a distributed ledger solves the trust issue. But how do I know that other people won't work together to make forged copies of the ledger, and then distribute the fake ledger?***

This is where the cryptocurrency ledger becomes very fancy, and is indeed the point where the term @blockchain, which I'm sure you've heard a lot about, will be introduced. In order to secure the ledger - to ensure that all copies of it are the same and cannot be tampered with - the cryptocurrency protocol adds information to the ledger in large chunks known as blocks. In our example from above, imagine that you were recording your payments on pieces of paper. At the end of each month, you would add this piece of paper to a book. The piece of paper is a block, and the book is a chain of these blocks - each new piece of paper is placed on top of an old one. 

***How is a stack of paper a blockchain?***

It's not a blockchain yet. In order to become a blockchain, you need to link each block to each other - hence the use of the word "chain". And this is where the explanation may get a little technical. In order to link a new block to an old one, the new block includes the results of a complex math equation that uses all of the data in a previous block as its starting material. This is what is known as a @cryptographic hash of the previous block. These math problems are unique in that they are impossible to reverse, yet each results of the math problem is unique to the information entered into the problem. Look at the difference of the following - if I want to add the numbers 2 and 4, the result of that math problem will be 6. There are many ways to get 6 as a result of a math problem. If I want to **hash** the numbers 2 and 6, the result of the hash is 

> c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db

There is no way to go from that "number" above back to a 2 and a 4, and there is nothing except a 2 and a 4 that will produce the number above. To get a sense of how hashing behaves, you can explore the function [here](http://www.xorbin.com/tools/sha256-hash-calculator). 

(note to self - use the analogy of taking pictures, and introduce the proof of work as finding specifically shaped rocks to include in the picture)
