const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

function copyProject(newPath, newName) {
  if (fs.existsSync(newPath)) {
    console.error('Destination path already exists.');
    process.exit(1);
  }

  fs.ensureDirSync(newPath);
  fs.copySync(__dirname, newPath, {
    filter: (src) => !src.includes('node_modules') && !src.includes('.git')
  });

  if (newName) {
    process.chdir(newPath);
    execSync(`npm run rename ${newName}`);
  }
}

const destinationPath = process.argv[2];
const newName = process.argv[3];

if (!destinationPath) {
  console.error('Please provide a destination path');
  process.exit(1);
}

copyProject(destinationPath, newName);
