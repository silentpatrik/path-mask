const fs = require('fs');
const path = require('path');
const { transformName } = require('./utils');

function renameProject(newName) {
  const filesToRename = [
    'src/index.js',
    'README.md',
    'dist/bundle.js',
    // List all files that might contain the string.
  ];

  const transformedName = transformName(newName);
  filesToRename.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/MyNpmPackage/g, transformedName);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

const newName = process.argv[2];
if (!newName) {
  console.error('Please provide a new name');
  process.exit(1);
}

renameProject(newName);
