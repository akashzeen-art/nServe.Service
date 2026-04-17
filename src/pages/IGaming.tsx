import { Gamepad2, Zap, Trophy, Users, Star, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";

const features = [
  { icon: Zap, label: "Technology" },
  { icon: Star, label: "Engagement" },
  { icon: Trophy, label: "Instant Rewards" },
];

const models = ["CPA", "CPM", "CPS", "CPC"];

const thumbnails = [
  { id: "ig-1", title: "Multiplayer", gradient: "from-purple-600 to-pink-400" },
  { id: "ig-2", title: "Live Tournaments", gradient: "from-pink-600 to-rose-400" },
  { id: "ig-3", title: "Casual Gaming", gradient: "from-violet-600 to-purple-400" },
  { id: "ig-4", title: "Esports", gradient: "from-rose-600 to-pink-400" },
];

export default function IGaming() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar title="iGaming" />

      {/* Hero with GIF BG */}
      <div className="h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
        <img
          src="/gaming_gif1.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg tracking-tight">Play 365</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">Play Smart. Win Big.</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Main description */}
          <div className="text-center border border-purple-500/40 rounded-3xl p-10 bg-purple-500/5">
            <p className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-3">Online & Real-Time</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Skill Based Fantasy Sports</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The new iGaming — where skill meets thrill
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-purple-400" />
                <span className="text-white text-sm font-semibold text-center">{label}</span>
              </div>
            ))}
          </div>

          {/* Invite & Pricing */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-500/10 border border-purple-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-400" />
                <h3 className="text-white font-bold text-lg">Inviting Partners</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Agencies, Media Buyers & Publishers are invited to join our growing network and scale together.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-pink-600/20 to-rose-500/10 border border-pink-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-pink-400" />
                <h3 className="text-white font-bold text-lg">Pricing Models</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {models.map((m) => (
                  <span key={m} className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-sm font-bold px-4 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Game categories */}
          <div>
            <h2 className="text-4xl font-black text-white text-center mb-2">Game Categories</h2>
            <p className="text-gray-400 text-center mb-10">Explore all gaming verticals</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {thumbnails.map((thumb) => (
                <div key={thumb.id} className={`relative h-40 rounded-2xl bg-gradient-to-br ${thumb.gradient} overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white gap-2">
                    <Gamepad2 className="w-8 h-8" />
                    <h3 className="text-lg font-bold text-center px-2">{thumb.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
