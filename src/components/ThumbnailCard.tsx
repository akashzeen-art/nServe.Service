import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ThumbnailCardProps {
  title: string;
  label: string;
  gradient: string;
  Icon: LucideIcon;
  index: number;
}

export default function ThumbnailCard({ title, label, gradient, Icon, index }: ThumbnailCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Scroll-triggered entrance: staggered scale + fade + slight rotate
    gsap.fromTo(
      el,
      { opacity: 0, y: 60, scale: 0.88, rotateX: 8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      }
    );

    // Continuous icon float
    gsap.to(iconRef.current, {
      y: -6,
      duration: 1.8 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Hover: shimmer sweep
    const card = el.querySelector(".card-inner") as HTMLElement;
    const onEnter = () => {
      gsap.to(shimmerRef.current, { x: "200%", duration: 0.6, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.set(shimmerRef.current, { x: "-100%" });
    };
    card?.addEventListener("mouseenter", onEnter);
    card?.addEventListener("mouseleave", onLeave);

    return () => {
      card?.removeEventListener("mouseenter", onEnter);
      card?.removeEventListener("mouseleave", onLeave);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [index]);

  return (
    <div ref={cardRef} className="group cursor-pointer" style={{ opacity: 0, perspective: 800 }}>
      <div className={`card-inner relative h-64 rounded-2xl bg-gradient-to-br ${gradient} overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1`}>
        {/* Shimmer sweep */}
        <div
          ref={shimmerRef}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
          style={{ transform: "translateX(-100%)" }}
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300" />

        <div className="relative h-full flex flex-col items-center justify-center text-white p-6 gap-3">
          <div ref={iconRef} className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
            <Icon className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-center group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>

          <p className="text-xs text-white/70 font-semibold uppercase tracking-widest">
            {label}
          </p>

          <div className="h-0.5 w-8 bg-white/50 rounded-full group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}
