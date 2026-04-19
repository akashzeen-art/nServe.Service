import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="nServe" className="h-8 w-auto object-contain" />
          <span className="text-white/20 text-xs">|</span>
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <button
          onClick={() => navigate("/contact")}
          className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 text-sm tracking-wide"
        >
          Contact Us
        </button>
      </div>
    </footer>
  );
}
