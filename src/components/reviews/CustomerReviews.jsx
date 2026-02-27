import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X, ArrowRight } from 'lucide-react';

const CustomerReviews = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // --- FUTURE REFERENCE: ASSETS SE VIDEO/IMAGE IMPORT ---
  // import video1 from '../../assets/vid1.mp4';
  // ----------------------------------------------------

  const allReviewsData = [
    { id: 1, name: "Anupam & Archana", location: "Bangalore", quote: "Our first 2BHK was with HomeLane. Experience was great!", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800" },
    { id: 2, name: "Dr. Nithilavalli", location: "Coimbatore", quote: "Everything was surely taken care of. Highly recommend.", videoUrl: "https://www.w3schools.com/html/movie.mp4", poster: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800" },
    { id: 3, name: "Prateek & Aastha", location: "Gurugram", quote: "Best wooden work service we have ever used.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800" },
    // Yahan aap 10+ reviews add kar sakte hain
    { id: 4, name: "Suresh Kumar", location: "Mumbai", quote: "Timely delivery and professional staff.", videoUrl: "https://www.w3schools.com/html/movie.mp4", poster: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800" },
    { id: 5, name: "Megha Singh", location: "Delhi", quote: "The 3D design session was very helpful.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
    { id: 6, name: "Rahul Verma", location: "Pune", quote: "Beautiful interiors delivered seamlessly.", videoUrl: "https://www.w3schools.com/html/movie.mp4", poster: "https://images.unsplash.com/photo-1616594116244-8395f87498b5?w=800" },
  ];

  // Component for Individual Video Card
  const VideoCard = ({ review, isGrid = false }) => {
    const videoRef = useRef(null);
    return (
      <div className={`${isGrid ? 'w-full' : 'min-w-[90%] md:min-w-[32.2%]'} flex-shrink-0 snap-start bg-white group`}>
        <div 
          className="relative h-56 md:h-64 overflow-hidden rounded-sm cursor-pointer shadow-sm"
          onMouseEnter={() => videoRef.current.play()}
          onMouseLeave={() => { videoRef.current.pause(); videoRef.current.currentTime = 0; }}
          onClick={() => setActiveVideo(review.videoUrl)}
        >
          <video ref={videoRef} src={review.videoUrl} poster={review.poster} muted loop className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent">
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"><Play size={20} className="fill-black ml-1" /></div>
          </div>
        </div>
        <div className="py-4 pr-2">
          <p className="text-gray-600 text-sm italic mb-2 line-clamp-2">"{review.quote}"</p>
          <h4 className="font-bold text-gray-800">{review.name}</h4>
          <p className="text-gray-400 text-xs">{review.location}</p>
        </div>
      </div>
    );
  };

  return (
    <section className=" w-full py-16 px-4 md:px-10 lg:px-24 bg-white relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-800 mb-4">55000+ Homes Designed with Love</h2>
        <p className="max-w-3xl mx-auto text-gray-500">Hear from our happy customers about their HomeLane journey.</p>
      </div>

      {/* Main Slider (Home Page View) */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8">
        {allReviewsData.slice(0, 3).map((review) => (
          <VideoCard key={review.id} review={review} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => setShowAllReviews(true)}
          className="flex items-center gap-2 text-red-600 font-bold border-2 border-red-600 px-6 py-2 rounded-md hover:bg-red-50 transition-all"
        >
          View More Reviews <ArrowRight size={20} />
        </button>
      </div>

      {/* --- FULLSCREEN GALLERY MODAL (10+ Reviews) --- */}
      {showAllReviews && (
        <div className="fixed inset-0 z-[110] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-300">
          <div className="sticky top-0 bg-white z-20 p-6 flex justify-between items-center border-b shadow-sm">
            <h3 className="text-2xl font-bold">All Customer Stories ({allReviewsData.length})</h3>
            <button onClick={() => setShowAllReviews(false)} className="p-2 bg-gray-100 rounded-full"><X size={24} /></button>
          </div>
          <div className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviewsData.map((review) => (
              <VideoCard key={review.id} review={review} isGrid={true} />
            ))}
          </div>
        </div>
      )}

      {/* --- VIDEO PLAYER LIGHTBOX --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-[150] bg-black flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <button className="absolute top-6 right-6 text-white"><X size={35} /></button>
          <video src={activeVideo} controls autoPlay className="max-w-full max-h-[85vh] shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />
    </section>
  );
};

export default CustomerReviews;