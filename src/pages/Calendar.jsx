import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

// SVG Assets for background decoration
const SparkleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" opacity="0.3" />
  </svg>
);

const events = [
  { date: "Wed 24 Jun", time: "19:00", title: "Beginner DJ Lab", category: "Music", details: "4 spots · AED 180" },
  { date: "Thu 25 Jun", time: "18:30", title: "Hip Hop Foundations", category: "Movement", details: "6 spots · AED 90" },
  { date: "Fri 26 Jun", time: "11:00", title: "Textured Art Morning", category: "Creative", details: "8 spots · AED 150" },
  { date: "Fri 26 Jun", time: "19:30", title: "Candle-lit Sound Bath", category: "Wellness", details: "12 spots · AED 120" },
  { date: "Sat 27 Jun", time: "20:00", title: "Music Production 101", category: "Music", details: "5 spots · AED 220" },
  { date: "Sun 28 Jun", time: "18:00", title: "K-Pop Choreo Session", category: "Movement", details: "10 spots · AED 90" },
  { date: "Mon 29 Jun", time: "10:00", title: "Vinyasa Flow", category: "Wellness", details: "14 spots · AED 70" },
  { date: "Mon 29 Jun", time: "16:00", title: "Ceramics: Hand-building", category: "Creative", details: "8 spots · AED 200" },
  { date: "Tue 30 Jun", time: "Flexible", title: "Movement Studio — open slots", category: "Movement", details: "Hourly · From AED 120/hr" },
  { date: "Wed 01 Jul", time: "Flexible", title: "Music Studio — open slots", category: "Music", details: "Hourly · From AED 150/hr" },
  { date: "Thu 02 Jul", time: "19:00", title: "Afro Dance Night", category: "Movement", details: "20 spots · AED 100" },
  { date: "Fri 03 Jul", time: "18:30", title: "Bollywood Workshop", category: "Movement", details: "12 spots · AED 110" }
];

const categoryColors = {
  Music: "bg-[#7A8F7B]/10 text-[#5F6E5F] border-[#7A8F7B]/30",
  Movement: "bg-[#A7B8A5]/10 text-[#5F6E5F] border-[#A7B8A5]/30",
  Creative: "bg-[#E8DDCF]/40 text-[#5F6E5F] border-[#E8DDCF]/60",
  Wellness: "bg-[#F5EFE7] text-[#7A8F7B] border-[#E8DDCF]/50",
};

const Calendar = () => {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Schedule & Calendar | Prime Stage DXB";
  }, []);

  const handleBook = (eventTitle) => {
    const message = encodeURIComponent(`Hi Prime Stage DXB, I'd like to book a spot for ${eventTitle}`);
    window.open(`https://wa.me/971543867889?text=${message}`, '_blank');
  };

  return (
    <div className="w-full bg-beige-50 min-h-screen relative overflow-hidden isolate pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8DDCF]/40 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-multiply" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-[#A7B8A5]/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply" />
      <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-[#E8DDCF]/50 rounded-full blur-[140px] pointer-events-none -z-10 mix-blend-multiply" />

      {/* SVG Grain Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none -z-10">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-end justify-center pb-36 overflow-hidden isolate"
        aria-label="Prime Stage DXB Schedule & Calendar"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 bg-black" role="presentation">
          <img
            src="/gallery/hero.png"
            alt="Art and wellness workshops at Prime Stage DXB"
            className="w-full h-full object-cover opacity-50"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6 px-4 py-1.5 rounded-full border border-[#E8DDCF]/20 bg-black/40 backdrop-blur-sm text-[#E8DDCF] text-sm font-medium tracking-wide inline-block"
          >
            The Schedule
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5EFE7] mb-6 leading-tight"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
          >
            Upcoming<br />
            <span className="italic text-[#E8DDCF]">Experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-[#F5EFE7]/90 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Reserve your spot in our expertly curated sessions. Discover <strong className="text-[#F5EFE7] font-semibold">music, movement, art, and wellness</strong> in a space designed to inspire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#schedule-list"
              className="w-full sm:w-52"
            >
              <Button variant="primary" className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent">
                View Schedule
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Events Grid Wrapper */}
      <section id="schedule-list" className="px-6 md:px-12 max-w-6xl mx-auto relative z-10 pt-24">
        <div className="flex flex-col gap-6">
          {events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 6) * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between bg-white/60 backdrop-blur-md border border-[#E8DDCF]/60 rounded-[2rem] p-6 md:p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 overflow-hidden relative"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8DDCF]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full">
                {/* Date & Time Block */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-1 min-w-[140px] shrink-0">
                  <h3 className="font-serif text-2xl md:text-3xl text-sage-900 font-medium whitespace-nowrap">
                    {evt.date.split(' ')[0]} <span className="italic text-sage-500">{evt.date.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <div className="text-sage-400 font-medium tracking-wide text-sm flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {evt.time}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 space-y-3 relative z-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl md:text-2xl text-sage-800 font-medium">{evt.title}</h4>
                    <span className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full border ${categoryColors[evt.category]}`}>
                      {evt.category}
                    </span>
                  </div>
                  <div className="text-sage-500 text-sm flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    {evt.details}
                  </div>
                </div>

                {/* Booking Action */}
                <div className="w-full md:w-auto mt-6 md:mt-0 shrink-0 relative z-10">
                  <Button 
                    onClick={() => handleBook(evt.title)}
                    variant="primary" 
                    className="w-full md:w-auto px-8 py-4 bg-sage-900 text-beige-50 hover:bg-sage-800 flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform duration-300"
                  >
                    <span>Book Now</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Calendar;
