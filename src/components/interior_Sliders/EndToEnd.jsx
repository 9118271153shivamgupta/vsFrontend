import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const EndToEnd = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const scrollRef = useRef(null);

  const interiorData = [
    { id: 1, title: "Contemporary Dining Room with Display Cabinets", image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?q=80&w=1200" },
    { id: 2, title: "Modern Bedroom with Bay Window Seating", image: "https://images.unsplash.com/photo-1616594116244-8395f87498b5?q=80&w=1200" },
    { id: 3, title: "Elegant Living Area with Partition", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" },
    { id: 4, title: "Compact Puja Unit Designs", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" },
    { id: 5, title: "Modern Kitchen Concepts", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 768 ? 500 : 300;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-white font-sans overflow-hidden">
      <div className="mb-8">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          End-to-End Interiors— Delivered Seamlessly
        </h2>
      </div>

      <div className="relative flex items-center group">
        {/* Navigation Buttons (Hidden on very small screens for better UX) */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 md:-left-12 z-30 hidden sm:flex items-center justify-center w-10 h-14 bg-white/90 border border-gray-200 rounded-r-xl shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="text-[#FF4D6D] w-7 h-7" />
        </button>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {interiorData.map((item) => (
            <div 
              key={item.id} 
              // FIXED: Mobile par width screen ke andar fit hogi
              className="w-[85%] sm:w-[45%] md:w-[31%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm aspect-[4/3] md:aspect-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full md:h-[320px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-[#333333] text-sm md:text-lg leading-snug font-medium line-clamp-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 md:-right-12 z-30 hidden sm:flex items-center justify-center w-10 h-14 bg-white/90 border border-gray-200 rounded-l-xl shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="text-[#FF4D6D] w-7 h-7" />
        </button>
      </div>

      {/* Modal remains the same */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"><X size={28} /></button>
          <img src={selectedImg} className="max-w-full max-h-[85vh] object-contain rounded-lg animate-in zoom-in-95" alt="Enlarged" />
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />
    </section>
  );
};

export default EndToEnd;