import React from 'react';

const About = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
                We Create Spaces <br /> 
                <span className="italic text-gray-500 underline decoration-1">That Tell Your Story</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Since 2012, we’ve been transforming ordinary houses into extraordinary homes. 
                Our design philosophy blends functionality with timeless aesthetics.
              </p>
              <div className="flex gap-10">
                <div>
                  <h3 className="text-3xl font-bold">12+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Years Exp.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">450+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">15+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Awards</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior Design" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block w-48 h-48 border-8 border-white rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1616489953149-7597b530c641?auto=format&fit=crop&q=80&w=300" alt="Detail" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission / Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Our Core Values</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-2">Why Choose Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-amber-800">01</div>
            <h4 className="text-xl font-semibold mb-3">Sustainable Design</h4>
            <p className="text-gray-600">Hum eco-friendly materials aur long-lasting products use karte hain jo environment ke liye behtar hain.</p>
          </div>
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-amber-800">02</div>
            <h4 className="text-xl font-semibold mb-3">Expert Craftsmanship</h4>
            <p className="text-gray-600">Hamare artisans aur designers har ek detail par bariki se dhayan dete hain.</p>
          </div>
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-amber-800">03</div>
            <h4 className="text-xl font-semibold mb-3">Client Centric</h4>
            <p className="text-gray-600">Aapki pasand hamari priority hai. Hum design ko aapki lifestyle ke mutabiq banate hain.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif">Meet the Visionaries</h2>
              <p className="text-gray-600 mt-4">Pichle ek dashak se sapno ko haqiqat mein badalne wali team.</p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors uppercase tracking-widest">
              Join Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="group">
              <div className="overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                  alt="Lead Designer" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
              </div>
              <h5 className="text-lg font-bold uppercase tracking-wide">Anjali Sharma</h5>
              <p className="text-gray-500">Founder & Lead Interior Architect</p>
            </div>
            {/* Member 2 */}
            <div className="group">
              <div className="overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="Architect" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
              </div>
              <h5 className="text-lg font-bold uppercase tracking-wide">Vikram Malhotra</h5>
              <p className="text-gray-500">Project Manager</p>
            </div>
            {/* Member 3 */}
            <div className="group">
              <div className="overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" 
                  alt="Stylist" 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
              </div>
              <h5 className="text-lg font-bold uppercase tracking-wide">Sana Khan</h5>
              <p className="text-gray-500">Furniture & Decor Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">Ready to transform your home?</h2>
          <p className="text-gray-500 mb-8 text-lg">Hamein batayein ki aap apne space ko kaisa dekhna chahte hain. Pehli consultation bilkul muft hai.</p>
          <a href="/contact" className="inline-block border-b-2 border-black pb-1 font-semibold text-lg hover:text-amber-800 hover:border-amber-800 transition-all">
            Get in Touch →
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;