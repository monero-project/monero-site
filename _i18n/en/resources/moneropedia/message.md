---
entry: "Message"
tags: ["kovri"]
terms: ["Message", "Messages"]
summary: "The mechanisms in which information travels within I2P"
---

### The Basics

*Messages* (which exist on top of the @transports layer), contain varying types of information that are needed for the network but, most importantly, everything you see, do, send, or receive, will come and go in the form of *messages*.

There are 2 essential types of *messages* in @I2P:

- @Tunnel messages
- @I2NP messages

Essentially: *@tunnel messages* **contain** @I2NP **message fragments** which are then [reassembled](https://geti2p.net/en/docs/tunnels/implementation) at certain points within a @tunnel's path.

### In-depth information

@I2NP messages have a close relationship with @tunnel @messages so it is easy to get the term *messages* confused when reading @Java-I2P specifications:

>
1. First, the tunnel gateway accumulates a number of I2NP messages and preprocesses them into tunnel messages for delivery.
2. Next, that gateway encrypts that preprocessed data, then forwards it to the first hop.
3. That peer, and subsequent tunnel participants, unwrap a layer of the encryption, verifying that it isn't a duplicate, then forward it on to the next peer.
4. Eventually, the tunnel messages arrive at the endpoint where the I2NP messages originally bundled by the gateway are reassembled and forwarded on as requested.

### Notes

- @I2NP @messages need to be fragmented because they are variable in size (from 0 to almost 64 KB) and @tunnel @messages are fixed-size (approximately 1 KB).
- For details and specifications, visit the [I2NP spec](https://geti2p.net/spec/i2np) and [Tunnel Message spec](https://geti2p.net/spec/tunnel-message)
