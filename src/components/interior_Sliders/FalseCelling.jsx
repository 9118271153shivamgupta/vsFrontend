import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { ceilingData, moreCeilings } from "./false-ceiling-images";

const FalseCeiling = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  // ✅ AUTO SLIDE (Logic Unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const current = scrollRef.current;
      const isEnd = current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10;
      const amount = window.innerWidth > 768 ? 400 : current.offsetWidth;

      current.scrollBy({
        left: isEnd ? -current.scrollWidth : amount,
        behavior: "smooth",
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // ✅ MANUAL SCROLL (Logic Unchanged)
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth > 768 ? 400 : scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-8 md:py-10 bg-white font-poppins overflow-hidden">
      {/* Title - Optimized Spacing */}
      <div className="px-4 md:px-10 lg:px-20 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight leading-tight">
          Premium False Ceiling Designs for Your Dream Home
        </h2>
      </div>

      {/* Slider - Reduced Margin */}
      <div className="relative flex items-center group mb-8 px-4 md:px-10 lg:px-20 text-[#bd8100]">
        
        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-2 md:left-5 z-30 hidden sm:flex items-center justify-center w-10 h-12 bg-white/95 border border-gray-100 rounded-r-xl shadow-md md:opacity-0 md:group-hover:opacity-100 transition active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="text-[#bd8100] w-6 h-6" />
        </button>

        {/* CARDS - Refined Gap */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 w-full scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ceilingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[85%] sm:w-[45%] md:w-[31%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-3 text-gray-800 text-sm md:text-base font-medium line-clamp-1 px-1">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-2 md:right-5 z-30 hidden sm:flex items-center justify-center w-10 h-12 bg-white/95 border border-gray-100 rounded-l-xl shadow-md md:opacity-0 md:group-hover:opacity-100 transition active:scale-90 cursor-pointer"
        >
          <ChevronRight className="text-[#bd8100] w-6 h-6" />
        </button>
      </div>

      {/* ACTION BUTTON */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowFullGallery(true)}
          className="bg-[#bd8100] text-white px-7 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#a16e00] transition shadow-md active:scale-95 cursor-pointer"
        >
          Explore All Ceiling Designs
        </button>
      </div>

      {/* LIGHTBOX (Lightbox with backdrop blur) */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImg}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            alt="Full view"
          />
        </div>
      )}

      {/* FULL GALLERY MODAL */}
      {showFullGallery && (
        <div className="fixed inset-0 z-[150] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="p-5 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Explore All Ceiling Designs
              </h3>
              <button
                onClick={() => setShowFullGallery(false)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[...ceilingData.map((k) => k.image), ...moreCeilings].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden shadow-sm cursor-pointer"
                  onClick={() => {
                    setSelectedImg(img);
                    setShowFullGallery(false);
                  }}
                >
                  <img
                    loading="lazy"
                    src={img}
                    className="w-full h-60 object-cover"
                    alt="Ceiling Design"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS For Poppins & Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
};

export default FalseCeiling;