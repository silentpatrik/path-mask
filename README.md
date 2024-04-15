# MyNpmPackage

A simple NPM package according to my needs and likings. Contains starter projects for npm package, neutrino, vite config, and umd build+watch scripts. It will very likley come cf-workers and other stuff.

## Installation

### Step 1. 
- below are a few alternatives for installing be for i settle for name and npm públsh
```bash
git clone --template https://github.com/silentpatrik/npm-package-template.git new-package && cd new-package
npm run new.js

```bash
echo 'enter your package name' | (read NEW_NAME && git clone --template [ <this repo url >](https://github.com/silentpatrik/npm-package-template.git $NEW_NAME && (cd $NEW_NAME && npm run rename $NEW_NAME  ) 
NEW_NAME= && git clone --template [ <this repo url >](https://github.com/silentpatrik/npm-package-template.git) $NEW_NAME && cd <new-package-name> && npm run rename
```
or 
```bash
npm install git+ssh://git@github.com:silentpatrik/npm-package-template.git
``
or maybe even
```bash
npm install https://github.com/silentpatrik/npm-package-template.git
``


### Step 2
If not the package is already renamed, then run `npm run rename <new-name-in-alnum-dash>`.
The above rename command will rename class to `NewNameInAlnumDash`.

### Step 3 (optional)
the script pushinto can push the code and change remote if the remote branch does not exist or if the branch is empty, like a new repo.

