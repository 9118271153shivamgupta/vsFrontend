import React from 'react';
import WhatsAppForm from './WhatsAppForm';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-white text-[#f9ad0a] flex items-center justify-center p-4 sm:p-8 md:p-12 font-poppins pt-28 md:pt-20">
      {/* CSS for Poppins Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}} />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div>
            {/* Main Heading remains White or can be adjusted based on BG, but keeping logic consistent */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 tracking-tight leading-tight">
              Let's Discuss Your <span className="text-[#f9ad0a]">Financial Future</span>.
            </h2>
            <p className="text-sm md:text-lg text-black mt-6 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Have questions? We're here to help you grow your business and manage your workflow.
            </p>
          </div>

          {/* Minimal Info Cards - Text set to Black */}
          <div className="space-y-6 max-w-sm mx-auto lg:mx-0">
            <ContactDetailCard 
              icon={<FiMail className="w-5 h-5 text-[#f9ad0a]" />}
              title="Email us"
              value="bs6528109@gmail.com"
            />
            <ContactDetailCard 
              icon={<FiMapPin className="w-5 h-5 text-[#f9ad0a]" />}
              title="Visit us"
              value="Lucknow, Uttar Pradesh, India"
            />
            <ContactDetailCard 
              icon={<FiPhone className="w-5 h-5 text-[#f9ad0a]" />}
              title="Call us"
              value="+91-8601515055"
            />
          </div>
        </div>

        {/* Right Form Card */}
        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end ">
          <div className="bg-[#f4d48f] p-6 sm:p-10 rounded-[2rem] border border-gray-900 w-full max-w-[480px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9ad0a]/5 blur-[60px] pointer-events-none"></div>
            <WhatsAppForm />
          </div>
        </div>
        
      </div>
    </section>
  );
};

const ContactDetailCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-5 group justify-center lg:justify-start transition-all duration-300 hover:translate-x-1">
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm transition-all group-hover:border-[#f9ad0a]/50">
      {icon}
    </div>
    <div className="text-left">
      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{title}</h4>
      {/* Value text set to Black */}
      <p className="text-base text-black transition group-hover:text-[#f9ad0a] cursor-pointer font-medium">{value}</p>
    </div>
  </div>
);

export default ContactPage;