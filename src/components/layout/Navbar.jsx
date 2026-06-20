import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-beige-50/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent pt-8 pb-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-32 md:w-40 h-10 flex items-center">
          <Link to="/" className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-500",
            scrolled ? "mt-0" : "mt-1 md:mt-1.5"
          )}>
            <div className={cn(
              "flex items-center justify-center transition-all duration-500 rounded-xl",
              scrolled ? "bg-transparent p-0 shadow-none" : "bg-white/95 backdrop-blur-sm px-3.5 py-1.5 shadow-lg border border-beige-200/30"
            )}>
              <img 
                src="/logo.png" 
                alt="Prime Stage DXB Logo" 
                className={cn(
                  "w-auto transition-all duration-300",
                  scrolled ? "h-24 md:h-28" : "h-16 md:h-20"
                )}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors relative py-1.5",
                scrolled 
                  ? (location.pathname === link.path ? "text-sage-900" : "text-sage-700 hover:text-sage-900") 
                  : (location.pathname === link.path ? "text-white" : "text-beige-100/90 hover:text-white")
              )}
            >
              <span>{link.name}</span>
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activeNavUnderline"
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[2px] rounded-full",
                    scrolled ? "bg-sage-900" : "bg-white"
                  )}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md",
              scrolled 
                ? "bg-sage-900 text-beige-50 hover:bg-sage-800" 
                : "bg-beige-50 text-sage-900 hover:bg-beige-100"
            )}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 focus:outline-none transition-colors",
            scrolled ? "text-sage-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige-50 border-b border-beige-200 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "text-lg font-medium transition-all py-2 pl-3 border-l-2",
                    location.pathname === link.path 
                      ? "text-sage-900 border-sage-900" 
                      : "text-sage-700 border-transparent hover:border-sage-300 hover:pl-4"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-sage-900 text-beige-50 px-6 py-3 rounded-full text-center font-medium mt-4"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
