import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { ceilingData, moreCeilings } from "./false-ceiling-images";

const FalseCeiling = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const current = scrollRef.current;

      const isEnd =
        current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10;

      const amount =
        window.innerWidth > 768 ? 400 : current.offsetWidth;

      current.scrollBy({
        left: isEnd ? -current.scrollWidth : amount,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // ✅ MANUAL SCROLL
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount =
      window.innerWidth > 768
        ? 400
        : scrollRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12 bg-white font-sans overflow-hidden">
      {/* Title */}
      <div className="px-4 md:px-10 lg:px-20 mb-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
          Premium False Ceiling Designs for Your Dream Home
        </h2>
      </div>

      {/* Slider */}
      <div className="relative flex items-center group mb-12 px-4 md:px-10 lg:px-20">
        
        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-2 md:left-5 z-30 hidden sm:flex items-center justify-center w-10 h-14 bg-white/90 border border-gray-200 rounded-r-xl shadow-lg md:opacity-0 md:group-hover:opacity-100 transition active:scale-90"
        >
          <ChevronLeft className="text-[#FF4D6D] w-7 h-7" />
        </button>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 w-full scroll-smooth"
        >
          {ceilingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 100 }}   // 👉 RIGHT SIDE SLIDE
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-[45%] md:w-[31%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-gray-800 text-sm md:text-base font-medium line-clamp-2 px-1">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-2 md:right-5 z-30 hidden sm:flex items-center justify-center w-10 h-14 bg-white/90 border border-gray-200 rounded-l-xl shadow-lg md:opacity-0 md:group-hover:opacity-100 transition active:scale-90"
        >
          <ChevronRight className="text-[#FF4D6D] w-7 h-7" />
        </button>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowFullGallery(true)}
          className="bg-[#E32933] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#c2222b] transition shadow-lg active:scale-95"
        >
          Explore All Ceiling Designs
        </button>
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImg}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            alt="Full view"
          />
        </div>
      )}

      {/* FULL GALLERY */}
      {showFullGallery && (
        <div className="fixed inset-0 z-[110] bg-white overflow-y-auto">
          <div className="p-6 md:p-12 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Explore All Ceiling Designs
              </h3>

              <button
                onClick={() => setShowFullGallery(false)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <X size={28} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...ceilingData.map((k) => k.image), ...moreCeilings].map(
                (img) => (
                  <motion.div
                    key={img}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl overflow-hidden shadow cursor-pointer"
                    onClick={() => {
                      setSelectedImg(img);
                      setShowFullGallery(false);
                    }}
                  >
                    <img
                      loading="lazy"
                      src={img}
                      className="w-full h-64 object-cover"
                      alt="Ceiling Design"
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* SCROLLBAR HIDE */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default FalseCeiling;