import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 border-t border-white/10 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} nServe. All rights reserved.</p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          Contact Us
        </button>
      </div>
    </footer>
  );
}
