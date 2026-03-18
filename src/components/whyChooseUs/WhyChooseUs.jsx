import React from 'react';
import { Calendar, EyeOff, ShieldCheck, Calculator } from 'lucide-react';
import amb from '../../assets/amb.png';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Calendar className="text-blue-900" size={90} />,
      title: "Delivery in 45 days*",
      desc: "Hum waqt ke pakke hain."
    },
    {
      icon: <EyeOff className="text-red-600" size={90} />,
      title: "No Hidden Costs",
      desc: "Jo dikhta hai, wahi milta hai."
    },
    {
      icon: <ShieldCheck className="text-gray-700" size={90} />,
      title: "Flat 10-Year Warranty",
      desc: "Lambi life ka bharosa."
    },
    {
      icon: <Calculator className="text-gray-600" size={90} />,
      title: "Easy EMIs",
      desc: "Aapki pocket ka khayal."
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden w-full gap-10">
      <div className="max-w-full mx-auto px-20 flex flex-col lg:flex-row items-center justify-between gap-20">
        
        {/* Left Content Side */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center lg:text-left">
            Here’s Why Homeowners Love <span className="text-red-600">Vs Trading Company</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
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

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start  ">
            <button className="bg-red-600 hover:bg-red-700 text-white  py-3 rounded-lg font-bold text-lg transition-all shadow-lg active:scale-95 px-30">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Right Side: Brand Ambassador/Person Image */}
        <div className="relative flex-1 hidden md:block">
          <img 
            src={amb} 
            alt="Ambassador"
            className="w-full h-full py-0 object-contain max-h-[500px] "
          />
          {/* Decorative background shape */}
          <div className="absolute -z-10 bottom-0 right-0 w-[80%] h-[80%] bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;