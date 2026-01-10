import appWindowIcon from "@/assets/icons/mask/app-window.avif";
import bookTextIcon from "@/assets/icons/mask/bookText.avif";
import flaskConicalIcon from "@/assets/icons/mask/flaskConical.avif";
import globeIcon from "@/assets/icons/mask/globe.avif";
import terminalIcon from "@/assets/icons/mask/terminal.avif";
import walletIcon from "@/assets/icons/mask/wallet.avif";
import armchairIcon from "@/assets/icons/mask/armchair.avif";
import cpuIcon from "@/assets/icons/mask/cpu.avif";
import lifeBuoyIcon from "@/assets/icons/mask/lifeBuoy.avif";
import shieldCheckIcon from "@/assets/icons/mask/shieldCheck.avif";
import scalesIcon from "@/assets/icons/mask/scales.avif";
import calendarIcon from "@/assets/icons/mask/calendar.avif";

import type { ImageMetadata } from "astro";

export interface Workgroup {
  nameKey: string;
  actionKey: string;
  bestForKey: string;
  icon: ImageMetadata;
  chatName: string;
  ircHref: string;
  matrixHref: string;
}

// Development column
export const developmentWorkgroups: Workgroup[] = [
  {
    nameKey: "workgroups:workgroups.development.name",
    actionKey: "workgroups:workgroups.development.action",
    bestForKey: "workgroups:workgroups.development.bestFor",
    icon: terminalIcon,
    chatName: "monero-dev",
    ircHref: "https://web.libera.chat/#monero-dev",
    matrixHref: "https://matrix.to/#/#monero-dev:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.gui.name",
    actionKey: "workgroups:workgroups.gui.action",
    bestForKey: "workgroups:workgroups.gui.bestFor",
    icon: appWindowIcon,
    chatName: "monero-gui",
    ircHref: "https://web.libera.chat/#monero-gui",
    matrixHref: "https://matrix.to/#/#monero-gui:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.seraphis.name",
    actionKey: "workgroups:workgroups.seraphis.action",
    bestForKey: "workgroups:workgroups.seraphis.bestFor",
    icon: walletIcon,
    chatName: "no-wallet-left-behind",
    ircHref: "https://web.libera.chat/#no-wallet-left-behind",
    matrixHref: "https://matrix.to/#/#no-wallet-left-behind:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.website.name",
    actionKey: "workgroups:workgroups.website.action",
    bestForKey: "workgroups:workgroups.website.bestFor",
    icon: globeIcon,
    chatName: "monero-site",
    ircHref: "https://web.libera.chat/#monero-site",
    matrixHref: "https://matrix.to/#/#monero-site:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.docs.name",
    actionKey: "workgroups:workgroups.docs.action",
    bestForKey: "workgroups:workgroups.docs.bestFor",
    icon: bookTextIcon,
    chatName: "monero-docs",
    ircHref: "https://web.libera.chat/#monero-docs",
    matrixHref: "https://matrix.to/#/#monero-docs:monero.social",
  },
];

// Research column
export const researchWorkgroups: Workgroup[] = [
  {
    nameKey: "workgroups:workgroups.researchLab.name",
    actionKey: "workgroups:workgroups.researchLab.action",
    bestForKey: "workgroups:workgroups.researchLab.bestFor",
    icon: flaskConicalIcon,
    chatName: "monero-research-lab",
    ircHref: "https://web.libera.chat/#monero-research-lab",
    matrixHref: "https://matrix.to/#/#monero-research-lab:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.researchLounge.name",
    actionKey: "workgroups:workgroups.researchLounge.action",
    bestForKey: "workgroups:workgroups.researchLounge.bestFor",
    icon: armchairIcon,
    chatName: "monero-research-lounge",
    ircHref: "https://web.libera.chat/#monero-research-lounge",
    matrixHref: "https://matrix.to/#/#monero-research-lounge:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.pow.name",
    actionKey: "workgroups:workgroups.pow.action",
    bestForKey: "workgroups:workgroups.pow.bestFor",
    icon: cpuIcon,
    chatName: "monero-pow",
    ircHref: "https://web.libera.chat/#monero-pow",
    matrixHref: "https://matrix.to/#/#monero-pow:monero.social",
  },
];

// Community column
export const communityWorkgroups: Workgroup[] = [
  {
    nameKey: "workgroups:workgroups.support.name",
    actionKey: "workgroups:workgroups.support.action",
    bestForKey: "workgroups:workgroups.support.bestFor",
    icon: lifeBuoyIcon,
    chatName: "monero-support",
    ircHref: "https://web.libera.chat/#monero-support",
    matrixHref: "https://matrix.to/#/#monero-support:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.malware.name",
    actionKey: "workgroups:workgroups.malware.action",
    bestForKey: "workgroups:workgroups.malware.bestFor",
    icon: shieldCheckIcon,
    chatName: "monero-mrw",
    ircHref: "https://web.libera.chat/#monero-mrw",
    matrixHref: "https://matrix.to/#/#monero-mrw:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.policy.name",
    actionKey: "workgroups:workgroups.policy.action",
    bestForKey: "workgroups:workgroups.policy.bestFor",
    icon: scalesIcon,
    chatName: "monero-policy",
    ircHref: "https://web.libera.chat/#monero-policy",
    matrixHref: "https://matrix.to/#/#monero-policy:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.localization.name",
    actionKey: "workgroups:workgroups.localization.action",
    bestForKey: "workgroups:workgroups.localization.bestFor",
    icon: bookTextIcon,
    chatName: "monero-translations",
    ircHref: "https://web.libera.chat/#monero-translations",
    matrixHref: "https://matrix.to/#/#monero-translations:monero.social",
  },
  {
    nameKey: "workgroups:workgroups.events.name",
    actionKey: "workgroups:workgroups.events.action",
    bestForKey: "workgroups:workgroups.events.bestFor",
    icon: calendarIcon,
    chatName: "monero-events",
    ircHref: "https://web.libera.chat/#monero-events",
    matrixHref: "https://matrix.to/#/#monero-events:monero.social",
  },
];
