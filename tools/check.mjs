import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const PUB = path.join(ROOT, "public");
const walk = (p, out = []) => {
  if (!fs.existsSync(p)) return out;
  for (const f of fs.readdirSync(p)) {
    const q = path.join(p, f);
    if (fs.statSync(q).isDirectory()) walk(q, out);
    else out.push(q);
  }
  return out;
};
const rel = (f) => path.relative(ROOT, f).replace(/\\/g, "/");

const files = [...walk(SRC).filter((f) => /\.(jsx?|json|css)$/.test(f)), path.join(ROOT, "index.html")];
const BANNED = /COMSATS|\bCUI\b|Islamabad|comsats\.edu\.pk|\bRector\b|BISE|Linz School|affiliated|Raheel|Majid Iqbal|Rizwan/i;
const routes = JSON.parse(fs.readFileSync(path.join(SRC, "routes.json"), "utf8")).map((r) => r.path);
const okPaths = new Set([...routes, "/unavailable"]);

let banned = 0, broken = 0, missing = 0, unavailable = 0;
const used = new Set();
for (const f of files) {
  const isCode = /\.jsx?$/.test(f);
  fs.readFileSync(f, "utf8").split("\n").forEach((l, i) => {
    // Ignore styling tokens and internal route slugs; check page copy instead.
    const scanLine = l
      .replace(/className="[^"]*"/g, "")
      .replace(/class="[^"]*"/g, "")
      .replace(/"website-[^"]+"\s*:/g, "")
      .replace(/"slug"\s*:\s*"[^"]*"/g, "");
    const checkLine = f.endsWith(".css") ? scanLine.replace(/^[^{]*\{/, "") : scanLine;
    if (BANNED.test(checkLine)) { banned++; console.log(`BANNED   ${rel(f)}:${i + 1}  ${l.trim().slice(0, 90)}`); }
    if (isCode) {
      for (const m of l.matchAll(/href="(\/[^"]*)"|\["[^"]*",\s*"(\/[^"]*)"/g)) {
        const href = m[1] || m[2];
        if (href.startsWith("//")) continue;
        const p = href.split("#")[0].split("?")[0] || "/";
        if (p === "/unavailable") unavailable++;
        if (p.startsWith("/downloads/")) {
          if (!fs.existsSync(path.join(PUB, p))) { missing++; console.log(`MISSING  ${rel(f)}:${i + 1}  ${p}`); }
        } else if (!p.startsWith("/images/") && !okPaths.has(p)) { broken++; console.log(`BROKEN   ${rel(f)}:${i + 1}  ${href}`); }
      }
    }
    for (const m of l.matchAll(/\/images\/[\w\-./]+\.(?:jpe?g|png|webp|svg|gif|ico)/gi)) {
      used.add(m[0]);
      if (!fs.existsSync(path.join(PUB, m[0]))) { missing++; console.log(`MISSING  ${rel(f)}:${i + 1}  ${m[0]}`); }
    }
  });
}

if (process.argv.includes("--unused")) {
  const keep = new Set(["/images/logo.png", "/images/logo-large.webp", "/images/hero.jpg"]);
  const list = walk(path.join(PUB, "images"))
    .map((f) => ["/" + path.relative(PUB, f).replace(/\\/g, "/"), fs.statSync(f).size])
    .filter(([u]) => !used.has(u) && !keep.has(u));
  list.forEach(([u, s]) => console.log(`UNUSED   ${u}  ${Math.round(s / 1024)} KB`));
  console.log("unused images:", list.length, "|", (list.reduce((a, [, s]) => a + s, 0) / 1048576).toFixed(1), "MB");
}

const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
console.log(`\nbanned words: ${banned} | broken links: ${broken} | missing files: ${missing} | links to /unavailable: ${unavailable} | noindex: ${/noindex/i.test(html) ? "ON" : "OFF"}`);
process.exit(banned + broken + missing ? 1 : 0);