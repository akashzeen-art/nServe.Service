import { useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 border-t border-white/10 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-white font-black text-2xl mb-3">nServe</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              End-to-end digital solutions across VOD, iGaming, Nutra & Wellness, and VAS.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Verticals</h4>
            <ul className="space-y-2">
              {[
                { label: "Video On Demand", path: "/vod" },
                { label: "iGaming", path: "/igaming" },
                { label: "Nutra & Wellness", path: "/nutra" },
                { label: "VAS", path: "/vas" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <button
                    onClick={() => navigate(path)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                Ras Al Khaimah, UAE
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:vivek@nservetech.com" className="text-gray-400 hover:text-white text-sm transition-colors">vivek@nservetech.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a href="tel:+971529692827" className="text-gray-400 hover:text-white text-sm transition-colors">+971 529692827</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="https://t.me/Viz_2711" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">@Viz_2711</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} nServe. All rights reserved.</p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
          >
            Contact Us
          </button>
        </div>

      </div>
    </footer>
  );
}
