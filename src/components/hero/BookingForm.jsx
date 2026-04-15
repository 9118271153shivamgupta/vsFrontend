import React from 'react';
import { X, User, Phone, MessageSquare, Sparkles, Send } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsappUtils';

const BookingForm = ({ isModal = false, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const brief = formData.get('brief');

    sendWhatsAppMessage(name, phone, brief);
    alert("Session Booked Successfully!");
    if (onClose) onClose();
  };

  return (
    <div className={`relative ${isModal ? '' : ' bg-[#f1eee8] p-6 rounded-3xl shadow-xl w-full max-w-sm border border-slate-100'}`}>
      
      {/* Header - Compact */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-50 text-[#f5ac0f] text-[10px] font-bold uppercase tracking-widest mb-1">
            Free Session
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
            Book Expert <span className="text-[#f5ac0f]">Advice</span>
          </h2>
        </div>
        
        {isModal && (
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-full transition-all text-slate-400">
            <X size={20} />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Name - Sleek Height */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase">Full Name</label>
          <div className="relative group">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
            <input 
              name="name" 
              required 
              type="text" 
              placeholder="Your name" 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none text-sm text-slate-900 transition-all placeholder:text-slate-400 font-medium" 
            />
          </div>
        </div>

        {/* Phone - Sleek Height */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
            <input 
              name="phone" 
              required 
              type="tel" 
              placeholder="+91 00000 00000" 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none text-sm text-slate-900 transition-all placeholder:text-slate-400 font-medium" 
            />
          </div>
        </div>

        {/* Details - Compact Area */}
        <div className="space-y-1 ">
          <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase">Project Details</label>
          <div className="relative group">
            <MessageSquare className="absolute left-3.5 top-3 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
            <textarea 
              name="brief" 
              rows="2" 
              placeholder="e.g. 2BHK Interior Design" 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none text-sm text-slate-900 transition-all placeholder:text-slate-400 font-medium resize-none"
            ></textarea>
          </div>
        </div>
        
        {/* Submit Button - Slim & Sharp */}
        <button 
          type="submit" 
          className="w-full bg-[#f5ac0f] hover:bg-[#ebcd8d] text-white hover:text-black py-3 rounded-xl font-bold text-sm mt-2 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/10"
        >
          <span>Confirm Booking</span>
          <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        <p className="text-center text-[10px] text-slate-400 font-medium italic">
          Fast response guaranteed within 24 hours.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;