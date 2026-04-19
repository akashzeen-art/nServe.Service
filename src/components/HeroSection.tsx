import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(titleRef.current, { opacity: 0, y: 80, skewY: 5 }, { opacity: 1, y: 0, skewY: 0, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");

    gsap.to(blob1Ref.current, { x: 40, y: -40, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(blob2Ref.current, { x: -30, y: 30, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div ref={blob1Ref} className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full blur-[120px] bg-white/10" />
        <div ref={blob2Ref} className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[100px] bg-white/10" />
      </div>

      <div className="relative z-10 text-center">
        <h2
          ref={titleRef}
          className="font-black text-white drop-shadow-2xl mb-6 leading-[0.9]"
          style={{ opacity: 0, fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "Syne, sans-serif", letterSpacing: "-0.03em" }}
        >
          {title}
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light tracking-wide"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
