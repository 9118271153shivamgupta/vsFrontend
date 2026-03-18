
//! ============================ About.jsx2    
import React from 'react';
import Testimonials from '../components/testimonials/Testimonials';

const About = () => {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
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
                  <h3 className="text-3xl font-bold">20+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Years Exp.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">450+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">5+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Awards</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior Design" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block w-48 h-48 border-8 border-white rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1616489953149-7597b530c641?auto=format&fit=crop&q=80&w=300" alt="Detail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Our Core Values</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-2">Why Choose Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <div className="text-4xl mb-4 text-amber-800">01</div>
            <h4 className="text-xl font-semibold mb-3">Sustainable Design</h4>
            <p className="text-gray-600">Hum eco-friendly materials aur long-lasting products use karte hain jo environment ke liye behtar hain.</p>
          </div>
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <div className="text-4xl mb-4 text-amber-800">02</div>
            <h4 className="text-xl font-semibold mb-3">Expert Craftsmanship</h4>
            <p className="text-gray-600">Hamare artisans aur designers har ek detail par bariki se dhayan dete hain.</p>
          </div>
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <div className="text-4xl mb-4 text-amber-800">03</div>
            <h4 className="text-xl font-semibold mb-3">Client Centric</h4>
            <p className="text-gray-600">Aapki pasand hamari priority hai. Hum design ko aapki lifestyle ke mutabiq banate hain.</p>
          </div>
        </div>
      </section>

      {/* 3. Design Process Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif">How We Work</h2>
            <div className="w-20 h-1 bg-amber-800 mx-auto mt-4"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-12 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="lg:w-5/12 text-center lg:text-right">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">01. Discovery</h3>
                  <p className="text-gray-600">Hum aapki lifestyle aur budget ko samajhne ke liye ek initial meeting karte hain.</p>
                </div>
                <div className="z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold my-4 lg:my-0 shadow-lg">1</div>
                <div className="lg:w-5/12"></div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full lg:mt-16">
                <div className="lg:w-5/12 text-center lg:text-left">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">02. Concept Design</h3>
                  <p className="text-gray-600">Hum 3D models aur mood boards banate hain taaki aap dream space visualize kar sakein.</p>
                </div>
                <div className="z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold my-4 lg:my-0 shadow-lg">2</div>
                <div className="lg:w-5/12"></div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:mt-16">
                <div className="lg:w-5/12 text-center lg:text-right">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">03. Execution</h3>
                  <p className="text-gray-600">Hamari expert team installation aur decor ko bariki se manage karti hai.</p>
                </div>
                <div className="z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold my-4 lg:my-0 shadow-lg">3</div>
                <div className="lg:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif">Meet the Visionaries</h2>
              <p className="text-gray-600 mt-4 max-w-md">Sapno ko haqiqat mein badalne wali expert team.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="overflow-hidden mb-4 rounded-lg">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Team 1" className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
              </div>
              <h5 className="text-lg font-bold uppercase tracking-wide">Anjali Sharma</h5>
              <p className="text-gray-500">Founder & Lead Architect</p>
            </div>
            <div className="group">
              <div className="overflow-hidden mb-4 rounded-lg">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Team 2" className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
              </div>
              <h5 className="text-lg font-bold uppercase tracking-wide">Vikram Malhotra</h5>
              <p className="text-gray-500">Project Manager</p>
            </div>
            <div className="group">
              <div className="overflow-hidden mb-4 rounded-lg">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" alt="Team 3" className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
              </div>
              <h5 className="text-lg font-bold uppercase tracking-wide">Sana Khan</h5>
              <p className="text-gray-500">Decor Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
        
        <Testimonials/>
      {/* 6. CTA Section */}
      <section className="py-24 text-center bg-black text-white cursor-pointer rounded">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6 italic">Ready to transform your home?</h2>
          <p className="text-gray-400 mb-10 text-lg">Hamein batayein ki aap apne space ko kaisa dekhna chahte hain. Pehli consultation bilkul muft hai.</p>
          <button className=" rounded-4xl px-10 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest font-bold">
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;