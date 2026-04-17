import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

interface ImageGalleryModalProps {
  title: string;
  images: string[];
  onClose: () => void;
}

export default function ImageGalleryModal({ title, images, onClose }: ImageGalleryModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.fromTo(modalRef.current, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" });
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const close = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, onComplete: onClose });
  };

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
      <div ref={modalRef} className="bg-slate-900 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 bg-slate-900 z-10 rounded-t-3xl">
          <h2 className="text-white font-black text-2xl">{title}</h2>
          <button onClick={close} className="text-white/60 hover:text-white transition-colors p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Grid: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="aspect-[3/4] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 bg-slate-800"
            >
              <img src={src} alt={`${title} ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/70 hover:text-white p-2">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img src={images[lightbox]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/70 hover:text-white p-2">
            <ChevronRight className="w-8 h-8" />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X className="w-6 h-6" />
          </button>
          <span className="absolute bottom-4 text-white/50 text-sm">{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}
