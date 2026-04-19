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

    const timer = setTimeout(handleDone, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <img
        src="/123123.gif"
        alt=""
        style={{
          width: size,
          height: size,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    </div>
  );
}
