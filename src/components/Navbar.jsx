import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      subItems: [
        { name: 'Government Approvals', path: '/services?cat=govt' },
        { name: 'Safety & Compliance', path: '/services?cat=safety' },
        { name: 'Testing Services', path: '/services?cat=testing' }
      ]
    },
    { name: 'Clients', path: '/clients' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-[5%] flex items-center ${isScrolled ? 'h-[75px] bg-white/90 backdrop-blur-md shadow-soft' : 'h-[90px]'}`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col group" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-bold text-primary leading-none tracking-wider font-poppins group-hover:scale-105 transition-transform origin-left">VENUS</span>
          <span className="text-[0.7rem] font-semibold text-secondary tracking-[0.2em] font-poppins">CIVIL ENGINEERS</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center h-full">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative h-full flex items-center">
                <Link 
                  to={link.path} 
                  className={`flex items-center gap-1 font-semibold transition-colors duration-200 py-6 px-1 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}
                >
                  {link.name}
                  {link.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>
                
                {link.subItems && (
                  <ul className="absolute top-[85%] left-0 w-[250px] bg-white p-4 shadow-xl rounded-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-2 border border-black/5">
                    {link.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link to={sub.path} className="block px-3 py-2 rounded-md hover:bg-primary/5 hover:text-primary transition-colors font-medium text-sm">{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-4 left-0 w-full h-[3px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <Link to="/contact">
            <Button variant="primary" size="sm" className="hidden lg:flex shadow-primary-glow font-bold">Get Quote</Button>
          </Link>
          <button className="md:hidden text-secondary p-2 bg-gray-50 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[0] right-0 w-[280px] h-screen bg-white shadow-2xl transition-all duration-500 ease-in-out z-[999] md:hidden flex flex-col pt-24 px-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-10 right-8 text-secondary" onClick={() => setIsOpen(false)}>
           <X size={28} />
        </button>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-bold flex justify-between items-center ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
              >
                {link.name}
                {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-primary" />}
              </Link>
            </li>
          ))}
          <li className="pt-8 mt-auto mb-10">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full shadow-primary-glow">Get Quote</Button>
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Scroll Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] md:hidden" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
