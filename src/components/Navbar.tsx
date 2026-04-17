import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white hover:opacity-70 transition-all duration-200 hover:-translate-x-1 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </button>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <div className="w-16" />
      </div>
    </div>
  );
}
