import { useLang } from "@/lib/LangContext";
import { Smartphone, Wifi, MessageSquare, Globe, DollarSign, Users, Zap, BarChart2, Target, FileText, TrendingUp, Star, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const models = ["CPA", "CPM", "CPS", "CPC"];
const regions = ["India", "South East Asia", "Middle East", "Africa", "Europe"];

export default function MMVAS() {
  const { t } = useLang();
  const solutions = [
    { icon: Target, title: t("vasSol1T"), desc: t("vasSol1D") },
    { icon: BarChart2, title: t("vasSol2T"), desc: t("vasSol2D") },
    { icon: Zap, title: t("vasSol3T"), desc: t("vasSol3D") },
    { icon: FileText, title: t("vasSol4T"), desc: t("vasSol4D") },
    { icon: TrendingUp, title: t("vasSol5T"), desc: t("vasSol5D") },
    { icon: Star, title: t("vasSol6T"), desc: t("vasSol6D") },
  ];
  const whyUs = [t("vasWhy1"), t("vasWhy2"), t("vasWhy3"), t("vasWhy4")];
  const services = [
    { icon: Smartphone, label: t("vasSvc1") },
    { icon: Wifi, label: t("vasSvc2") },
    { icon: MessageSquare, label: t("vasSvc3") },
    { icon: Globe, label: t("vasSvc4") },
  ];
  return (
    <div className="min-h-screen bg-black">
      <Navbar title={t("vasNav")} />

      {/* Hero with GIF BG */}
      <div className="h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8 relative overflow-hidden">
        <img src="/nserve_items.gif" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl bg-white/10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl bg-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-white/5" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">Telecom</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">MVAS</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* About */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">About</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Revolutionizing Technology
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t("vasAbout1")}
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                {t("vasAbout2")}
              </p>
              {/* <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 active:scale-95">
                Know More
              </button> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon className="w-8 h-8 text-orange-400" />
                  <span className="text-white text-sm font-semibold text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing */}
          <div>
            <div className="text-center mb-12">
              <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3"></p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t("vasDigital")}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t("vasDigitalDesc")}
              </p>
            </div>

            <h3 className="text-2xl font-black text-white mb-6">{t("vasSolutions")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                  <Icon className="w-7 h-7 text-orange-400 mb-3" />
                  <h4 className="text-white font-bold mb-2">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="rounded-3xl bg-gradient-to-br from-orange-600/20 to-amber-500/10 border border-orange-500/30 p-10">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-orange-400" />
              <h2 className="text-3xl font-black text-white">{t("vasWhy")}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <p className="text-gray-300 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Regions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-orange-400" />
                <h3 className="text-white font-bold text-lg">{t("vasPricing")}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {models.map((m) => (
                  <span key={m} className="bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-bold px-4 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-orange-400" />
                <h3 className="text-white font-bold text-lg">{t("vasWorldwide")}</h3>
              </div>
              <p className="text-6xl md:text-8xl font-black text-orange-400" style={{ fontFamily: "Syne, sans-serif" }}>🌍</p>
              <p className="text-white/50 text-sm mt-3">{t("vasWorldwideDesc")}</p>
            </div>
          </div>

          {/* Service Flow */}
          <div className="rounded-3xl bg-gradient-to-br from-orange-600/20 to-amber-500/10 border border-orange-500/30 p-8 md:p-10">
            <h2 className="text-3xl font-black text-white mb-8" style={{ fontFamily: "Syne, sans-serif" }}>{t("vasFlow")}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {[
                { num: "1", label: t("vasFlow1") },
                { num: "2", label: t("vasFlow2") },
                { num: "3", label: t("vasFlow3") },
                { num: "4", label: t("vasFlow4") },
                { num: "5", label: t("vasFlow5") },
              ].map(({ num, label }) => (
                <div key={num} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="w-8 h-8 rounded-full bg-orange-500/30 border border-orange-400/50 flex items-center justify-center text-orange-300 font-black text-sm shrink-0">{num}</span>
                  <span className="text-white font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-4xl font-black text-orange-400" style={{ fontFamily: "Syne, sans-serif" }}>80+</p>
                <p className="text-white/70 text-sm mt-1">{t("vasTelecom")}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-4xl font-black text-orange-400" style={{ fontFamily: "Syne, sans-serif" }}>Global</p>
                <p className="text-white/70 text-sm mt-1">{t("vasGlobal")}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-4xl font-black text-orange-400" style={{ fontFamily: "Syne, sans-serif" }}>22+</p>
                <p className="text-white/70 text-sm mt-1">{t("vasCountries")}</p>
              </div>
            </div>
          </div>

          {/* <div className="text-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95">
              Connect With Us
            </button>
          </div> */}

          {/* <p className="text-center text-gray-600 text-sm">Copyright ©  2026</p> */}

        </div>
      </div>
      <Footer />
    </div>
  );
}
