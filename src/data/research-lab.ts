export interface ResearchPaper {
  code?: string;
  title: string;
  abstract: string;
  url: string;
  note?: string;
}

export interface Whitepaper {
  title: string;
  description: string;
  url: string;
}

export const iacrPapers: ResearchPaper[] = [
  {
    code: "IACR 2020/312",
    title: "Arcturus: efficient proofs for confidential transactions",
    abstract:
      "We extend Triptych to build Arcturus, a proving system that proves knowledge of openings of multiple commitments to zero within a single set, correct construction of a verifiable random function, and value balance across a separate list of commitments within a single proof.",
    url: "https://eprint.iacr.org/2020/312",
    note: "This paper has been retracted, but it's possible to view it clicking on 'All versions of this report'.",
  },
  {
    code: "IACR 2020/018",
    title:
      "Triptych: logarithmic-sized linkable ring signatures with applications",
    abstract:
      "We introduce Triptych, a family of linkable ring signatures without trusted setup based on generalizations of zero-knowledge proofs of knowledge of commitment openings to zero. Signatures are logarithmic in the anonymity set size and can be efficiently verified in batches.",
    url: "https://eprint.iacr.org/2020/018",
  },
  {
    code: "IACR 2019/654",
    title:
      "Concise Linkable Ring Signatures and Forgery Against Adversarial Keys",
    abstract:
      "We demonstrate that a version of non-slanderability is a natural definition of unforgeability for linkable ring signatures. We present a linkable ring signature construction with concise signatures and multi-dimensional keys.",
    url: "https://eprint.iacr.org/2019/654",
  },
];

export const mrlBulletins: ResearchPaper[] = [
  {
    code: "MRL-0010",
    title: "Discrete Logarithm Equality Across Groups",
    abstract:
      "This technical note describes an algorithm used to prove knowledge of the same discrete logarithm across different groups. The scheme expresses the common value as a scalar representation of bits, and uses a set of ring signatures to prove each bit is valid.",
    url: "/resources/research-lab/pubs/MRL-0010.pdf",
  },
  {
    code: "MRL-0009",
    title:
      "Thring Signatures and their Applications to Spender-Ambiguous Digital Currencies",
    abstract:
      "We present threshold ring multi-signatures (thring signatures) for collaborative computation of ring signatures, present a game of existential forgery, and discuss uses in digital currencies including spender-ambiguous cross-chain atomic swaps for confidential amounts.",
    url: "/resources/research-lab/pubs/MRL-0009.pdf",
  },
  {
    code: "MRL-0008",
    title: "Dual Linkable Ring Signatures",
    abstract:
      "This bulletin describes a modification to Monero's linkable ring signature scheme that permits dual-key outputs as ring members. Key images are tied to both output one-time public keys, preventing both keys from being spent separately.",
    url: "/resources/research-lab/pubs/MRL-0008.pdf",
  },
  {
    code: "MRL-0007",
    title: "Sets of Spent Outputs",
    abstract:
      "This technical note generalizes the concept of spent outputs using basic set theory. The definition captures a variety of earlier work on identifying such outputs. We quantify the effects of this analysis on the Monero blockchain.",
    url: "/resources/research-lab/pubs/MRL-0007.pdf",
  },
  {
    code: "MRL-0006",
    title: "An Efficient Implementation of Monero Subaddresses",
    abstract:
      "We document a new address scheme that allows a user to maintain a single master wallet address and generate an arbitrary number of unlinkable subaddresses. Each transaction needs to be scanned only once to determine if it is destined for any of the user's subaddresses.",
    url: "/resources/research-lab/pubs/MRL-0006.pdf",
  },
  {
    code: "MRL-0005",
    title: "Ring Signature Confidential Transactions",
    abstract:
      "This article introduces a method of hiding transaction amounts in Monero. A new type of ring signature, A Multi-layered Linkable Spontaneous Anonymous Group signature, is described which allows for hidden amounts, origins and destinations with reasonable efficiency.",
    url: "/resources/research-lab/pubs/MRL-0005.pdf",
  },
  {
    code: "MRL-0004",
    title: "Improving Obfuscation in the CryptoNote Protocol",
    abstract:
      "We identify several blockchain analysis attacks available to degrade untraceability of CryptoNote 2.0. We analyze solutions, discuss merits and drawbacks, and recommend improvements including protocol-level minimum mix-in policies.",
    url: "/resources/research-lab/pubs/MRL-0004.pdf",
  },
  {
    code: "MRL-0003",
    title: "Monero is Not That Mysterious",
    abstract:
      "The purpose of this note is to clear up misconceptions and remove mystery surrounding Monero Ring Signatures. We compare the mathematics in CryptoNote ring signatures to the original paper on which it is based.",
    url: "/resources/research-lab/pubs/MRL-0003.pdf",
  },
  {
    code: "MRL-0002",
    title:
      "Counterfeiting via Merkle Tree Exploits within Virtual Currencies Employing the CryptoNote Protocol",
    abstract:
      "This research bulletin describes deficiencies in the CryptoNote reference code allowing for an attack on 4 September 2014, describes the solution, and elaborates upon what the offending block did to the network.",
    url: "/resources/research-lab/pubs/MRL-0002.pdf",
  },
  {
    code: "MRL-0001",
    title: "A Note on Chain Reactions in Traceability in CryptoNote 2.0",
    abstract:
      "This research bulletin describes a plausible attack on ring-signature based anonymity systems. It demonstrates that untraceability can be dependent upon all keys used in composing a ring signature, allowing for chain reactions in traceability.",
    url: "/resources/research-lab/pubs/MRL-0001.pdf",
  },
];

export const otherPapers: ResearchPaper[] = [
  {
    title: "Uniformly Most Powerful Tests For Ad Hoc Transactions In Monero",
    abstract:
      "We introduce a general, low-cost, low-power statistical test for transactions in transaction protocols with small anonymity set authentication (TPSASAs), such as Monero. The test classifies transactions as ad hoc or self-churned. We extend these tests to exploit prior information about user behavior and discuss test parameterization.",
    url: "https://github.com/cypherstack/churn/releases/download/final/Churn-final.pdf",
  },
  {
    title: "Understanding ge_fromfe_frombytes_vartime",
    abstract:
      "Monero uses a unique hash function that transforms scalars into elliptic curve points. This document translates its code implementation into mathematical expressions.",
    url: "/resources/research-lab/pubs/ge_fromfe.pdf",
    note: "Unpublished",
  },
];

export const whitepapers: Whitepaper[] = [
  {
    title: "Cryptonote Whitepaper",
    description:
      "The original CryptoNote paper written by the CryptoNote team. Reading it will give an understanding about how the CryptoNote algorithm works in general.",
    url: "/resources/research-lab/pubs/whitepaper_annotated.pdf",
  },
  {
    title: "Annotated Whitepaper",
    description:
      "The Monero Research Lab released an annotated version of the CryptoNote whitepaper. This is an informal review of the claims made line-by-line, explaining harder concepts in easy to understand terms.",
    url: "/resources/research-lab/pubs/whitepaper_annotated.pdf",
  },
  {
    title: "Brandon Goodell's Whitepaper Review",
    description:
      "A formal review of the original CryptoNote paper by MRL researcher Brandon Goodell. He takes an in-depth look at the claims and mathematics presented.",
    url: "/resources/research-lab/pubs/whitepaper_review.pdf",
  },
];
