---
title: FCMP++ Optimization Competition Results
summary: Announcing the results of the FCMP++ optimization competition
tags: [crypto, announcements]
author: Justin Berman (j-berman) and jeffro256
---

We held [a contest](/blog/2025/04/05/fcmp++-contest) to optimize two libraries used in Monero's proposed upgrade to [FCMP++](/blog/2024/04/27/fcmps): [helioselene](https://github.com/kayabaNerve/fcmp-plus-plus/tree/78754718faa21f0a5751fbd30c9495d7f7f5c2b1/crypto/helioselene) and [ec-divisors](https://github.com/kayabaNerve/fcmp-plus-plus/tree/78754718faa21f0a5751fbd30c9495d7f7f5c2b1/crypto/divisors). We have officially declared the winners of the contest!

## EC Divisors (250 XMR prize)

Winner: [@fabrizio-m](https://github.com/fabrizio-m)

Fabrizio sped up the divisors library by over 95%. You can see the excellent submission [here](https://github.com/fabrizio-m/fcmp-competition/pull/1).

`ec-divisors` is a library implementing the calculation of divisors of elliptic curve points. These lead to efficient verification of scalar multiplications, [as posited by Liam Eagen](https://eprint.iacr.org/2022/596). FCMP++ uses EC Divisors to improve efficiency generally. This competition was focused on optimizing divisor construction, which affects transaction construction.

Managing slow divisors construction was a pain point for the FCMP++ integration. Fabrizio's 95%+ improvement effectively renders divisors construction negligible. Thanks to Fabrizio, we can now significantly simplify the final FCMP++ integration, and improve the user experience.

## helioselene (100 XMR 1st place prize, 30 XMR 2nd place prize)

1st place: [@lederstrumpf](https://github.com/Lederstrumpf)<br>
2nd place: [@rafael-xmr](https://github.com/rafael-xmr/)

Lederstrumpf's submission achieved a _weighted_ speed-up of 22% on an AMD Ryzen 5600G, and improved the _weighted_ WASM cycle count by 39%. The judges unanimously declared Lederstrumpf's submission the winner! Lederstrumpf's submission was the strongest foundation to build on. You can see the excellent submission [here](https://github.com/Lederstrumpf/fcmp-plus-plus-optimization-competition/pull/1). As of this writing, [@kayabaNerve](https://github.com/kayabaNerve) has already improved on the submission [here](https://github.com/kayabaNerve/fcmp-plus-plus/compare/d073632cdfb089eba9bd369e6324cf65cb4f7d1f..a7b3a8cec8c84567da9c66d336d9ce1a75bb794d).

`helioselene` is a library implementing two curves, "Helios" and "Selene," which form a curve cycle towering Ed25519. Using a "tower cycle" over Ed25519 allows Monero to re-use the existing anonymity set while upgrading to FCMP++. This library is a critical component used in all aspects of FCMP++. Optimizing this library will therefore benefit all user-facing components of FCMP++ (daemon sync, wallet sync, and transaction construction).

Although not part of the official contest rules, we decided to award a 2nd place prize to Rafael, since we unanimously agreed Rafael's submission was 2nd best. Had we not received a submission from Lederstrumpf, we would have had an excellent submission to fall back on [here](https://github.com/rafael-xmr/fcmp-plus-plus-optimization-competition-private/pull/5). As such, we sought to reward Rafael's strong effort.

We received a number of quality submissions to this contest, and want to thank all contestants for participating! You can read more on our rationale for selecting the winner [here](https://github.com/j-berman/fcmp-plus-plus-optimization-competition/blob/main/docs/helioselene-decision.pdf).

## What we learned

### Form stricter bounds on exactly what code can be modified

Some code in a repo required for tests / benchmarks to run might not be in scope of the competition. Be as clear about which code is out of scope as possible. Explicitly tell contestants that modifiying certain code will be disqualifying.

### Form stricter API requirements

Similar to the previous point, be crystal clear about the requirements the API of the code must take on and if it should even be allowed to be modified. Preferably provide downstream code that the API must compile and function correctly with.

### Present concrete architectures and toolchains for which the code must run in constant-time

Code runs in constant-time or doesn't on specific architectures and toolchains. For example, LLVM to x86 generates variable-time code for u128 arithmetic in Rust, but constant-time code on x86_64. Give contestants examples of specific toolchains and architectures for which the code must compile to constant-time.

### Allocate time for review and 2nd phase

No matter how well you think you define the competition rules, there may be scenarios which crop up where there was widespread confusion about the rules. There may be multiple submissions which have a lot of good work in them, but are in the gray area of validity. A review phase allows judges to clarify rules with contestants and refine submissions, and planning for this ahead of time helps to avoid misunderstandings.

### Allocate time for deadline extensions

This one is pretty self-explanatory. Sometimes you need a deadline extension for unforseen circumstances, so allocate time for it.

### Make a policy for non-1st place prizes

In a situation where anonymous submissions are allowed, 2nd place prizes can be gamed very easily. Also, game theory states that for a lot of competitions, the best incentive structure is winner-take-all. However, in the case where two submitters are certainly distinct competitors, and both submissions are close in quality, a 2nd place prize may be warranted. This is doubly true when parts of the code of the non-1st place are to be used in production code. Allocate funds for this scenario before the competition, but make sure to clarify that awarding such a prize is strictly up to the judgement of the judges.

### Clarify rules for vendored dependencies

If you want to make rules about dependencies in the competition, make sure to specify rules about heavily modified and/or vendored dependencies before the start of the competition.

### Spend more time marketing competition in specific circles where people do code competitions

There was a lot of good outreach for the FCMP++ competition, but some of the most fruitful outreach was to circles where there are already a lot of people doing coding/crypto competitions, who aren't necessarily involved in the Monero sphere.

### Make sure that submitters always license their code under a permissive license

MIT, BSD, or even GPL, etc.

### Setup an optional direct channel of communication for the contestants

Before the competiton starts, setup an offical, but optional, method of communication that lets judges push rule updates, feedback, announcements, etc to contestants. Otherwise, scrambling to find and message each contestant gets hectic very quickly.
