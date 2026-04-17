import { useState } from "react";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from nServe Website");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.open(`mailto:vivek@nservetech.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar title="Contact Us" />

      {/* Header */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">Contact Us</h1>
        <p className="text-gray-400 text-lg md:text-xl">We're here to help. Reach out to us anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-12">

        {/* Info + Form grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="space-y-6">

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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-5">
            <h2 className="text-2xl font-black text-white mb-2">Send a Message</h2>

            {[
              { key: "name", label: "Name", type: "text", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              { key: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block text-gray-400 text-sm mb-1.5">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-400 text-sm mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0!2d55.9!3d25.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRas+Al+Khaimah+UAE!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/971529692827"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
