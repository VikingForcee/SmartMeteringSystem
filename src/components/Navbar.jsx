import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Simulation", path: "/simulation" },
    { name: "AI", path: "/ai" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo with enhanced styling */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <Link 
              to="/"
              className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest transform hover:scale-105 transition-transform duration-300"
            >
              SmartIndia
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-lg
                    ${location.pathname === item.path 
                      ? 'text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]' 
                      : 'text-gray-300 hover:text-white'
                    }
                    hover:bg-white/5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
                    hover:transform hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300
                    ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 transform origin-center
              ${isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300
              ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 transform origin-center
              ${isOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-y-0'}`}></span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 border-t border-cyan-500/20">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform
                  ${location.pathname === item.path 
                    ? 'text-cyan-400 bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }
                  hover:translate-x-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                <span className="relative">
                  {item.name}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300
                    ${location.pathname === item.path ? 'w-full' : 'w-0'}`}></div>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}