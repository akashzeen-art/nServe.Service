import { Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThumbnailGrid from "@/components/ThumbnailGrid";

const thumbnails = [
  { id: "ig-1", title: "Multiplayer", label: "iGaming", gradient: "from-purple-600 to-pink-400", Icon: Gamepad2 },
  { id: "ig-2", title: "Live Tournaments", label: "iGaming", gradient: "from-pink-600 to-rose-400", Icon: Gamepad2 },
  { id: "ig-3", title: "Casual Gaming", label: "iGaming", gradient: "from-violet-600 to-purple-400", Icon: Gamepad2 },
  { id: "ig-4", title: "Esports", label: "iGaming", gradient: "from-rose-600 to-pink-400", Icon: Gamepad2 },
];

export default function IGaming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-pink-500 to-rose-400">
      <Navbar title="iGaming" />
      <HeroSection
        title="iGaming"
        subtitle="Next-generation gaming with multiplayer action, live tournaments, and esports."
      />
      <ThumbnailGrid
        heading="Explore Our Collections"
        subheading="Discover the most thrilling gaming experiences"
        thumbnails={thumbnails}
        ctaLabel="Play Now"
        ctaColor="bg-purple-600 hover:bg-purple-700"
      />
    </div>
  );
}
