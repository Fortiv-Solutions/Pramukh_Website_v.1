import os

videos_dir = os.path.abspath("public/videos")

for f in os.listdir(videos_dir):
    if f.startswith("opt_") and f.endsWith(".mp4") if hasattr(f, "endsWith") else f.endswith(".mp4"):
        target_name = f[4:]
        opt_path = os.path.join(videos_dir, f)
        target_path = os.path.join(videos_dir, target_name)
        if os.path.exists(opt_path) and os.path.getsize(opt_path) > 0:
            try:
                os.replace(opt_path, target_path)
                print(f"Replaced {target_name} with optimized version. Size: {os.path.getsize(target_path)/1024/1024:.2f} MB")
            except Exception as e:
                print(f"Could not replace {target_name}: {e}")

# Clean up any residual -opt.mp4 files
for f in os.listdir(videos_dir):
    if f.endswith("-opt.mp4"):
        target_name = f.replace("-opt.mp4", ".mp4")
        opt_path = os.path.join(videos_dir, f)
        target_path = os.path.join(videos_dir, target_name)
        try:
            os.replace(opt_path, target_path)
            print(f"Replaced {target_name} with {f}. Size: {os.path.getsize(target_path)/1024/1024:.2f} MB")
        except Exception as e:
            print(f"Could not replace {target_name}: {e}")

print("Finish video replacement complete!")
