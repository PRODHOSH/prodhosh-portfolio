const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'node_modules', 'undraw-svg', 'svgs');
const targetDir = path.join(__dirname, '..', 'public', 'undraw');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fileMapping = {
  programming: 'programming',
  web_devices: 'devices',
  server_status: 'server',
  ai: 'robot',
  cloud: 'cloud',
  search: 'search',
  career: 'resume',
  contact: 'contact-us',
  message: 'mail',
  booking: 'booking',
  location: 'map'
};

try {
  const allFiles = fs.readdirSync(srcDir);
  for (const [logicalName, keyword] of Object.entries(fileMapping)) {
    const match = allFiles.find(f => f.toLowerCase().includes(keyword));
    if (match) {
      const content = fs.readFileSync(path.join(srcDir, match), 'utf8');
      let newContent = content.replace(/#6c63ff/gi, '#10b981').replace(/#6C63FF/g, '#10b981');
      newContent = newContent.replace(/#3f3d56/gi, '#d1d5db').replace(/#2f2e41/gi, '#d1d5db');
      fs.writeFileSync(path.join(targetDir, logicalName + '.svg'), newContent);
      console.log(`✅ Matched ${logicalName} -> ${match}`);
    } else {
      console.log(`❌ NO MATCH for ${logicalName} (keyword: ${keyword})`);
    }
  }
} catch (e) {
  console.error(e);
}
