import type { Html, Link, Parents, PhrasingContent, Text } from "mdast";
import { fileURLToPath } from "node:url";
import { defineMdastPlugin } from "satteri";

import { defaultLocale, locales } from "../../i18n/config";
import {
  buildMoneropediaHref,
  buildMoneropediaMatcher,
  getMoneropediaEntries,
  type MoneropediaMatcher,
} from "../../utils/moneropedia";

declare module "satteri" {
  interface DataMap {
    moneropedia: MoneropediaMatcher | null;
  }
}

const AVAILABLE_LOCALES = new Set(Object.keys(locales));
// Code, inline code, and definitions hold no text nodes, so only links need a check.
const BLOCKED_PARENT_TYPES = new Set(["link", "linkReference"]);

function createLinkNode(
  displayText: string,
  summary: string,
  href: string,
): Link {
  const textChild: Text = { type: "text", value: displayText };
  const iconChild: Html = { type: "html", value: "<sup>&#x1F6C8;</sup>" };
  return {
    type: "link",
    url: href,
    data: {
      hProperties: {
        class: "moneropedia-link",
        "data-tooltip": summary,
      },
    },
    children: [textChild, iconChild],
  };
}

function getLocaleFromFile(fileURL?: URL): string | undefined {
  if (!fileURL) return undefined;

  return fileURLToPath(fileURL)
    .replace(/\\/g, "/")
    .split("/")
    .reverse()
    .find((segment) => AVAILABLE_LOCALES.has(segment));
}

export const moneropediaLinks = defineMdastPlugin({
  name: "moneropedia-links",
  async before(_root, ctx) {
    try {
      const locale = getLocaleFromFile(ctx.fileURL) ?? defaultLocale;
      ctx.data.moneropedia = buildMoneropediaMatcher(
        await getMoneropediaEntries(locale),
      );
    } catch (error) {
      console.error("[moneropedia] Processing error:", error);
    }
  },
  text(node, ctx) {
    const matcher = ctx.data.moneropedia;
    // Every match starts with "@". Test for it before the costly parent() walk.
    if (!matcher || !node.value.includes("@")) return;
    for (
      let parent: Readonly<Parents> | undefined = ctx.parent(node);
      parent;
      parent = ctx.parent(parent)
    ) {
      if (BLOCKED_PARENT_TYPES.has(parent.type)) return;
    }

    const parts: PhrasingContent[] = [];
    let start = 0;
    for (const match of node.value.matchAll(matcher.regex)) {
      const [fullMatch, term] = match;
      const entry = term && matcher.lookup.get(term.toLowerCase());
      if (!entry) continue;

      if (match.index > start) {
        parts.push({
          type: "text",
          value: node.value.slice(start, match.index),
        });
      }
      const displayText = fullMatch.slice(1).replace(/-/g, " ");
      parts.push(
        createLinkNode(displayText, entry.summary, buildMoneropediaHref(entry)),
      );
      start = match.index + fullMatch.length;
    }

    if (!parts.length) return;
    if (start < node.value.length) {
      parts.push({ type: "text", value: node.value.slice(start) });
    }
    ctx.replaceNode(node, parts);
  },
});
