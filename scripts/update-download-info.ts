import { readFileSync, writeFileSync } from 'fs';

async function getLatestVersion(repo: string): Promise<string | null> {
  try {
    const url = `https://api.github.com/repos/monero-project/${repo}/releases/latest`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const data = await response.json();
    return data.tag_name;
  } catch (error) {
    console.error(`Error fetching latest version for ${repo}:`, error);
    return null;
  }
}

async function getFileSize(url: string): Promise<string> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentLength = response.headers.get('content-length');
    
    if (contentLength) {
      const sizeInMB = (parseInt(contentLength) / (1024 * 1024)).toFixed(2);
      return `${sizeInMB} MB`;
    }
  } catch (error) {
    console.error(`Error fetching ${url}`);
  }
  return '';
}

async function main() {
  const downloadsPath = './src/data/downloads.json';
  const data = JSON.parse(readFileSync(downloadsPath, 'utf-8'));

  console.log('Updating versions and download sizes...\n');

  // Update versions
  console.log('Fetching latest versions...');
  const guiVersion = await getLatestVersion('monero-gui');
  const cliVersion = await getLatestVersion('monero');

  if (guiVersion) {
    data.gui.version = guiVersion;
    console.log(`GUI version updated to: ${guiVersion}`);
  } else {
    console.log('GUI version update failed, keeping current version');
  }

  if (cliVersion) {
    data.cli.version = cliVersion;
    console.log(`CLI version updated to: ${cliVersion}`);
  } else {
    console.log('CLI version update failed, keeping current version');
  }

  console.log('');

  // Update sizes
  for (const [sectionName, section] of Object.entries(data) as any[]) {
    if (!section.downloads) continue;

    console.log(`Processing ${sectionName}...`);
    
    for (const item of section.downloads) {
      if (item === 'separator' || !item.href) continue;
      
      console.log(`  ${item.label}...`);
      item.size = await getFileSize(item.href);
      console.log(`    → ${item.size}`);
      
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log('');
  }

  writeFileSync(downloadsPath, JSON.stringify(data, null, 2) + '\n');
  console.log('Done!');
}

main().catch(console.error);