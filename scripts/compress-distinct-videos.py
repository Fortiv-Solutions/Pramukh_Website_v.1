import os
import subprocess

videos_dir = os.path.abspath("public/videos")
files = ["about-video.mp4", "agastya-hero.mp4", "agastya-promo.mp4", "agastya-video.mp4", "aranya-iii-video.mp4", "one-tapi-video.mp4"]

for f in files:
    src_path = os.path.join(videos_dir, f)
    opt_path = os.path.join(videos_dir, f"compressed_{f}")
    webm_path = os.path.join(videos_dir, f.replace(".mp4", ".webm"))

    if os.path.exists(src_path):
        print(f"Compressing distinct video {f}...")
        # Compress MP4 H.264 CRF 27, 720p max height
        cmd_mp4 = f'ffmpeg -y -i "{src_path}" -vf "scale=\'min(1280,iw)\':-2" -c:v libx264 -crf 27 -preset fast -an "{opt_path}"'
        subprocess.run(cmd_mp4, shell=True)

        if os.path.exists(opt_path) and os.path.getsize(opt_path) > 0:
            os.replace(opt_path, src_path)
            print(f"Successfully compressed {f}! New size: {os.path.getsize(src_path)/1024/1024:.2f} MB")

        # Create WebM
        if not os.path.exists(webm_path) or os.path.getsize(webm_path) < 1000:
            cmd_webm = f'ffmpeg -y -i "{src_path}" -c:v libvpx-vp9 -crf 34 -b:v 0 -an "{webm_path}"'
            subprocess.run(cmd_webm, shell=True)

print("Finished compressing distinct video files!")
