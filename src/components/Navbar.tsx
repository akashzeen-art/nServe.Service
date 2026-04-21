import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useLang } from "@/lib/LangContext";

interface NavbarProps { title: string; }

export default function Navbar({ title }: NavbarProps) {
  const navigate = useNavigate();
  const { t } = useLang();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
  }, []);

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span className="text-sm font-medium">{t("back")}</span>
        </button>
        <h1 className="text-base font-bold text-white tracking-wide" style={{ fontFamily: "Syne, sans-serif" }}>{title}</h1>
        <div className="w-16" />
      </div>
    </div>
  );
}
