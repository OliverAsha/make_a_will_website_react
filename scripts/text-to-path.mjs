import * as fontkit from 'fontkit';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fontPath = resolve(__dirname, '../public/fonts/Poppins-Regular.woff2');
const font = fontkit.openSync(fontPath);

function textToPath({ text, fontSize, x, y, anchor = 'start' }) {
  const run = font.layout(text);
  const scale = fontSize / font.unitsPerEm;

  let totalAdvance = 0;
  for (const g of run.glyphs) totalAdvance += g.advanceWidth;
  const widthPx = totalAdvance * scale;

  let startX = x;
  if (anchor === 'middle') startX = x - widthPx / 2;
  else if (anchor === 'end') startX = x - widthPx;

  let cursor = 0;
  const pieces = [];
  for (const glyph of run.glyphs) {
    const gx = startX + cursor * scale;
    const path = glyph.path.toSVG();
    pieces.push(`<path d="${path}" transform="translate(${gx.toFixed(3)} ${y}) scale(${scale.toFixed(6)} ${(-scale).toFixed(6)})"/>`);
    cursor += glyph.advanceWidth;
  }
  return pieces.join('');
}

function rewrite(svgPath, replacement) {
  let svg = readFileSync(svgPath, 'utf8');
  const defsRegex = /\s*<defs>[\s\S]*?<\/defs>/;
  svg = svg.replace(defsRegex, '');
  const textRegex = /<text[\s\S]*?<\/text>/;
  svg = svg.replace(textRegex, replacement);
  writeFileSync(svgPath, svg);
  console.log(`updated ${svgPath}`);
}

const longPath = resolve(__dirname, '../public/logos/logo-main-long.svg');
const longPathEl = textToPath({
  text: 'Make a Will',
  fontSize: 47,
  x: 115,
  y: 70,
  anchor: 'start',
});
rewrite(longPath, `<g fill="#4a4240">${longPathEl}</g>`);

const squarePath = resolve(__dirname, '../public/logos/logo-main-square.svg');
const squarePathEl = textToPath({
  text: 'Make a Will',
  fontSize: 18,
  x: 80,
  y: 120,
  anchor: 'middle',
});
rewrite(squarePath, `<g fill="#4a4240">${squarePathEl}</g>`);
