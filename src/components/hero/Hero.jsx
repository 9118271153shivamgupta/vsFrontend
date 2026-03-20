// import React, { useState } from 'react';
// import { X, ArrowRight } from 'lucide-react';

// const Hero = () => {
//   const [showForm, setShowForm] = useState(false);

//   // --- Form Submit Function with WhatsApp Integration ---
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Form data extract karna
//     const formData = new FormData(e.target);
//     const name = formData.get('name');
//     const phone = formData.get('phone');
//     const brief = formData.get('brief');

//     // WhatsApp Configuration
//     const myPhoneNumber = "919118271153"; // <--- Yahan apna 10-digit number dalo (91 prefix ke saath)
//     const message = `Naya Enquiry!%0A%0A*Naam:* ${name}%0A*Phone:* ${phone}%0A*Project:* ${brief}`;
//     const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${message}`;

//     // WhatsApp open karna
//     window.open(whatsappUrl, '_blank');

//     alert("Session Booked Successfully!");
//     setShowForm(false);
//   };

//   return (
    // <div className="relative min-h-[100dvh] md:min-h-screen bg-[#020617] flex items-center overflow-hidden w-full">
      
    //   {/* --- Background Image Container --- */}
    //   <div className="absolute inset-0 z-0">
    //     <img 
    //       src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
    //       alt="Premium Interior Design" 
    //       className="w-full h-full object-cover object-center opacity-50 md:opacity-45"
    //     />
        
    //     <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-[#020617] md:via-[#020617]/70 md:to-transparent"></div>
    //   </div>

    //   {/* --- Main Content --- */}
    //   <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-28 pb-16 w-full">
    //     <div className="max-w-3xl">
    //       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
    //         Complete Home Interiors. <br className="hidden md:block" />
    //         <span className="text-indigo-500">No Running Around.</span>
    //       </h1>
          
    //       <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 mb-10 max-w-xl leading-relaxed">
    //         From Design to Move-in — Starting at Just ₹3.5 Lakhs. 
    //         Transform your space with our expert 3D designers.
    //       </p>
          
    //       <button 
    //         onClick={() => setShowForm(true)}
    //         className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-600/40"
    //       >
    //         Book 3D Design Session
    //         <ArrowRight size={24} />
    //       </button>
    //     </div>
    //   </div>

    //   {/* --- Booking Form Modal --- */}
    //   {showForm && (
    //     <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
    //       <div 
    //         className="absolute inset-0 bg-black/85 backdrop-blur-sm"
    //         onClick={() => setShowForm(false)}
    //       ></div>

    //       <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
    //         <div className="p-8">
    //           <div className="flex justify-between items-center mb-6">
    //             <h2 className="text-2xl font-bold text-gray-900">Get Expert Advice</h2>
    //             <button onClick={() => setShowForm(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
    //               <X className="text-gray-500" size={24} />
    //             </button>
    //           </div>

    //           <form onSubmit={handleSubmit} className="space-y-4">
    //             <div>
    //               <label className="block text-sm font-bold text-gray-600 mb-1 ml-1">Full Name</label>
    //               <input name="name" required type="text" placeholder="Enter your name" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900" />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-bold text-gray-600 mb-1 ml-1">Phone Number</label>
    //               <input name="phone" required type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900" />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-bold text-gray-600 mb-1 ml-1">Project Brief</label>
    //               <textarea name="brief" rows="3" placeholder="Tell us about your 2BHK/3BHK project..." className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900"></textarea>
    //             </div>
                
    //             <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4.5 rounded-2xl font-bold text-lg mt-4 shadow-lg shadow-red-600/30 transition-all">
    //               Confirm Free Session
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   )}
//     </div>
//   );
// };

// export default Hero;



// ? ==================== hero2==================================
import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
// 1. Utility ko import karein
import { sendWhatsAppMessage } from '../utils/whatsappUtils'; 

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form se data nikalna
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const brief = formData.get('brief');

    // 2. Sirf function call karein, saara logic bahar hai
    sendWhatsAppMessage(name, phone, brief);

    alert("Session Booked Successfully!");
    setShowForm(false);
  };

  return (
    // ... baki saara code bilkul same rahega ...
    <div className="relative min-h-[100dvh] md:min-h-screen bg-[#020617] flex items-center overflow-hidden w-full">
      
      {/* --- Background Image Container --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Interior Design" 
          className="w-full h-full object-cover object-center opacity-50 md:opacity-45"
        />
        
        <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-[#020617] md:via-[#020617]/70 md:to-transparent"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Complete Home Interiors. <br className="hidden md:block" />
            <span className="text-indigo-500">No Running Around.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 mb-10 max-w-xl leading-relaxed">
            From Design to Move-in — Starting at Just ₹3.5 Lakhs. 
            Transform your space with our expert 3D designers.
          </p>
          
          <button 
            onClick={() => setShowForm(true)}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-600/40"
          >
            Book 3D Design Session
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* --- Booking Form Modal --- */}
      {showForm && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          ></div>

          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get Expert Advice</h2>
                <button onClick={() => setShowForm(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="text-gray-500" size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1 ml-1">Full Name</label>
                  <input name="name" required type="text" placeholder="Enter your name" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1 ml-1">Phone Number</label>
                  <input name="phone" required type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1 ml-1">Project Brief</label>
                  <textarea name="brief" rows="3" placeholder="Tell us about your 2BHK/3BHK project..." className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4.5 rounded-2xl font-bold text-lg mt-4 shadow-lg shadow-red-600/30 transition-all">
                  Confirm Free Session
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;