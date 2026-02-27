import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// =========================================================
// FUTURE ASSETS IMPORT GUIDE (src/assets)
// =========================================================
// 1. Apni images ko 'src/assets/' folder mein rakhein.
// 2. Neeche diye gaye tareeke se import karein:
//    import living1 from '../../assets/living-1.jpg';
//    import living2 from '../../assets/living-2.jpg';
// 3. Phir 'livingData' array ke 'image' field mein URL ki jagah 
//    variable name likhein (e.g., image: living1).
// =========================================================

const LivingRoom = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const scrollRef = useRef(null);

  const livingData = [
    {
      id: 1,
      title: "Contemporary Living Room with Floating TV Unit",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800",
    },
    {
      id: 2,
      title: "Modern Living Room with Wall Panelling",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=800",
    },
    {
      id: 3,
      title: "Contemporary Living Room with Floating Backlit TV Unit",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
    },
    {
      id: 4,
      title: "Minimalist Living Space with Ambient Lighting",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    }
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 768 ? 450 : 320;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-white font-sans relative overflow-hidden">
      
      {/* Title Section - Font style same as screenshot */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-normal text-[#212121] tracking-tight">
          Living Rooms That Host Your Happiest Moments
        </h2>
      </div>

      {/* Slider Area */}
      <div className="relative flex items-center group">
        
        {/* Left Clickable Button (Pink background like image) */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-2 md:-left-8 z-20 flex items-center justify-center w-8 h-12 bg-[#FFF0F2] rounded-r-lg shadow-sm hover:bg-[#ffe4e8] transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="text-[#FF4D6D] w-6 h-6" />
        </button>

        {/* Image Row */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {livingData.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[85%] md:min-w-[32.2%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-sm shadow-sm bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[240px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <p className="mt-4 text-[#333333] text-[16px] md:text-[17px] leading-snug font-normal pr-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Clickable Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-2 md:-right-8 z-20 flex items-center justify-center w-8 h-12 bg-[#FFF0F2] rounded-l-lg shadow-sm hover:bg-[#ffe4e8] transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="text-[#FF4D6D] w-6 h-6" />
        </button>
      </div>

      {/* WhatsApp Float Icon (As seen in screenshot) */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        className="fixed bottom-6 right-6 z-[90] bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
            <X size={40} />
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl" 
            alt="Living room full view" 
          />
        </div>
      )}

      {/* Custom CSS to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />

    </section>
  );
};

export default LivingRoom;