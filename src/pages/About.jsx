import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';


const About = () => {
  const instructors = [
    {
      name: "Elena Rostova",
      specialty: "Fine Arts & Ceramics Mentor",
      bio: "An accomplished visual artist with over 10 years of experience, Elena specializes in texture art, ceramics, and mosaic structures.",
      initial: "E"
    },
    {
      name: "Marcus Vance",
      specialty: "Lead DJ & Music Producer",
      bio: "A regular in Dubai's premium music scene, Marcus teaches music production and DJing, helping students find their unique sound.",
      initial: "M"
    },
    {
      name: "Sarah Jenkins",
      specialty: "Yoga & Sound Healing Practitioner",
      bio: "Certified therapist in sound medicine and vinyasa yoga, dedicated to restoring mental and physical balance.",
      initial: "S"
    }
  ];

  return (
    <div className="w-full bg-beige-50">
      {/* Structured SEO Schema (JSON-LD) for About Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Prime Stage DXB | Creative & Wellness Sanctuary Dubai",
          "description": "Learn about Prime Stage DXB, Dubai's premier creative wellness studio. Offering elite music production, art workshops, dance classes, yoga, and sound healing.",
          "publisher": {
            "@type": "Organization",
            "name": "Prime Stage DXB",
            "logo": {
              "@type": "ImageObject",
              "url": "https://primestagedxb.com/logo.png"
            }
          },
          "mainEntity": {
            "@type": "WellnessCenter",
            "name": "Prime Stage DXB",
            "description": "Dubai's premier sanctuary uniting music production, art workshops, dance classes, yoga, and sound healing under one roof.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Ghazal Mall",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "knowsAbout": [
              "Music Production & DJing",
              "Fine Arts & Painting",
              "Ceramics & Texture Art",
              "Contemporary & Hip Hop Dance",
              "Yoga & Meditation Classes",
              "Sound Healing Therapies",
              "Holistic Wellbeing"
            ]
          }
        })}
      </script>

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-24 pb-16 md:pb-24 overflow-hidden isolate"
        aria-label="About Prime Stage DXB - Dubai's Premium Creative & Wellness Hub"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 bg-black">
          <img 
            src="/about/herosection.png" 
            alt="Inside Prime Stage DXB wellness and creative classes sanctuary in Dubai" 
            className="w-full h-full object-cover opacity-50"
          />
          {/* Neutral dark overlay to dim the background evenly */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 px-4 py-1.5 rounded-full border border-[#E8DDCF]/20 bg-black/40 backdrop-blur-sm text-[#E8DDCF] text-sm font-medium tracking-wide inline-block"
          >
            Dubai's Premium Creative & Wellness Space
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5EFE7] mb-6 leading-tight"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
          >
            About Prime Stage DXB: Dubai's<br />
            <span className="italic text-[#E8DDCF]">Leading Wellness & Creative Hub</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#F5EFE7]/90 max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Nestled in the vibrant heart of <strong className="text-[#F5EFE7] font-semibold">Al Ghazal Mall, Dubai</strong>, 
            <strong className="text-[#F5EFE7] font-semibold"> Prime Stage DXB</strong> is a state-of-the-art sanctuary dedicated to 
            blending modern music production, fine art workshops, dynamic dance styles, and holistic wellness classes (yoga, meditation, and sound healing) under one luxury roof.
          </motion.p>
        </div>
      </section>

      {/* Company Story Section - Immersive Layout */}
      <section id="our-story" className="pt-12 pb-12 relative overflow-hidden bg-beige-50">
        {/* Background Organic Blobs & Glows */}
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-sage-200/40 blur-[100px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sage-300/30 blur-[120px] pointer-events-none mix-blend-multiply" />
        
        {/* Decorative Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[20%] w-32 h-32 opacity-20 pointer-events-none text-sage-600"
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C70 30, 100 50, 100 50 C100 50, 70 70, 50 100 C30 70, 0 50, 0 50 C0 50, 30 30, 50 0 Z" />
          </svg>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-16">
            
            {/* Left Side: Artistic Collage with Parallax */}
            <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center">
              {/* Organic blob background for collage */}
              <div className="absolute inset-0 bg-sage-200/50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl animate-[spin_20s_linear_infinite] opacity-60 pointer-events-none" />
              
              <div className="relative w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
                {/* Musician */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 left-0 w-[60%] h-[50%] rounded-t-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl border-4 border-beige-50 z-20"
                >
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" alt="Music Production" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-sage-900/10 mix-blend-overlay" />
                </motion.div>

                {/* Dancer */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-[10%] right-0 w-[45%] h-[60%] rounded-full overflow-hidden shadow-2xl border-4 border-beige-50 z-10"
                >
                  <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop" alt="Dancer" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-sage-800/10 mix-blend-overlay" />
                </motion.div>

                {/* Artist */}
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-0 left-[10%] w-[55%] h-[45%] rounded-b-[100px] rounded-tr-[100px] overflow-hidden shadow-2xl border-4 border-beige-50 z-30"
                >
                  <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop" alt="Artist Painting" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-sage-900/10 mix-blend-overlay" />
                </motion.div>

                {/* Yoga / Meditation */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-[15%] right-[5%] w-[40%] h-[40%] rounded-[40px] overflow-hidden shadow-2xl border-4 border-beige-50 z-20 rotate-6 hover:rotate-0 transition-transform duration-500"
                >
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Yoga Meditation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-sage-900/10 mix-blend-overlay" />
                </motion.div>

              </div>
            </div>

            {/* Right Side: Story Content */}
            <div className="w-full lg:w-1/2" itemScope itemType="https://schema.org/AboutPage" itemProp="mainEntity">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-sage-400" />
                  <span className="text-sage-500 font-medium uppercase tracking-widest text-sm">Our Story</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-6xl text-sage-900 mb-8 leading-[1.1]" itemProp="name">
                  Where Passion,<br/>
                  <span className="italic text-sage-600">Wellness & Creativity</span><br/>
                  Become One
                </h2>
                
                <div className="space-y-6 text-lg text-sage-700 leading-relaxed" itemProp="description">
                  <p>
                    <strong className="text-sage-900">Prime Stage DXB</strong> was born from a vision to create more than a studio — a luxury wellness center and creative sanctuary in Dubai where self-expression flourishes, physical health is nurtured, and individuals feel inspired to grow.
                  </p>
                  <p>
                    Our multi-disciplinary ecosystem unites professional music production & DJ courses, hands-on fine art and ceramics workshops, contemporary dance classes, and holistic yoga & sound healing sessions under one premium roof.
                  </p>
                  <p>
                    Every class, workshop, and creative program we host is thoughtfully designed to build self-confidence, spark deep imagination, and help you find structural balance and mindfulness in modern everyday life.
                  </p>
                </div>
              </motion.div>
            </div>
            
          </div>

          {/* 3 Pillars Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Artistic Expression & Music",
                desc: "Discover your potential with professional DJ courses, music production suites, contemporary dance classes, and multi-medium painting and ceramics workshops.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage-600">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                )
              },
              {
                title: "Holistic Wellness & Yoga",
                desc: "Nurture your body and mind with sound healing therapies, vinyasa and yin yoga classes, calisthenics programs, and guided meditation circles.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage-600">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                )
              },
              {
                title: "Dubai's Creative Community",
                desc: "Join a warm, inclusive sanctuary designed for both beginners and experts to collaborate, connect, and elevate their creative lifestyle in Dubai.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage-600">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-beige-100/50 backdrop-blur-sm border border-beige-200/60 p-8 rounded-[32px] hover:bg-beige-100 transition-colors duration-500 group relative overflow-hidden"
              >
                {/* Subtle gradient hover effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-200/0 via-sage-200/0 to-sage-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-sage-200/50 flex items-center justify-center mb-6 text-sage-700 group-hover:scale-110 group-hover:bg-sage-200 transition-all duration-500">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-sage-900 mb-3">{pillar.title}</h3>
                  <p className="text-sage-600 leading-relaxed text-sm">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Core Values Section */}
      <CoreValues />


      {/* Instructors Section */}
      <section className="pt-6 pb-24 bg-beige-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <SectionHeading 
              subtitle="Meet Our Team" 
              title="Expert Instructors & Guides" 
            />
            <p className="text-sage-700 max-w-2xl mx-auto mt-4 text-lg">
              Our team consists of industry professionals, renowned artists, and certified wellness practitioners dedicated to guiding your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((inst, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-beige-50 rounded-3xl p-8 border border-beige-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-sage-300 flex items-center justify-center text-sage-800 font-serif text-3xl mb-6 shadow-inner">
                  {inst.initial}
                </div>
                <h4 className="font-serif text-2xl text-sage-900 mb-1">{inst.name}</h4>
                <p className="text-sage-500 font-medium text-sm mb-4 uppercase tracking-wider">{inst.specialty}</p>
                <p className="text-sage-600 leading-relaxed text-sm">{inst.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="pt-16 pb-24 relative overflow-hidden bg-black isolate w-full"
        aria-label="Join our creative wellness community at Prime Stage DXB in Dubai"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 bg-black">
          <img 
            src="/home/CTA.png" 
            alt="Inside Prime Stage DXB creative wellness center in Dubai" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-zinc-900/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-zinc-900/50 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10" itemScope itemType="https://schema.org/CommunicateAction">
          {/* SEO label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sage-300 font-medium uppercase tracking-widest text-sm mb-6"
          >
            Join Our Dubai Creative Wellness Community
          </motion.span>

          {/* H2 with primary keyword */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-beige-50 mb-8 leading-[1.1]"
            itemProp="name"
          >
            Elevate Your Mind & Body:<br />
            <span className="italic text-beige-300">Experience Prime Stage DXB</span>
          </motion.h2>

          {/* SEO-rich paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sage-200 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            itemProp="description"
          >
            Ready to discover a premium sanctuary where artistic expression and mindfulness unite? Prime Stage DXB is your home for expert-guided music production & DJ courses, hands-on ceramic art workshops, contemporary dance classes, and therapeutic yoga and sound healing sessions. Whether you want to cultivate inner peace, master a new craft, or join a supportive community, we welcome all skill levels. <strong className="text-beige-200">Book a session or visit our wellness studio today.</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20private%20session" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-base px-10 py-4 bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent text-[#F5EFE7]">
                Book a Private Session
              </Button>
            </a>
            <a href="#our-story">
              <Button variant="outline" className="text-base px-10 py-4 border-2 border-[#E8DDCF] text-[#F5EFE7] hover:bg-[#7A8F7B] hover:border-[#7A8F7B] hover:text-[#F5EFE7]">
                Explore Our Story
              </Button>
            </a>
          </motion.div>

          {/* Trust signals row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 border-t border-sage-800 pt-10"
          >
            {[
              "👥 Expert Group & Private Classes",
              "✨ Beginner-Friendly Workshops",
              "🌿 Premium Art & Yoga Facilities",
            ].map((item, i) => (
              <span key={i} className="text-sage-400 text-sm tracking-wide">{item}</span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
