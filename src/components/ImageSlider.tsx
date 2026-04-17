import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gsap from "gsap";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <>
      {/* Slider panel */}
      <div ref={sliderRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        {/* 1 col on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="aspect-video rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 bg-slate-800"
            >
              <img src={src} alt={`${title} ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/70 hover:text-white p-2">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/70 hover:text-white p-2">
            <ChevronRight className="w-8 h-8" />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X className="w-6 h-6" />
          </button>
          <span className="absolute bottom-4 text-white/50 text-sm">{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
