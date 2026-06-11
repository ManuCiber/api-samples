const fs = require('fs');
const path = require('path');

async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

const root = process.cwd();
const src = path.join(root, 'src', 'generated', 'prisma');
const dest = path.join(root, 'dist', 'src', 'generated', 'prisma');

copyDir(src, dest)
  .then(() => console.log('Copied generated Prisma client to dist'))
  .catch(err => {
    console.error('Error copying generated client:', err);
    process.exit(1);
  });
