import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle,
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import logo from '../../assets/TransparentCompanyLogo.png';

const Footer = () => {
  return (
    // py-12 karke height kam kar di gayi hai
    <footer className="bg-[#b5690d33] text-black py-12 px-6 md:px-16 lg:px-24 w-full border-t border-white/5">
      <div className="max-w-9xl mx-auto">
        
        {/* --- Middle Section: Links Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse mjt"></div>
                <Link to="/" className="h-40 flex items-center shrink-0">
                  <img 
                    src={logo} 
                    alt="Nexverra Logo" 
                    className="h-full w-auto object-contain py-2 hover:opacity-100 transition" 
                  />
                </Link>
              </div>
              <span className="text-2xl text-black font-black tracking-tighter ml-8"> Trading Company</span>
            </div>
            <p className="text-black font-bold text-lg leading-relaxed max-w-[250px] ">
              Innovating digital landscapes with cutting-edge tech and human-centric design.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-black text-lg font-bold tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-black text-sm font-medium">
              <li><a href="#" className="text-lg hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-lg hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-lg hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-lg hover:text-indigo-400 transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-black text-lg font-bold tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-black text-lg hover:text-indigo-400 transition-colors">Terms & Condition</a></li>
              <li><a href="#" className="text-black text-lg hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black text-lg hover:text-indigo-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-black text-lg font-bold tracking-widest uppercase mb-5">Office</h4>
              <div className="flex items-start gap-5">
                <MapPin size={27} className="text-black shrink-0 mt-1" />
                <p className="text-xl text-black">
                  12/652, Sector 12 Munsipoliya chauraha Indira Nagar Lucknow, 226016
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-5 ">
                <Phone size={25} className="text-black" />
                <div className="flex flex-col">
                  <a href="tel:+919838151576" className="text-xl font-bold text-black hover:underline hover:text-blue-900">+91 9838151576</a>
                  <a href="tel:+918601515055" className="text-xl font-bold text-black hover:underline " >+91 8601515055</a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Mail size={25} className="text-black" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bs6528109@gmail.com" target="_blank" rel="noreferrer" className="text-lg text-black font-medium hover:text-blue-900">bs6528109@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Social Icons (Right Aligned) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-black font-bold text-[10px] md:text-lg tracking-widest uppercase order-2 md:order-1">
            © 2026 <a href="https://www.nexverratechnologies.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">NEXVERRA TECHNOLOGIES</a>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 order-1 md:order-2">
            <span className="font-bold text-sm tracking-widest uppercase text-black/70">Follow Us:</span>
            
            {/* Facebook Circle Icon */}
            <a href="https://www.facebook.com/share/1DHZBBk941/" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
              <Facebook size={20} fill="currentColor" />
            </a>

            {/* Instagram Circle Icon */}
            <a href="https://www.instagram.com/vstrading.company?igsh=aXBzaDEzZzBnOXQy" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all">
              <Instagram size={20} />
            </a>

            {/* LinkedIn Circle Icon */}
            <a href="#" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all">
              <Linkedin size={20} fill="currentColor" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;