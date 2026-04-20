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
      className="fixed bottom-6 left-6 z-[9998] bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-sm py-3 px-6 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex flex-col items-center leading-tight"
    >
      <span className="text-white/70 text-xs font-medium">Interested for Collaboration?</span>
      <span>Contact Us</span>
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
