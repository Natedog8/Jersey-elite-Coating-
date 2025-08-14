// scripts/cleanup.js
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const rm = (p) => {
  const full = path.join(ROOT, p);
  if (!fs.existsSync(full)) return;
  const stat = fs.statSync(full);
  if (stat.isDirectory()) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log('Removed dir:', p);
  } else {
    fs.rmSync(full, { force: true });
    console.log('Removed file:', p);
  }
};

// ❌ Remove Pages Router (conflict with App Router)
rm('pages');

// ❌ Remove Vite/SPA artifacts that confuse Next.js
[
  'vite.config.ts',
  'vite.config.js',
  'index.html',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'src/index.tsx',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
].forEach(rm);

// ✅ Ensure app/page.tsx exists (so build has a home page)
const appDir = path.join(ROOT, 'app');
if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

const pagePath = path.join(appDir, 'page.tsx');
if (!fs.existsSync(pagePath)) {
  fs.writeFileSync(
    pagePath,
    `import { HomeDesktop } from '@/screens/HomeDesktop/HomeDesktop';
export default function Page() { return <HomeDesktop />; }
`,
    'utf8'
  );
  console.log('Created app/page.tsx');
}

console.log('Cleanup complete.');
