import React from 'react';
import WhatsAppForm from './WhatsAppForm';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-black text-[#d2940e] flex items-center justify-center p-4 sm:p-8 md:p-12 font-poppins">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className=" text-center lg:text-left">
          <div>
            {/* <span className="text-xs font-semibold text-blue-500 tracking-[0.2em] uppercase">Contact Us</span> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3 tracking-tight leading-tight">
              Let's Discuss Your <span className="text-[#d2940e]">Financial Future</span>.
            </h2>
            <p className="text-base md:text-lg text-gray-400 mt-4 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Have questions? We're here to help you grow your business and manage your workflow.
            </p>
          </div>

          {/* Minimal Info Cards */}
          <div className="space-y-6 max-w-sm mx-auto lg:mx-0">
            <ContactDetailCard 
              icon={<FiMail className="w-5 h-5 text-gray-400" />}
              title="Email us"
              value="bs6528109@gmail.com"
            />
            <ContactDetailCard 
              icon={<FiMapPin className="w-5 h-5 text-gray-400" />}
              title="Visit us"
              value="Lucknow, Uttar Pradesh, India"
            />
            <ContactDetailCard 
              icon={<FiPhone className="w-5 h-5 text-gray-400" />}
              title="Call us"
              value="+91-8601515055"
            />
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-[#0A0A0A] p-6 sm:p-10 rounded-3xl border border-gray-900 w-full max-w-[480px] mx-auto shadow-2xl">
          <WhatsAppForm />
        </div>
        
      </div>
    </section>
  );
};

const ContactDetailCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 group justify-center lg:justify-start">
    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 transition group-hover:border-blue-500/50">
      {icon}
    </div>
    <div className="text-left">
      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</h4>
      <p className="text-base text-gray-100 transition group-hover:text-blue-400 cursor-pointer">{value}</p>
    </div>
  </div>
);

export default ContactPage;