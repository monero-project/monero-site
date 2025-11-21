import { getCollection } from "astro:content";
import { defaultLocale } from "@/i18n/config";

export interface MoneropediaEntry {
  terms: string[];
  summary: string;
  file: string;
}

export async function getMoneropediaEntries(
  locale: string,
): Promise<MoneropediaEntry[]> {
  // Fetch entries for current locale, with default locale as fallback
  const currentLocaleEntries = await getCollection("moneropedia", (entry) =>
    entry.slug?.startsWith(`${locale}/`),
  );

  const fallbackEntries =
    locale !== defaultLocale
      ? await getCollection("moneropedia", (entry) =>
          entry.slug?.startsWith(`${defaultLocale}/`),
        )
      : [];

  // Use Map for deduplication
  const entryMap = new Map<
    string,
    { terms: string[]; summary: string; file: string }
  >();

  // Add fallback entries first (will be overwritten if current locale has same file)
  for (const entry of fallbackEntries) {
    const file = entry.slug.split("/").pop()!;
    entryMap.set(file, {
      terms: entry.data.terms,
      summary: entry.data.summary,
      file,
    });
  }

  // Add/overwrite with current locale entries (takes priority)
  for (const entry of currentLocaleEntries) {
    const file = entry.slug.split("/").pop()!;
    entryMap.set(file, {
      terms: entry.data.terms,
      summary: entry.data.summary,
      file,
    });
  }

  return Array.from(entryMap.values());
}

export function processMoneropediaLinks(
  html: string,
  entries: MoneropediaEntry[],
  locale: string,
): string {
  const LOOKAHEAD = "(based|like|form)";
  let processedHtml = html;

  for (const entry of entries) {
    for (const term of entry.terms) {
      // Escape special regex characters
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      // Match @term with optional suffix (e.g., @account-based)
      const pattern = `@(${escapedTerm})((?=-${LOOKAHEAD})|(?![\\w-]))`;
      const regex = new RegExp(pattern, "gi");

      processedHtml = processedHtml.replace(regex, (match) => {
        // Build link path
        const linkPath =
          locale === defaultLocale
            ? `/resources/moneropedia/${entry.file}/`
            : `/${locale}/resources/moneropedia/${entry.file}/`;

        // Clean display text: remove @ and replace hyphens with spaces
        const displayText = match.slice(1).replace(/-/g, " ");

        // Escape quotes for HTML attribute
        const escapedSummary = entry.summary.replace(/"/g, "&quot;");

        return `<a class="moneropedia-link" data-tooltip="${escapedSummary}" href="${linkPath}">${displayText}</a>`;
      });
    }
  }

  return processedHtml;
}
