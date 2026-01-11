export interface ChatLink {
  titleKey: string;
  subtitleKey?: string;
  href: string;
  logo: string;
}

export interface SocialLink {
  titleKey: string;
  subtitleKey?: string;
  href: string;
  logo: string;
}

export interface IRCChannel {
  nameKey: string;
  descriptionKey: string;
  href: string;
  matrixHref: string;
}

export const chatLinks: ChatLink[] = [
  {
    titleKey: "hangouts:chat.matrix.title",
    subtitleKey: "hangouts:chat.matrix.subtitle",
    href: "https://matrix.to/#/%23monerospace:monero.social",
    logo: "/media/social/matrix.avif",
  },
  {
    titleKey: "hangouts:chat.discord.title",
    href: "https://discord.gg/SyGUMWBqvF",
    logo: "/media/social/discord.avif",
  },
  {
    titleKey: "hangouts:chat.telegram.title",
    href: "https://t.me/monero",
    logo: "/media/social/telegram.avif",
  },
];

export const socialLinks: SocialLink[] = [
  {
    titleKey: "hangouts:social.reddit.title",
    subtitleKey: "hangouts:social.reddit.subtitle",
    href: "https://reddit.com/r/monero",
    logo: "/media/social/reddit.avif",
  },
  {
    titleKey: "hangouts:social.x.title",
    subtitleKey: "hangouts:social.x.subtitle",
    href: "https://twitter.com/monero",
    logo: "/media/social/x.avif",
  },
];

export const channels: IRCChannel[] = [
  {
    nameKey: "hangouts:channels.monero.name",
    descriptionKey: "hangouts:channels.monero.description",
    href: "https://web.libera.chat/#monero",
    matrixHref: "https://matrix.to/#/#monero:monero.social",
  },
  {
    nameKey: "hangouts:channels.community.name",
    descriptionKey: "hangouts:channels.community.description",
    href: "https://web.libera.chat/#monero-community",
    matrixHref: "https://matrix.to/#/#monero-community:monero.social",
  },
  {
    nameKey: "hangouts:channels.markets.name",
    descriptionKey: "hangouts:channels.markets.description",
    href: "https://web.libera.chat/#monero-markets",
    matrixHref: "https://matrix.to/#/#monero-markets:monero.social",
  },
  {
    nameKey: "hangouts:channels.offtopic.name",
    descriptionKey: "hangouts:channels.offtopic.description",
    href: "https://web.libera.chat/#monero-offtopic",
    matrixHref: "https://matrix.to/#/#monero-offtopic:monero.social",
  },
  {
    nameKey: "hangouts:channels.mining.name",
    descriptionKey: "hangouts:channels.mining.description",
    href: "https://web.libera.chat/#monero-mining",
    matrixHref: "https://matrix.to/#/#monero-mining:monero.social",
  },
  {
    nameKey: "hangouts:channels.support.name",
    descriptionKey: "hangouts:channels.support.description",
    href: "https://web.libera.chat/#monero-support",
    matrixHref: "https://matrix.to/#/#monero-support:monero.social",
  },
];
