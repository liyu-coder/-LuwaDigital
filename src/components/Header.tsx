import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: -0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/80 backdrop-blur-md shadow-xl ring-1 ring-lightest-navy/50' : 'bg-navy/50 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-3 md:py-4 flex justify-between items-center bg-navy/40 border border-lightest-navy/20 rounded-xl shadow-md">
        <a href="#hero" className="text-2xl font-bold text-green font-mono z-50 transition-transform duration-200 hover:scale-105">LT</a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a href={link.href} className="relative text-light-slate hover:text-green transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green after:transition-all after:duration-300 hover:after:w-full">
                <span className="text-green font-mono">0{index + 1}.</span> {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-green text-green rounded-md hover:bg-green/10 transition-colors duration-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green/40 focus-visible:ring-offset-2 focus-visible:ring-offset-green/10">
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="text-green" /> : <Menu className="text-green" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-navy/95 backdrop-blur-sm pt-24"
          >
            <motion.ul
              className="flex flex-col items-center justify-center h-full space-y-8"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={mobileLinkVariants}>
                  <a href={link.href} onClick={toggleMenu} className="text-2xl text-lightest-slate hover:text-green transition-colors duration-300">
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 px-6 py-3 border border-green text-green rounded-md hover:bg-green/10 transition-colors duration-300 text-lg">
                  Resume
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
