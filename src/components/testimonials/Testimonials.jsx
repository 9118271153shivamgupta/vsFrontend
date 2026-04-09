import React from 'react';

const Testimonials = () => {
  // Testimonials Data
  const testimonials = [
    { id: 1, name: "Rahul Sharma", role: "Villa Owner", text: "Hamare purane ghar ko ek modern masterpiece mein badal diya. Unka vision kamaal ka hai!" },
    { id: 2, name: "Priya Gupta", role: "Studio Owner", text: "Space management aur aesthetics ka perfect balance. Highly professional team." },
    { id: 3, name: "Vikram Singh", role: "Office Manager", text: "On-time delivery aur quality materials. Humne jaisa socha tha, waisa hi mila." },
    { id: 4, name: "Sana Khan", role: "Penthouse Owner", text: "Designers ne har ek detail par bariki se kaam kiya. My home looks like a dream." },
    { id: 5, name: "Amit Verma", role: "Bungalow Owner", text: "Best interior design agency! Unka working process bahut hi transparent hai." },
  ];

  return (
    <div className="bg-white font-poppins text-gray-900 selection:bg-amber-100 cursor-pointer">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#fdfaf7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
              Designing <span className="italic font-normal text-amber-900">Emotions</span>, Not Just Walls.
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We are a team of passionate architects and designers dedicated to creating luxury interiors that reflect your personality.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-gray-200 pt-8">
              <div className="text-center"><span className="block text-3xl font-bold">150+</span><span className="text-xs uppercase text-gray-400 tracking-widest">Designs</span></div>
              <div className="text-center"><span className="block text-3xl font-bold">12+</span><span className="text-xs uppercase text-gray-400 tracking-widest">Awards</span></div>
              <div className="text-center"><span className="block text-3xl font-bold">100%</span><span className="text-xs uppercase text-gray-400 tracking-widest">Satisfaction</span></div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <img src="https://images.unsplash.com/photo-1616489953149-7597b530c641?q=80&w=1000" alt="Design" className="rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="font-serif italic text-amber-900">"Quality is never an accident."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING TESTIMONIALS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl font-serif text-center">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-amber-800 mx-auto mt-4"></div>
        </div>

        {/* The Scrolling Wrapper */}
        <div className="relative flex">
          {/* Animation: Isme humne inline tailwind arbitrary value use ki hai.
              'animate-[scroll_40s_linear_infinite]' refers to a custom keyframe.
          */}
          <div className="flex space-x-8 whitespace-nowrap animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Doubling the array to create a seamless loop */}
            {[...testimonials, ...testimonials].map((client, index) => (
              <div 
                key={index}
                className="inline-block w-[350px] md:w-[450px] bg-gray-50 p-10 rounded-[2rem] border border-gray-100 
                           transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                           hover:scale-110 hover:shadow-2xl hover:bg-white hover:z-50 cursor-default"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-6xl text-amber-200 block mb-4 font-serif">“</span>
                    <p className="text-gray-600 whitespace-normal text-lg leading-relaxed mb-8 italic">
                      {client.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/100?u=${client.id}`} className="w-14 h-14 rounded-full border-2 border-white shadow-md" alt={client.name} />
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase tracking-tighter">{client.name}</h4>
                      <p className="text-sm text-amber-700 font-medium">{client.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Injecting Keyframes directly via Tailwind Style */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </section>

      {/* 3. CTA Section */}
      <section className="bg-amber-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-5xl font-serif mb-8">Ready to build your dream home?</h2>
          <button className="bg-white text-amber-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
            Book a Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;