import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS_DATA } from './ReviewData';
import VideoCard from './VideoCard';

const CustomerReviews = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Seamless loop ke liye data double
  const duplicatedData = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section className="w-full py-0 md:py-0 bg-white overflow-hidden font-poppins">
      {/* CSS for Poppins Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}} />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight">
          55,000+ Homes Designed with Love
        </h2>
        <p className="text-gray-500 text-base md:text-lg font-medium">Real stories from real homeowners.</p>
      </div>

      {/* --- AUTO SCROLLING ROW --- */}
      <div className="relative flex mb-10">
        <motion.div 
          className="flex gap-4 md:gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, 
              ease: "linear",
              repeatDelay: 1, // 1 second ka pause har loop ke baad
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedData.map((review, index) => (
            // Mobile par scale kam kiya hai taaki card chhote dikhein
            <div key={`${review.id}-${index}`} className="flex-shrink-0 scale-[0.85] md:scale-100 origin-center">
               <VideoCard 
                review={review} 
                onOpenVideo={setActiveVideo} 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center px-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAllReviews(true)}
          className="group flex items-center gap-2 bg-[#bd8100] hover:bg-[#f1cb78] hover:text-black text-white px-8 py-3.5 rounded-full font-bold text-sm md:text-base shadow-md transition-all cursor-pointer"
        >
          Explore All Stories 
          <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
        </motion.button>
      </div>

      {/* --- MODAL FOR ALL REVIEWS --- */}
      <AnimatePresence>
        {showAllReviews && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white overflow-y-auto"
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-30 p-4 md:p-6 flex justify-between items-center border-b px-6 md:px-20">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Customer Stories</h3>
              <button 
                onClick={() => setShowAllReviews(false)} 
                className="p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
              >
                <X size={24} className="md:w-8 md:h-8" />
              </button>
            </div>
            
            <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
              {REVIEWS_DATA.map((review) => (
                <div key={review.id} className="flex justify-center scale-[0.9] md:scale-100">
                  <VideoCard review={review} isGrid onOpenVideo={setActiveVideo} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LIGHTBOX VIDEO PLAYER --- */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-4xl aspect-video rounded-xl md:rounded-3xl overflow-hidden shadow-2xl relative bg-black"
              onClick={e => e.stopPropagation()}
            >
              <video src={activeVideo} controls autoPlay className="w-full h-full" />
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition-all"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CustomerReviews;