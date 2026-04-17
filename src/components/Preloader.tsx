import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
          onComplete();
        },
      });
    };

    video.addEventListener("ended", handleEnded);

    // Fallback: if video fails to play or takes too long, dismiss after 5s
    const fallback = setTimeout(handleEnded, 5000);

    return () => {
      video.removeEventListener("ended", handleEnded);
      clearTimeout(fallback);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src="/nserve_Reverse.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <img
        src="/1111.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
}
