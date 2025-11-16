import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = join(dirPath, file);
    if (statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (extname(fullPath) === '.astro') {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
};

const checkHtmlSafety = () => {
  const astroFiles = getAllFiles('./src');
  let hasErrors = false;

  astroFiles.forEach((file) => {
    const content = readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const setHtmlRegex = /set:html\s*=\s*["{]([^"}]+)["}]/g;
      let match;
      while ((match = setHtmlRegex.exec(line)) !== null) {
        const htmlContent = match[1];
        if (!htmlContent.includes('safeMarkdown')) {
          console.error(`Error in ${file}:${index + 1}: set:html used without safeMarkdown: ${line.trim()}`);
          hasErrors = true;
        }
      }
    });
  });

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log('All set:html usages are safe.');
  }
};

checkHtmlSafety();