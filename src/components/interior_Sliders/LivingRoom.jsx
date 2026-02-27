import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const LivingRoom = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  // =========================================================
  // FUTURE ASSETS IMPORT GUIDE (src/assets)
  // =========================================================
  // 1. Apni images ko 'src/assets/' folder mein rakhein.
  // 2. Neeche diye gaye tareeke se import karein:
  //    import living1 from '../assets/living-1.jpg';
  // 3. Phir 'livingRoomData' array ke 'image' field mein URL ki jagah 
  //    variable name likhein (e.g., image: living1).
  // =========================================================

  const livingRoomData = [
    { id: 1, title: "Modern Luxury Living Room with Accent Lighting", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" },
    { id: 2, title: "Minimalist Scandi-Style Seating Area", image: "https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=1200" },
    { id: 3, title: "Contemporary TV Unit with Wooden Panelling", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200" },
    { id: 4, title: "Elegant Open Concept Living & Dining", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200" },
    { id: 5, title: "Industrial Loft Style Living Space", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200" },
    { id: 6, title: "Traditional Indian Living Room with Royal Touch", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200" },
  ];

  const moreLivingInteriors = [
    "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=800",
    "https://images.unsplash.com/photo-1616489953149-80470bc6500d?q=80&w=800",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800",
  ];

  // --- 1. AUTO-SLIDE LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        const isEnd = current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10;
        if (isEnd) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const amount = window.innerWidth > 768 ? 400 : current.offsetWidth;
          current.scrollBy({ left: amount, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 768 ? 400 : current.offsetWidth;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 bg-white font-sans overflow-hidden">
      
      {/* Page Title */}
      <div className="px-4 md:px-10 lg:px-20 mb-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Living Rooms That Host Your Happiest Moments
        </h2>
      </div>

      {/* Main Slider Section */}
      <div className="relative flex items-center group mb-12 px-4 md:px-10 lg:px-20">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-5 z-30 hidden sm:flex items-center justify-center w-10 h-14 bg-white/90 border border-gray-200 rounded-r-xl shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all active:scale-90"
        >
          <ChevronLeft className="text-[#FF4D6D] w-7 h-7" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {livingRoomData.map((item) => (
            <div 
              key={item.id} 
              className="w-full sm:w-[45%] md:w-[31%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm aspect-video sm:aspect-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-[#333333] text-sm md:text-[17px] leading-snug font-medium line-clamp-2 px-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-5 z-30 hidden sm:flex items-center justify-center w-10 h-14 bg-white/90 border border-gray-200 rounded-l-xl shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all active:scale-90"
        >
          <ChevronRight className="text-[#FF4D6D] w-7 h-7" />
        </button>
      </div>

      {/* Expert Button Section */}
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => setShowFullGallery(true)}
          className="bg-[#E32933] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#c2222b] transition-all shadow-lg active:scale-95"
        >
          Talk to Our Living Room Expert
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"><X size={28} /></button>
          <img src={selectedImg} className="max-w-full max-h-[85vh] object-contain rounded-lg animate-in zoom-in-95 duration-300" alt="Full view" />
        </div>
      )}

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 z-[110] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="p-6 md:p-12 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Living Room Portfolio</h3>
              <button onClick={() => setShowFullGallery(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X size={28} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[...livingRoomData.map(k => k.image), ...moreLivingInteriors].map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl shadow-md cursor-pointer relative" onClick={() => setSelectedImg(img)}>
                  <img src={img} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" alt="Living Room Design" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white border border-white px-4 py-2 rounded-full text-sm">View Design</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />
    </section>
  );
};

export default LivingRoom;