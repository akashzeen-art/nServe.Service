import { useState } from "react";
import { Play, Monitor, TrendingUp, DollarSign, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";

const lowRiskImages = [
  "/LowRisk/dhokebaaz.png",
  "/LowRisk/dhund.png",
  "/LowRisk/did it happen.png",
  "/LowRisk/dream movie.png",
  "/LowRisk/F1.png",
  "/LowRisk/F2.png",
  "/LowRisk/F3.png",
  "/LowRisk/F4.png",
  "/LowRisk/LEGEND OF HELL (1).png",
  "/LowRisk/MAKING OFF (1).png",
  "/LowRisk/MUCK ORIGNAL (1).png",
  "/LowRisk/of sinners and saints (1).png",
];

const highRiskImages = [
  "/HighRisk/1 (1).png",
  "/HighRisk/2 (2).png",
  "/HighRisk/3 (1).png",
  "/HighRisk/3 (2).png",
  "/HighRisk/4 (1).png",
  "/HighRisk/4.png",
  "/HighRisk/5.png",
  "/HighRisk/9.png",
];

const features = [
  { icon: Monitor, label: "Hot & Bold Movies" },
  { icon: Play, label: "Web Series" },
  { icon: TrendingUp, label: "Short-Form Videos" },
  { icon: Monitor, label: "AI-Generated HD Content" },
];

export default function VOD() {
  const [showHighRisk, setShowHighRisk] = useState(false);
  const [showLowRisk, setShowLowRisk] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar title="Video On Demand" />

      {/* Hero with video BG */}
      <div className="h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
        <video
          src="https://vz-4e71f4f3-133.b-cdn.net/689ccc98-64a5-47b6-8acd-b024ed957cee/play_360p.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg tracking-tight">Video On Demand</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">Your Screen. Your Rules.</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Attention banner */}
          <div className="text-center border border-blue-500/40 rounded-3xl p-10 bg-blue-500/5 backdrop-blur-sm">
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Attention</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Media Buyers & Publishers</h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Hot & Bold Movies · Web Series · Short-Form Videos · AI-Generated HD Content
            </p>
          </div>

          {/* Features grid */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-white font-bold text-lg mb-6">What We Offer</h3>
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

          {/* Traffic & Earnings */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h3 className="text-white font-bold text-lg">Looking for Traffic</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                We work on <span className="text-blue-400 font-semibold">CPA · CPM · CPS</span> models.<br />
                Connect with us and scale your media buying operations.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-500/10 border border-green-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h3 className="text-white font-bold text-lg">Opportunity To Earn</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Potential earnings of up to<br />
                <span className="text-green-400 font-black text-3xl">$2,00,000</span>
                <span className="text-gray-400 text-sm"> / Month</span>
              </p>
            </div>
          </div>

          {/* About VOD */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-500/10 border border-cyan-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white font-bold text-lg">About Our VOD Platform</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our flagship VOD offerings generate organic revenue through subscription and one time purchase titles of value to the customer.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Operating in multiple countries through a dedicated content library, mServeTech ensures customer satisfaction and recurring revenue through repeated renewals — hence ensuring a healthy revenue and retention metrics!
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Video on demand operates in two completely unique <span className="text-cyan-400 font-semibold">High Risk</span> and <span className="text-cyan-400 font-semibold">Low Risk</span> content profiles, with offerings for the individual user of unique content preference with inhouse content curation and a legal content distribution.
            </p>
          </div>

          {/* CTA strip */}
          <div className="text-center rounded-2xl bg-white/5 border border-white/10 p-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">To Connect With Us</span>
            </div>
            <p className="text-white/60 text-sm">Flip the Sheet — reach out to our partnerships team today</p>
          </div>

          {/* Verticals */}
          <div>
            <h2 className="text-4xl font-black text-white text-center mb-2">Our Verticals</h2>
            <p className="text-gray-400 text-center mb-10">Choose your risk appetite</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

              {/* High Risk — clickable, opens slider below */}
              <div className="col-span-1 sm:col-span-2">
                <button
                  onClick={() => setShowHighRisk((v) => !v)}
                  className="relative h-48 w-full rounded-2xl bg-gradient-to-br from-red-600 to-orange-400 overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white gap-3">
                    <Play className="w-10 h-10" />
                    <h3 className="text-2xl font-bold">High Risk</h3>
                    <p className="text-xs text-white/70 uppercase tracking-widest">VOD</p>
                    <p className="text-xs font-black text-white uppercase tracking-widest">Click Here To View</p>
                  </div>
                </button>
                {showHighRisk && (
                  <ImageSlider images={highRiskImages} title="High Risk" />
                )}
              </div>

              {/* Low Risk — clickable, opens slider below */}
              <div className="col-span-1 sm:col-span-2">
                <button
                  onClick={() => setShowLowRisk((v) => !v)}
                  className="relative h-48 w-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white gap-3">
                    <Play className="w-10 h-10" />
                    <h3 className="text-2xl font-bold">Low Risk</h3>
                    <p className="text-xs text-white/70 uppercase tracking-widest">VOD</p>
                    <p className="text-xs font-black text-white uppercase tracking-widest">Click Here To View</p>
                  </div>
                </button>
                {showLowRisk && (
                  <ImageSlider images={lowRiskImages} title="Low Risk" />
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
