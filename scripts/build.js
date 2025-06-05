// scripts/build.js
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'dist', 'index.html');
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  console.error("GOOGLE_MAPS_API_KEY nicht gesetzt.");
  process.exit(1);
}

const html = fs.readFileSync('./src/index.html', 'utf8');
const output = html.replace('__API_KEY__', apiKey);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf-8');

console.log("HTML-Datei mit API-Key erzeugt.");