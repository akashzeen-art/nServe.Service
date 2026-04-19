import { Gamepad2, Zap, Trophy, Users, Star, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <div className="h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8 relative overflow-hidden">
        <img
          src="/gaming_gif1.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">iGAMING</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">Play Smart. Win Big.</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Main description */}
          <div className="text-center border border-purple-500/40 rounded-3xl p-10 bg-purple-500/5">
            <p className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-3">Online & Real-Time</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Skill Based Fantasy Sports</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The new iGaming — where skill meets thrill
            </p>
          </div>

          {/* Features — single narrow box */}
          <div className="rounded-2xl bg-white/5 border border-white/10 px-8 py-5 flex flex-wrap items-center gap-6">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-white text-sm font-semibold">{label}</span>
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

          {/* About iGaming */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-500/10 border border-violet-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-violet-400" />
              <h3 className="text-white font-bold text-lg">About Our iGaming Platform</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our dedicated iGaming vertical is capturing high stakes and heavy revenue and retention fields into regulation friendly economies, operating with licensed operators in some countries — to independent operations in few other companies — ensuring <span className="text-violet-400 font-semibold">FULLY COMPLIANT</span> and <span className="text-violet-400 font-semibold">LEGAL</span> operations and ensuring a clean, legal and customer friendly revenue operations.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Our heavily tailored offerings relevant to the regional gaming and interaction interests of the local public ensure a healthy and immersive iGaming experience. This is demonstrated in our Quiz focused web platform and the iGaming portal spread across different geographies for dedicated service.
            </p>
          </div>

          {/* iGame Section */}
          <div>
            <h2 className="text-4xl font-black text-white mb-2">iGame</h2>
            <p className="text-gray-400 mb-8">Next-gen multiplayer gaming experiences</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["/Game/Igame1.png","/Game/Igame2.png","/Game/Igame3.png","/Game/Igame4.png"].map((src, i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group bg-slate-800">
                  <img src={src} alt={`iGame ${i+1}`} className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          <div>
            <h2 className="text-4xl font-black text-white mb-2">Quiz</h2>
            <p className="text-gray-400 mb-8">Test your knowledge, win real rewards</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["/Game/Quiz1.png","/Game/Quiz2.png","/Game/Quiz3.png","/Game/Quiz4.png"].map((src, i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group bg-slate-800">
                  <img src={src} alt={`Quiz ${i+1}`} className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95">
              Play Now
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
