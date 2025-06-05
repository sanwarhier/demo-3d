// scripts/build.js
const fs = require('fs');

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  console.error("GOOGLE_MAPS_API_KEY nicht gesetzt.");
  process.exit(1);
}

const html = fs.readFileSync('./src/index.html', 'utf8');
const output = html.replace(/__API_KEY__/g, apiKey);

fs.mkdirSync('./dist', { recursive: true });
fs.writeFileSync('./dist/index.html', output);

console.log("HTML-Datei mit API-Key erzeugt.");