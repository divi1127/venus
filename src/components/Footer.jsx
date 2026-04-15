import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 mt-24">
      <div className="max-w-7xl mx-auto px-5 pb-10">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          
          {/* LOGO + ABOUT */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider">VENUS</span>
              <span className="text-[0.7rem] text-gray-400 tracking-[0.2em]">
                CIVIL ENGINEERS
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-xs">
              Professional engineering and consultancy firm specialized in 
              government approvals, safety certifications, and industrial compliance. 
              Excellence built on 45+ years of trust.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-md hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Major Clients', path: '/clients' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-1.5"
                  >
                    <ArrowRight size={14} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Services
            </h4>

            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link to="/services">DTCP / LPA Approval</Link></li>
              <li><Link to="/services">TN Pollution Board</Link></li>
              <li><Link to="/services">Fire Safety License</Link></li>
              <li><Link to="/services">Machinery Testing</Link></li>
              <li><Link to="/services">Soil Testing</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Contact Info
            </h4>

            <div className="space-y-6 text-gray-400">
              
              <div className="flex gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <div>
                  <p>9500610109</p>
                  <p>0452-2530669</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <p>venus@civilengineers.com</p>
              </div>

              <div className="flex gap-4">
                <MapPin size={20} className="text-primary shrink-0" />
                <p>Madurai, Tamil Nadu, India</p>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm text-gray-400 gap-6 md:gap-4 text-center md:text-left">
          
          <p>
            © {new Date().getFullYear()} Venus Civil Engineers. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;