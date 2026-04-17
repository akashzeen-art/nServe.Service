import { Leaf, Shield, Zap, Globe, FlaskConical, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const badges = [
  { icon: Leaf, label: "100% Herbal" },
  { icon: Zap, label: "Quick Action" },
  { icon: Shield, label: "Pure & Safe" },
];

const certifications = [
  { icon: Award, label: "GMP Certified" },
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: Shield, label: "Zero Chemicals" },
  { icon: Leaf, label: "Natural" },
];

const regions = ["India", "China", "South East Asia", "US", "UK", "Europe"];

const products = [
  {
    id: "ameora",
    name: "Ameora",
    tagline: "Wellness For Women",
    description: "Scientifically formulated blend of vitamins, minerals, herbs, and bioactive compounds designed for women's vitality.",
    gradient: "from-emerald-600 to-teal-400",
    accent: "emerald",
  },
  {
    id: "playtonight",
    name: "Play Tonight",
    tagline: "Wellness For Men",
    description: "Performance and vitality through bioactive compounds, herbs, and minerals — straight from the hills.",
    gradient: "from-green-600 to-emerald-400",
    accent: "green",
  },
];

export default function Nutra() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 via-emerald-500 to-teal-400">
      <Navbar title="Nutra & Wellness" />
      <HeroSection
        title="Designed For You"
        subtitle="Straight from the Hills!"
      />

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Description */}
          <div className="text-center border border-green-500/40 rounded-3xl p-10 bg-green-500/5">
            <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-3">Vitality & Performance</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Scientifically Formulated</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Blends of vitamins, minerals, herbs, and bioactive compounds crafted for real results.
            </p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-green-400" />
                <span className="text-white text-sm font-semibold text-center">{label}</span>
              </div>
            ))}
          </div>

          {/* Products */}
          <div>
            <h2 className="text-4xl font-black text-white text-center mb-2">Our Products</h2>
            <p className="text-gray-400 text-center mb-10">
              Earn up to <span className="text-green-400 font-bold">$100</span> on each Straight Sale
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((p) => (
                <div key={p.id} className={`relative rounded-3xl bg-gradient-to-br ${p.gradient} p-8 overflow-hidden shadow-xl hover:scale-105 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Leaf className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-2xl font-black text-white">{p.name}</h3>
                        <p className="text-white/70 text-sm font-semibold uppercase tracking-wider">{p.tagline}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{p.description}</p>
                    <div className="mt-6 h-0.5 w-12 bg-white/40 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-black text-white text-center mb-6">Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Icon className="w-7 h-7 text-green-400" />
                  <span className="text-white/80 text-xs font-semibold text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target regions */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-6 h-6 text-green-400" />
              <h3 className="text-white font-bold text-lg">Target Regions</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {regions.map((r) => (
                <span key={r} className="bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full">
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
