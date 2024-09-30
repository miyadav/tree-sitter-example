const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const Parser = require('tree-sitter');
const Go = require('tree-sitter-go');

const gitRepoUrl = 'https://github.com/openshift/cluster-api-actuator-pkg'; // Replace with your Git repo URL
const repoDir = './cloned-repo'; // Local directory to clone the repo

// Step 1: Clone the repository
async function cloneRepo() {
  const git = simpleGit();
  
  try {
    console.log('Cloning repository...');
    await git.clone(gitRepoUrl, repoDir);
    console.log('Repository cloned successfully.');
  } catch (error) {
    console.error('Failed to clone repository:', error);
    process.exit(1);
  }
}

// Step 2: Parse Go files in the repository
function parseGoFiles() {
  const parser = new Parser();
  parser.setLanguage(Go);

  // List all Go files in the cloned repository
  const files = fs.readdirSync(repoDir);

  files.forEach(file => {
    if (path.extname(file) === '.go') { // Check for Go files
      const filePath = path.join(repoDir, file);
      const sourceCode = fs.readFileSync(filePath, 'utf8');

      // Parse the source code into an AST
      const tree = parser.parse(sourceCode);
      console.log(`AST for ${file}:`);
      console.log(tree.rootNode.toString());
    }
  });
}

// Main function
async function main() {
  await cloneRepo();
  parseGoFiles();
}

main();

