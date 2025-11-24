import { readFileSync, writeFileSync } from "fs";

interface DownloadItem {
  href: string;
  format: string;
  platform: string;
  size: string;
}

interface Section {
  version: string;
  downloads: (DownloadItem | "separator")[];
  name: string;
}

interface CoreData {
  gui: Section;
  cli: Section;
}

async function getLatestVersion(
  repo: string,
): Promise<{ tag_name: string; name: string } | null> {
  try {
    const url = `https://api.github.com/repos/monero-project/${repo}/releases/latest`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const data = await response.json();
    return { tag_name: data.tag_name, name: data.name };
  } catch (error) {
    console.error(`Error fetching latest version for ${repo}:`, error);
    return null;
  }
}

async function getFileSize(url: string): Promise<string> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentLength = response.headers.get("content-length");

    if (contentLength) {
      const sizeInMB = (parseInt(contentLength) / (1024 * 1024)).toFixed(2);
      return `${sizeInMB} MB`;
    }
  } catch {
    console.error(`Error fetching ${url}`);
  }
  return "";
}

async function main() {
  const downloadsPath = "./src/data/downloads/core.json";
  const data: CoreData = JSON.parse(readFileSync(downloadsPath, "utf-8"));

  console.log("Updating Core Downloads Data");
  console.log("=================================\n");

  // Update versions
  console.log("Fetching latest versions from GitHub...");
  const guiRelease = await getLatestVersion("monero-gui");
  const cliRelease = await getLatestVersion("monero");

  if (guiRelease) {
    data.gui.version = guiRelease.tag_name;
    data.gui.name = (guiRelease.name.match(/^[a-zA-Z ]+/) || [""])[0].trim();
    console.log(`GUI version updated to: ${guiRelease.tag_name}`);
    console.log(`GUI name set to: ${data.gui.name}`);
  } else {
    console.log("GUI version update failed, keeping current version");
  }

  if (cliRelease) {
    data.cli.version = cliRelease.tag_name;
    data.cli.name = (cliRelease.name.match(/^[a-zA-Z ]+/) || [""])[0].trim();
    console.log(`CLI version updated to: ${cliRelease.tag_name}`);
    console.log(`CLI name set to: ${data.cli.name}`);
  } else {
    console.log("CLI version update failed, keeping current version");
  }

  console.log("");

  // Update sizes
  console.log("Calculating download file sizes...");
  for (const [sectionName, section] of Object.entries(data) as [
    keyof CoreData,
    Section,
  ][]) {
    if (!section.downloads) continue;

    console.log(`\nProcessing ${sectionName}...`);

    for (const item of section.downloads) {
      if (item === "separator" || !item.href) continue;

      console.log(`  ${item.platform} (${item.format})...`);
      item.size = await getFileSize(item.href);
      console.log(`    → ${item.size}`);

      // Rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  writeFileSync(downloadsPath, JSON.stringify(data, null, 2) + "\n");
  console.log("Done!");
}

main().catch(console.error);
