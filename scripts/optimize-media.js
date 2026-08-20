import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const videosDir = path.resolve("public/videos");
const imagesDir = path.resolve("public/images/projects");

console.log("Starting media optimization...");

// 1. Convert JPG/PNG images to WebP
const images = fs.readdirSync(imagesDir).filter(f => f.endsWith(".jpg") || f.endsWith(".png"));

for (const img of images) {
  const input = path.join(imagesDir, img);
  const ext = path.extname(img);
  const outputWebp = path.join(imagesDir, img.replace(ext, ".webp"));

  if (!fs.existsSync(outputWebp)) {
    console.log(`Converting image to WebP: ${img}...`);
    try {
      execSync(`ffmpeg -y -i "${input}" -q:v 82 "${outputWebp}"`, { stdio: "ignore" });
    } catch (err) {
      console.error(`Failed to convert ${img}:`, err);
    }
  }
}

// 2. Optimize videos
const videos = fs.readdirSync(videosDir).filter(f => f.endsWith(".mp4") && !f.includes("-opt"));

for (const video of videos) {
  const input = path.join(videosDir, video);
  const tempOutputMp4 = path.join(videosDir, video.replace(".mp4", "-opt.mp4"));
  const outputWebm = path.join(videosDir, video.replace(".mp4", ".webm"));

  console.log(`Processing video: ${video}...`);

  try {
    // Compress MP4 (H.264, 720p max height, CRF 26)
    execSync(
      `ffmpeg -y -i "${input}" -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 26 -preset fast -an "${tempOutputMp4}"`,
      { stdio: "ignore" }
    );
    // Replace original MP4 with optimized MP4
    if (fs.existsSync(tempOutputMp4)) {
      fs.renameSync(tempOutputMp4, input);
    }

    // Create WebM version (VP9, CRF 34)
    if (!fs.existsSync(outputWebm)) {
      execSync(
        `ffmpeg -y -i "${input}" -c:v libvpx-vp9 -crf 34 -b:v 0 -an "${outputWebm}"`,
        { stdio: "ignore" }
      );
    }
  } catch (err) {
    console.error(`Failed to process ${video}:`, err);
  }
}

console.log("Media optimization complete!");
