import { Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThumbnailGrid from "@/components/ThumbnailGrid";

const thumbnails = [
  { id: "nu-1", title: "PlayTonight", label: "Nutra", gradient: "from-green-600 to-teal-400", Icon: Leaf },
  { id: "nu-2", title: "Ameora", label: "Nutra", gradient: "from-emerald-600 to-green-400", Icon: Leaf },
  { id: "nu-3", title: "Wellness Plans", label: "Nutra", gradient: "from-teal-600 to-emerald-400", Icon: Leaf },
  { id: "nu-4", title: "Health Products", label: "Nutra", gradient: "from-green-500 to-cyan-400", Icon: Leaf },
];

export default function Nutra() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 via-emerald-500 to-teal-400">
      <Navbar title="Nutra & Wellness" />
      <HeroSection
        title="Nutra & Wellness"
        subtitle="PlayTonight and Ameora — innovative wellness solutions for better living."
      />
      <ThumbnailGrid
        heading="Explore Our Collections"
        subheading="Wellness products and services designed for you"
        thumbnails={thumbnails}
        ctaLabel="Explore Now"
        ctaColor="bg-green-600 hover:bg-green-700"
      />
    </div>
  );
}
