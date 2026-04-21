import { useState } from "react";
import { Play, Monitor, TrendingUp, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { useLang } from "@/lib/LangContext";

const lowRiskImages = [
  "/LowRisk/dhokebaaz.png", "/LowRisk/dhund.png", "/LowRisk/did it happen.png",
  "/LowRisk/dream movie.png", "/LowRisk/F1.png", "/LowRisk/F2.png", "/LowRisk/F3.png",
  "/LowRisk/F4.png", "/LowRisk/LEGEND OF HELL (1).png", "/LowRisk/MAKING OFF (1).png",
  "/LowRisk/MUCK ORIGNAL (1).png", "/LowRisk/of sinners and saints (1).png",
];
const highRiskImages = [
  "/HighRisk/1 (1).png", "/HighRisk/2 (2).png", "/HighRisk/3 (1).png", "/HighRisk/3 (2).png",
  "/HighRisk/4 (1).png", "/HighRisk/4.png", "/HighRisk/5.png", "/HighRisk/9.png",
];

export default function VOD() {
  const [showHighRisk, setShowHighRisk] = useState(false);
  const [showLowRisk, setShowLowRisk] = useState(false);
  const { t } = useLang();

  const features = [
    { icon: Monitor, label: t("vodAttDesc").split(" · ")[0] },
    { icon: Play, label: t("vodAttDesc").split(" · ")[1] },
    { icon: TrendingUp, label: t("vodAttDesc").split(" · ")[2] },
    { icon: Monitor, label: t("vodAttDesc").split(" · ")[3] },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar title={t("vodNav")} />

      <div className="h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8 relative overflow-hidden">
        <video src="https://vz-4e71f4f3-133.b-cdn.net/689ccc98-64a5-47b6-8acd-b024ed957cee/play_360p.mp4"
          autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">{t("vodHero")}</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">{t("vodHeroSub")}</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="text-center border border-blue-500/40 rounded-3xl p-10 bg-blue-500/5 backdrop-blur-sm">
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">{t("vodAttLabel")}</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{t("vodAttHead")}</h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">{t("vodAttDesc")}</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white text-center mb-2">{t("vodPortfolio")}</h2>
            <p className="text-gray-400 text-center mb-10">{t("vodRiskDesc")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="col-span-1 sm:col-span-2">
                <button onClick={() => setShowHighRisk(v => !v)}
                  className="relative h-48 w-full rounded-2xl bg-gradient-to-br from-red-600 to-orange-400 overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white gap-3">
                    <Play className="w-10 h-10" />
                    <h3 className="text-2xl font-bold">{t("vodHigh")}</h3>
                    <p className="text-xs text-white/70 uppercase tracking-widest">VOD</p>
                    <p className="text-sm font-black text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{t("vodClick")}</p>
                  </div>
                </button>
                {showHighRisk && <ImageSlider images={highRiskImages} title={t("vodHigh")} />}
              </div>
              <div className="col-span-1 sm:col-span-2">
                <button onClick={() => setShowLowRisk(v => !v)}
                  className="relative h-48 w-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white gap-3">
                    <Play className="w-10 h-10" />
                    <h3 className="text-2xl font-bold">{t("vodLow")}</h3>
                    <p className="text-xs text-white/70 uppercase tracking-widest">VOD</p>
                    <p className="text-sm font-black text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{t("vodClick")}</p>
                  </div>
                </button>
                {showLowRisk && <ImageSlider images={lowRiskImages} title={t("vodLow")} />}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-500/10 border border-cyan-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white font-bold text-lg">{t("vodAboutTitle")}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{t("vodAbout1")}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{t("vodAbout2")}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{t("vodAbout3")}</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-white font-bold text-lg mb-6">{t("vodOffer")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-white text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h3 className="text-white font-bold text-lg">{t("vodTraffic")}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{t("vodTrafficDesc")}</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-500/10 border border-green-500/30 p-8 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h3 className="text-white font-bold text-lg">{t("vodEarn")}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("vodEarnDesc")}<br />
                <span className="text-green-400 font-black text-3xl">$200,000</span>
                <span className="text-gray-400 text-sm"> {t("vodEarnMonth")}</span>
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
