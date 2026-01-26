export type RoadmapStatus = "in-progress" | "upcoming" | "proposed";

export interface RoadmapItem {
  id: string;
  status: RoadmapStatus;
  link?: string;
}

export interface HistoryEvent {
  titleKey: string;
  month?: string;
  link?: string;
}

export interface YearHistory {
  year: string;
  events: HistoryEvent[];
}

export interface RoadmapData {
  items: RoadmapItem[];
  history: YearHistory[];
}

// Roadmap Items (Current Work)
const inProgressItems: RoadmapItem[] = [
  {
    id: "fcmp",
    status: "in-progress",
    link: "https://github.com/seraphis-migration/strategy/wiki/Our-Wallet-Rewrite-Project-After-Priority-Switched-From-Seraphis-to-FCMPs",
  },
  {
    id: "cuprate",
    status: "in-progress",
    link: "https://cuprate.org/",
  },
  { id: "newSite", status: "in-progress" },
  {
    id: "randomxV2",
    status: "in-progress",
    link: "https://github.com/tevador/RandomX/pull/317",
  },
];

const upcomingItems: RoadmapItem[] = [
  { id: "bulletproofsPP", status: "upcoming" },
  { id: "seraphis", status: "upcoming" },
  {
    id: "ospead",
    status: "upcoming",
    link: "https://github.com/Rucknium/OSPEAD",
  },
];

const proposedItems: RoadmapItem[] = [
  {
    id: "mrlResearch",
    status: "proposed",
    link: "https://github.com/monero-project/research-lab/issues/94",
  },
];

// History

const historyByYear: Record<string, HistoryEvent[]> = {
  2024: [
    { month: "may", titleKey: "havenoDex", link: "https://haveno.exchange/" },
    { month: "january", titleKey: "xmrBchSwap" },
  ],

  2023: [
    { month: "december", titleKey: "lwsSubaddress" },
    { month: "may", titleKey: "ethSwaps" },
    { titleKey: "blockProp" },
  ],

  2022: [
    {
      month: "august",
      titleKey: "v15Hardfork",
      link: "/blog/2022/04/20/network-upgrade-july-2022/",
    },
    {
      month: "july",
      titleKey: "fluorineFermi",
      link: "/blog/2022/07/19/monero-0.18.0.0-released/",
    },
    { month: "april", titleKey: "viewTags" },
  ],

  2021: [
    {
      month: "october",
      titleKey: "p2pool",
      link: "/blog/2021/10/05/p2pool-released/",
    },
    {
      month: "august",
      titleKey: "btcSwaps",
      link: "/blog/2021/08/20/atomic-swaps/",
    },
    { month: "february", titleKey: "onionAddress" },
  ],

  2020: [
    { month: "october", titleKey: "clsag" },
    { month: "october", titleKey: "oxygenOrion" },
    {
      month: "may",
      titleKey: "v0160",
      link: "/blog/2020/05/23/monero-0.16-released/",
    },
    { month: "april", titleKey: "dandelion" },
  ],

  2019: [
    { month: "november", titleKey: "randomx" },
    { month: "november", titleKey: "ipv6" },
    { month: "november", titleKey: "paymentIdRemoved" },
    { month: "july", titleKey: "pruning" },
    { month: "july", titleKey: "hwSupport2019" },
    { month: "july", titleKey: "torI2p" },
    { month: "march", titleKey: "ccs" },
    { month: "march", titleKey: "cryptonightR" },
  ],

  2018: [
    { month: "october", titleKey: "bulletproofs" },
    { month: "october", titleKey: "ringSize11" },
    { month: "october", titleKey: "berylliumBullet" },
    { month: "august", titleKey: "kovri" },
    { month: "june", titleKey: "ledgerSupport" },
    { month: "april", titleKey: "multisigSubaddress" },
    { month: "april", titleKey: "guiRelease2018" },
  ],

  2017: [
    { month: "december", titleKey: "multisig" },
    { month: "october", titleKey: "subaddresses" },
    { month: "september", titleKey: "fluffyBlocks" },
    { month: "september", titleKey: "guiOutOfBeta" },
    { month: "september", titleKey: "ringSize5" },
    { month: "january", titleKey: "ringctEnabled" },
  ],

  2016: [
    {
      month: "december",
      titleKey: "guiBeta",
      link: "/blog/2016/12/22/monero-core-gui-beta-released/",
    },
    {
      month: "september",
      titleKey: "wolframWarptangent",
      link: "/blog/2016/09/19/monero-0.10.0-released/",
    },
    { month: "march", titleKey: "ringSize3" },
    {
      month: "january",
      titleKey: "hydrogenHelix",
      link: "/blog/2016/01/01/monero-0.9.0-hydrogen-helix-released/",
    },
  ],

  2014: [
    { month: "september", titleKey: "spamAttack" },
    { month: "september", titleKey: "mrlPapers" },
    {
      month: "april",
      titleKey: "bitcointalk",
      link: "https://bitcointalk.org/index.php?topic=563821.0",
    },
    { month: "april", titleKey: "renamed" },
  ],
};

// Build history array sorted by year (newest first)
const history: YearHistory[] = Object.entries(historyByYear)
  .sort(([a], [b]) => Number(b) - Number(a))
  .map(([year, events]) => ({ year, events }));

export const roadmapData: RoadmapData = {
  items: [...inProgressItems, ...upcomingItems, ...proposedItems],
  history,
};

export default roadmapData;
