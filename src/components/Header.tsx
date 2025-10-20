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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
        isScrolled
          ? 'md:bg-navy/80 md:backdrop-blur-md md:shadow-xl md:ring-1 md:ring-lightest-navy/50'
          : 'md:bg-navy/50 md:backdrop-blur-sm md:shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-3 md:py-4 flex justify-between items-center bg-navy md:bg-navy/40 border border-lightest-navy/20 rounded-xl shadow-md">
        <a href="#hero" className="text-2xl font-bold text-green font-mono z-50 transition-transform duration-200 hover:scale-105">LT</a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a href={link.href} className="relative text-light-slate hover:text-green transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green after:transition-all after:duration-300 hover:after:w-full">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className="px-4 py-2 border border-green text-green rounded-md hover:bg-green/10 transition-colors duration-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green/40 focus-visible:ring-offset-2 focus-visible:ring-offset-green/10">
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="p-2 rounded-md border border-green/40 text-green hover:bg-green/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
          >
            {isOpen ? <X className="text-green" /> : <Menu className="text-green" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-black/60 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Slide-in Drawer */}
            <motion.aside
              className="md:hidden fixed inset-x-0 top-16 bottom-0 w-screen max-w-none bg-light-navy pt-6 pb-8 px-0 shadow-xl ring-1 ring-lightest-navy/40 z-40 overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.ul
                className="flex flex-col divide-y divide-lightest-navy/20"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={mobileLinkVariants}>
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="block px-6 py-4 text-lg text-lightest-slate hover:text-green hover:bg-navy/30 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={mobileLinkVariants}>
                  <div className="px-6 py-4">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 border border-green text-green rounded-md hover:bg-green/10 transition-colors duration-300 text-lg text-center"
                    >
                      Resume
                    </a>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
