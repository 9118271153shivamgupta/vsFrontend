
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Menu, X } from 'lucide-react'; 
import logo from '../../assets/TransparentCompanyLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const facebookLink = "https://facebook.com/your-page"; 
  const youtubeLink = "https://youtube.com/c/your-channel"; 
  const instagramLink = "https://instagram.com/your-profile";

  const shouldShowSolidNav = !isHomePage || scrolled;
  const navHeight = shouldShowSolidNav ? "h-16 md:h-20" : "h-24 md:h-32";
  const navBg = shouldShowSolidNav 
    ? "bg-slate-50/95 backdrop-blur-md border-b border-gray-200 shadow-sm" 
    : "bg-transparent";
    
  const textColor = shouldShowSolidNav ? "text-black" : "text-white"; 
  const brandColor = shouldShowSolidNav ? "text-indigo-700" : "text-white";
  const iconHover = shouldShowSolidNav ? "hover:bg-gray-200" : "hover:bg-white/10";

  // --- Helper Function to Check Active Link ---
  const isActive = (path) => {
    if (path === 'Home') return location.pathname === "/";
    const formattedPath = `/${path.toLowerCase().replace(/\s+/g, '')}`;
    return location.pathname === formattedPath;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out flex items-center ${navHeight} ${navBg}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
        <div className="flex justify-between items-center h-full">
          
          {/* 1. LEFT: Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 h-full group shrink-0">
            <div className="h-full flex items-center transition-all duration-500">
              <img 
                src={logo} 
                alt="Logo" 
                className={`w-auto object-contain transition-all duration-500 ease-in-out ${
                  shouldShowSolidNav ? 'h-[65%]' : 'h-[85%]'
                } ${!shouldShowSolidNav && 'brightness-0 invert'}`} 
              />
            </div>
            
            <div className="flex flex-col justify-center leading-none">
              <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 ${brandColor} ${shouldShowSolidNav ? 'scale-90' : 'scale-100'} origin-left`}>
                VS TRADING
              </span>
              <span className={`text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase ${shouldShowSolidNav ? 'text-gray-500' : 'text-gray-300'}`}>
                Company
              </span>
            </div>
          </Link>

          {/* 2. MIDDLE: Navigation Links with Active State */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => {
              const active = isActive(item);
              return (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                  className={`font-bold text-[14px] uppercase tracking-wide transition-all relative group 
                    ${active ? 'text-indigo-600' : textColor} 
                    hover:text-indigo-600`}
                >
                  {item}
                  {/* Underline Logic: active hone par full width, varna hover par animate */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* 3. RIGHT: Social Icons */}
          <div className={`hidden lg:flex items-center space-x-3 border-l ${shouldShowSolidNav ? 'border-gray-300' : 'border-white/20'} pl-6`}>
            <a href="https://www.facebook.com/share/1DHZBBk941/" target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Facebook size={25} /></a>
            <a href={youtubeLink} target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Youtube size={30} /></a>
            <a href="https://www.instagram.com/vstrading.company?igsh=aXBzaDEzZzBnOXQy" target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Instagram size={25} /></a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${textColor} p-2 rounded-lg transition-colors ${iconHover}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU with Active State */}
      <div className={`fixed inset-0 bg-white z-[110] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 lg:hidden`}>
        <div className="p-6 flex flex-col h-full bg-slate-50">
          <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-indigo-700 leading-none">VS TRADING</span>
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-1">Interior & More</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-white shadow-sm rounded-full text-black"><X size={24} /></button>
          </div>
          
          <div className="flex flex-col space-y-4">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => {
              const active = isActive(item);
              return (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-4xl font-black transition-colors py-2 flex items-center justify-between group
                    ${active ? 'text-indigo-600' : 'text-gray-900'} 
                    hover:text-indigo-600`}
                >
                  {item}
                  <div className={`h-1 bg-indigo-600 transition-all duration-300 ${active ? 'w-12' : 'w-0 group-hover:w-12'}`}></div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;