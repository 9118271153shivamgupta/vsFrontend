import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { kitchenData, moreKitchens } from "./kitchen_data";

const Kitchen = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const amount = window.innerWidth > 768 ? 400 : 300;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white relative">
      {/* Title */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Modular Kitchens Designed for Indian Homes
        </h2>
      </div>

      {/* Slider */}
      <div className="relative group mb-12 flex items-center">
        {/* Left Btn */}
        <button
          aria-label="Scroll Left"
          onClick={() => scroll("left")}
          className="absolute -left-2 md:-left-8 z-20 w-8 h-12 flex items-center justify-center bg-[#FFF0F2] rounded-r-lg shadow opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft className="text-[#FF4D6D]" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {kitchenData.map((item) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={item.id}
              className="min-w-[90%] md:min-w-[32%] cursor-pointer snap-start"
              onClick={() => {
                setSelectedImg(item.image);
                setShowFullGallery(false);
              }}
            >
              <div className="rounded-xl overflow-hidden shadow bg-gray-50">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] md:h-[300px] object-cover"
                />
              </div>
              <p className="mt-3 text-gray-800 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Btn */}
        <button
          aria-label="Scroll Right"
          onClick={() => scroll("right")}
          className="absolute -right-2 md:-right-8 z-20 w-8 h-12 flex items-center justify-center bg-[#FFF0F2] rounded-l-lg shadow opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight className="text-[#FF4D6D]" />
        </button>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowFullGallery(true)}
          className="bg-[#E32933] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c2222b] active:scale-95 transition"
        >
          Our Kitchen Designs
                
        </button>
      </div>

      {/* ---------------- MODALS ---------------- */}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <motion.img
              src={selectedImg}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[85vh] rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL GALLERY */}
      <AnimatePresence>
        {showFullGallery && (
          <motion.div
            className="fixed inset-0 bg-white z-[150] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6 md:p-12 max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex justify-between mb-8 border-b pb-4">
                <h3 className="text-2xl font-bold">
                  Our Kitchen Designs
                </h3>

                <button
                  aria-label="Close Gallery"
                  onClick={() => setShowFullGallery(false)}
                >
                  <X size={28} />
                </button>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...kitchenData.map((k) => k.image), ...moreKitchens].map(
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
                      />
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide Scrollbar */}
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

export default Kitchen;