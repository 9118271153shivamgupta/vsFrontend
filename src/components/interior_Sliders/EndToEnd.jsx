import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// --- FUTURE REFERENCE: ASSETS SE IMAGE IMPORT KAISE KAREIN ---
// import image1 from '../../assets/image1.jpg'; 
// import image2 from '../../assets/image2.jpg';
// import image3 from '../../assets/image3.jpg';
// Phir 'image' key mein URL ki jagah variables (image1, image2)  aayega.
// ---------------------------------------------------------

const EndToEnd = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const scrollRef = useRef(null);

  const interiorData = [
    {
      id: 1,
      title: "Contemporary Dining Room with Display Cabinets and Puja Corner",
      // assets use karne par yahan variable name aayega, jaise: image: image1
      image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?q=80&w=1200", 
    },
    {
      id: 2,
      title: "Modern Bedroom with Bay Window Seating and Sliding Wardrobe",
      image: "https://images.unsplash.com/photo-1616594116244-8395f87498b5?q=80&w=1200",
    },
    {
      id: 3,
      title: "Elegant Living Area with Partition and Compact Puja Unit",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    },
    {
      id: 3,
      title: "Elegant Living Area with Partition and Compact Puja Unit",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    },
    {
      id: 4                                                                                                                                     ,
      title: "Elegant Living Area with Partition and Compact Puja Unit",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    },
    {
      id: 5,
      title: "Elegant Living Area with Partition and Compact Puja Unit",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    },
    {
      id: 6,
      title: "Elegant Living Area with Partition and Compact Puja Unit",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 768 ? 450 : 300;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-white font-sans relative">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-800 tracking-wide">
          End-to-End Interiors— Delivered Seamlessly
        </h2>
      </div>

      <div className="relative flex items-center group">
        {/* Left Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-2 md:-left-10 z-20 flex items-center justify-center w-8 h-12 bg-[#FFF0F2] rounded-r-lg shadow-md hover:bg-[#ffe4e8] transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="text-[#FF4D6D] w-6 h-6" />
        </button>

        {/* Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {interiorData.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[90%] md:min-w-[32.2%] flex-shrink-0 snap-start cursor-pointer"
              onClick={() => setSelectedImg(item.image)}
            >
              <div className="overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-[#333333] text-[16px] md:text-[18px] leading-snug font-normal">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-2 md:-right-10 z-20 flex items-center justify-center w-8 h-12 bg-[#FFF0F2] rounded-l-lg shadow-md hover:bg-[#ffe4e8] transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="text-[#FF4D6D] w-6 h-6" />
        </button>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white">
            <X size={35} />
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            alt="Enlarged view"
          />
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
};

export default EndToEnd;