const https = require('https');
const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/chowd/Desktop/skilIntern/public';
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
const logosDir = path.join(publicDir, 'logos');
if (!fs.existsSync(logosDir)) fs.mkdirSync(logosDir, { recursive: true });

const assets = [
  'logo.png',
  'logo2.png',
  'Technology.png',
  'Design.png',
  'CAD.png',
  'Business.png'
];

for (let i = 1; i <= 15; i++) {
  assets.push(`logos/logo${i}.png`);
}

assets.forEach(asset => {
  const url = 'https://www.codeemy.in/' + asset;
  const dest = path.join(publicDir, asset);
  https.get(url, res => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded:', asset);
      });
    } else {
      console.log('Not found:', res.statusCode, asset);
    }
  }).on('error', err => {
    console.log('Error:', asset, err.message);
  });
});
