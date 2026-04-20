import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 cursor-pointer group"
      onClick={() => navigate("/contact")}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full blur-[80px] bg-white/10" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-[80px] bg-white/10" />
      </div>

      <div className="relative z-10 w-full px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: logo + copyright */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="nServe" className="h-10 w-auto object-contain drop-shadow-lg" />
          <span className="text-white/30 text-xs hidden sm:block">© {new Date().getFullYear()} nServe</span>
        </div>

        {/* Center: text */}
        <div className="text-center">
          <p className="text-white/70 text-sm font-medium">Interested for Collaboration?</p>
          <h2
            className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Contact Us
          </h2>
        </div>

        {/* Right: arrow */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </div>

      </div>
    </footer>
  );
}
