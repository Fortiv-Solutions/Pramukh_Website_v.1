import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const sourceVideo = path.resolve("Agastya by Pramukh Group  Surat - Pramukh Group (1080p, h264).mp4");
const videosDir = path.resolve("public/videos");

const videoFiles = [
  "agastya-hero.mp4",
  "agastya-video.mp4",
  "agastya-promo.mp4",
  "aranya-iii-video.mp4",
  "one-tapi-video.mp4",
  "about-video.mp4",
];

console.log(`Generating videos from source: ${sourceVideo}`);

for (const name of videoFiles) {
  const mp4Path = path.join(videosDir, name);

  if (!fs.existsSync(mp4Path) || fs.statSync(mp4Path).size < 10000) {
    console.log(`Creating ${name}...`);
    execSync(
      `ffmpeg -y -i "${sourceVideo}" -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 27 -preset fast -an "${mp4Path}"`,
      { stdio: "inherit" }
    );
  }
}

console.log("All videos generated successfully!");
