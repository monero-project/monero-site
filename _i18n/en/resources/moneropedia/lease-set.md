---
entry: "Lease-Set"
tags: ["kovri"]
terms: ["LeaseSet", "LeaseSets"]
summary: "Contains all currently authorized Leases for a particular I2P Destination"
---

### The Basics

A Lease-Set contains a set of authorized @leases (and other related information) for a particular @destination.

### In-depth information

A Lease-Set contains:

- all of the currently authorized @leases for a particular @destination
- the public key to which garlic messages can be encrypted (see @garlic-routing)
- the signing public key that can be used to revoke this particular version of the structure

The Lease-Set is one of the two structures stored in the @network-database (the other being @router-info), and is keyed under the SHA256 of the contained @destination.

### Notes

For further details, read @Java-I2P's [LeaseSet](https://geti2p.net/en/docs/how/network-database#leaseSet)
