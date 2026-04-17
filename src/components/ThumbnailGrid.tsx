import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import ThumbnailCard from "./ThumbnailCard";

gsap.registerPlugin(ScrollTrigger);

interface Thumbnail {
  id: string;
  title: string;
  label: string;
  gradient: string;
  Icon: LucideIcon;
}

interface ThumbnailGridProps {
  heading: string;
  subheading: string;
  thumbnails: Thumbnail[];
  ctaLabel: string;
  ctaColor: string;
}

export default function ThumbnailGrid({ heading, subheading, thumbnails, ctaLabel, ctaColor }: ThumbnailGridProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Heading slides up on scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15,
        scrollTrigger: { trigger: subRef.current, start: "top 85%" },
      }
    );

    // CTA bounces in
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
      }
    );

    // CTA idle pulse
    gsap.to(ctaRef.current, {
      boxShadow: "0 0 24px 6px rgba(255,255,255,0.15)",
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight"
            style={{ opacity: 0 }}
          >
            {heading}
          </h2>
          <p
            ref={subRef}
            className="text-lg text-gray-400 max-w-xl mx-auto"
            style={{ opacity: 0 }}
          >
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {thumbnails.map((thumb, i) => (
            <ThumbnailCard
              key={thumb.id}
              title={thumb.title}
              label={thumb.label}
              gradient={thumb.gradient}
              Icon={thumb.Icon}
              index={i}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            ref={ctaRef}
            className={`${ctaColor} text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95`}
            style={{ opacity: 0 }}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
