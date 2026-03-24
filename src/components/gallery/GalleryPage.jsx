import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { CATEGORIES, GALLERY_IMAGES } from './GalleryData'; // डेटा इम्पोर्ट किया

const GalleryPage = () => {
  // --- LOGIC: States ---
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState('All');

  // --- LOGIC: Filter Processing ---
  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  // --- UI: Rendering ---
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-6">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Projects</h1>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore our curated collection of premium interior designs tailored for every space.
          </p>
        </div>

        {/* --- CATEGORY BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === cat 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg scale-105' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GALLERY GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-3xl shadow-md cursor-pointer h-72 bg-gray-200"
                onClick={() => setSelectedImg(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-indigo-300 mb-1">{image.category}</p>
                      <h3 className="font-bold text-xl">{image.title}</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400 font-medium">
              No images found in this category.
            </div>
          )}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={32} />
          </button>

          <div className="relative max-w-5xl w-full flex justify-center items-center">
            <img 
              src={selectedImg} 
              alt="Full View" 
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;