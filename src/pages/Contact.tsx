import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLang } from "@/lib/LangContext";

export default function Contact() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar title={t("conNav")} />
      <div className="text-center py-20 px-6">
        <p className="text-orange-400 font-semibold uppercase tracking-[0.2em] text-xs mb-4">{t("conGetInTouch")}</p>
        <h1 className="font-black text-white mb-4 tracking-tight" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontFamily: "Syne, sans-serif" }}>{t("conTitle")}</h1>
        <p className="text-white/40 text-base md:text-lg font-light">{t("conSub")}</p>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-8 pb-24 space-y-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center"><MapPin className="w-5 h-5 text-orange-400" /></div>
          <div>
            <p className="text-white font-bold mb-1">{t("conAddress")}</p>
            <p className="text-gray-400 text-sm leading-relaxed">Compass Building, Al Sohada Road,<br />Al Hamara Industrial Zone FZ,<br />Ras Al Khaimah, UAE</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center"><Mail className="w-5 h-5 text-blue-400" /></div>
          <div>
            <p className="text-white font-bold mb-2">{t("conEmail")}</p>
            <a href="mailto:vivek@nservetech.com" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">vivek@nservetech.com</a>
            <a href="mailto:vikram@nservetech.net" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors mt-1">vikram@nservetech.net</a>
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center"><Phone className="w-5 h-5 text-green-400" /></div>
          <div>
            <p className="text-white font-bold mb-2">{t("conPhone")}</p>
            <a href="tel:+971529692827" className="block text-green-400 hover:text-green-300 text-sm transition-colors">+971 529692827</a>
            <a href="tel:+919650750888" className="block text-green-400 hover:text-green-300 text-sm transition-colors mt-1">+91-9650750888</a>
            <a href="tel:+919958418419" className="block text-green-400 hover:text-green-300 text-sm transition-colors mt-1">+91-9958418419</a>
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-sky-400" /></div>
          <div>
            <p className="text-white font-bold mb-2">{t("conTelegram")}</p>
            <a href="https://t.me/Viz_2711" target="_blank" rel="noreferrer" className="block text-sky-400 hover:text-sky-300 text-sm transition-colors">@Viz_2711</a>
            <a href="https://t.me/Vik_Phoenix" target="_blank" rel="noreferrer" className="block text-sky-400 hover:text-sky-300 text-sm transition-colors mt-1">@Vik_Phoenix</a>
          </div>
        </div>
      </div>
    </div>
  );
}
