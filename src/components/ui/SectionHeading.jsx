import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className,
  titleClass,
  subtitleClass
}) => {
  return (
    <div className={cn("flex flex-col gap-4", align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className={cn("text-sage-500 font-medium uppercase tracking-widest text-sm", subtitleClass)}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn("font-serif text-4xl md:text-5xl lg:text-6xl text-sage-900", titleClass)}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
