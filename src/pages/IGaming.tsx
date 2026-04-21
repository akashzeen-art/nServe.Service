import { Gamepad2, Zap, Trophy, Users, Star, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const models = ["CPA", "CPM", "CPS", "CPC"];

export default function IGaming() {
  const { t } = useLang();

  const features = [
    { icon: Zap, label: t("igFeat1") },
    { icon: Star, label: t("igFeat2") },
    { icon: Trophy, label: t("igFeat3") },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar title={t("igNav")} />

      <div className="h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8 relative overflow-hidden">
        <img src="/gaming_gif1.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">{t("igHero")}</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">{t("igHeroSub")}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                <div className="w-6 h-6 rounded-lg bg-purple-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-purple-300" />
                </div>
                <span className="text-white text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="text-center border border-purple-500/40 rounded-3xl p-10 bg-purple-500/5">
            <p className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-3">{t("igOnline")}</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t("igSkill")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("igTagline")}</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white mb-2">{t("igGame")}</h2>
            <p className="text-gray-400 mb-8">{t("igGameDesc")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {["/Game/Igame1.png","/Game/Igame2.png","/Game/Igame3.png","/Game/Igame4.png"].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group bg-slate-800">
                  <img src={src} alt={`iGame ${i+1}`} className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white mb-2">{t("igQuiz")}</h2>
            <p className="text-gray-400 mb-8">{t("igQuizDesc")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {["/Game/Quiz1.png","/Game/Quiz2.png","/Game/Quiz3.png","/Game/Quiz4.png"].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group bg-slate-800">
                  <img src={src} alt={`Quiz ${i+1}`} className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-500/10 border border-violet-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-violet-400" />
              <h3 className="text-white font-bold text-lg">{t("igAboutTitle")}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{t("igAbout1")}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{t("igAbout2")}</p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-500/10 border border-purple-500/30 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-400 shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-lg">{t("igInvite")}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1">{t("igInviteDesc")}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-pink-400 shrink-0" />
                  <span className="text-white font-bold">{t("igPricing")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {models.map(m => (
                    <span key={m} className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-sm font-bold px-4 py-1.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
