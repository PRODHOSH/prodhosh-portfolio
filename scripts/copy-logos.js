const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\masterPortfolio\\src\\assets\\images';
const targetDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToCopy = [
  'gssoc_logo.png', 'github-repo.png', 'projects_image.svg', 'cine-ai.png',
  'prodshell.png', 'nallamala-house.png', 'code-crafters.png', 'bb84_photo.png',
  'sindra.png', 'spaceborn.jpg', 'enlighted.webp', 'cloudinary_logo.png',
  'iitm-bs.png', 'acm_logo.png', 'aws_logo.png', 'codecrafters_logo.jpg',
  'microsoft-club-logo.jpeg', 'nallamala_house_iit_madras_logo.jpg',
  'math-club-logo.jpeg', 'elusoc.png', 'social_logo.png', 'nexus_logo.png',
  'v-vortex.jpeg', 'internshala-logo.jpg', 'dav-logo.png', 'v-volunteers-logo.jpeg'
];

imagesToCopy.forEach(img => {
  const src = path.join(srcDir, img);
  const dest = path.join(targetDir, img);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${img}`);
  } else {
    console.log(`Missing ${img}`);
  }
});
