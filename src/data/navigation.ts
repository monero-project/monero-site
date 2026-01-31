import type { ImageMetadata } from "astro";
import { icons } from "@/utils/icons";

interface DropdownItem {
  key: string;
  href: string;
  icon: ImageMetadata;
  iconDark?: ImageMetadata;
}

interface NavDropdownConfig {
  translationKey: string;
  section: string;
  items: DropdownItem[];
}

interface NavLinkConfig {
  translationKey: string;
  href: string;
}

type NavItemConfig = NavDropdownConfig | NavLinkConfig;

const navIcon = (name: string) => {
  const { light, dark } = icons.color(name);
  return { icon: light, iconDark: dark };
};

export const navigationItems: NavItemConfig[] = [
  {
    translationKey: "getStarted",
    section: "getStarted",
    items: [
      {
        key: "whatIsMonero",
        href: "/get-started/what-is-monero",
        ...navIcon("monero"),
      },
      {
        key: "buyMonero",
        href: "/get-started/exchanges",
        ...navIcon("merchants-exchanges"),
      },
      {
        key: "spendMonero",
        href: "/get-started/merchants",
        ...navIcon("sponsorships"),
      },
      {
        key: "acceptMonero",
        href: "/get-started/accept-monero",
        ...navIcon("accept-monero"),
      },
      {
        key: "mining",
        href: "/get-started/mining",
        ...navIcon("mining"),
      },
      {
        key: "contribute",
        href: "/get-started/contribute",
        ...navIcon("contribute"),
      },
      {
        key: "faq",
        href: "/get-started/faq",
        ...navIcon("faq"),
      },
    ],
  },
  {
    translationKey: "downloads",
    href: "/downloads",
  },
  {
    translationKey: "blog",
    href: "/blog",
  },
  {
    translationKey: "community",
    section: "community",
    items: [
      {
        key: "workgroups",
        href: "/community/workgroups",
        ...navIcon("workgroups"),
      },
      {
        key: "sponsorships",
        href: "/community/sponsorships",
        ...navIcon("sponsorships"),
      },
      {
        key: "hangouts",
        href: "/community/hangouts",
        ...navIcon("hangouts"),
      },
    ],
  },
  {
    translationKey: "resources",
    section: "resources",
    items: [
      {
        key: "knowledgeBase",
        href: "/resources/knowledge-base",
        ...navIcon("moneropedia"),
      },
      {
        key: "roadmap",
        href: "/resources/roadmap",
        ...navIcon("roadmap"),
      },
      {
        key: "researchLab",
        href: "/resources/research-lab",
        ...navIcon("research-lab"),
      },
      {
        key: "moneroTools",
        href: "/resources/tools",
        ...navIcon("tools"),
      },
      {
        key: "moneroDocs",
        href: "https://docs.getmonero.org",
        ...navIcon("developer-guides"),
      },
      {
        key: "pressKit",
        href: "/resources/press-kit",
        ...navIcon("press-kit"),
      },
    ],
  },
  {
    translationKey: "crowdfunding",
    href: "https://ccs.getmonero.org",
  },
];
