import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS_DATA } from './ReviewData';
import VideoCard from './VideoCard';

const CustomerReviews = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Seamless loop ke liye data ko double kar rahe hain
  const duplicatedData = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          55,000+ Homes Designed with Love
        </h2>
        <p className="text-gray-500 text-xl">Real stories from real homeowners.</p>
      </div>

      {/* --- AUTO SCROLLING ROW --- */}
      <div className="relative flex mb-16">
        <motion.div 
          className="flex"
          animate={{
            x: ["0%", "-50%"], // Aadhe raste tak jayega (kyunki data double hai)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Speed control: Jitna zyada seconds, utna slow scroll
              ease: "linear",
            },
          }}
          // Hover par pause karne ke liye (Optional)
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedData.map((review, index) => (
            <VideoCard 
              key={`${review.id}-${index}`} 
              review={review} 
              onOpenVideo={setActiveVideo} 
            />
          ))}
        </motion.div>
      </div>

      {/* Action Button (Aapka original button) */}
      <div className="flex justify-center px-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAllReviews(true)}
          className="group flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all"
        >
          Explore All Stories 
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </div>

      {/* --- MODAL FOR ALL REVIEWS --- */}
      <AnimatePresence>
        {showAllReviews && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white overflow-y-auto"
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-md z-30 p-6 flex justify-between items-center border-b px-8 md:px-20">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Customer Stories</h3>
              <button onClick={() => setShowAllReviews(false)} className="p-3 hover:bg-gray-100 rounded-full transition-all"><X size={32} /></button>
            </div>
            <div className="p-8 md:p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {REVIEWS_DATA.map((review) => (
                <VideoCard key={review.id} review={review} isGrid onOpenVideo={setActiveVideo} />
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
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <video src={activeVideo} controls autoPlay className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CustomerReviews;