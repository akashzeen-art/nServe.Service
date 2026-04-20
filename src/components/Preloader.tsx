import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const size = Math.max(window.innerWidth, window.innerHeight);

  useEffect(() => {
    const handleDone = () => {
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

    // Dismiss after GIF plays once (~3s). Adjust if GIF is longer/shorter.
    const timer = setTimeout(handleDone, 2100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Use timestamp in src to force browser to reload and play from frame 1 */}
      <img
        src={`/123123.gif?t=${Date.now()}`}
        alt=""
        style={{
          width: size,
          height: size,
          objectFit: "cover",
          flexShrink: 0,
          imageRendering: "auto",
        }}
      />
    </div>
  );
}
