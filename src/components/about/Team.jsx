import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    name: "Abduljaleel",
    role: "CEO and Founder",
    category: "leadership",
    image: "/team/1.png"
  },
  {
    name: "Munzer Mustafa",
    role: "Creative Director / DOP / Choreographer",
    category: "creative",
    image: "/team/2.png"
  },
  {
    name: "Ashwin Unni",
    role: "Creative Director",
    category: "creative",
    image: "/team/3.png"
  },
  {
    name: "Anuroop Ajith",
    role: "DOP",
    category: "creative",
    image: "/team/4.png"
  },
  {
    name: "Riya Rachel Jacob",
    role: "Choreographer",
    category: "creative",
    image: "/team/5.png"
  },
  {
    name: "Malita",
    role: "Fashion Designer",
    category: "specialist",
    image: "/team/6.png"
  },
  {
    name: "Parveen Kasim",
    role: "Operations Manager",
    category: "operations",
    image: "/team/7.png"
  },
  {
    name: "Devika Jayalakshmi",
    role: "Operations Manager",
    category: "operations",
    image: "/team/8.png"
  },
  {
    name: "Sohan Vallabhan",
    role: "Operations Manager",
    category: "operations",
    image: "/team/9.png"
  },
  {
    name: "Gohan Vallabhan",
    role: "Operations Manager",
    category: "operations",
    image: "/team/ten.png"
  },
  {
    name: "Aosa",
    role: "Operations Manager",
    category: "operations",
    image: "/team/11.png"
  },
  {
    name: "Mariam George",
    role: "Influencer",
    category: "specialist",
    image: "/team/12.png"
  }
];

const categories = [
  { id: 'all', label: 'All Team' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'creative', label: 'Creative & Production' },
  { id: 'operations', label: 'Operations' },
  { id: 'specialist', label: 'Specialists' }
];

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredMembers = activeFilter === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === activeFilter);

  return (
    <section className="pt-10 pb-32 relative bg-beige-50">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8DDCF]/40 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#A7B8A5]/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#7A8F7B]/30 bg-[#7A8F7B]/5 text-[#7A8F7B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Our Team
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-sage-900 leading-[1.1]">
                The Visionaries<br />
                <span className="italic text-sage-500">Behind The Magic</span>
              </h2>
            </motion.div>
          </div>
          
          {/* Filter Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-400 ${
                  activeFilter === cat.id
                    ? 'bg-sage-800 text-beige-50 shadow-md transform scale-105'
                    : 'bg-transparent text-sage-500 hover:text-sage-800 hover:bg-sage-200/50 border border-sage-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                className="group relative cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-sage-200 isolate shadow-lg">
                  {/* Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Corner Accent Graphic */}
                  <svg className="absolute top-4 right-4 w-6 h-6 text-beige-100 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-6 h-[1px] bg-sage-400 group-hover:w-10 group-hover:bg-sage-600 transition-all duration-500" />
                    <span className="text-[10px] tracking-widest font-bold text-sage-500 uppercase">
                      {member.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-sage-900 mb-1 group-hover:text-sage-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-sage-600">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
