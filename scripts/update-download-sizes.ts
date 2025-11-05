import { readFileSync, writeFileSync } from 'fs';

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
  return 'Unknown';
}

async function main() {
  const downloadsPath = './src/data/downloads.json';
  const data = JSON.parse(readFileSync(downloadsPath, 'utf-8'));

  console.log('Updating download sizes...\n');

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