import React from 'react';
import { motion } from 'framer-motion';

// Helper component for floating leaves in the background
const FloatingLeaf = ({ className, delay = 0, duration = 6, scale = 1, rotate = 0 }) => (
  <motion.div
    className={`absolute pointer-events-none text-[#7A8F7B]/20 ${className}`}
    animate={{
      y: [0, -25, 0],
      x: [0, 15, 0],
      rotate: [rotate, rotate + 15, rotate - 10, rotate]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    style={{ scale }}
  >
    <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 10 C 65 30, 80 50, 75 70 C 70 80, 55 90, 50 95 C 45 90, 30 80, 25 70 C 20 50, 35 30, 50 10 Z" />
      <path d="M50 10 L50 95" stroke="#7A8F7B" strokeWidth="2" opacity="0.3" />
      <path d="M50 40 Q60 35 65 30" stroke="#7A8F7B" strokeWidth="1.5" opacity="0.3" />
      <path d="M50 55 Q40 50 35 45" stroke="#7A8F7B" strokeWidth="1.5" opacity="0.3" />
      <path d="M50 70 Q60 65 68 60" stroke="#7A8F7B" strokeWidth="1.5" opacity="0.3" />
    </svg>
  </motion.div>
);

const CoreValues = () => {
  const values = [
    {
      id: 'creativity',
      title: 'Creativity',
      subtitle: 'OUR CREATIVITY',
      desc: 'We celebrate individuality and encourage artistic expression through music, art, dance, and limitless imagination.',
      shapeClass: 'rounded-[60%_40%_70%_30%/45%_50%_60%_55%]',
      shapeClassHover: 'group-hover:rounded-[50%_50%_60%_40%/60%_50%_50%_40%]',
      colorClass: 'from-[#7A8F7B]/5 via-[#A7B8A5]/10 to-[#E8DDCF]/5',
      position: 'lg:absolute lg:-top-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-[270px]',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="#7A8F7B" strokeWidth="1.5" className="w-20 h-20 text-[#7A8F7B]">
          <path d="M15 80 C 30 70, 40 40, 60 40 C 75 40, 80 60, 90 45" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 65 L30 50 M40 60 L40 45 M50 55 L50 35 M60 52 L60 40 M70 58 L70 42 M80 65 L80 50" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M45 25 C 50 20, 55 20, 60 25 C 65 30, 55 35, 50 40" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="60" cy="25" r="2" fill="#7A8F7B" />
          <path d="M15 80 Q10 85 8 90" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'wellness',
      title: 'Wellness',
      subtitle: 'OUR WELLNESS',
      desc: 'We nurture mental, physical, and emotional wellbeing through wellness practices designed for modern living.',
      shapeClass: 'rounded-t-full rounded-b-[40px]',
      shapeClassHover: 'group-hover:rounded-t-[80px] group-hover:rounded-b-[80px]',
      colorClass: 'from-[#A7B8A5]/5 via-[#E8DDCF]/10 to-[#F5EFE7]/5',
      position: 'lg:absolute lg:top-[18%] lg:right-[-6%] lg:w-[270px]',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="#7A8F7B" strokeWidth="1.5" className="w-20 h-20 text-[#7A8F7B]">
          <path d="M30 75 C35 65, 45 65, 50 70 C55 65, 65 65, 70 75 C55 80, 45 80, 30 75 Z" fill="#7A8F7B" fillOpacity="0.08" />
          <path d="M50 70 L50 48" strokeWidth="2" />
          <circle cx="50" cy="40" r="5" fill="#7A8F7B" fillOpacity="0.2" stroke="#7A8F7B" strokeWidth="1.5" />
          <path d="M38 52 C42 45, 45 42, 50 42 C55 42, 58 45, 62 52" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="50" cy="40" r="14" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="50" cy="40" r="22" strokeDasharray="4 4" opacity="0.4" />
          <path d="M25 80 C30 85, 45 82, 50 78 C55 82, 70 85, 75 80" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 'community',
      title: 'Community',
      subtitle: 'OUR COMMUNITY',
      desc: 'We foster an inclusive environment where creativity flourishes and meaningful connections are formed.',
      shapeClass: 'rounded-[60%_40%_60%_40%/50%_50%_50%_50%]',
      shapeClassHover: 'group-hover:rounded-[45%_55%_45%_55%/55%_45%_55%_45%]',
      colorClass: 'from-[#E8DDCF]/5 via-[#F5EFE7]/10 to-[#7A8F7B]/5',
      position: 'lg:absolute lg:bottom-0 lg:right-[6%] lg:w-[270px]',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="#7A8F7B" strokeWidth="1.5" className="w-20 h-20 text-[#7A8F7B]">
          <circle cx="35" cy="45" r="8" strokeWidth="2" fill="#7A8F7B" fillOpacity="0.05" />
          <circle cx="65" cy="45" r="8" strokeWidth="2" fill="#7A8F7B" fillOpacity="0.05" />
          <circle cx="50" cy="65" r="8" strokeWidth="2" fill="#7A8F7B" fillOpacity="0.05" />
          <path d="M43 45 L57 45 M40 51 L46 58 M60 51 L54 58" strokeDasharray="2 2" />
          <path d="M20 50 C 15 35, 30 25, 50 30 C 70 25, 85 35, 80 50 C 75 65, 65 80, 50 85 C 35 80, 25 65, 20 50 Z" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M50 20 C52 17, 56 15, 58 17 C56 20, 52 21, 50 20 Z" fill="#7A8F7B" fillOpacity="0.3" />
          <path d="M15 45 C13 43, 11 39, 13 37 C15 39, 17 43, 15 45 Z" fill="#7A8F7B" fillOpacity="0.3" />
        </svg>
      )
    },
    {
      id: 'growth',
      title: 'Growth',
      subtitle: 'OUR GROWTH',
      desc: 'We empower individuals to discover their passions, embrace challenges, and continuously grow.',
      shapeClass: 'rounded-[30%_70%_40%_60%/50%_40%_60%_50%]',
      shapeClassHover: 'group-hover:rounded-[50%_50%_50%_50%/50%_50%_50%_50%]',
      colorClass: 'from-[#7A8F7B]/5 via-[#F5EFE7]/10 to-[#A7B8A5]/5',
      position: 'lg:absolute lg:bottom-0 lg:left-[6%] lg:w-[270px]',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="#7A8F7B" strokeWidth="1.5" className="w-20 h-20 text-[#7A8F7B]">
          <path d="M50 85 C48 70, 45 60, 50 45" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 58 C40 54, 30 58, 25 50 C20 42, 28 35, 33 38" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 48 C55 38, 65 34, 75 38 C80 42, 75 52, 70 48" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 45 C50 30, 45 20, 38 18 C30 15, 32 28, 42 28" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 52 C58 50, 68 55, 72 65" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 48 C20 46, 22 42, 25 44 C26 46, 24 48, 22 48 Z" fill="#7A8F7B" fillOpacity="0.4" />
          <path d="M72 36 C74 34, 76 36, 75 39 C73 40, 71 38, 72 36 Z" fill="#7A8F7B" fillOpacity="0.4" />
          <path d="M36 18 C35 15, 39 14, 40 17 C39 19, 37 19, 36 18 Z" fill="#7A8F7B" fillOpacity="0.4" />
        </svg>
      )
    },
    {
      id: 'authenticity',
      title: 'Authenticity',
      subtitle: 'OUR AUTHENTICITY',
      desc: 'We encourage everyone to express themselves genuinely and embrace their individuality with confidence.',
      shapeClass: 'rounded-[50%_50%_30%_70%/60%_40%_60%_40%]',
      shapeClassHover: 'group-hover:rounded-[40%_60%_50%_50%/50%_50%_65%_35%]',
      colorClass: 'from-[#E8DDCF]/5 via-[#A7B8A5]/10 to-[#F5EFE7]/5',
      position: 'lg:absolute lg:top-[18%] lg:left-[-6%] lg:w-[270px]',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="#7A8F7B" strokeWidth="1.2" className="w-20 h-20 text-[#7A8F7B]">
          <path d="M50 30 C 60 30, 70 40, 70 55 C 70 65, 65 75, 65 80" strokeLinecap="round" />
          <path d="M50 38 C 56 38, 62 45, 62 55 C 62 62, 58 70, 58 75" strokeLinecap="round" />
          <path d="M50 46 C 53 46, 55 50, 55 55 C 55 60, 52 65, 52 70" strokeLinecap="round" />
          <path d="M50 22 C 65 22, 78 35, 78 55 C 78 68, 72 80, 72 85" strokeLinecap="round" />
          <path d="M50 14 C 70 14, 86 30, 86 55 C 86 72, 78 85, 78 90" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 22 C 35 22, 22 35, 22 55 C 22 65, 25 72, 28 78" strokeLinecap="round" />
          <path d="M50 30 C 40 30, 30 40, 30 55 C 30 62, 33 68, 36 72" strokeLinecap="round" />
          <path d="M50 38 C 44 38, 38 45, 38 55" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="pt-12 pb-12 relative overflow-hidden bg-white isolate min-h-screen">
      {/* SVG Grain Texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none -z-10">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Large beige organic background waves */}
      <svg className="absolute top-0 left-0 w-full h-[350px] text-[#E8DDCF]/40 pointer-events-none -z-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,128C288,160,576,224,864,224C1152,224,1296,160,1440,128L1440,0L0,0Z"></path>
      </svg>
      <svg className="absolute bottom-0 left-0 w-full h-[350px] text-[#E8DDCF]/35 pointer-events-none -z-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,192C288,224,576,224,864,192C1152,160,1296,96,1440,64L1440,320L0,320Z"></path>
      </svg>

      {/* Soft blurred circles / Watercolor blurs */}
      <div className="absolute top-[20%] left-[10%] w-[550px] h-[550px] rounded-full bg-[#A7B8A5]/10 blur-[120px] pointer-events-none -z-10 mix-blend-multiply" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#E8DDCF]/45 blur-[140px] pointer-events-none -z-10 mix-blend-multiply" />

      {/* Minimal botanical background line art drawings */}
      <svg className="absolute right-0 top-[12%] w-[450px] h-[650px] text-[#7A8F7B]/5 pointer-events-none -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.35">
        <path d="M10 90 Q30 50 85 15 M85 15 C75 25 62 42 72 52 C82 62 90 52 85 15 M85 15 C80 30 60 40 55 35 C50 30 60 20 85 15 M45 52 C35 57 25 47 35 42 C45 37 50 47 45 52" />
        <path d="M30 65 Q20 70 12 60 C4 50 16 48 30 65" />
      </svg>
      <svg className="absolute left-[-50px] bottom-[8%] w-[400px] h-[600px] text-[#7A8F7B]/4 pointer-events-none -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.35">
        <path d="M5 5 Q35 45 85 85 M85 85 C75 75 62 55 72 45 C82 35 90 55 85 85 M85 85 C80 70 60 60 55 65 C50 70 60 80 85 85 M45 48 C35 43 25 53 35 58 C45 63 50 53 45 48" strokeDasharray="1 1" />
      </svg>

      {/* Floating leaves in background */}
      <FloatingLeaf className="top-[15%] left-[8%]" delay={0} duration={7} scale={0.9} rotate={15} />
      <FloatingLeaf className="top-[45%] right-[5%]" delay={2.5} duration={9} scale={1.1} rotate={-25} />
      <FloatingLeaf className="bottom-[18%] left-[12%]" delay={1.2} duration={8} scale={0.8} rotate={45} />
      <FloatingLeaf className="bottom-[10%] right-[18%]" delay={3.8} duration={10} scale={1.0} rotate={110} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#7A8F7B]/30 bg-[#7A8F7B]/5 text-[#5F6E5F] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              OUR CORE VALUES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#7A8F7B] mb-6 leading-tight">
              "The Principles That Shape<br className="hidden md:block"/> Every Experience"
            </h2>
            <p className="text-base md:text-lg text-[#5F6E5F] leading-relaxed max-w-2xl mx-auto opacity-90">
              At Prime Stage DXB, our values guide everything we create — from wellness practices and artistic expression to building a community where every individual feels inspired, supported, and empowered.
            </p>
          </motion.div>
        </div>

        {/* Circular Ecosystem (Visible on desktop) */}
        <div className="relative w-full max-w-[850px] aspect-square hidden lg:flex items-center justify-center mb-6 mt-8">
          
          {/* Center Emblem Container */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[320px] h-[320px] rounded-full z-20 flex items-center justify-center"
          >
            {/* Pulsing Outer Glowing Rings */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#7A8F7B]/20 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1.08, 0.98, 1.08], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -inset-4 rounded-full border border-[#A7B8A5]/10 pointer-events-none"
            />

            {/* Inner Rotating Graphic Disk */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-[#7A8F7B]/30 bg-gradient-to-tr from-[#E8DDCF]/90 to-[#F5EFE7]/90 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              {/* Ribbon Swirls inside SVG */}
              <svg className="w-full h-full text-[#7A8F7B]/15" viewBox="0 0 200 200" fill="none">
                <path d="M20,100 C 40,30, 160,30, 180,100 C 160,170, 40,170, 20,100 Z" stroke="currentColor" strokeWidth="0.75" />
                <path d="M100,20 C 30,40, 30,160, 100,180 C 170,160, 170,40, 100,20 Z" stroke="currentColor" strokeWidth="0.75" />
                <path d="M50,50 C 80,20, 120,180, 150,150" stroke="#A7B8A5" strokeWidth="1" strokeLinecap="round" />
                <path d="M150,50 C 120,20, 80,180, 50,150" stroke="#A7B8A5" strokeWidth="1" strokeLinecap="round" />
              </svg>
              {/* Central soft blur shapes */}
              <div className="absolute w-[60%] h-[60%] rounded-full bg-[#E8DDCF]/35 blur-[6px]" />
            </motion.div>

            {/* Stationary Overlay Layer for Text & Center Badge */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div className="w-[125px] h-[125px] rounded-full bg-[#F5EFE7] border border-[#E8DDCF] shadow-xl flex flex-col items-center justify-center text-center p-3">
                <span className="font-serif text-[#5F6E5F] text-xs font-bold tracking-widest uppercase">Prime</span>
                <span className="font-serif text-[#A7B8A5] text-[10px] tracking-widest uppercase mt-0.5">Stage DXB</span>
              </div>
              
              {/* Surrounding Symbol Labels */}
              {/* Top: Mind */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[9px] font-semibold tracking-widest uppercase px-3 py-0.5 rounded-full backdrop-blur-sm shadow-sm select-none">
                Mind
              </div>
              {/* Right: Body */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[9px] font-semibold tracking-widest uppercase px-3 py-0.5 rounded-full backdrop-blur-sm shadow-sm select-none">
                Body
              </div>
              {/* Bottom: Community */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[9px] font-semibold tracking-widest uppercase px-3 py-0.5 rounded-full backdrop-blur-sm shadow-sm select-none">
                Community
              </div>
              {/* Left: Creativity */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[9px] font-semibold tracking-widest uppercase px-3 py-0.5 rounded-full backdrop-blur-sm shadow-sm select-none">
                Creativity
              </div>
            </div>
          </motion.div>

          {/* Render 5 Value Cards in Circle Layout */}
          {values.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 45, damping: 15, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden bg-gradient-to-br ${val.colorClass} backdrop-blur-xl border border-[#E8DDCF]/40 p-8 shadow-xl transition-all duration-700 ${val.shapeClass} ${val.shapeClassHover} ${val.position} cursor-pointer flex flex-col items-center justify-center min-h-[290px]`}
            >
              {/* Background shifting gradient and soft glow */}
              <div className="absolute inset-0 bg-[#A7B8A5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <div className="absolute -inset-10 bg-gradient-to-br from-transparent via-[#A7B8A5]/10 to-[#E8DDCF]/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 blur-xl transition-all duration-700 -z-10" />
              
              {/* Illustration container */}
              <div className="w-20 h-20 flex items-center justify-center mb-5 text-[#7A8F7B] group-hover:scale-115 group-hover:rotate-3 transition-all duration-700">
                {val.icon}
              </div>

              {/* Card content */}
              <div className="text-center">
                <span className="text-[9px] tracking-widest font-bold text-[#A7B8A5] uppercase block mb-1">
                  {val.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#5F6E5F] mb-2 font-medium">
                  {val.title}
                </h3>
                <p className="text-xs text-[#5F6E5F]/85 leading-relaxed font-sans max-w-[180px] mx-auto px-2">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive Layout for Mobile/Tablet (<lg) */}
        <div className="w-full lg:hidden flex flex-col items-center gap-10 mt-6">
          {/* Central Emblem shown as introductory banner */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[280px] h-[280px] rounded-full relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-[#7A8F7B]/20 pointer-events-none" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-dashed border-[#7A8F7B]/30 bg-gradient-to-tr from-[#E8DDCF]/90 to-[#F5EFE7]/90 shadow-lg flex items-center justify-center overflow-hidden"
            >
              <svg className="w-full h-full text-[#7A8F7B]/15" viewBox="0 0 200 200" fill="none">
                <path d="M20,100 C 40,30, 160,30, 180,100 C 160,170, 40,170, 20,100 Z" stroke="currentColor" strokeWidth="0.75" />
                <path d="M100,20 C 30,40, 30,160, 100,180 C 170,160, 170,40, 100,20 Z" stroke="currentColor" strokeWidth="0.75" />
              </svg>
              <div className="absolute w-[60%] h-[60%] rounded-full bg-[#E8DDCF]/35 blur-[6px]" />
            </motion.div>

            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div className="w-[110px] h-[110px] rounded-full bg-[#F5EFE7] border border-[#E8DDCF] shadow-md flex flex-col items-center justify-center text-center p-2">
                <span className="font-serif text-[#5F6E5F] text-xs font-bold tracking-widest uppercase">Prime</span>
                <span className="font-serif text-[#A7B8A5] text-[9px] tracking-widest uppercase mt-0.5">Stage DXB</span>
              </div>
              
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[8px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                Mind
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[8px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                Body
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[8px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                Community
              </div>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#7A8F7B]/10 border border-[#7A8F7B]/20 text-[#5F6E5F] text-[8px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                Creativity
              </div>
            </div>
          </motion.div>

          {/* Staggered Vertical/Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
            {values.map((val, idx) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden bg-gradient-to-br ${val.colorClass} backdrop-blur-xl border border-[#E8DDCF]/40 p-8 shadow-md transition-all duration-700 ${val.shapeClass} ${val.shapeClassHover} cursor-pointer flex flex-col items-center text-center justify-center min-h-[260px]`}
              >
                <div className="absolute inset-0 bg-[#A7B8A5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                <div className="absolute -inset-10 bg-gradient-to-br from-transparent via-[#A7B8A5]/10 to-[#E8DDCF]/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 blur-xl transition-all duration-700 -z-10" />
                
                <div className="w-18 h-18 flex items-center justify-center mb-4 text-[#7A8F7B] group-hover:scale-110 group-hover:rotate-2 transition-all duration-700">
                  {val.icon}
                </div>

                <div>
                  <span className="text-[9px] tracking-widest font-bold text-[#A7B8A5] uppercase block mb-1">
                    {val.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#5F6E5F] mb-2 font-medium">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#5F6E5F]/85 leading-relaxed font-sans max-w-[200px] mx-auto px-2">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
