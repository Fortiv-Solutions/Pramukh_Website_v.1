import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface LazyVideoProps extends ComponentPropsWithoutRef<"video"> {
  src: string;
  poster?: string;
  className?: string;
  startTime?: number;
  playbackRate?: number;
  eager?: boolean;
}

/**
 * Performance-optimized video component with IntersectionObserver lazy loading.
 * Only loads video source when near or in viewport, saving bandwidth and GPU decoding.
 * Pauses automatically when scrolled out of view.
 */
export function LazyVideo({
  src,
  poster,
  className,
  startTime = 0,
  playbackRate = 1.0,
  eager = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onLoadedMetadata,
  onCanPlay,
  onEnded,
  ...props
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(eager);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          // Resume playback if video was previously paused by this observer
          if (videoRef.current && videoRef.current.paused && autoPlay && muted) {
            void videoRef.current.play().catch(() => {});
          }
        } else {
          // Only pause if not eager (hero should always keep playing)
          if (!eager && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "250px 0px 250px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, autoPlay, muted]);

  // Derive WebM source path if available
  const webmSrc = src.endsWith(".mp4") ? src.replace(/\.mp4$/, ".webm") : null;

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const v = e.currentTarget;
    if (playbackRate && playbackRate !== 1.0) {
      v.playbackRate = playbackRate;
    }
    if (startTime > 0 && v.duration && !isNaN(v.duration)) {
      if (Math.abs(v.currentTime - startTime) > 2) {
        v.currentTime = startTime;
      }
    }
    setIsLoaded(true);
    if (onLoadedMetadata) onLoadedMetadata(e);
  };

  const handleCanPlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const v = e.currentTarget;
    if (playbackRate && playbackRate !== 1.0) {
      v.playbackRate = playbackRate;
    }
    if (startTime > 0 && v.duration && !isNaN(v.duration) && v.currentTime < 2) {
      v.currentTime = startTime;
    }
    if (autoPlay && muted && inView) {
      void v.play().catch(() => {});
    }
    if (onCanPlay) onCanPlay(e);
  };

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const v = e.currentTarget;
    if (startTime > 0 && v.duration && !isNaN(v.duration)) {
      v.currentTime = startTime;
    } else {
      v.currentTime = 0;
    }
    if (loop && inView) {
      void v.play().catch(() => {});
    }
    if (onEnded) onEnded(e);
  };

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden bg-ink", className)}>
      {/* Lightweight Poster image placeholder */}
      {poster && (
        <img
          src={poster}
          alt=""
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 pointer-events-none select-none z-0",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        />
      )}

      {inView && (
        <video
          ref={videoRef}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload={eager ? "auto" : "metadata"}
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={handleCanPlay}
          onEnded={handleEnded}
          className={cn("h-full w-full object-cover object-center transition-opacity duration-700", isLoaded ? "opacity-100" : "opacity-90")}
          {...props}
        >
          <source src={`${src}${startTime ? `#t=${startTime}` : ""}`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
