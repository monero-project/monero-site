---
entry: "NTCP"
tags: ["kovri"]
terms: ["NTCP"]
summary: "NIO-Based TCP (Non-blocking I/O based TCP): one of two Kovri transports"
---

{% include untranslated.html %}
### The Basics

*NIO-Based TCP (Non-blocking I/O based TCP)* is one of two encrypted @transports for @Kovri.

Similar to @SSU, @NTCP's *primary* purpose is to securely transmit @in-net @I2NP messages through @tunnels but, unlike @SSU, @NTCP functions solely over encrypted [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol).

### In-depth information

 - Passes along individual @I2NP messages (both Standard and Time Sync) after:
   - TCP has been established
   - Establishment Sequence has been completed
 - Uses the following @encryption:
   - 2048-bit [Diffie-Hellman](https://en.wikipedia.org/wiki/Diffie-hellman)
   - [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)/[CBC](https://en.wikipedia.org/wiki/Block_cipher_modes_of_operation)
 - Establishment Sequence has the following *states*:
   - Pre-establishment
   - Establishment
   - Post-establishment or "Established"
 - Uses the following from the @network-database:
   - Transport name: NTCP
   - Host: IP (IPv4 or IPv6) or host name (shortened IPv6 address (with "::") is allowed)
   - Port: 1024 - 65535

### Notes

For further details, read @Java-I2P's [NTCP](https://geti2p.net/en/docs/transport/ntcp)
