import os
import subprocess

videos_dir = os.path.abspath("public/videos")
files = ["agastya-promo.mp4", "agastya-video.mp4", "aranya-iii-video.mp4", "one-tapi-video.mp4"]

for f in files:
    src_path = os.path.join(videos_dir, f)
    opt_path = os.path.join(videos_dir, f"compressed_{f}")

    if os.path.exists(src_path):
        print(f"Compressing {f}...")
        cmd = f'ffmpeg -y -i "{src_path}" -vf "scale=\'min(1280,iw)\':-2" -c:v libx264 -crf 27 -preset fast -an "{opt_path}"'
        subprocess.run(cmd, shell=True)
        if os.path.exists(opt_path) and os.path.getsize(opt_path) > 0:
            os.replace(opt_path, src_path)
            print(f"Compressed {f} -> {os.path.getsize(src_path)/1024/1024:.2f} MB")

print("All distinct MP4 videos compressed successfully!")
