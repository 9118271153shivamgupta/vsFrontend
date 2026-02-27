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
    <footer className="bg-[#6e78a2] text-gray-900 py-20 px-6 md:px-16 lg:px-24 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Section: CTA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-16 mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-medium max-w-lg leading-tight">
            Ready To Build Your <br /> 
            <span className="text-indigo-500">Dream Project?</span>
          </h2>
          
          <button className="bg-white text-black px-10 py-4 rounded-full flex items-center gap-3 font-bold text-lg tracking-widest uppercase hover:bg-indigo-50 transition-all group active:scale-95">
            Get in touch 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* --- Middle Section: Links Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <Link to="/" className="h-40 flex items-center shrink-0">
            <img 
              src={logo} 
              alt="Nexverra Logo" 
              className="h-full w-auto object-contain py-2 hover:opacity-80 transition" 
            />
          </Link>

              </div>
              <span className="text-2xl font-black tracking-tighter ml-5"> Trading Company</span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-[250px]">
              Innovating digital landscapes with cutting-edge tech and human-centric design.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white/40 text-lg font-bold tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="text-white/40 text-lg font-bold tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">Terms & Condition</a></li>
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 text-lg hover:text-indigo-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-white/40 text-lg font-bold tracking-widest uppercase mb-6">Office</h4>
              <p className="text-lg leading-relaxed text-white/80">
                123 Tech Park, Silicon Valley <br /> California, US 94025
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-indigo-400">+91 98765 43210</p>
              <p className="text-lg text-white/60 font-medium">hello@nexverra.com</p>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Social Icons & Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          
          {/* Social Icons with Names */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#1877F2] transition-colors group">
              <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#E4405F] transition-colors group">
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#1DA1F2] transition-colors group">
              <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#0077B5] transition-colors group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              <span>Linkedin</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#25D366] transition-colors group">
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
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