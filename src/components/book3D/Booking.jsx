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
      // 1. Aapka WhatsApp Number aur Message Format
      const myWhatsAppNumber = "919118271153"; // Aapka number international format mein
      const message = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*City:* ${formData.city}%0A*Interested in:* 3D Design Session`;

      // 2. WhatsApp URL (Customer ke browser se redirect hoga)
      const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${message}`;

      console.log("Data logged:", formData);
      
      // 3. New Tab mein WhatsApp open karega
      window.open(whatsappUrl, '_blank');

      // Optional: Server par data save karne ke liye
      // await fetch('your-api-endpoint', { method: 'POST', body: JSON.stringify(formData) });

      alert("Redirecting to WhatsApp for confirmation...");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="relative w-full min-h-[600px] lg:h-screen flex items-center overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ 
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20260125/pngtree-indoor-ceiling-with-multiple-light-fixtures-image_21100150.webp')`, 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left pt-10 lg:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] drop-shadow-2xl">
            600+ Expert Designers, <br />
            <span className="text-red-500">Ready to Design</span> <br />
            Your First Home.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">Book your free consultation today.</p>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-[450px] bg-white rounded-xl shadow-2xl p-8 mb-10 lg:mb-0">
          <h2 className="text-2xl font-bold text-[#212121] mb-2">Meet a designer</h2>
          <p className="text-gray-500 text-sm mb-6">Fill the form to book your session.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            <div className="flex gap-2 border border-gray-300 rounded-md px-3 items-center focus-within:ring-2 focus-within:ring-red-500">
              <span className="text-lg border-r pr-2">🇮🇳</span>
              <input 
                type="tel" 
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number" 
                className="w-full py-3 focus:outline-none bg-transparent"
              />
            </div>

            <select 
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url('https://cdn-icons-png.flaticon.com/512/271/271210.png')] bg-[length:12px]"
            >
              <option value="">Select your property city</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
            </select>

            <button 
              type="submit"
              className="w-full bg-[#E32933] text-white py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#c2222b] shadow-lg transition-all relative overflow-hidden group"
            >
              <span>Book 3D Design Session</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
              <span className="absolute right-[-10px] top-4 bg-white text-red-600 text-[8px] px-4 rotate-45 font-black uppercase">Free</span>
            </button>

            <p className="text-[11px] text-gray-400 text-center italic">
              *By clicking, you will be redirected to WhatsApp to confirm.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;