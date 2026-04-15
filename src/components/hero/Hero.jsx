import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm'; 

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative min-h-[100dvh] md:min-h-screen bg-[#020617] flex items-center overflow-hidden w-full font-poppins">
      
      {/* Background Image - Fixed with inset-0 and z-0 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Interior" 
          className="w-full h-full object-cover object-center"
        />
        {/* Mobile-friendly overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-[#191e34] md:via-[#020617]/80 md:to-transparent"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 pt-20 md:pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white leading-[1.2] md:leading-[1.1] mb-6 tracking-tight">
              Complete Home <br className="md:block" /> Interiors. <br className="hidden md:block" />
              <span className="text-[#bd8100]">No Running Around.</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-200 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              From Design to Move-in — Starting at Just ₹3.5 Lakhs. 
              Transform your space with our expert 3D designers.
            </p>
            
            <button 
              onClick={() => setShowForm(true)}
              className="lg:hidden w-full sm:w-auto bg-[#d2940e] hover:bg-[#dcb766] text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all  shadow-[#c78b0b] active:scale-95"
            >
              Book 3D Design Session
              <ArrowRight size={22} />
            </button>
          </div>

          {/* Desktop Form - Shifted to the right */}
          <div className="hidden lg:block ml-50 animate-in fade-in slide-in-from-right-10 duration-700 ">
  <BookingForm />
</div>

        </div>
      </div>

      {/* Mobile Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6 lg:hidden">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="p-6 md:p-8">
              <BookingForm isModal={true} onClose={() => setShowForm(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;