import { readFile } from "node:fs/promises";
import path from "node:path";

import fg from "fast-glob";
import matter from "gray-matter";

import { defaultLocale } from "../i18n/config";
import escapeStringRegexp from "escape-string-regexp";

export const MONEROPEDIA_SUFFIXES = ["based", "like", "form"] as const;
export const MONEROPEDIA_LOOKAHEAD = `(${MONEROPEDIA_SUFFIXES.join("|")})`;
const MONEROPEDIA_ROOT = path.resolve(
  process.cwd(),
  "src",
  "content",
  "moneropedia",
);

export interface MoneropediaEntry {
  terms: string[];
  summary: string;
  fileName: string;
}

export interface MoneropediaMatcher {
  regex: RegExp;
  lookup: Map<string, MoneropediaEntry>;
}

export function buildMoneropediaHref(locale: string, fileName: string): string {
  const basePath = `/resources/moneropedia/${fileName}/`;
  if (locale === defaultLocale) {
    return basePath;
  }

  return `/${locale}${basePath}`;
}

async function loadLocaleEntries(
  locale: string,
): Promise<Map<string, MoneropediaEntry>> {
  const localeDir = path.join(MONEROPEDIA_ROOT, locale);

  const files = await fg("**/*.md", {
    cwd: localeDir,
    onlyFiles: true,
    ignore: ["**/_*/**", "**/_*"],
  });

  const entries = await Promise.all(
    files.map(async (relativePath) => {
      const filePath = path.join(localeDir, relativePath);
      const { data } = matter(await readFile(filePath, "utf-8"));
      const fileName = path.basename(filePath, path.extname(filePath));

      return {
        fileName,
        summary: typeof data?.summary === "string" ? data.summary : "",
        terms: Array.isArray(data?.terms)
          ? data.terms.map((term) => String(term))
          : [],
      } satisfies MoneropediaEntry;
    }),
  );

  return new Map(entries.map((entry) => [entry.fileName, entry]));
}

// Returns a list of entries for the requested locale, applying the
// default locale content as a fallback
export async function getMoneropediaEntries(
  locale: string,
): Promise<MoneropediaEntry[]> {
  const fallback = await loadLocaleEntries(defaultLocale);
  if (locale === defaultLocale) {
    return Array.from(fallback.values());
  }

  const current = await loadLocaleEntries(locale);
  const merged = new Map(fallback);
  for (const [file, entry] of current.entries()) {
    merged.set(file, entry);
  }

  return Array.from(merged.values());
}

// Builds a regex + lookup map for scanning text. The regex matches any
// `@term` mention while the lookup tells us which entry it belongs to.
export function buildMoneropediaMatcher(
  entries: MoneropediaEntry[],
): MoneropediaMatcher | null {
  if (!entries.length) return null;

  const lookup = new Map<string, MoneropediaEntry>();
  const patterns: string[] = [];

  for (const entry of entries) {
    for (const term of entry.terms) {
      const key = term.toLowerCase();
      if (lookup.has(key)) continue;
      lookup.set(key, entry);
      patterns.push(escapeStringRegexp(term));
    }
  }

  if (!patterns.length) return null;

  const pattern = `@(${patterns.join("|")})((?=-${MONEROPEDIA_LOOKAHEAD})|(?![\\w-]))`;
  return { regex: new RegExp(pattern, "gi"), lookup };
}

// Rewrites plain HTML by replacing `@term` mentions with Moneropedia links.
// Useful for content that goes outside the Astro Content Collection pipeline (e.g., strings pulled
// from i18n JSON files) but still needs the same linking behavior.
export function processHTMLString(
  html: string,
  entries: MoneropediaEntry[],
  locale: string,
): string {
  let processedHtml = html;

  const matcher = buildMoneropediaMatcher(entries);
  if (!matcher) return processedHtml;

  processedHtml = processedHtml.replace(matcher.regex, (match, term) => {
    if (!term) return match;
    const entry = matcher.lookup.get(term.toLowerCase());
    if (!entry) return match;

    const linkPath = buildMoneropediaHref(locale, entry.fileName);
    const displayText = match.slice(1).replace(/-/g, " ");
    const escapedSummary = entry.summary.replace(/"/g, "&quot;");

    return `<a class="moneropedia-link" data-tooltip="${escapedSummary}" href="${linkPath}">${displayText}</a>`;
  });

  return processedHtml;
}
