import { Leaf, Shield, Zap, Globe, FlaskConical, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const regions = ["India", "China", "South East Asia", "Middle East", "US", "UK", "Europe"];

export default function Nutra() {
  const { t } = useLang();

  const badges = [
    { icon: Leaf, label: t("nuBadge1") },
    { icon: Zap, label: t("nuBadge2") },
    { icon: Shield, label: t("nuBadge3") },
  ];
  const certifications = [
    { icon: Award, label: t("nuCert1") },
    { icon: FlaskConical, label: t("nuCert2") },
    { icon: Shield, label: t("nuCert3") },
    { icon: Leaf, label: t("nuCert4") },
  ];
  const products = [
    { id: "playtonight", name: t("nuP1Name"), tagline: t("nuP1Tag"), description: t("nuP1Desc") },
    { id: "ameora", name: t("nuP2Name"), tagline: t("nuP2Tag"), description: t("nuP2Desc") },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar title={t("nuNav")} />

      <div className="h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8 relative overflow-hidden">
        <img src="/Nutra.gif" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl bg-white/10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl bg-white/10" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">{t("nuHero")}</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">{t("nuHeroSub")}</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="text-center border border-green-500/40 rounded-3xl p-10 bg-green-500/5">
            <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-3">{t("nuVitality")}</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t("nuSci")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{t("nuSciDesc")}</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white text-center mb-2">{t("nuProducts")}</h2>
            <p className="text-gray-400 text-center mb-10">{t("nuProductsDesc")}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map(p => (
                <div key={p.id}
                  className={`relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 ${p.id === "playtonight" ? "bg-blue-500/20 border border-blue-400/40" : "bg-pink-500/20 border border-pink-400/40"}`}
                  style={{ boxShadow: p.id === "playtonight" ? "0 0 40px rgba(59,130,246,0.3)" : "0 0 40px rgba(236,72,153,0.3)" }}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="flex flex-col items-center pt-8 px-8">
                    <img src={p.id === "ameora" ? "/Nuta/ameora.png" : "/Nuta/Playtonight.png"} alt={p.name} className="w-56 h-56 object-contain drop-shadow-2xl" />
                  </div>
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Leaf className="w-6 h-6 text-white" />
                      <div>
                        <h3 className="text-xl font-black text-white">{p.name}</h3>
                        <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">{p.tagline}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{p.description}</p>
                    <div className="mt-4 h-0.5 w-12 bg-white/40 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white text-center mb-6">{t("nuCert")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Icon className="w-7 h-7 text-green-400" />
                  <span className="text-white/80 text-xs font-semibold text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-500/10 border border-green-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <h3 className="text-white font-bold text-lg">{t("nuAboutTitle")}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{t("nuAbout1")}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{t("nuAbout2")}</p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">{t("nuAbout3")}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-green-400" />
                <span className="text-white text-sm font-semibold text-center">{label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-green-400" />
              <h3 className="text-white font-bold text-lg">{t("nuRegions")}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {regions.map(r => (
                <span key={r} className="bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full">{r}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
