---
layout: ffs-cp
title: Documentation and cleanup of source code 
author: tewinget
amount: 3,600
date: September 11, 2015
---
### What
Clean up and properly document (doxygen) the monero source code, and handle any merges necessary to do so seamlessly with other concurrent development efforts.

### Who
I'm Thomas Winget, and I've been contributing to the Monero codebase since around June 2014. My largest contribution is the migration from storing the blockchain in a static, binary format to storing the blockchain using a database API, as well as two BlockchainDB implementations (LMDB and BerkeleyDB). Other contributions of mine can be found via the network graph on github or simply looking at my fork.

As a side effect of the work I've done already on Monero, I'm rather familiar with most of the codebase. This puts me in a good position to write down how everything works and fits together, as I've had to sort that out already for many parts.

As a side effect of this effort, I will further cement the knowledge I have of the codebase and gain knowledge in areas I'm less familiar with, enabling me to efficiently implement new features in the future and guide others who may have questions regarding a specific module. In addition, documenting the code will function as a sort of code review, allowing the possibility of spotting any bugs (minor or otherwise).

### Why
In my time developing on Monero, there have been countless instances where I need to reference what another piece of code does in order to work with it, and having all the code documented properly in an easily accessible manner (doxygen) would be helpful for that for anyone working in Monero's codebase. I have also come across areas where the code could be made more efficient or clear without changing any functionality, as well as many typographical errors (though these are minor, I think we can all agree they're annoying if nothing else).

Documentation is by far not a glamorous task (probably why it's a bit sparse in Monero), but every development effort benefits immensely from properly documented code.

### Proposals and Milestones
I would like to spend about 20 hours per week working on the above, at a rate of 45 XMR per hour (just over $20/hr USD at the time of writing this), paid out every week. I am unsure whether or not 80 hours of work will be enough to cover the entire codebase. There are over 70,000 lines of source in the src/ folder alone, and there is code in other folders that brings the total to over 100k, so this is no small task!

Milestones would be as follows:

- First 20 hours (900/3600 XMR)
- Second 20 hours (1800/3600 XMR)
- Third 20 hours (2700/3600 XMR)
- Fourth 20 hours (3600/3600 XMR)

After each milestone (and during), I will be available for comment, so anything that seems unclear in my documentation can be addressed and dealt with accordingly.