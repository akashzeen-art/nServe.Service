import { useLang } from "@/lib/LangContext";

export default function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-[9997] flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold py-2 px-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <span className={lang === "en" ? "text-white" : "text-white/35"}>EN</span>
      <span className="text-white/25">|</span>
      <span className={lang === "zh" ? "text-white" : "text-white/35"}>中文</span>
    </button>
  );
}
