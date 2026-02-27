import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Kitchen = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  // --- FUTURE REFERENCE: ASSETS SE IMAGE IMPORT KAISE KAREIN ---
  // import kitchen1 from '../assets/kitchen1.jpg';
  // ---------------------------------------------------------

  const kitchenData = [
    {
      id: 1,
      title: "Sleek Modular Kitchen with Tall Storage Units",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    },
    {
      id: 2,
      title: "U-Shaped Modular Kitchen with Sleek Storage",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800",
    },
    {
      id: 3,
      title: "Stylish Modular Kitchen with Dual-Tone Cabinets",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800",
    },
    {
      id: 4,
      title: "Stylish Modular Kitchen with Dual-Tone Cabinets",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800",
    },
    {
      id: 5,
      title: "Stylish Modular Kitchen with Dual-Tone Cabinets",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800",
    },
    {
      id: 6,
      title: "Stylish Modular Kitchen with Dual-Tone Cabinets",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800",
    },
  ];

  // Aditional Images for "Talk to Expert" Gallery
  const moreKitchens = [
    "https://images.unsplash.com/photo-1556912177-f547c12dd0ee?q=80&w=600",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600",
    "https://images.unsplash.com/photo-1565182999561-18d7dc63c393?q=80&w=600",
    "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=600",
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 768 ? 400 : 300;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className=" w-full py-12 px-4 md:px-10 lg:px-20 bg-white font-sans relative">
      
      {/* Page Title */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-800 tracking-tight">
          Modular Kitchens Designed for Indian Homes
        </h2>
      </div>

      {/* Main Slider Section */}
      <div className="relative flex items-center group mb-12">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-2 md:-left-8 z-20 flex items-center justify-center w-8 h-12 bg-[#FFF0F2] rounded-r-lg shadow-sm hover:bg-[#ffe4e8] transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="text-[#FF4D6D] w-6 h-6" />
        </button>

        {/* Horizontal Scrollable Images */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {kitchenData.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[90%] md:min-w-[32.2%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-sm shadow-sm bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-[#333333] text-[16px] md:text-[17px] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-2 md:-right-8 z-20 flex items-center justify-center w-8 h-12 bg-[#FFF0F2] rounded-l-lg shadow-sm hover:bg-[#ffe4e8] transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="text-[#FF4D6D] w-6 h-6" />
        </button>
      </div>

      {/* Expert Button Section */}
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => setShowFullGallery(true)}
          className="bg-[#E32933] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#c2222b] transition-colors shadow-md"
        >
          Talk to Our Kitchen Expert
        </button>
      </div>

      {/* --- MODALS --- */}

      {/* 1. Full Image View (Lightbox) */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-8 right-8 text-white"><X size={35} /></button>
          <img src={selectedImg} className="max-w-full max-h-[90vh] object-contain" alt="Full view" />
        </div>
      )}

      {/* 2. Full Kitchen Gallery Page (Expert View) */}
      {showFullGallery && (
        <div className="fixed inset-0 z-[110] bg-white overflow-y-auto">
          <div className="p-6 md:p-12">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-semibold">Our Expert Kitchen Designs</h3>
              <button onClick={() => setShowFullGallery(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <X size={30} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...kitchenData.map(k => k.image), ...moreKitchens].map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImg(img)}>
                  <img src={img} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scrollbar hide CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />

    </section>
  );
};

export default Kitchen;