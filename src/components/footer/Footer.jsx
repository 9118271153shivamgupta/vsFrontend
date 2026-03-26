import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  MessageCircle 
} from 'lucide-react';
import logo from '../../assets/TransparentCompanyLogo.png';
const Footer = () => {
  return (
    <footer className="bg-[#f1c08433] text-black py-20 px-6 md:px-16 lg:px-24 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Section: CTA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-16 mb-16 gap-8">
          <h2 className="text-xl md:text-5xl font-bold max-w-lg leading-tight">
            Ready To Build Your <br /> 
            <span className="text-red-900">Dream Project?</span>
          </h2>
          
          {/* <button className="bg-red-500 text-black  hover:text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold text-lg tracking-widest uppercase hover:bg-black transition-all group active:scale-95 cursor-pointer">
            Get in touch 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button> */}
        </div>

        {/* --- Middle Section: Links Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <Link to="/" className="h-40 flex items-center shrink-0">
            <img 
              src={logo} 
              alt="Nexverra Logo" 
              className="h-full w-auto object-contain py-2 hover:opacity-100 transition" 
            />
          </Link>

              </div>
              <span className="text-2xl  text-black font-black tracking-tighter ml-5"> Trading Company</span>
            </div>
            <p className="text-black font-bold text-lg leading-relaxed max-w-[250px]">
              Innovating digital landscapes with cutting-edge tech and human-centric design.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-black text-lg font-bold tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4  text-black  text-sm font-medium">
              <li><a href="#" className=" text-lg hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#" className=" text-lg hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className=" text-lg hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#" className=" text-lg hover:text-indigo-400 transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="text-black text-lg font-bold tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-black text-lg hover:text-indigo-400 transition-colors">Terms & Condition</a></li>
              <li><a href="#" className="text-black text-lg hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black text-lg hover:text-indigo-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-black text-lg font-bold tracking-widest uppercase mb-6">Office</h4>
              <p className="text-lg leading-relaxed text-black">
                12/652 , Sector12 Munsipoliya chauraha Indra Nagar Lucknow , Pin code 226016
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-indigo-400">+91 9838151576</p>
              <p className="text-lg font-bold text-indigo-400">+91 8601515055</p>
              <p className="text-lg text-black font-medium">bs6528109@gmail.com</p>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Social Icons & Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          
          {/* --- Bottom Section: Social Icons --- */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 ">
            
            {/* Facebook Link */}
            <a 
              href="https://www.instagram.com/vstrading.company?igsh=aXBzaDEzZzBnOXQy" // <--- Yahan apna FB link add kre
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#1877F2] transition-colors group"
            >
              <Facebook size={30} className="group-hover:scale-110 transition-transform " />
              <span>Facebook</span>
            </a>

            {/* Instagram Link */}
            <a 
              href="https://www.facebook.com/share/1DHZBBk941/" // <--- Yahan apna Insta link add kre
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#E4405F] transition-colors group"
            >
              <Instagram size={30} className="group-hover:scale-110 transition-transform hover:text-[#E4405F]" />
              <span>Instagram</span>
            </a>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/919118271153?text=Hello%20Nexverra%20Technologies!" // <--- Direct WhatsApp Link
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#25D366] transition-colors group"
            >
              <MessageCircle size={30} className="group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

          </div>

          <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase text-center">
            © 2026 NEXVERRA TECHNOLOGIES. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;





//?  footer 2========================================== 
// import React from 'react';
// import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#212121] text-white pt-16 pb-8 font-sans">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
//         {/* Brand Info */}
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold italic tracking-tighter">HOMELANE</h3>
//           <p className="text-gray-400 text-sm leading-relaxed">
//             Leading interior design company in India, helping you create the home of your dreams with 3D visualization and 45-day delivery.
//           </p>
//           <div className="flex gap-4">
//             <Facebook className="hover:text-red-500 cursor-pointer" size={20} />
//             <Instagram className="hover:text-red-500 cursor-pointer" size={20} />
//             <Twitter className="hover:text-red-500 cursor-pointer" size={20} />
//             <Youtube className="hover:text-red-500 cursor-pointer" size={20} />
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-bold mb-6">Our Services</h4>
//           <ul className="space-y-4 text-gray-400 text-sm">
//             <li className="hover:text-white cursor-pointer transition-colors">Modular Kitchens</li>
//             <li className="hover:text-white cursor-pointer transition-colors">Master Bedrooms</li>
//             <li className="hover:text-white cursor-pointer transition-colors">Living Room Designs</li>
//             <li className="hover:text-white cursor-pointer transition-colors">Puja Room Units</li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h4 className="text-lg font-bold mb-6">Customer Support</h4>
//           <ul className="space-y-4 text-gray-400 text-sm">
//             <li className="hover:text-white cursor-pointer transition-colors">Visit Experience Centre</li>
//             <li className="hover:text-white cursor-pointer transition-colors">Refer and Earn</li>
//             <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
//             <li className="hover:text-white cursor-pointer transition-colors">Terms of Use</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-4 text-sm text-gray-400">
//           <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
//           <div className="flex items-start gap-3">
//             <MapPin size={20} className="text-red-500 shrink-0" />
//             <p>123, Interior Plaza, HSR Layout, Bangalore - 560102</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <Mail size={18} className="text-red-500 shrink-0" />
//             <p>contact@homelane.com</p>
//           </div>
//           <div className="mt-6 p-4 border border-gray-700 rounded-lg">
//             <p className="text-white font-bold mb-1">Subscribe to Newsletter</p>
//             <div className="flex mt-2">
//               <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-500 focus:border-red-500 outline-none w-full py-1" />
//               <button className="text-red-500 font-bold ml-2">GO</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
//         <p>© 2026 HomeLane Interior Solutions. All rights reserved.</p>
//         <div className="mt-2 text-[10px] space-x-4">
//           <span>CIN: U72200KA2014PTC075778</span>
//           <span>FSC Certified Materials</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;