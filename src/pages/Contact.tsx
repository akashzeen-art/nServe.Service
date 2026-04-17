import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar title="Contact Us" />

      {/* Header */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">Contact Us</h1>
        <p className="text-gray-400 text-lg md:text-xl">We're here to help. Reach out to us anytime.</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-24 space-y-6">

        {/* Address */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <p className="text-white font-bold mb-1">Address</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compass Building, Al Sohada Road,<br />
              Al Hamara Industrial Zone FZ,<br />
              Ras Al Khaimah, UAE
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-white font-bold mb-2">Email</p>
            <a href="mailto:vivek@nservetech.com" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">vivek@nservetech.com</a>
            <a href="mailto:vikram@nservetech.net" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors mt-1">vikram@nservetech.net</a>
          </div>
        </div>

        {/* Phone */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
            <Phone className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="text-white font-bold mb-2">Phone</p>
            <a href="tel:+971529692827" className="block text-green-400 hover:text-green-300 text-sm transition-colors">+971 529692827</a>
            <a href="tel:+919650750888" className="block text-green-400 hover:text-green-300 text-sm transition-colors mt-1">+91-9650750888</a>
            <a href="tel:+919958418419" className="block text-green-400 hover:text-green-300 text-sm transition-colors mt-1">+91-9958418419</a>
          </div>
        </div>

        {/* Telegram */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <p className="text-white font-bold mb-2">Telegram</p>
            <a href="https://t.me/Viz_2711" target="_blank" rel="noreferrer" className="block text-sky-400 hover:text-sky-300 text-sm transition-colors">@Viz_2711</a>
            <a href="https://t.me/Vik_Phoenix" target="_blank" rel="noreferrer" className="block text-sky-400 hover:text-sky-300 text-sm transition-colors mt-1">@Vik_Phoenix</a>
          </div>
        </div>

      </div>
    </div>
  );
}
