import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function NotFound() {
  const navigate = useNavigate();
  const numRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(numRef.current, { opacity: 0, scale: 0.5, rotate: -10 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(btnRef.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");

    // Idle float on 404
    gsap.to(numRef.current, { y: -12, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white gap-6">
      <span ref={numRef} className="text-[180px] font-black text-white/10 leading-none select-none" style={{ opacity: 0 }}>
        404
      </span>
      <h1 ref={titleRef} className="text-3xl font-bold -mt-8" style={{ opacity: 0 }}>
        Page not found
      </h1>
      <p ref={descRef} className="text-gray-400" style={{ opacity: 0 }}>
        The page you're looking for doesn't exist.
      </p>
      <button
        ref={btnRef}
        onClick={() => navigate("/")}
        className="mt-4 bg-white text-slate-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200"
        style={{ opacity: 0 }}
      >
        Go Home
      </button>
    </div>
  );
}
