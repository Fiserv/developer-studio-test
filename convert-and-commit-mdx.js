

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const docsFolder = path.join(__dirname, 'docs');
const productName = process.argv[2];
console.log('productName--->', productName);

function convertMdToMdx(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      convertMdToMdx(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const mdxFile = path.join(dir, entry.name.replace(/\.md$/, '.mdx'));

      // Read .md content
      let content = fs.readFileSync(fullPath, 'utf-8');

      // ✅ Replace <br> and </br> with <br /> (case-insensitive)
      content = content.replace(/<\/?br>/gi, '<br />');

      // ✅ Fix smart quotes
      content = content.replace(/“/g, '"').replace(/”/g, '"');

      // ✅ Always overwrite .mdx file
      fs.writeFileSync(mdxFile, content, 'utf-8');

      console.log(`Converted (overwritten if existed): ${fullPath} → ${mdxFile}`);
    }
  });
}

// Start conversion
convertMdToMdx(docsFolder);

// Add and commit new .mdx files

try {
  execSync('git add docs convert-and-commit-mdx.js', { stdio: 'inherit' });

  // Only commit if there are staged changes
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    execSync('git commit -m "Add/Update converted .mdx files from .md and fix content."', { stdio: 'inherit' });
    console.log('✅ New .mdx files committed to Git.');
  } else {
    console.log('ℹ️ No changes to commit.');
  }
} catch (error) {
  console.error('❌ Error during Git commit:', error.message);
}


// node convert-and-commit-mdx.js