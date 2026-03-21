import React, { useState } from 'react';
import { ArrowRight, Calendar, EyeOff, ShieldCheck, Users, X } from 'lucide-react'; 
import amb from '../../assets/amb.png';
import { sendWhatsAppMessage } from '../utils/whatsappUtils'; 

const WhyChooseUs = () => {
  const [showForm, setShowForm] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const brief = formData.get('brief');

    sendWhatsAppMessage(name, phone, brief);
    alert("Session Booked Successfully!");
    setShowForm(false);
  };

  const features = [
    {
      icon: <Calendar className="text-blue-900" size={90} />,
      title: "Delivery in 45 days*",
    },
    {
      icon: <EyeOff className="text-red-600" size={90} />,
      title: "No Hidden Costs",
    },
    {
      icon: <ShieldCheck className="text-gray-700" size={90} />,
      title: "15+ Year-Experience",
    },
    {
      icon: <Users className="text-gray-600" size={90} />, 
      title: "500+ Satisfied Customers",
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden w-full relative">
      <div className="max-w-full mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">
        
        {/* Left Content Side */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center lg:text-left">
            Here’s Why Homeowners Love <span className="text-red-600">Vs Trading Company</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            {/* Added flex, items-center, and fixed padding */}
            <button 
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-lg font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex-1 hidden md:block">
          <img 
            src={amb} 
            alt="Ambassador"
            className="w-full h-auto object-contain max-h-[500px] relative z-10"
          />
          <div className="absolute -z-0 bottom-0 right-0 w-[80%] h-[80%] bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* --- FORM MODAL --- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Book Your Session</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
              <input 
                name="phone" 
                placeholder="Phone Number" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
              <textarea 
                name="brief" 
                placeholder="Brief about your project" 
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
              <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;