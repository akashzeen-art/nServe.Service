import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import VOD from "./pages/VOD";
import IGaming from "./pages/IGaming";
import Nutra from "./pages/Nutra";
import VAS from "./pages/VAS";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function FloatingContactBtn() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname === "/contact" || pathname === "/") return null;
  return (
    <button
      onClick={() => navigate("/contact")}
      className="fixed bottom-0 left-0 right-0 z-[9998] w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white py-5 px-6 shadow-[0_-4px_40px_rgba(249,115,22,0.5)] hover:shadow-[0_-4px_60px_rgba(249,115,22,0.7)] transition-all duration-200 flex flex-col items-center leading-tight"
    >
      <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">Interested for Collaboration?</span>
      <span className="text-2xl md:text-3xl font-black tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Contact Us</span>
    </button>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <BrowserRouter>
        <ScrollToTop />
        <FloatingContactBtn />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vod" element={<VOD />} />
          <Route path="/igaming" element={<IGaming />} />
          <Route path="/nutra" element={<Nutra />} />
          <Route path="/vas" element={<VAS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
