import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../testimonials/Testimonials';

const MainAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-poppins text-gray-900 overflow-x-hidden">
      {/* CSS for Poppins Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}} />

      {/* 1. Hero Section - Original Layout with New Colors */}
      <section className="relative py-16 lg:py-24 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                We Create Spaces <br /> 
                <span className="italic text-[#f9ad0a] underline decoration-1">That Tell Your Story</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Since 2012, we’ve been transforming ordinary houses into extraordinary homes. 
                Our design philosophy blends functionality with timeless aesthetics.
              </p>
              <div className="flex gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-[#f9ad0a]">20+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Years Exp.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#f9ad0a]">450+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#f9ad0a]">5+</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Awards</p>
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

      {/* 2. Core Values Section - Original Design with #f9ad0a accents */}
      <section className="  py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-bold tracking-widest text-[#f9ad0a] uppercase">Our Core Values</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-0">Why Choose Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  text-center">
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-lg group">
            <div className="text-4xl mb-4 text-[#f9ad0a] font-black   ">01</div>
            <h4 className="text-xl font-bold mb-3">Sustainable Design</h4>
            <p className="text-gray-600 leading-relaxed">Hum eco-friendly materials aur long-lasting products use karte hain jo environment ke liye behtar hain.</p>
          </div>
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-lg group">
            <div className="text-4xl mb-4 text-[#f9ad0a] font-black">02</div>
            <h4 className="text-xl font-bold mb-3">Expert Craftsmanship</h4>
            <p className="text-gray-600 leading-relaxed">Hamare artisans aur designers har ek detail par bariki se dhayan dete hain.</p>
          </div>
          <div className="p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-lg group">
            <div className="text-4xl mb-4 text-[#f9ad0a] font-black ">03</div>
            <h4 className="text-xl font-bold mb-3">Client Centric</h4>
            <p className="text-gray-600 leading-relaxed">Aapki pasand hamari priority hai. Hum design ko aapki lifestyle ke mutabiq banate hain.</p>
          </div>
        </div>
      </section>

      {/* 3. Design Process Section - Original Layout */}
      <section className=" bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            <div className="w-20 h-1 bg-[#f9ad0a] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-5 lg:space-y-0">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="lg:w-5/12 text-center lg:text-right">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-[#f9ad0a]">01. Discovery</h3>
                  <p className="text-gray-600">Hum aapki lifestyle aur budget ko samajhne ke liye ek initial meeting karte hain.</p>
                </div>
                <div className="z-10 bg-[#f9ad0a] text-black w-10 h-10 rounded-full flex items-center justify-center font-black my-4 lg:my-0 shadow-lg">1</div>
                <div className="lg:w-5/12"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full lg:mt-16">
                <div className="lg:w-5/12 text-center lg:text-left">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-[#f9ad0a]">02. Concept Design</h3>
                  <p className="text-gray-600">Hum 3D models aur mood boards banate hain taaki aap dream space visualize kar sakein.</p>
                </div>
                <div className="z-10 bg-[#f9ad0a] text-black w-10 h-10 rounded-full flex items-center justify-center font-black my-4 lg:my-0 shadow-lg">2</div>
                <div className="lg:w-5/12"></div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:mt-16">
                <div className="lg:w-5/12 text-center lg:text-right">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-[#f9ad0a]">03. Execution</h3>
                  <p className="text-gray-600">Hamari expert team installation aur decor ko bariki se manage karti hai.</p>
                </div>
                <div className="z-10 bg-[#f9ad0a] text-black w-10 h-10 rounded-full flex items-center justify-center font-black my-4 lg:my-0 shadow-lg">3</div>
                <div className="lg:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section - Original Layout with accent colors */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Visionaries</h2>
            <p className="text-gray-600 mt-4 max-w-md">Sapno ko haqiqat mein badalne wali expert team.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {[
              { name: 'Anjali Sharma', role: 'Founder & Lead Architect', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
              { name: 'Vikram Malhotra', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
              { name: 'Sana Khan', role: 'Decor Specialist', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden mb-4 rounded-xl shadow-md">
                  <img src={member.img} alt={member.name} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
                </div>
                <h5 className="text-lg font-bold uppercase tracking-tight">{member.name}</h5>
                <p className="text-[#f9ad0a] font-semibold text-sm uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* 6. CTA Section - Using Redirect Logic */}
      <section className="py-10 text-center bg-black text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your home?</h2>
          <p className="text-gray-400 mb-10 text-lg">Hamein batayein ki aap apne space ko kaisa dekhna chahte hain. Pehli consultation bilkul muft hai.</p>
          <button 
            onClick={() => navigate('/contact')}
            className="rounded-full px-10 py-4 border-2 border-[#f9ad0a] text-white bg-[#de9a08] hover:bg-[#ddb869] hover:text-black transition-all duration-300 uppercase tracking-widest font-black text-samibold"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainAbout;















// import React from 'react'
// import Testimonials from '../testimonials/Testimonials';

// const MainAbout = () => {
//   return (
//     <div className="bg-white font-poppins text-gray-900 overflow-x-hidden">
//       {/* CSS for Poppins Import */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
//         .font-poppins { font-family: 'Poppins', sans-serif; }
//       `}} />

//       {/* 1. Hero Section - Tightened Padding */}
//       <section className="relative py-12 lg:py-20 bg-[#f8f5f2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//             <div className="order-2 lg:order-1">
//               <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
//                 We Create Spaces <br /> 
//                 <span className="text-[#f9ad0a]">That Tell Your Story</span>
//               </h1>
//               <p className="text-base text-gray-600 mb-6 max-w-lg leading-relaxed">
//                 Since 2012, we’ve been transforming ordinary houses into extraordinary homes. 
//                 Our design philosophy blends functionality with timeless aesthetics.
//               </p>
//               <div className="flex gap-8">
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#f9ad0a]">20+</h3>
//                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Years Exp.</p>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#f9ad0a]">450+</h3>
//                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Projects</p>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#f9ad0a]">5+</h3>
//                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Awards</p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative order-1 lg:order-2">
//               <img 
//                 src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
//                 alt="Interior Design" 
//                 className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Core Values Section - Reduced Vertical Spacing */}
//       <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <span className="text-xs font-bold tracking-[0.2em] text-[#f9ad0a] uppercase">Our Core Values</span>
//           <h2 className="text-2xl md:text-3xl font-bold mt-1">Why Choose Us?</h2>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           {[
//             { num: '01', title: 'Sustainable Design', desc: 'Hum eco-friendly materials aur long-lasting products use karte hain jo environment ke liye behtar hain.' },
//             { num: '02', title: 'Expert Craftsmanship', desc: 'Hamare artisans aur designers har ek detail par bariki se dhayan dete hain.' },
//             { num: '03', title: 'Client Centric', desc: 'Aapki pasand hamari priority hai. Hum design ko aapki lifestyle ke mutabiq banate hain.' }
//           ].map((item, index) => (
//             <div key={index} className="p-6 border border-gray-100 hover:border-[#f9ad0a]/30 hover:shadow-lg transition-all duration-300 rounded-xl bg-white">
//               <div className="text-3xl font-black mb-3 text-[#f9ad0a]/20">{item.num}</div>
//               <h4 className="text-lg font-bold mb-2">{item.title}</h4>
//               <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. Design Process Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold">How We Work</h2>
//             <div className="w-12 h-1 bg-[#f9ad0a] mx-auto mt-3 rounded-full"></div>
//           </div>

//           <div className="relative space-y-8 lg:space-y-16">
//             {/* Step 1 */}
//             <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
//               <div className="lg:w-1/2 lg:pr-12 lg:text-right">
//                 <h3 className="text-lg font-bold text-[#f9ad0a]">01. Discovery</h3>
//                 <p className="text-sm text-gray-600">Initial meeting to understand lifestyle & budget.</p>
//               </div>
//               <div className="hidden lg:flex z-10 bg-black text-white w-8 h-8 rounded-full items-center justify-center font-bold shadow-md">1</div>
//               <div className="lg:w-1/2"></div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-0">
//               <div className="lg:w-1/2 lg:pl-12 lg:text-left">
//                 <h3 className="text-lg font-bold text-[#f9ad0a]">02. Concept Design</h3>
//                 <p className="text-sm text-gray-600">3D models and mood boards for visualization.</p>
//               </div>
//               <div className="hidden lg:flex z-10 bg-black text-white w-8 h-8 rounded-full items-center justify-center font-bold shadow-md">2</div>
//               <div className="lg:w-1/2"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Team Section - Clean Grid */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center lg:text-left mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold">Meet the Visionaries</h2>
//             <p className="text-sm text-gray-500 mt-2">Sapno ko haqiqat mein badalne wali expert team.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { name: 'Anjali Sharma', role: 'Founder & Lead Architect', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
//               { name: 'Vikram Malhotra', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
//               { name: 'Sana Khan', role: 'Decor Specialist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600' }
//             ].map((member, i) => (
//               <div key={i} className="group text-center lg:text-left">
//                 <div className="overflow-hidden mb-4 rounded-2xl shadow-sm">
//                   <img src={member.img} alt={member.name} className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
//                 </div>
//                 <h5 className="text-base font-bold uppercase tracking-tight">{member.name}</h5>
//                 <p className="text-xs text-[#f9ad0a] font-medium uppercase tracking-wider">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Testimonials />

//       {/* 6. CTA Section - Compact */}
//       <section className="py-16 text-center bg-black text-white mx-4 mb-10 rounded-[2rem] overflow-hidden relative">
//         <div className="max-w-3xl mx-auto px-6 relative z-10">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to transform your home?</h2>
//           <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">Pehli consultation bilkul muft hai. Hamein batayein ki aap apne space ko kaisa dekhna chahte hain.</p>
//           <button className="rounded-full px-8 py-3 bg-[#f9ad0a] text-black hover:bg-white transition-all duration-300 uppercase tracking-widest font-extrabold text-xs">
//             Get in Touch
//           </button>
//         </div>
//         <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9ad0a]/10 blur-[80px]"></div>
//       </section>
//     </div>
//   )
// }

// export default MainAbout;