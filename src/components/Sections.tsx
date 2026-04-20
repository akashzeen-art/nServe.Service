import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play, Gamepad2, Leaf, Radio } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "vod",
    title: "Video On\nDemand",
    subtitle: "Your Screen. Your Rules.",
    chip: "CPA · CPM · CPS",
    gradient: "from-[#0f2027] via-[#1a4a6e] to-[#0ea5e9]",
    titleGradient: "from-sky-300 via-blue-200 to-cyan-300",
    link: "/vod",
    Icon: Play,
    bg: "/Untitled design.gif",
  },
  {
    id: "igaming",
    title: "Play 365",
    subtitle: "Play Smart. Win Big.",
    chip: "Skill Based · Fantasy Sports",
    gradient: "from-[#1a0533] via-[#6b21a8] to-[#ec4899]",
    titleGradient: "from-purple-300 via-pink-200 to-rose-300",
    link: "/igaming",
    Icon: Gamepad2,
    bg: "/game-and-watch-dancing.gif",
  },
  {
    id: "nutra",
    title: "Nutraceutical\nProducts",
    subtitle: "Straight from the Himalayan Valleys !",
    chip: "Ameora · Play Tonight",
    gradient: "from-[#022c22] via-[#065f46] to-[#14b8a6]",
    titleGradient: "from-emerald-300 via-green-200 to-teal-300",
    link: "/nutra",
    Icon: Leaf,
    bg: "/shilout.gif",
  },
  {
    id: "vas",
    title: "MVAS",
    subtitle: "Mobile Value Added Services.",
    chip: "Connecting Billions",
    gradient: "from-[#1c0a00] via-[#92400e] to-[#f59e0b]",
    titleGradient: "from-orange-300 via-amber-200 to-yellow-300",
    link: "/vas",
    Icon: Radio,
    bg: "/nserve_items.gif",
  },
];

export default function Sections() {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const subtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const blob1Refs = useRef<(HTMLDivElement | null)[]>([]);
  const blob2Refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        lockAxis: true,
        type: "touch,wheel,pointer"
      });
    } else {
      ScrollTrigger.normalizeScroll(true);
    }
    
    ScrollTrigger.config({ 
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const n = sections.length;

    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section || index === 0) return;

        gsap.fromTo(
          section,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: `${((index - 1) / (n - 1)) * 100}% top`,
              end: `${(index / (n - 1)) * 100}% top`,
              scrub: isIOS ? 1 : 0.6,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Entrance animation for first section
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .fromTo(titleRefs.current[0], { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(chipRefs.current[0], { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.5")
        .fromTo(subtitleRefs.current[0], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo(btnRefs.current[0], { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3");

      // Floating blobs — skip on mobile for performance
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        sectionRefs.current.forEach((_, i) => {
          const b1 = blob1Refs.current[i];
          const b2 = blob2Refs.current[i];
          if (b1) gsap.to(b1, { x: 40, y: -40, duration: 6 + i, repeat: -1, yoyo: true, ease: "sine.inOut" });
          if (b2) gsap.to(b2, { x: -30, y: 30, duration: 7 + i, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
        });
      }
    }, wrapperRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  return (
    // Wrapper height = (sections.length - 1) * 100vh + 100vh for last section
    <div ref={wrapperRef} style={{ height: `${sections.length * 100}vh` }}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className={`sticky top-0 h-screen w-full bg-gradient-to-br ${section.gradient} flex flex-col items-center justify-center overflow-hidden`}
          style={{ zIndex: index + 1 }}
        >
          {/* GIF background */}
          {section.bg && (
            <img src={section.bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
          )}

          {/* Blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div ref={(el) => { blob1Refs.current[index] = el; }} className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full blur-[120px] bg-white/10" />
            <div ref={(el) => { blob2Refs.current[index] = el; }} className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[100px] bg-white/10" />
          </div>

          {/* Section number */}
          <span className="absolute top-8 left-8 font-black select-none text-[120px] leading-none text-white/[0.06]" style={{ fontFamily: "Syne, sans-serif" }}>
            0{index + 1}
          </span>

          {/* Content */}
          <div onClick={() => navigate(section.link)} className="relative z-10 text-center px-6 max-w-4xl cursor-pointer">

            {/* Logo — only on VOD section */}
            {index === 0 && (
              <img
                src="/Nuta/timelogo.png"
                alt="logo"
                className="absolute -top-16 left-0 h-20 w-auto object-contain opacity-90"
              />
            )}

            <h1
              ref={(el) => { titleRefs.current[index] = el; }}
              className={`font-black text-transparent bg-clip-text bg-gradient-to-br ${section.titleGradient} whitespace-pre-line leading-tight mb-6 pb-2`}
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", fontFamily: "Syne, sans-serif" }}
            >
              {section.title}
            </h1>

            <p
              ref={(el) => { subtitleRefs.current[index] = el; }}
              className="text-lg md:text-xl text-white/60 font-light tracking-wide"
            >
              {section.subtitle}
            </p>
          </div>

          {/* Know More */}
          <button
            ref={(el) => { btnRefs.current[index] = el; }}
            onClick={() => navigate(section.link)}
            className="absolute bottom-8 right-8 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Know More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Scroll hint — first section only */}
          {index === 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs font-semibold tracking-[0.3em] uppercase">
              <span>Scroll</span>
              <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
