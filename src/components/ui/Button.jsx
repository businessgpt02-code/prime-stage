import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-sage-900 text-beige-50 hover:bg-sage-800 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-beige-200 text-sage-900 hover:bg-beige-300 shadow-sm",
    outline: "border-2 border-sage-900 text-sage-900 hover:bg-sage-900 hover:text-beige-50",
    ghost: "text-sage-900 hover:bg-sage-100",
    glass: "glass text-sage-900 hover:bg-beige-50/90",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
