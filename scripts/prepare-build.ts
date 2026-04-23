import { execFileSync } from "node:child_process";
import { readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { parseArgs } from "node:util";
import { defaultLocale, locales, rtlLocales } from "../src/i18n/config";

if (process.env.SKIP_PREPARE_BUILD === "true") {
  console.log("Skipping: SKIP_PREPARE_BUILD is set");
  process.exit(0);
}

const { values: args } = parseArgs({
  options: {
    "limit-posts": { type: "string" },
    "skip-og": { type: "boolean", default: false },
    "limit-locales": { type: "boolean", default: false },
    "base-branch": { type: "string" },
    "base-ref": { type: "string" },
  },
});

const limitPosts = args["limit-posts"] ?? process.env.LIMIT_POSTS;
const skipOg = args["skip-og"] || process.env.SKIP_OG === "true";
const limitLocales =
  args["limit-locales"] || process.env.LIMIT_LOCALES === "true";
const baseBranch = args["base-branch"] ?? process.env.BASE_BRANCH;
const baseRefArg = args["base-ref"] ?? process.env.BASE_REF;

if (baseBranch && baseRefArg) {
  console.error("Cannot use both --base-branch and --base-ref");
  process.exit(1);
}

const BLOG_DIR = "src/content/blog";
const OG_ROUTE = "src/pages/open-graph/[...route].ts";
const I18N_CONFIG = "src/i18n/config.ts";
const I18N_DIR = "src/i18n/translations";

function git(...gitArgs: string[]): string {
  return execFileSync("git", gitArgs, { encoding: "utf-8" }).trim();
}

function resolveRef(ref: string): string | undefined {
  try {
    return git("rev-parse", "--verify", ref);
  } catch {
    // ref not found, try fetching
  }

  const remote = git("remote").split("\n").filter(Boolean)[0];
  if (!remote) return undefined;

  try {
    if (git("rev-parse", "--is-shallow-repository") === "true") {
      git("fetch", "--unshallow", remote);
    }

    git("fetch", remote, ref);
    return "FETCH_HEAD";
  } catch {
    return undefined;
  }
}

function getChangedFiles(
  ref: string,
  useMergeBase: boolean,
  ...dirs: string[]
): string[] {
  const resolved = resolveRef(ref);
  if (!resolved) return [];

  try {
    return git(
      "diff",
      "--name-only",
      ...(useMergeBase ? ["--merge-base"] : []),
      resolved,
      "HEAD",
      "--",
      ...dirs,
    )
      .split("\n")
      .filter(Boolean);
  } catch (e) {
    console.warn("Could not detect changed files");
    console.warn(e instanceof Error ? e.message : e);
    return [];
  }
}

function changedFilesUnder(dir: string): string[] {
  return changed.filter((f) => f.startsWith(dir + "/"));
}

function serializeI18nConfig(activeLocales: Set<string>): string {
  const entries = Object.entries(locales)
    .filter(([key]) => activeLocales.has(key))
    .map(([key, val]) => `  ${key}: "${val}",`);

  const rtl = rtlLocales.map((l) => `"${l}"`).join(", ");

  return [
    `export const defaultLocale = "${defaultLocale}";`,
    "export const locales = {",
    ...entries,
    "};",
    `export const rtlLocales = [${rtl}];`,
    "",
  ].join("\n");
}

const baseRef = baseBranch ?? baseRefArg;
const useMergeBase = Boolean(baseBranch);

let changed: string[] = [];
if (baseRef) {
  const mode = useMergeBase ? "merge-base" : "direct";
  console.log(`Diff: ${mode} against ${baseRef}`);
  changed = getChangedFiles(baseRef, useMergeBase, BLOG_DIR, I18N_DIR);
  console.log(
    `Diff: ${changed.length} file${changed.length !== 1 ? "s" : ""} changed`,
  );
} else {
  console.log("Diff: skipped");
}

// Limit blog posts, keeping edited ones
if (limitPosts) {
  const limit = Number(limitPosts);
  if (!Number.isFinite(limit) || limit < 1) {
    console.error(`Invalid --limit-posts value: ${limitPosts}`);
    process.exit(1);
  }

  const isPost = (f: string) => /^\d/.test(f) && f.endsWith(".md");

  const allPosts = readdirSync(BLOG_DIR).filter(isPost).sort().reverse();
  const keep = new Set(allPosts.slice(0, limit));

  for (const file of changedFilesUnder(BLOG_DIR)) {
    if (isPost(basename(file))) keep.add(basename(file));
  }

  let removed = 0;
  for (const file of allPosts) {
    if (keep.has(file)) continue;
    rmSync(join(BLOG_DIR, file));
    removed++;
  }

  console.log(
    `Blog: kept ${allPosts.length - removed} of ${allPosts.length} posts`,
  );
}

// Limit locales
if (limitLocales) {
  const keepLocales = new Set([defaultLocale]);

  for (const file of changedFilesUnder(I18N_DIR)) {
    const locale = relative(I18N_DIR, file).split("/")[0];
    if (locale && locale !== defaultLocale) keepLocales.add(locale);
  }

  writeFileSync(I18N_CONFIG, serializeI18nConfig(keepLocales));
  console.log(`Locales: building ${Array.from(keepLocales).join(" ")}`);
}

// OpenGraph removal
if (skipOg) {
  rmSync(OG_ROUTE, { force: true });
  console.log(`OpenGraph: removed ${OG_ROUTE}`);
}
