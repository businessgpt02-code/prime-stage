import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MissionVision = () => {
  const { scrollYProgress } = useScroll();
  const rotateSymbol = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="pt-12 pb-12 relative overflow-hidden bg-beige-100/50">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#E8DDCF]/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#A7B8A5]/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" itemScope itemType="https://schema.org/Organization">
        <meta itemprop="name" content="Prime Stage DXB" />
        <meta itemprop="address" content="Al Ghazal Mall, Dubai, UAE" />
        
        {/* Section Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#7A8F7B]/30 bg-[#7A8F7B]/5 text-[#7A8F7B] text-sm font-medium tracking-widest uppercase mb-6">
              Our Purpose
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#7A8F7B] mb-8 leading-[1.1]" itemprop="slogan">
              Inspiring Growth Through<br/>
              <span className="italic text-[#A7B8A5]">Creativity & Wellness</span>
            </h2>
            <p className="text-lg md:text-xl text-[#7A8F7B]/80 leading-relaxed" itemprop="description">
              At <strong className="text-[#7A8F7B]">Prime Stage DXB</strong>, we believe that artistic creativity and physical wellness are deeply connected. Our purpose as a premier creative wellness center in Dubai is to guide individuals through transformative experiences that nurture the mind, body, and soul.
            </p>
          </motion.div>
        </div>

        {/* Cards Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 mb-12">
          
          {/* Mission Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-1/2 max-w-lg relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7B8A5] to-[#7A8F7B] rounded-[40px] rounded-tr-[100px] rounded-bl-[100px] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 opacity-20 blur-xl" />
            
            <div className="relative bg-gradient-to-br from-[#7A8F7B]/10 to-[#A7B8A5]/20 backdrop-blur-xl border border-[#F5EFE7]/50 rounded-[40px] rounded-tr-[100px] rounded-bl-[100px] p-10 md:p-14 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-700">
              
              {/* Floating particles */}
              <motion.div 
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-2 h-2 rounded-full bg-[#E8DDCF]"
              />
              <motion.div 
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-[#7A8F7B]"
              />

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#F5EFE7]/80 flex items-center justify-center mb-8 shadow-sm">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A8F7B" strokeWidth="1.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>

              <h3 className="font-serif text-4xl text-[#7A8F7B] mb-6">Our Mission</h3>
              <p className="text-[#7A8F7B]/90 text-lg leading-relaxed">
                To create a welcoming space in Dubai where music production, fine art workshops, contemporary dance, and wellness come together, empowering individuals to explore their passions, find inner physical balance, and embrace lifelong growth.
              </p>
            </div>
          </motion.div>

          {/* Central Artistic Element */}
          <motion.div 
            style={{ rotate: rotateSymbol }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-20 items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Abstract ribbons and shapes */}
              <div className="absolute w-full h-full rounded-full border-[1px] border-[#7A8F7B]/30 border-dashed animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] rounded-full border-[1px] border-[#A7B8A5]/50 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#E8DDCF] to-[#F5EFE7] shadow-xl opacity-90 blur-[2px]" />
              
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="absolute z-10 text-[#7A8F7B]">
                <path d="M50 0 C70 30, 100 50, 100 50 C100 50, 70 70, 50 100 C30 70, 0 50, 0 50 C0 50, 30 30, 50 0 Z" fill="currentColor" fillOpacity="0.8"/>
                <circle cx="50" cy="50" r="10" fill="#F5EFE7" />
              </svg>
            </div>
          </motion.div>

          {/* Vision Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-lg relative group lg:mt-24 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8DDCF] to-[#F5EFE7] rounded-[40px] rounded-tl-[100px] rounded-br-[100px] transform rotate-2 group-hover:rotate-0 transition-transform duration-700 opacity-50 blur-xl" />
            
            <div className="relative bg-[#F5EFE7]/80 backdrop-blur-xl border border-[#E8DDCF] rounded-[40px] rounded-tl-[100px] rounded-br-[100px] p-10 md:p-14 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-700">
              
              {/* Decorative organic shapes */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E8DDCF]/50 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#A7B8A5]/20 rounded-full blur-xl" />
              
              {/* Elegant flowing line art */}
              <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 200 200" preserveAspectRatio="none">
                <path d="M0,100 C50,150 150,50 200,100" fill="none" stroke="#7A8F7B" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#E8DDCF]/80 flex items-center justify-center mb-8 shadow-sm">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A8F7B" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>

              <h3 className="font-serif text-4xl text-[#7A8F7B] mb-6">Our Vision</h3>
              <p className="text-[#7A8F7B]/90 text-lg leading-relaxed">
                To stand as Dubai's premier destination for creative expression and wellbeing, inspiring a vibrant community where every individual is encouraged to create fearlessly, practice yoga mindfully, and live with clarity.
              </p>
            </div>
          </motion.div>
          
        </div>

        {/* 4 Value Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Creativity",
              desc: "Inspiring artistic expression through music, dance, and visual arts."
            },
            {
              title: "Wellness",
              desc: "Encouraging mindfulness, balance, and healthy living."
            },
            {
              title: "Community",
              desc: "Creating an inclusive and supportive environment."
            },
            {
              title: "Growth",
              desc: "Helping individuals discover their full potential."
            }
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#E8DDCF]/30 backdrop-blur-sm border border-[#E8DDCF] p-8 rounded-3xl hover:bg-[#E8DDCF]/60 transition-colors duration-500 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#7A8F7B]" />
                <h4 className="font-serif text-2xl text-[#7A8F7B]">{block.title}</h4>
              </div>
              <p className="text-[#7A8F7B]/80 leading-relaxed text-sm">
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
