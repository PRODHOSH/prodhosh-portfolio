const ReactDOMServer = require('react-dom/server');
const React = require('react');
const fs = require('fs');
const path = require('path');

const components = {
  programming: 'UndrawProgramming',
  web_devices: 'UndrawWebDevices',
  server_status: 'UndrawServerStatus',
  ai: 'UndrawArtificialIntelligence',
  cloud: 'UndrawCloudHosting',
  search: 'UndrawSearchEngines',
  career: 'UndrawPortfolio',
  contact: 'UndrawWorkChat',
  message: 'UndrawMailSent',
  booking: 'UndrawCalendar',
  location: 'UndrawMapLight'
};

const targetDir = path.join(__dirname, '..', 'public', 'undraw');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const [name, compName] of Object.entries(components)) {
  try {
    const Component = require(`react-undraw-illustrations/lib/components/${compName}`).default;
    if (Component) {
      // Provide the emerald color
      let svgString = ReactDOMServer.renderToStaticMarkup(React.createElement(Component, { primaryColor: '#10b981', height: '100%' }));
      
      // The react component might use <svg ...> we can just save it
      fs.writeFileSync(path.join(targetDir, name + '.svg'), svgString);
      console.log(`Extracted ${name}.svg using ${compName}`);
    }
  } catch (err) {
    console.error(`Failed to extract ${name} (${compName}):`, err.message);
  }
}
