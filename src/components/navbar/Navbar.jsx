import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Menu, X } from 'lucide-react'; 
import logo from '../../assets/TransparentCompanyLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // 1. Scroll Lock Logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const youtubeLink = "https://youtube.com/c/your-channel"; 

  const shouldShowSolidNav = !isHomePage || scrolled;
  const navHeight = shouldShowSolidNav ? "h-16 md:h-20" : "h-24 md:h-32";
  const navBg = shouldShowSolidNav 
    ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" 
    : "bg-transparent";
    
  const textColor = shouldShowSolidNav ? "text-black" : "text-white"; 
  const brandColor = shouldShowSolidNav ? "text-indigo-700" : "text-white";
  const iconHover = shouldShowSolidNav ? "hover:bg-gray-200" : "hover:bg-white/10";

  const isActive = (path) => {
    if (path === 'Home') return location.pathname === "/";
    const formattedPath = `/${path.toLowerCase().replace(/\s+/g, '')}`;
    return location.pathname === formattedPath;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] font-poppins transition-all duration-500 flex items-center ${navHeight} ${navBg}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
        <div className="flex justify-between items-center h-full">
          
          {/* 1. LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 h-full z-[111]">
            <div className="h-full flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className={`w-auto object-contain transition-all duration-500 ${
                  shouldShowSolidNav ? 'h-[60%]' : 'h-[80%]'
                } ${!shouldShowSolidNav && !isOpen && 'brightness-0 invert'}`} 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 ${isOpen ? 'text-indigo-700' : brandColor}`}>
                VS TRADING
              </span>
              <span className={`text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase ${shouldShowSolidNav ? 'text-gray-500' : 'text-gray-300'}`}>
                Company
              </span>
            </div>
          </Link>

          {/* 2. MIDDLE: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                className={`font-bold text-[14px] uppercase tracking-wide transition-all relative group 
                  ${isActive(item) ? 'text-indigo-600' : textColor} 
                  hover:text-indigo-600`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* 3. RIGHT: Social Icons (Original Style) */}
          <div className={`hidden lg:flex items-center space-x-3 border-l ${shouldShowSolidNav ? 'border-gray-300' : 'border-white/20'} pl-6`}>
            <a href="https://www.facebook.com/share/1DHZBBk941/" target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Facebook size={22} /></a>
            <a href={youtubeLink} target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Youtube size={26} /></a>
            <a href="https://www.instagram.com/vstrading.company?igsh=aXBzaDEzZzBnOXQy" target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Instagram size={22} /></a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden z-[111]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors ${isOpen ? 'text-black' : textColor}`}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 w-screen h-screen bg-white z-[110] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out lg:hidden`}>
        <div className="p-6 flex flex-col h-full bg-slate-50">
          <div className="mt-20 flex flex-col space-y-6">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                onClick={() => setIsOpen(false)} 
                className={`text-4xl font-black transition-colors ${isActive(item) ? 'text-indigo-600' : 'text-gray-900'}`}
              >
                {item}
              </Link>
            ))}
          </div>
          
          {/* Mobile Socials bottom */}
          <div className="mt-auto flex space-x-6 pb-10 border-t border-gray-200 pt-8">
            <a href="https://www.facebook.com/share/1DHZBBk941/" className="text-gray-600"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/vstrading.company?igsh=aXBzaDEzZzBnOXQy" className="text-gray-600"><Instagram size={24} /></a>
            <a href={youtubeLink} className="text-gray-600"><Youtube size={24} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;