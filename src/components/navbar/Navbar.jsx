// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Youtube, Instagram, Github, Menu, X } from 'lucide-react'; 
// import logo from '../../assets/TransparentCompanyLogo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // 20px scroll hote hi effect trigger hoga
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const facebookLink = "https://facebook.com/your-page"; 
//   const youtubeLink = "https://youtube.com/c/your-channel"; 
//   const instagramLink = "https://instagram.com/your-profile";

//   // Dynamic Height for Navbar
//   const navHeight = scrolled ? "h-16 md:h-20" : "h-24 md:h-32";
//   const navBg = scrolled 
//     ? "bg-white/95 backdrop-blur-md shadow-md" 
//     : "bg-transparent";
    
//   const textColor = scrolled ? "text-slate-900" : "text-white"; 
//   const brandColor = scrolled ? "text-indigo-700" : "text-white";

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out flex items-center ${navHeight} ${navBg}`}>
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
//         <div className="flex justify-between items-center h-full">
          
//           {/* 1. LEFT: Logo & Brand Name */}
//           <Link to="/" className="flex items-center gap-3 h-full group shrink-0">
//             {/* Logo Container */}
//             <div className="h-full flex items-center transition-all duration-500">
//               <img 
//                 src={logo} 
//                 alt="Logo" 
//                 // SCROLL LOGIC: Default h-[90%], Scrolled h-[70%]
//                 className={`w-auto object-contain transition-all duration-500 ease-in-out ${
//                   scrolled ? 'h-[70%]' : 'h-[90%]'
//                 } ${!scrolled && 'brightness-0 invert'}`} 
//               />
//             </div>
            
//             <div className="flex flex-col justify-center leading-none">
//               <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 ${brandColor} ${scrolled ? 'scale-90' : 'scale-100'} origin-left`}>
//                 VS TRADING
//               </span>
//               <span className={`text-[8px] sm:text-[10px] font-medium tracking-[0.15em] uppercase opacity-80 ${textColor}`}>
//                 Company
//               </span>
//             </div>
//           </Link>

//           {/* 2. MIDDLE: Navigation Links */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
//               <Link 
//                 key={item}
//                 to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
//                 className={`${textColor} hover:text-indigo-500 font-semibold text-[15px] transition-all relative group`}
//               >
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
//               </Link>
//             ))}
//           </div>

//           {/* 3. RIGHT: Social Icons */}
//           <div className={`hidden lg:flex items-center space-x-5 border-l ${scrolled ? 'border-gray-200' : 'border-white/20'} pl-8`}>
//             <a href={facebookLink} target="_blank" rel="noreferrer" className={`${textColor} hover:text-[#1877F2] transition-transform hover:scale-110`}><Facebook size={20} /></a>
//             <a href={youtubeLink} target="_blank" rel="noreferrer" className={`${textColor} hover:text-[#FF0000] transition-transform hover:scale-110`}><Youtube size={22} /></a>
//             <a href={instagramLink} target="_blank" rel="noreferrer" className={`${textColor} hover:text-[#E4405F] transition-transform hover:scale-110`}><Instagram size={20} /></a>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="lg:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} p-2 transition-colors`}>
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU (Full Screen) */}
//       <div className={`fixed inset-0 bg-white z-[110] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 lg:hidden`}>
//         <div className="p-6 flex flex-col h-full bg-slate-50">
//           <div className="flex justify-between items-center mb-10">
//               <span className="text-2xl font-bold text-indigo-700">VS TRADING</span>
//               <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={28} /></button>
//           </div>
//           <div className="flex flex-col space-y-6">
//             {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
//               <Link 
//                 key={item} 
//                 to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
//                 onClick={() => setIsOpen(false)} 
//                 className="text-gray-900 text-3xl font-extrabold hover:text-indigo-600 transition-colors border-b border-gray-200 pb-2"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ================================================
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation add kiya
import { Facebook, Youtube, Instagram, Menu, X } from 'lucide-react'; 
import logo from '../../assets/TransparentCompanyLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Current page track karne ke liye

  // Check karein kya hum home page par hain
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

  // --- Dynamic Logic ---
  // Agar Home page nahi hai, toh ALWAYS scrolled state wala look dikhao
  const shouldShowSolidNav = !isHomePage || scrolled;

  const navHeight = shouldShowSolidNav ? "h-16 md:h-20" : "h-24 md:h-32";
  
  // Background logic: Home pe transparent, baki pages pe Light Gray/White
  const navBg = shouldShowSolidNav 
    ? "bg-slate-50/95 backdrop-blur-md border-b border-gray-200 shadow-sm" 
    : "bg-transparent";
    
  const textColor = shouldShowSolidNav ? "text-black" : "text-white"; 
  const brandColor = shouldShowSolidNav ? "text-indigo-700" : "text-white";
  const iconHover = shouldShowSolidNav ? "hover:bg-gray-200" : "hover:bg-white/10";

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

          {/* 2. MIDDLE: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                className={`${textColor} hover:text-indigo-600 font-bold text-[14px] uppercase tracking-wide transition-all relative group`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. RIGHT: Social Icons */}
          <div className={`hidden lg:flex items-center space-x-3 border-l ${shouldShowSolidNav ? 'border-gray-300' : 'border-white/20'} pl-6`}>
            <a href={facebookLink} target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Facebook size={18} /></a>
            <a href={youtubeLink} target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Youtube size={20} /></a>
            <a href={instagramLink} target="_blank" rel="noreferrer" className={`${textColor} p-2 rounded-full ${iconHover} transition-all`}><Instagram size={18} /></a>
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

      {/* MOBILE MENU */}
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
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                onClick={() => setIsOpen(false)} 
                className="text-gray-900 text-4xl font-black hover:text-indigo-600 transition-colors py-2 flex items-center justify-between group"
              >
                {item}
                <div className="h-1 w-0 bg-indigo-600 transition-all group-hover:w-12"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;