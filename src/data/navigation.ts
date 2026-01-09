import type { ImageMetadata } from "astro";

// Light theme icons
import acceptMonero from "@/assets/icons/color/light/accept-monero.avif";
import contribute from "@/assets/icons/color/light/contribute.avif";
import developerGuides from "@/assets/icons/color/light/developer-guides.avif";
import faq from "@/assets/icons/color/light/faq.avif";
import hangouts from "@/assets/icons/color/light/hangouts.avif";
import merchantsExchanges from "@/assets/icons/color/light/merchants-exchanges.avif";
import mining from "@/assets/icons/color/light/mining.avif";
import moneropedia from "@/assets/icons/color/light/moneropedia.avif";
import pressKit from "@/assets/icons/color/light/press-kit.avif";
import researchLab from "@/assets/icons/color/light/research-lab.avif";
import roadmap from "@/assets/icons/color/light/roadmap.avif";
import sponsorships from "@/assets/icons/color/light/sponsorships.avif";
import tools from "@/assets/icons/color/light/tools.avif";
import workgroups from "@/assets/icons/color/light/workgroups.avif";
import monero from "@/assets/icons/color/monero.avif";

// Dark theme icons
import acceptMoneroDark from "@/assets/icons/color/dark/accept-monero.avif";
import contributeDark from "@/assets/icons/color/dark/contribute.avif";
import developerGuidesDark from "@/assets/icons/color/dark/developer-guides.avif";
import faqDark from "@/assets/icons/color/dark/faq.avif";
import hangoutsDark from "@/assets/icons/color/dark/hangouts.avif";
import merchantsExchangesDark from "@/assets/icons/color/dark/merchants-exchanges.avif";
import miningDark from "@/assets/icons/color/dark/mining.avif";
import moneropediaDark from "@/assets/icons/color/dark/moneropedia.avif";
import pressKitDark from "@/assets/icons/color/dark/press-kit.avif";
import researchLabDark from "@/assets/icons/color/dark/research-lab.avif";
import roadmapDark from "@/assets/icons/color/dark/roadmap.avif";
import sponsorshipsDark from "@/assets/icons/color/dark/sponsorships.avif";
import toolsDark from "@/assets/icons/color/dark/tools.avif";
import workgroupsDark from "@/assets/icons/color/dark/workgroups.avif";

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

export const navigationItems: NavItemConfig[] = [
  {
    translationKey: "getStarted",
    section: "getStarted",
    items: [
      {
        key: "whatIsMonero",
        href: "/get-started/what-is-monero",
        icon: monero,
      },
      {
        key: "buyMonero",
        href: "/get-started/exchanges",
        icon: merchantsExchanges,
        iconDark: merchantsExchangesDark,
      },
      {
        key: "spendMonero",
        href: "/get-started/merchants",
        icon: sponsorships,
        iconDark: sponsorshipsDark,
      },
      {
        key: "acceptMonero",
        href: "/get-started/accept-monero",
        icon: acceptMonero,
        iconDark: acceptMoneroDark,
      },
      {
        key: "mining",
        href: "/get-started/mining",
        icon: mining,
        iconDark: miningDark,
      },
      {
        key: "contribute",
        href: "/get-started/contribute",
        icon: contribute,
        iconDark: contributeDark,
      },
      {
        key: "faq",
        href: "/get-started/faq",
        icon: faq,
        iconDark: faqDark,
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
        icon: workgroups,
        iconDark: workgroupsDark,
      },
      {
        key: "sponsorships",
        href: "/community/sponsorships",
        icon: sponsorships,
        iconDark: sponsorshipsDark,
      },
      {
        key: "hangouts",
        href: "/community/hangouts",
        icon: hangouts,
        iconDark: hangoutsDark,
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
        icon: moneropedia,
        iconDark: moneropediaDark,
      },
      {
        key: "roadmap",
        href: "/resources/roadmap",
        icon: roadmap,
        iconDark: roadmapDark,
      },
      {
        key: "researchLab",
        href: "/resources/research-lab",
        icon: researchLab,
        iconDark: researchLabDark,
      },
      {
        key: "moneroTools",
        href: "/resources/monero-tools",
        icon: tools,
        iconDark: toolsDark,
      },
      {
        key: "moneroDocs",
        href: "https://docs.getmonero.org",
        icon: developerGuides,
        iconDark: developerGuidesDark,
      },
      {
        key: "pressKit",
        href: "/resources/press-kit",
        icon: pressKit,
        iconDark: pressKitDark,
      },
    ],
  },
  {
    translationKey: "crowdfunding",
    href: "https://ccs.getmonero.org",
  },
];
