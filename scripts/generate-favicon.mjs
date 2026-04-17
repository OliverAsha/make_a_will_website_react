import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../public/logos/logo-option-b-sym.svg');
const outDir = resolve(__dirname, '../public/logos');

const svg = readFileSync(svgPath);

const sizes = [
  { size: 32,  name: 'favicon-32.png' },
  { size: 64,  name: 'favicon-64.png' },
  { size: 180, name: 'favicon-180.png' },
  { size: 512, name: 'favicon-512.png' },
];

for (const { size, name } of sizes) {
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(resolve(outDir, name));
  console.log(`wrote ${name} (${size}x${size})`);
}
