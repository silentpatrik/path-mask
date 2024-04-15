const fs = require('fs');
const path = require('path');

/**
* This script will extract and display the `# About` section from the `README.md`:
* /
function displayHelp() {
  const readmePath = path.join(__dirname, 'README.md');
  if (fs.existsSync(readmePath)) {
    const readmeContent = fs.readFileSync(readmePath, 'utf8');
    const aboutIndex = readmeContent.indexOf('# About');
    if (aboutIndex !== -1) {
      console.log(readmeContent.substring(aboutIndex));
    } else {
      console.log('No about section found in README.md.');
    }
  } else {
    console.error('README.md file not found.');
  }
}

displayHelp();
