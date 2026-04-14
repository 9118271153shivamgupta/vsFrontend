import React, { useState } from 'react';
import { sendWhatsAppMessage } from '../utils/whatsappUtils'; 

const WhatsAppForm = () => {
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const name = formData.get('userName');
      let phone = formData.get('userPhone');
      const message = formData.get('userMsg');

      if (!name || !phone || !message) {
        alert("Please fill all fields!");
        setLoading(false);
        return;
      }

      const cleanedPhone = phone.replace(/[^+\d]/g, ''); 
      await sendWhatsAppMessage(name, cleanedPhone, message); 
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 text-sm rounded-xl border border-gray-800 bg-black text-gray-100 placeholder:text-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200";
  const labelStyle = "block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider";

  return (
    <form onSubmit={handleContactSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>First Name</label>
          <input required name="userName" type="text" placeholder="John Doe" className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>Phone Number</label>
          <input required name="userPhone" type="tel" placeholder="+91 00000 00000" className={inputStyle} />
        </div>
      </div>

      <div>
        <label className={labelStyle}>Message</label>
        <textarea 
          required 
          name="userMsg" 
          rows="3" 
          placeholder="Tell us about your project..." 
          className={`${inputStyle} resize-none`} 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-base transition duration-300 shadow-lg
          ${loading ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200 active:scale-[0.98]'}`}
      >
        {loading ? "Connecting..." : (
          <>
            Send Message 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default WhatsAppForm;