import React, { useState } from 'react';
import { User, Phone, MessageSquare, Send } from 'lucide-react';
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
      alert("Message Sent Successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Styling to match BookingForm
  const labelStyle = "text-[11px] font-bold text-slate-500 ml-1 uppercase";
  const inputContainerStyle = "relative group";
  const iconStyle = "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#f9ad0a] transition-colors";
  const inputStyle = "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f9ad0a]/10 focus:border-[#f9ad0a] outline-none text-sm text-slate-900 transition-all placeholder:text-slate-400 font-medium";

  return (
    <form onSubmit={handleContactSubmit} className="space-y-3.5">
      
      {/* Name Input */}
      <div className="space-y-1">
        <label className={labelStyle}>Full Name</label>
        <div className={inputContainerStyle}>
          <User className={iconStyle} size={16} />
          <input 
            required 
            name="userName" 
            type="text" 
            placeholder="Your name" 
            className={inputStyle} 
          />
        </div>
      </div>

      {/* Phone Input */}
      <div className="space-y-1">
        <label className={labelStyle}>Phone Number</label>
        <div className={inputContainerStyle}>
          <Phone className={iconStyle} size={16} />
          <input 
            required 
            name="userPhone" 
            type="tel" 
            placeholder="+91 00000 00000" 
            className={inputStyle} 
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="space-y-1">
        <label className={labelStyle}>Project Details</label>
        <div className={inputContainerStyle}>
          <MessageSquare className="absolute left-3.5 top-3 text-slate-400 group-focus-within:text-[#f9ad0a] transition-colors" size={16} />
          <textarea 
            required 
            name="userMsg" 
            rows="2" 
            placeholder="e.g. 2BHK Interior Design" 
            className={`${inputStyle} pl-10 pt-2.5 resize-none`}
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading}
        className={`w-full py-3 rounded-xl font-bold text-sm mt-2 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-black/5
          ${loading 
            ? 'bg-[#f9ad0a]/70 text-white cursor-not-allowed' 
            : 'bg-[#f9ad0a] hover:bg-[#ebcd8d] text-white hover:text-black active:scale-[0.98]'}`}
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            <span>Send Message</span>
            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-slate-400 font-medium italic">
        Fast response guaranteed within 24 hours.
      </p>
    </form>
  );
};

export default WhatsAppForm;