import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Play, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../reviews/ReviewData';
import VideoCard from '../reviews/VideoCard';

const CustomersPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const stats = [
    { label: "Happy Homes", value: "55,000+" },
    { label: "Cities Present", value: "24+" },
    { label: "Design Experts", value: "400+" },
    { label: "Average Rating", value: "4.8/5" },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold tracking-widest uppercase text-sm"
          >
            Real People. Real Stories.
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mt-4 mb-8"
          >
            Customer <span className="text-gray-400 font-light italic">Spotlight</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed">
            Discover why thousands of homeowners trust us to turn their dream spaces into reality. 
            Watch their journeys and see the transformations.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-y border-gray-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VIDEO REVIEWS GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Video Testimonials</h2>
            <p className="text-gray-500">Watch our clients share their interior design experience.</p>
          </div>
          <div className="flex items-center gap-2 text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-full text-sm">
            <CheckCircle size={18} /> Verified Reviews
          </div>
        </div> */}

        {/* Grid System */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {REVIEWS_DATA.map((review) => (
            <VideoCard 
              key={review.id} 
              review={review} 
              isGrid={true} 
              onOpenVideo={setActiveVideo} 
            />
          ))}
        </div> */}
      </section>

      {/* 4. CALL TO ACTION (CTA) */}
      <section className="bg-black py-20 px-6 mx-6 md:mx-12 lg:mx-24 rounded-[3rem] mb-20 text-center text-white">
        <Quote className="mx-auto mb-6 text-red-500 opacity-50" size={48} />
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to be our next success story?</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
        >
          Book Your Free Consultation
        </motion.button>
      </section>

      {/* VIDEO PLAYER LIGHTBOX (Copy from your main component) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <video src={activeVideo} controls autoPlay className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomersPage;