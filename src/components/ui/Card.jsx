import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const Card = ({ children, className, hover = true, delay = 0, bgContent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "bg-beige-50 rounded-3xl p-8 shadow-sm border border-beige-200/50 transition-all duration-300 relative overflow-hidden",
        hover && "hover:shadow-md hover:-translate-y-1 hover:border-beige-300",
        className
      )}
    >
      {bgContent}
      {/* Subtle background glow effect */}
      {!bgContent && <div className="absolute -top-24 -right-24 w-48 h-48 bg-sage-100 rounded-full blur-3xl opacity-50 pointer-events-none" />}
      <div className="relative z-10 h-full flex flex-col flex-grow">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
