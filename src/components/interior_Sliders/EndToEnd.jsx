import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { endToEndData, moreInteriors } from './end-to-end-images';

const EndToEnd = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  // --- AUTO-SLIDE LOGIC (Unchanged) ---
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
    <section className="w-full py-8 bg-white font-poppins overflow-hidden">
      
      {/* Page Title - Tightened Margin */}
      <div className="px-4 md:px-10 lg:px-20 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight leading-tight">
          End To End Interior Designed for Indian Homes
        </h2>
      </div>

      {/* Main Slider Section - Reduced Gaps */}
      <div className="relative flex items-center group mb-8 px-4 md:px-10 lg:px-20">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-5 z-30 hidden sm:flex items-center justify-center w-10 h-12 bg-white/95 border border-gray-100 rounded-r-xl shadow-md md:opacity-0 md:group-hover:opacity-100 transition-all active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="text-[#bd8100] w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {endToEndData.map((item) => (
            <div 
              key={item.id} 
              className="w-[85%] sm:w-[45%] md:w-[31%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-gray-800 text-sm md:text-base mt-3 font-medium line-clamp-1 px-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-5 z-30 hidden sm:flex items-center justify-center w-10 h-12 bg-white/95 border border-gray-100 rounded-l-xl shadow-md md:opacity-0 md:group-hover:opacity-100 transition-all active:scale-90 cursor-pointer"
        >
          <ChevronRight className="text-[#bd8100] w-6 h-6" />
        </button>
      </div>

      {/* Action Button - Reduced Top Margin */}
      <div className="flex justify-center">
        <button 
          onClick={() => setShowFullGallery(true)}
          className="bg-[#bd8100] text-white px-7 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#a16e00] transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Talk to Our Interior Expert
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 transition-all">
            <X size={24} />
          </button>
          <img src={selectedImg} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" alt="Full view" />
        </div>
      )}

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 z-[150] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="p-5 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Expert Interior Designs</h3>
              <button onClick={() => setShowFullGallery(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[...endToEndData.map(k => k.image), ...moreInteriors].map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl shadow-sm cursor-pointer relative" onClick={() => setSelectedImg(img)}>
                  <img src={img} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500" alt="Interior Design" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white border border-white px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">View Design</span>
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

export default EndToEnd;