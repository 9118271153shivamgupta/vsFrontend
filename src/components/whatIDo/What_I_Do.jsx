import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Plus } from 'lucide-react';
import { solutions } from './solutionsData'; 

const WhatIDo = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeCategory]);

  const selectedData = solutions.find(s => s.id === activeCategory);

  // डायनेमिक कलर्स के लिए एरे (यह डेटा के साथ लूप होगा)
  const cardStyles = [
    { bg: 'bg-[#F0F7FF]', border: 'border-blue-100', accent: 'text-blue-600', hover: 'group-hover:bg-blue-600' },
    { bg: 'bg-[#F5F3FF]', border: 'border-purple-100', accent: 'text-purple-600', hover: 'group-hover:bg-purple-600' },
    { bg: 'bg-[#F0FDF4]', border: 'border-emerald-100', accent: 'text-emerald-600', hover: 'group-hover:bg-emerald-600' },
    { bg: 'bg-[#FFF7ED]', border: 'border-orange-100', accent: 'text-orange-600', hover: 'group-hover:bg-orange-600' },
    { bg: 'bg-[#FFF1F2]', border: 'border-rose-100', accent: 'text-rose-600', hover: 'group-hover:bg-rose-600' },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] font-poppins py-16 relative overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3 px-4 py-1 rounded-full bg-white shadow-sm border border-gray-100 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            <Sparkles size={12} className="text-yellow-500" /> Interior Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Our <span className="text-gray-400 font-light italic">Design</span> Services
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        {/* Dynamic Responsive Grid: ऑटोमेटिक कार्ड्स बनेंगे */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {solutions.map((item, index) => {
            // index % 5 का उपयोग करके कलर्स को बार-बार रिपीट किया गया है
            const style = cardStyles[index % cardStyles.length];
            
            return (
              <div 
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className={`group relative p-5 md:p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 ${style.bg} ${style.border}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className={`p-2 rounded-xl bg-white/60 text-gray-300 transition-all duration-300 ${style.hover} group-hover:text-white shadow-sm`}>
                    <Plus size={16} />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${style.accent}`}>View Gallery</span>
                    <ArrowRight size={10} className={style.accent} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Pop-up Modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setActiveCategory(null)}></div>
          
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col">
            {/* Modal Nav */}
            <div className="px-8 py-5 border-b flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] mb-1">Portfolio</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selectedData.title}</h3>
              </div>
              <button 
                onClick={() => setActiveCategory(null)} 
                className="p-3 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Images Grid inside Modal */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {selectedData.images.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-md group">
                    <img 
                      src={img} 
                      alt={selectedData.title} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Poppins Font & Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e5e5; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d4d4d4; }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}} />
    </section>
  );
};

export default WhatIDo;