---
layout: static_page
title: "Protocol Explanation"
title-pre-kick: "Protocol "
title-kick: "Explanation"
title-post-kick: ""
kick-class: "kicks"
icon: "icon_about"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

(insert that protocol image here)

Bob wants to spend XMR he received in his account and send it to Carol.  
How does is the transaction made?  

A: Bob gets access to his "real input" that was send to his "stealth address"  
1. Bob needs the public key from the transaction that contains the output he received and wants to send - Bob needs to ECDH this key with his private view key  
2. Bob also selects the exact number of the output from the transaction that contains the output he wants to send. The other output(s) in this transaction is/are change (Bob doesn't have the private key for those other outputs) Note: typically, due to auto-denomination, Bob will have more than one output per transaction that belongs to him.  
3. Bob needs the "master" private key of his account - private spend key, to be precise  
4. 1,2 and 3 are used to calculate the private key for the specific output he wants to send. (the public key for the transaction can be calculated from this private key - This is correct, but the public key is also stored on the blockchain.)  

B: to protects Carol's identity, Bob will do the folowing to generate a "one time" public key for this transaction, making it impossible for others to link all transactions send to Carol to the same "stealth address"  
5. Bob generates a random number scalar, this one isn't clear from the graphic at all  
6. this random number is hashed into the transaction public key the transaction private key, and is scalar mult'd into the transaction public key  
7. he selects the number associated with the outputs (due to auto-denom) that Carol will receive, the other output(s) is/are change that goes back to Bob.  
8. he needs the "master" public key from Carol to be able to send it to her stealth address - Carol's public view key  
9. 6,7 and 8 are used to calulate the public key for the specific outputs he wants to send  

C: to "mix" the inputs, Bob creates a ring signature  
10.  He selects the actual public key (+ that output's private key) from the output he wants to send, but he also adds other public keys into the mix.  
11. to prevent double spending, Bob needs to send a valid "key image" together with the public keys of the outputs (or inputs if you prefer)  
12. he signs the combination of inputs and the key image with his private key, prooving the key image is valid (Bob owns the private key associated with the key image) and that (somehow? I don't know how this works) one of the public keys is used to generate this key image, but as a spectator of the blockchain, we can't know which of the used outputs is "the real one that is being transferred". His private key and the other chosen public key(s) are used to create a ring signature; they'll be one signature for each input, collectively making a ring signature. The key image is an additional public key computed from the output private key (not public key) that's actually being spent.  
13. This is the collection of outputs that is signed. He grabbed the "fake ones" from the blockchain. He doesn't need permission from the owners for that. This isn't quite right: those are the outputs that are doing the signing. A hash of the TX prefix is "what" is actually being signed.  
14. This is the key image he signed. If Bob ever tries to send the same output again, the exact same key image will be generated and thus the double spend will be detected.  
15. this "ring signature" is added to the transaction containing the publi keys that are used in the transaction and proving Bob's ownership of one of those inputs.  
