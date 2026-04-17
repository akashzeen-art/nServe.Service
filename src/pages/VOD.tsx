import { Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThumbnailGrid from "@/components/ThumbnailGrid";

const thumbnails = [
  { id: "vod-1", title: "Latest Movies", label: "VOD", gradient: "from-blue-600 to-cyan-400", Icon: Play },
  { id: "vod-2", title: "Top Series", label: "VOD", gradient: "from-blue-500 to-indigo-400", Icon: Play },
  { id: "vod-3", title: "Documentaries", label: "VOD", gradient: "from-cyan-500 to-blue-400", Icon: Play },
  { id: "vod-4", title: "Originals", label: "VOD", gradient: "from-indigo-500 to-cyan-500", Icon: Play },
];

export default function VOD() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400">
      <Navbar title="Video On Demand" />
      <HeroSection
        title="Video On Demand"
        subtitle="Stream unlimited movies, series, and exclusive originals — anytime, anywhere."
      />
      <ThumbnailGrid
        heading="Explore Our Collections"
        subheading="Discover the best content curated just for you"
        thumbnails={thumbnails}
        ctaLabel="Start Watching"
        ctaColor="bg-blue-600 hover:bg-blue-700"
      />
    </div>
  );
}
