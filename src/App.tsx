import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VOD from "./pages/VOD";
import IGaming from "./pages/IGaming";
import Nutra from "./pages/Nutra";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/vod" element={<VOD />} />
        <Route path="/igaming" element={<IGaming />} />
        <Route path="/nutra" element={<Nutra />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
