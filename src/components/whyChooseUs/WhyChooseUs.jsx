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
      icon: <Calendar className="text-blue-900 w-[40px] h-[40px] md:w-[90px] md:h-[90px]" />,
      title: "Delivery in 45 days*",
    },
    {
      icon: <EyeOff className="text-[#e8a20d] w-[40px] h-[40px] md:w-[90px] md:h-[90px]" />,
      title: "No Hidden Costs",
    },
    {
      icon: <ShieldCheck className="text-gray-700 w-[40px] h-[40px] md:w-[90px] md:h-[90px]" />,
      title: "15+ Year-Experience",
    },
    {
      icon: <Users className="text-gray-600 w-[40px] h-[40px] md:w-[90px] md:h-[90px]" />, 
      title: "500+ Satisfied Customers",
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden w-full relative font-poppins">
      <div className="max-w-full mx-auto px-4 md:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-20">
        
        {/* Left Content Side */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8 md:mb-12 text-center lg:text-left leading-tight">
            Here’s Why Homeowners Love <span className="text-[#bd8100]">Vs Trading Company</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mb-8 md:mb-12">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                <div className="p-3 md:p-4 bg-gray-50 rounded-2xl">
                  {item.icon}
                </div>
                <h3 className="text-[11px] md:text-base font-bold text-balck leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-[#d2940e] hover:bg-[#edd49f] hover:text-black text-white py-3 px-8 md:px-10 rounded-lg font-bold text-base md:text-lg transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side Image - Mobile full width logic */}
        <div className="relative w-full lg:flex-1 block">
          <img 
            src={amb} 
            alt="Ambassador"
            className="w-full h-auto object-contain max-h-[350px] md:max-h-[500px] relative z-10 mx-auto"
          />
          <div className="absolute -z-0 bottom-0 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 w-[90%] h-[90%] bg-gray-100 rounded-full blur-3xl opacity-40"></div>
        </div>
      </div>

      {/* --- FORM MODAL --- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Book Your Session</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none text-sm md:text-base"
              />
              <input 
                name="phone" 
                placeholder="Phone Number" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none text-sm md:text-base"
              />
              <textarea 
                name="brief" 
                placeholder="Brief about your project" 
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none text-sm md:text-base"
              />
              <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors cursor-pointer">
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}} />
    </section>
  );
};

export default WhyChooseUs;












// import React, { useState } from 'react';
// import { ArrowRight, Calendar, EyeOff, ShieldCheck, Users, X } from 'lucide-react'; 
// import amb from '../../assets/amb.png';
// import { sendWhatsAppMessage } from '../utils/whatsappUtils'; 

// const WhyChooseUs = () => {
//   const [showForm, setShowForm] = useState(false);
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const name = formData.get('name');
//     const phone = formData.get('phone');
//     const brief = formData.get('brief');

//     sendWhatsAppMessage(name, phone, brief);
//     alert("Session Booked Successfully!");
//     setShowForm(false);
//   };

//   const features = [
//     {
//       icon: <Calendar className="text-blue-900" size={90} />,
//       title: "Delivery in 45 days*",
//     },
//     {
//       icon: <EyeOff className="text-red-600" size={90} />,
//       title: "No Hidden Costs",
//     },
//     {
//       icon: <ShieldCheck className="text-gray-700" size={90} />,
//       title: "15+ Year-Experience",
//     },
//     {
//       icon: <Users className="text-gray-600" size={90} />, 
//       title: "500+ Satisfied Customers",
//     }
//   ];

//   return (
//     <section className="py-16 bg-white overflow-hidden w-full relative">
//       <div className="max-w-full mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">
        
//         {/* Left Content Side */}
//         <div className="flex-1">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center lg:text-left">
//             Here’s Why Homeowners Love <span className="text-red-600">Vs Trading Company</span>
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
//             {features.map((item, index) => (
//               <div key={index} className="flex flex-col items-center text-center space-y-4">
//                 <div className="p-4 bg-gray-50 rounded-2xl hover:scale-110 transition-transform">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center lg:justify-start">
//             {/* Added flex, items-center, and fixed padding */}
//             <button 
//               onClick={() => setShowForm(true)}
//               className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-lg font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center gap-2"
//             >
//               Book Free Consultation
//               <ArrowRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="relative flex-1 hidden md:block">
//           <img 
//             src={amb} 
//             alt="Ambassador"
//             className="w-full h-auto object-contain max-h-[500px] relative z-10"
//           />
//           <div className="absolute -z-0 bottom-0 right-0 w-[80%] h-[80%] bg-gray-100 rounded-full blur-3xl opacity-50"></div>
//         </div>
//       </div>

//       {/* --- FORM MODAL --- */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
//             <button 
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-black"
//             >
//               <X size={24} />
//             </button>
            
//             <h3 className="text-2xl font-bold mb-6 text-gray-800">Book Your Session</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input 
//                 name="name" 
//                 placeholder="Your Name" 
//                 required 
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
//               />
//               <input 
//                 name="phone" 
//                 placeholder="Phone Number" 
//                 required 
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
//               />
//               <textarea 
//                 name="brief" 
//                 placeholder="Brief about your project" 
//                 rows="3"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
//               />
//               <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
//                 Send to WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default WhyChooseUs;