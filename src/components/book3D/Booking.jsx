import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    whatsappUpdate: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myWhatsAppNumber = "919118271153";
      const message = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*City:* ${formData.city}%0A*Interested in:* 3D Design Session`;
      const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      alert("Redirecting to WhatsApp for confirmation...");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // Section height auto for mobile, fixed for desktop to prevent overflow
    <section className="relative w-full min-h-screen lg:h-[90vh] flex items-center justify-center bg-[#f2e9d6] font-poppins py-8 px-4 md:px-8 overflow-hidden">
      
      {/* Main Card Container - Flex column on mobile, Row on Desktop */}
      <div className="relative w-full max-w-6xl bg-[#f2e9d6] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch ">
        
        {/* Left Side: Image & Content */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
          {/* Top Small Image - Responsive sizing */}
          <div className="w-40 h-28 md:w-56 md:h-36 lg:w-64 lg:h-44 rounded-2xl overflow-hidden border-2 border-red-500/20 mb-6 lg:mb-8 shadow-xl mx-auto lg:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" 
              alt="Interior Preview" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-3">
              Complete Modular <br className="hidden md:block" />
              <span className="text-[#eea506]">Kitchens.</span> <span className="text-[#e6a008ce]">Made Simple.</span>
            </h1>
            
            <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
              From Design to Move-in
            </h3>
            
            <p className="text-black text-xs md:text-sm lg:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Transform your home with our expert designers and high-quality materials, customized just for your needs.
            </p>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-10 lg:p-12 bg-[#f2e9d6] ">
          <div className="w-full max-w-md bg-[#f1b73b] border  rounded-[2rem] p-6 text-black md:p-8 backdrop-blur-md">
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-back text-[15px] md:text-sm ml-1 uppercase tracking-wider font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 bg-white border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-black text-[15px] md:text-sm ml-1 uppercase tracking-wider font-medium">Mobile</label>
                <input 
                  type="tel" 
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number" 
                  className="w-full px-4 py-3 bg-white border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-black text-[15px] md:text-sm ml-1 uppercase tracking-wider font-medium">Property City</label>
                <div className="relative">
                  <select 
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                     placeholder="Select-city" 
                    className="w-full px-4 py-3 bg-white border border-gray-700 rounded-xl text-black focus:outline-none focus:bg-[#eda711] appearance-none transition-all text-sm cursor-pointer"
                  >
                    <option value="" className='text-gray-400'>Select city</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Kanpur">Kanpur</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-t-4 border-t-gray-500 border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#bd8100] text-white py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#eda711] hover:text-black  hover:border hover:shadow-[0_0_20px_rgba(227,41,51,0.3)] transition-all relative overflow-hidden group cursor-pointer mt-2"
              >
                <span>Book Free Design Session</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <span className="absolute right-[-14px] top-2 bg-white text-[#f5ac0f] text-[8px] px-4 rotate-45 font-black uppercase">Free</span>
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-red-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};

export default Booking;