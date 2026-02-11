import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
          ? 'bg-offwhite/90 dark:bg-darkbg/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold text-terracotta tracking-tighter">
          AO.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-charcoal dark:text-gray-300 hover:text-terracotta transition-colors tracking-wide uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-charcoal dark:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-offwhite dark:bg-darkcard border-t border-gray-100 dark:border-gray-800 shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-serif text-lg text-charcoal dark:text-gray-200 hover:text-terracotta"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;