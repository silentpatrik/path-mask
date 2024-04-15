const { execSync } = require('child_process');
const fs = require('fs');

function pushInto(repoUrl, branch) {
  try {
    const branches = execSync('git branch --list').toString();
    if (branches.includes(branch)) {
      const branchStatus = execSync(`git ls-remote --heads ${repoUrl} ${branch}`).toString();
      if (branchStatus) {
        console.error('Branch already exists and is not empty.');
        process.exit(1);
      }
    }

    execSync(`git init`);
    execSync(`git add .`);
    execSync(`git commit -m "Initial commit"`);
    execSync(`git remote add origin ${repoUrl}`);
    execSync(`git push -u origin ${branch}`);
  } catch (error) {
    console.error('Error pushing to repository:', error.message);
    process.exit(1);
  }
}

const repoUrl = process.argv[2];
const branch = process.argv[3];

if (!repoUrl || !branch) {
  console.error('Please provide a repository URL and a branch name');
  process.exit(1);
}

pushInto(repoUrl, branch);
