import React, { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

const What_I_Do = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const solutions = [
    { id: 'kitchen', title: 'Modular Kitchen', icon: '🍳', images: ['https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800', 'https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=800'] },
    { id: 'storage', title: 'Storage and wardrobe', icon: '🚪', images: ['https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800'] },
    { id: 'crockery', title: 'Crockery Units', icon: '🍷', images: ['https://images.unsplash.com/photo-1616489953149-805c87364231?q=80&w=800'] },
    { id: 'saving', title: 'Space Saving Furniture', icon: '🛋️', images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800'] },
    { id: 'tv', title: 'TV Units', icon: '📺', images: ['https://images.unsplash.com/photo-1593359674241-55cd0bab7370?q=80&w=800'] },
    { id: 'study', title: 'Study Tables', icon: '✍️', images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800'] },
    { id: 'ceiling', title: 'False Ceiling', icon: '🏗️', images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800'] },
    { id: 'lights', title: 'Lights', icon: '💡', images: ['https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800'] },
    { id: 'wallpaper', title: 'Wallpaper', icon: '📜', images: ['https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=800'] },
    { id: 'paint', title: 'Wall Paint', icon: '🎨', images: ['https://images.unsplash.com/photo-1562624382-82b89b002813?q=80&w=800'] },
    { id: 'bathroom', title: 'Bathroom', icon: '🛁', images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800'] },
    { id: 'pooja', title: 'Pooja Unit', icon: '🕍', images: ['https://images.unsplash.com/photo-1620393470010-fd620067644d?q=80&w=800'] },
    { id: 'foyer', title: 'Foyer Designs', icon: '🚪', images: ['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800'] },
    { id: 'movable', title: 'Movable Furniture', icon: '🪑', images: ['https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800'] },
    { id: 'kids', title: 'Kids Bedroom', icon: '🧸', images: ['https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800'] },
  ];

  const selectedData = solutions.find(s => s.id === activeCategory);

  return (
    <section className="min-h-screen w-full bg-[#fcfcfc] font-sans py-28 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM34 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        
        {/* Animated Header */}
        <div className="text-center mb-24 animate-fade-in-down">
          <div className="flex items-center justify-center gap-2 mb-4 text-red-600 font-bold tracking-widest uppercase text-sm">
            <Sparkles size={16} /> Premium Solutions
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#1a1a1a] tracking-tight leading-none">
            WHAT <span className="text-red-600">I DO</span>
          </h2>
          <div className="w-32 h-2 bg-red-600 mx-auto mt-8 rounded-full shadow-lg shadow-red-200"></div>
        </div>

        {/* Icons Grid with Entrance Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-20 gap-x-12">
          {solutions.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className="flex flex-col items-center cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon - Extra larze` */}
              <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center border border-white/50 rounded-[2.5rem] bg-white/70 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_-10px_rgba(227,41,51,0.3)] group-hover:border-red-400 group-hover:bg-red-50/50 transition-all duration-500 transform group-hover:-translate-y-4">
                <span className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500 block leading-none">
                  {item.icon}
                </span>
              </div>
              
              {/* Text - Bold & Spaced */}
              <p className="mt-8 text-center text-lg md:text-xl font-black text-gray-800 group-hover:text-red-600 transition-colors uppercase tracking-[0.1em]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Page Overlay (Same Logic, Higher Contrast) */}
      {activeCategory && (
        <div className="fixed inset-0 z-[500] bg-[#111111] overflow-y-auto animate-zoom-in">
          <div className="sticky top-0 bg-black/80 backdrop-blur-xl px-10 py-8 flex justify-between items-center z-50 border-b border-white/10">
            <h3 className="text-4xl font-black text-white italic tracking-tighter">
              {selectedData.title} <span className="text-red-600">COLLECTION</span>
            </h3>
            <button onClick={() => setActiveCategory(null)} className="p-4 bg-white text-black rounded-full hover:bg-red-600 hover:text-white transition-all scale-110 shadow-2xl">
              <X size={32} strokeWidth={4} />
            </button>
          </div>

          <div className="max-w-[1400px] mx-auto p-10 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {selectedData.images.map((img, index) => (
                <div key={index} className="group relative rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 border border-white/5">
                  <img src={img} alt={selectedData.title} className="w-full h-[500px] object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-10">
                    <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase text-sm tracking-widest shadow-xl flex items-center gap-3 hover:bg-white hover:text-red-600 transition-all">
                      View Design Details <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Optimized Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(1.1); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out backwards; }
        .animate-zoom-in { animation: zoom-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}} />
    </section>
  );
};

export default What_I_Do;