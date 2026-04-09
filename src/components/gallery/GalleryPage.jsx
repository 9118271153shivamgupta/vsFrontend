import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { CATEGORIES, GALLERY_IMAGES } from './GalleryData';

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    /* font-poppins यहाँ Add किया गया है */
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-6 font-poppins">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our <span className="text-indigo-600">Projects</span>
          </h1>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Explore our curated collection of premium interior designs tailored for every space.
          </p>
        </div>

        {/* --- CATEGORY BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === cat 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 scale-105' 
                : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GALLERY GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer h-80 bg-gray-200"
                onClick={() => setSelectedImg(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay with Poppins Styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-7">
                  <div className="flex justify-between items-end text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-2">{image.category}</p>
                      <h3 className="font-bold text-xl leading-tight">{image.title}</h3>
                    </div>
                    <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md mb-1">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400 font-bold tracking-wide">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-8 right-8 bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-colors border border-white/10"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={28} />
          </button>

          <div className="relative max-w-6xl w-full flex justify-center items-center">
            <img 
              src={selectedImg} 
              alt="Full View" 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain animate-in zoom-in-95 duration-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;