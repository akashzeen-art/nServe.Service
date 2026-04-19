import { Leaf, Shield, Zap, Globe, FlaskConical, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    description: "Performance and vitality through bioactive compounds, herbs, and minerals — Straight from the valley!.",
    gradient: "from-green-600 to-emerald-400",
    accent: "green",
  },
];

export default function Nutra() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar title="Nutra & Wellness" />

      {/* Hero with GIF BG */}
      <div className="h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
        <img src="/Nutra.gif" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl bg-white/10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl bg-white/10" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl bg-white/5" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg tracking-tight">Designed For You</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">Straight from the valley!!</p>
        </div>
      </div>

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

          {/* About Nutra */}
          <div className="rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-500/10 border border-green-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <h3 className="text-white font-bold text-lg">About Our Nutra Platform</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The rise and retention of Nutraceutical products in the general public is driven by heavy trust and reliable performance of the product and their success in the market.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              nServeTech produces two distinct line-ups for Males and Females — for a healthy personal lifestyle to add more confidence and satisfaction to our customers.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Fully compliant Certifications and affiliations — and a formula from the Valleys of the Himalayas delivers <span className="text-green-400 font-semibold">100% Trust</span> and fully safe results to every single client!
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
                <div key={p.id} className={`relative rounded-3xl bg-gradient-to-br ${p.gradient} overflow-hidden shadow-xl hover:scale-105 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="flex flex-col items-center pt-8 px-8">
                    <img
                      src={p.id === "ameora" ? "/Nuta/ameora.png" : "/Nuta/Playtonight.png"}
                      alt={p.name}
                      className="w-56 h-56 object-contain drop-shadow-2xl"
                    />
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

          {/* <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95">
              Explore Now
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
