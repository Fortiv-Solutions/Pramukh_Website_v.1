import fs from "fs";
import path from "path";

const videosDir = path.resolve("public/videos");
const validFiles = new Set([
  "about-video.mp4",
  "about-video.webm",
  "agastya-hero.mp4",
  "agastya-hero.webm",
  "agastya-promo.mp4",
  "agastya-promo.webm",
  "agastya-video.mp4",
  "agastya-video.webm",
  "aranya-iii-video.mp4",
  "aranya-iii-video.webm",
  "one-tapi-video.mp4",
  "one-tapi-video.webm",
]);

const files = fs.readdirSync(videosDir);
for (const f of files) {
  if (!validFiles.has(f)) {
    const p = path.join(videosDir, f);
    console.log(`Removing leftover temporary file: ${f}`);
    try {
      fs.unlinkSync(p);
    } catch (err) {
      console.error(`Could not delete ${f}:`, err);
    }
  }
}
console.log("Directory clean!");
