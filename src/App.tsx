import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <BrowserRouter>
        <ScrollToTop />
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
