/**
 * Image optimization script
 * - Team/studio photos: resize to 1600px wide, WebP quality 82
 * - Gallery JPGs (AMBOSS_OPT): convert to WebP 82, resize to 1400px wide
 * - Cover WebPs (proyectos): resize to 1200px, WebP quality 82
 * - Hero: convert to WebP, keep proportions
 *
 * Run: node scripts/optimize-images.mjs
 * Output: overwrites files in-place (originals in src/assets/AMBOSS/ remain untouched)
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const ROOT = new URL("../src", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const TEAM = [
  [join(ROOT, "assets/ESTUDIO.webp"), 1600, 82],
  [join(ROOT, "assets/EDUARDO.webp"), 1200, 82],
  [join(ROOT, "assets/PAULA.webp"), 1200, 82],
  [join(ROOT, "assets/SEBASTIAN.webp"), 1200, 82],
];

const HERO = join(ROOT, "assets/hero.jpg");

async function optimizeFile(srcPath, maxWidth, quality, outPath = srcPath) {
  const before = (await stat(srcPath)).size;
  const ext = extname(outPath).toLowerCase();
  const isWebp = ext === ".webp" || outPath === srcPath;

  const { writeFile } = await import("fs/promises");
  const img = sharp(srcPath).rotate(); // auto-orient from EXIF
  const meta = await img.metadata();

  const pipeline = meta.width > maxWidth ? img.resize(maxWidth) : img;

  let buffer;
  if (isWebp || ext === ".webp") {
    buffer = await pipeline.webp({ quality }).toBuffer();
  } else if (ext === ".jpg" || ext === ".jpeg") {
    buffer = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
  } else {
    return;
  }

  // Write to .new file; caller renames after all files processed
  await writeFile(outPath + ".new", buffer);

  const after = (await stat(outPath + ".new")).size;
  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(`✓ ${outPath.split(/[\\/]/).pop().padEnd(40)} ${kb(before)} → ${kb(after)}  (-${saved}%)`);
}

async function optimizeDir(dir, maxWidth, quality, toWebp = false) {
  const files = await readdir(dir);
  for (const f of files) {
    const src = join(dir, f);
    const ext = extname(f).toLowerCase();
    if (![".jpg", ".jpeg", ".webp", ".png"].includes(ext)) continue;
    const out = toWebp ? src.replace(/\.(jpg|jpeg|png)$/i, ".webp") : src;
    await optimizeFile(src, maxWidth, quality, out);
  }
}

function kb(b) {
  return (b / 1024).toFixed(0).padStart(6) + " KB";
}

console.log("\n=== AMBOSS Image Optimizer ===\n");

// 1. Team / studio photos
console.log("--- Team photos ---");
for (const [path, w, q] of TEAM) {
  await optimizeFile(path, w, q);
}

// 2. Hero
console.log("\n--- Hero ---");
await optimizeFile(HERO, 1920, 85);

// 3. Gallery images (already named .jpg, keep as jpg but re-encode with mozjpeg)
console.log("\n--- Gallery (AMBOSS_OPT) ---");
await optimizeDir(join(ROOT, "assets/AMBOSS_OPT"), 1400, 82);

// 4. Cover images (proyectos/)
console.log("\n--- Covers (proyectos/) ---");
await optimizeDir(join(ROOT, "proyectos"), 1200, 82);

// Replace originals with .new files
console.log("\n--- Replacing originals ---");
const { copyFile, unlink, readdir: rd } = await import("fs/promises");
async function replaceNew(dir) {
  const files = await rd(dir);
  for (const f of files) {
    if (!f.endsWith(".new")) continue;
    const target = join(dir, f.replace(/\.new$/, ""));
    await copyFile(join(dir, f), target);
    await unlink(join(dir, f));
    console.log(`  replaced ${target.split(/[\\/]/).pop()}`);
  }
}
await replaceNew(join(ROOT, "assets"));
await replaceNew(join(ROOT, "assets/AMBOSS_OPT"));
await replaceNew(join(ROOT, "proyectos"));

console.log("\nDone.");
