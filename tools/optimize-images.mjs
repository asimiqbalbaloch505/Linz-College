import fs from "fs";
import path from "path";
import sharp from "sharp";

const IN = "_incoming", OUT = "public/images/linz";
if (!fs.existsSync(IN)) { console.log("Folder _incoming nahi hai"); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(IN).filter((x) => /\.(jpe?g|png|webp)$/i.test(x))) {
  const name = path.parse(f).name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const dest = path.join(OUT, name + ".jpg");
  await sharp(path.join(IN, f)).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(dest);
  const m = await sharp(dest).metadata();
  console.log(f, "->", dest, `${m.width}x${m.height}`, Math.round(fs.statSync(dest).size / 1024) + " KB", m.width < 1000 ? " (chhoti)" : "");
}