import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoCard = ({ review, isGrid, onOpenVideo }) => {
  const videoRef = useRef(null);

  return (
    <div className={`${isGrid ? 'w-full' : 'w-[350px] md:w-[400px]'} flex-shrink-0 px-4 bg-white group`}>
      <div 
        className="relative h-60 md:h-72 overflow-hidden rounded-2xl cursor-pointer shadow-sm"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          videoRef.current?.pause();
          videoRef.current.currentTime = 0;
        }}
        onClick={() => onOpenVideo(review.videoUrl)}
      >
        <video 
          ref={videoRef} 
          src={review.videoUrl} 
          poster={review.poster} 
          muted loop playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/5 transition-colors">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
            <Play size={24} className="fill-black text-black ml-1" />
          </div>
        </div>
      </div>
      <div className="py-5">
        <p className="text-gray-600 text-sm italic mb-3 line-clamp-2 italic">"{review.quote}"</p>
        <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{review.location}</p>
      </div>
    </div>
  );
};

export default VideoCard;