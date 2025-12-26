import type { Link, Root, Text, Html } from "mdast";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

import { defaultLocale, locales } from "../../i18n/config";
import {
  buildMoneropediaHref,
  buildMoneropediaMatcher,
  getMoneropediaEntries,
} from "../../utils/moneropedia";
import { findAndReplace } from "mdast-util-find-and-replace";

const AVAILABLE_LOCALES = new Set(Object.keys(locales));
const BLOCKED_PARENT_TYPES = [
  "link",
  "linkReference",
  "definition",
  "code",
  "inlineCode",
] as const;

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

function getLocaleFromFile(file?: VFile | null): string | undefined {
  const candidatePath = file?.path ?? file?.history?.[file.history.length - 1];
  if (!candidatePath) return undefined;

  return candidatePath
    .replace(/\\/g, "/")
    .split("/")
    .reverse()
    .find((segment) => AVAILABLE_LOCALES.has(segment));
}

export const moneropediaLinks: Plugin<[], Root> = () => {
  return async (tree: Root, file?: VFile | null) => {
    try {
      const locale = getLocaleFromFile(file) ?? defaultLocale;

      const entries = await getMoneropediaEntries(locale);
      if (!entries.length) return;

      const matcher = buildMoneropediaMatcher(entries);
      if (!matcher) return;

      findAndReplace(
        tree,
        [
          [
            matcher.regex,
            (fullMatch: string, term?: string) => {
              if (!term) return fullMatch;
              const entry = matcher.lookup.get(term.toLowerCase());
              if (!entry) return fullMatch;

              const href = buildMoneropediaHref(entry);
              const displayText = fullMatch.slice(1).replace(/-/g, " ");
              return createLinkNode(displayText, entry.summary, href);
            },
          ],
        ],
        {
          ignore: [...BLOCKED_PARENT_TYPES],
        },
      );
    } catch (error) {
      console.error("[moneropedia] Processing error:", error);
      return tree;
    }
  };
};
