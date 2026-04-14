import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { kitchenData, moreKitchens } from "./kitchen_data";

const Kitchen = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = window.innerWidth > 768 ? 400 : 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-8 md:py-5 px-4 md:px-10 lg:px-20 bg-white relative font-poppins">
      {/* Title - Reduced margin */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
          Modular Kitchens Designed for Indian Homes
        </h2>
      </div>

      {/* Slider - Adjusted gap and padding */}
      <div className="relative group mb-8 flex items-center">
        {/* Left Btn */}
        <button
          aria-label="Scroll Left"
          onClick={() => scroll("left")}
          className="absolute -left-2 md:-left-8 z-20 w-8 h-12 flex items-center justify-center bg-[#FFF0F2] rounded-r-lg shadow md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft className="text-[#e69f05]" />
        </button>

        {/* Cards - Compact spacing */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        >
          {kitchenData.map((item) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={item.id}
              className="min-w-[85%] md:min-w-[31%] cursor-pointer snap-start"
              onClick={() => {
                setSelectedImg(item.image);
                setShowFullGallery(false);
              }}
            >
              <div className="rounded-xl overflow-hidden shadow-sm bg-gray-50">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] md:h-[280px] object-cover"
                />
              </div>
              <p className="mt-3 text-gray-800 font-medium text-sm md:text-base line-clamp-1">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Btn */}
        <button
          aria-label="Scroll Right"
          onClick={() => scroll("right")}
          className="absolute -right-2 md:-right-8 z-20 w-8 h-12 flex items-center justify-center bg-[#FFF0F2] rounded-l-lg shadow md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight className="text-[#bd8100]" />
        </button>
      </div>

      {/* Main Action Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowFullGallery(true)}
          className="bg-[#e09c09] text-white px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-[#dcc48f] hover:text-black active:scale-95 transition shadow-md cursor-pointer"
        >
          Our Kitchen Designs
        </button>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.img
              src={selectedImg}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL GALLERY MODAL */}
      <AnimatePresence>
        {showFullGallery && (
          <motion.div
            className="fixed inset-0 bg-white z-[150] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="p-5 md:p-10 max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Kitchen Designs</h3>
                <button
                  onClick={() => setShowFullGallery(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {[...kitchenData.map((k) => k.image), ...moreKitchens].map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl overflow-hidden shadow-sm cursor-pointer"
                    onClick={() => {
                      setSelectedImg(img);
                      setShowFullGallery(false);
                    }}
                  >
                    <img
                      loading="lazy"
                      src={img}
                      className="w-full h-60 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; }` }} />
    </section>
  );
};

export default Kitchen;


















// import React, { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { kitchenData, moreKitchens } from "./kitchen_data";

// const Kitchen = () => {
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [showFullGallery, setShowFullGallery] = useState(false);
//   const scrollRef = useRef(null);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;

//     const amount = window.innerWidth > 768 ? 400 : 300;

//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -amount : amount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white relative">
//       {/* Title */}
//       <div className="mb-10 text-center md:text-left">
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
//           Modular Kitchens Designed for Indian Homes
//         </h2>
//       </div>

//       {/* Slider */}
//       <div className="relative group mb-12 flex items-center">
//         {/* Left Btn */}
//         <button
//           aria-label="Scroll Left"
//           onClick={() => scroll("left")}
//           className="absolute -left-2 md:-left-8 z-20 w-8 h-12 flex items-center justify-center bg-[#FFF0F2] rounded-r-lg shadow opacity-100 md:opacity-0 md:group-hover:opacity-100"
//         >
//           <ChevronLeft className="text-[#e69f05]" />
//         </button>

//         {/* Cards */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//         >
//           {kitchenData.map((item) => (
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               key={item.id}
//               className="min-w-[90%] md:min-w-[32%] cursor-pointer snap-start"
//               onClick={() => {
//                 setSelectedImg(item.image);
//                 setShowFullGallery(false);
//               }}
//             >
//               <div className="rounded-xl overflow-hidden shadow bg-gray-50">
//                 <img
//                   loading="lazy"
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-[250px] md:h-[300px] object-cover"
//                 />
//               </div>
//               <p className="mt-3 text-gray-800 font-medium">
//                 {item.title}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Right Btn */}
//         <button
//           aria-label="Scroll Right"
//           onClick={() => scroll("right")}
//           className="absolute -right-2 md:-right-8 z-20 w-8 h-12 flex items-center justify-center bg-[#FFF0F2] rounded-l-lg shadow opacity-100 md:opacity-0 md:group-hover:opacity-100"
//         >
//           <ChevronRight className="text-[#bd8100]" />
//         </button>
//       </div>

//       {/* Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={() => setShowFullGallery(true)}
//           className="bg-[#e09c09] text-white px-8 py-3 rounded-full font-bold hover:bg-[#dcc48f] hover:text-black active:scale-95 transition"
//         >
//           Our Kitchen Designs
                
//         </button>
//       </div>

//       {/* ---------------- MODALS ---------------- */}

//       {/* LIGHTBOX */}
//       <AnimatePresence>
//         {selectedImg && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImg(null)}
//           >
//             <button
//               aria-label="Close"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSelectedImg(null);
//               }}
//               className="absolute top-6 right-6 text-white"
//             >
//               <X size={32} />
//             </button>

//             <motion.img
//               src={selectedImg}
//               onClick={(e) => e.stopPropagation()}
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="max-h-[85vh] rounded-lg"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* FULL GALLERY */}
//       <AnimatePresence>
//         {showFullGallery && (
//           <motion.div
//             className="fixed inset-0 bg-white z-[150] overflow-y-auto"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{ duration: 0.4 }}
//           >
//             <div className="p-6 md:p-12 max-w-7xl mx-auto">
//               {/* Header */}
//               <div className="flex justify-between mb-8 border-b pb-4">
//                 <h3 className="text-2xl font-bold">
//                   Our Kitchen Designs
//                 </h3>

//                 <button
//                   aria-label="Close Gallery"
//                   onClick={() => setShowFullGallery(false)}
//                 >
//                   <X size={28} />
//                 </button>
//               </div>

//               {/* Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[...kitchenData.map((k) => k.image), ...moreKitchens].map(
//                   (img) => (
//                     <motion.div
//                       key={img}
//                       whileHover={{ scale: 1.05 }}
//                       className="rounded-xl overflow-hidden shadow cursor-pointer"
//                       onClick={() => {
//                         setSelectedImg(img);
//                         setShowFullGallery(false);
//                       }}
//                     >
//                       <img
//                         loading="lazy"
//                         src={img}
//                         className="w-full h-64 object-cover"
//                       />
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Hide Scrollbar */}
//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Kitchen;