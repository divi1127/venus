import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-br from-primary to-[#ff6b6b] text-white shadow-[0_4px_15px_rgba(230,57,70,0.4)] hover:shadow-[0_6px_20px_rgba(230,57,70,0.4)]',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-primary hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3 text-[0.95rem]',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      className={`relative inline-flex items-center justify-center font-poppins font-semibold rounded-lg cursor-pointer transition-all duration-300 overflow-hidden whitespace-nowrap z-0 ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 w-full h-full bg-white/10 rotate-45 -translate-y-full transition-transform duration-500 hover:translate-y-full"></div>
    </motion.button>
  );
};

export default Button;
