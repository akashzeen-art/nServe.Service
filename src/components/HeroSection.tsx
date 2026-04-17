import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(titleRef.current, { opacity: 0, y: 80, skewY: 5 }, { opacity: 1, y: 0, skewY: 0, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

    // Floating blobs
    gsap.to(blob1Ref.current, { x: 40, y: -40, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(blob2Ref.current, { x: -30, y: 30, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
    gsap.to(blob3Ref.current, { x: 20, y: 20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
  }, []);

  return (
    <div ref={wrapperRef} className="h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div ref={blob1Ref} className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl bg-white/10" />
        <div ref={blob2Ref} className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl bg-white/10" />
        <div ref={blob3Ref} className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl bg-white/5" />
      </div>

      <div className="relative z-10 text-center">
        <h2
          ref={titleRef}
          className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg tracking-tight"
          style={{ opacity: 0 }}
        >
          {title}
        </h2>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
