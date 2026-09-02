const fs = require('fs');
const https = require('https');
const path = require('path');

const svgs = [
  { name: 'programming.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/programming_2svr.svg' },
  { name: 'web_devices.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/web_devices_v6y8.svg' },
  { name: 'server_status.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/server_status_5pbv.svg' },
  { name: 'ai.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/artificial_intelligence_upvl.svg' },
  { name: 'cloud.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/cloud_hosting_7qog.svg' },
  { name: 'search.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/search_engines_0475.svg' },
  { name: 'career.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/career_progress_ivdb.svg' },
  { name: 'contact.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/contact_us_15o2.svg' },
  { name: 'message.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mail_sent_re_0ofv.svg' },
  { name: 'booking.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/booking_re_gw4j.svg' },
  { name: 'location.svg', url: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/map_light_re_cqbg.svg' }
];

const targetDir = path.join(__dirname, '..', 'public', 'undraw');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const THEME_COLOR = '#10b981';

svgs.forEach(({ name, url }) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Replace the primary unDraw color (#6c63ff or #3f3d56) with our emerald color
      let coloredSvg = data.replace(/#6c63ff/gi, THEME_COLOR);
      
      const filePath = path.join(targetDir, name);
      fs.writeFileSync(filePath, coloredSvg);
      console.log(`Saved ${name}`);
    });
  }).on('error', err => {
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
