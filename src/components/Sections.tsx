import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play, Gamepad2, Leaf, Radio } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "vod",
    title: "Video On Demand",
    subtitle: "Your Screen. Your Rules. | CPA · CPM · CPS",
    gradient: "from-blue-700 via-blue-500 to-cyan-400",
    link: "/vod",
    Icon: Play,
    bg: "/Untitled design.gif",
  },
  {
    id: "igaming",
    title: "iGaming",
    subtitle: "Play Smart. Win Big. | Skill Based Fantasy Sports",
    gradient: "from-purple-700 via-pink-500 to-rose-400",
    link: "/igaming",
    Icon: Gamepad2,
    bg: "/game-and-watch-dancing.gif",
  },
  {
    id: "nutra",
    title: "Nutra & Wellness",
    subtitle: "Straight from the Hills! | Ameora & Play Tonight",
    gradient: "from-green-700 via-emerald-500 to-teal-400",
    link: "/nutra",
    Icon: Leaf,
    bg: "/shilout.gif",
  },
  {
    id: "vas",
    title: "VAS",
    subtitle: "Value Added Services — Connecting Billions",
    gradient: "from-orange-700 via-amber-500 to-yellow-400",
    link: "/vas",
    Icon: Radio,
    bg: "/nserve_items.gif",
  },
];

export default function Sections() {
  const navigate = useNavigate();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const subtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const blob1Refs = useRef<(HTMLDivElement | null)[]>([]);
  const blob2Refs = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Stacked scroll: each section slides up over the previous
    sectionRefs.current.forEach((section, index) => {
      if (!section || index === 0) return;
      gsap.fromTo(
        section,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    });

    // First section entrance animation
    const first = sectionRefs.current[0];
    if (first) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(numRefs.current[0], { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8 })
        .fromTo(iconRefs.current[0], { opacity: 0, scale: 0.4, rotate: -20 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.7 }, "-=0.4")
        .fromTo(titleRefs.current[0], { opacity: 0, y: 60, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 0.8 }, "-=0.4")
        .fromTo(subtitleRefs.current[0], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(btnRefs.current[0], { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3");
    }

    // Floating blob animations per section
    sectionRefs.current.forEach((_, i) => {
      const b1 = blob1Refs.current[i];
      const b2 = blob2Refs.current[i];
      if (b1) gsap.to(b1, { x: 30, y: -30, duration: 5 + i, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (b2) gsap.to(b2, { x: -25, y: 25, duration: 6 + i, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
    });

    // Icon continuous float
    iconRefs.current.forEach((icon) => {
      if (!icon) return;
      gsap.to(icon, { y: -8, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative w-full">
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className={`sticky top-0 h-screen w-full bg-gradient-to-br ${section.gradient} flex flex-col items-center justify-center overflow-hidden`}
          style={{ zIndex: index + 1 }}
        >
          {/* GIF background */}
          {section.bg && (
            <img
              src={section.bg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
            />
          )}

          {/* Floating blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div ref={(el) => { blob1Refs.current[index] = el; }} className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl bg-white/10" />
            <div ref={(el) => { blob2Refs.current[index] = el; }} className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl bg-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-white/5" />
          </div>

          {/* Section number */}
          <span
            ref={(el) => { numRefs.current[index] = el; }}
            className="absolute top-8 left-8 text-white/15 text-8xl font-black select-none"
          >
            0{index + 1}
          </span>

          {/* Text — fully clickable, navigates to section link */}
          <div
            onClick={() => navigate(section.link)}
            className="relative z-10 text-center px-6 max-w-3xl cursor-pointer group/text"
          >
            <h1
              ref={(el) => { titleRefs.current[index] = el; }}
              className="text-6xl md:text-8xl font-black text-white mb-4 drop-shadow-lg tracking-tight group-hover/text:opacity-80 transition-opacity"
            >
              {section.title}
            </h1>
            <p
              ref={(el) => { subtitleRefs.current[index] = el; }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed"
            >
              {section.subtitle}
            </p>
          </div>

          {/* Know More CTA */}
          <button
            ref={(el) => { btnRefs.current[index] = el; }}
            onClick={() => navigate(section.link)}
            className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm font-medium py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 group"
          >
            Know More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Scroll hint — first section only */}
          {index === 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-base font-semibold tracking-widest uppercase">
              <span>Scroll</span>
              <div className="w-0.5 h-10 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
