import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Music, Palette, User, Heart, Sparkles, Star } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const experiences = [
    {
      title: "Music",
      description: "Learn DJing, music production, and sound design from industry professionals.",
      icon: <Music size={32} className="text-sage-600" />,
      features: ["DJ Services", "Music Productions"],
      bgImage: "/services/music.png",
      timing: "Weekdays: 12-5 PM | Weekends: 2-5 PM"
    },
    {
      title: "Art",
      description: "Express yourself through painting, ceramics, mosaic, and paper mache.",
      icon: <Palette size={32} className="text-sage-600" />,
      features: ["Painting & Ceramics", "Texture & Mosaic Art", "String & Thread Art", "Paper Mache"],
      bgImage: "/services/art.png",
      timing: "10:00 AM – 6:00 PM"
    },
    {
      title: "Dance",
      description: "Move your body with energetic routines across various popular styles.",
      icon: <User size={32} className="text-sage-600" />,
      features: ["Hip Hop & K-Pop", "Afro & Jive", "Bollywood"],
      bgImage: "/services/dance.png",
      timing: "5:00 PM – 10:00 PM"
    },
    {
      title: "Wellness",
      description: "Find your center with holistic practices for mind, body, and soul.",
      icon: <Heart size={32} className="text-sage-600" />,
      features: ["Yoga & Meditation", "Calisthenics", "Sound Healing"],
      bgImage: "/services/wellness.png",
      timing: "5:00 AM – 9:00 PM"
    }
  ];

  const benefits = [
    "Experienced Instructors",
    "Modern Facilities",
    "Flexible Timings",
    "Creative Community",
    "Beginner-Friendly Environment"
  ];

  return (
    <div className="w-full">
      {/* Structured SEO Schema (JSON-LD) for Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WellnessCenter",
          "name": "Prime Stage DXB",
          "description": "Premium wellness and creative hub in Dubai offering music production, art workshops, dance classes, sound healing, and yoga.",
          "url": "https://primestagedxb.com",
          "telephone": "+971543867889",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Ghazal Mall",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.237971",
            "longitude": "55.272984"
          },
          "sameAs": [
            "https://www.instagram.com/primestagedxb"
          ]
        })}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden isolate">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 bg-black">
          <img 
            src="/home/herosection.png" 
            alt="Prime Stage DXB wellness and creative hub background" 
            className="w-full h-full object-cover opacity-50"
          />
          {/* Neutral dark overlay to dim the background evenly */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 px-4 py-1.5 rounded-full border border-[#E8DDCF]/20 bg-black/40 backdrop-blur-sm text-[#E8DDCF] text-sm font-medium tracking-wide"
          >
            Prime Stage DXB | Wellness & Creative Hub in Dubai
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#F5EFE7] mb-6 leading-tight"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
          >
            Awaken Your Mind.<br />
            Move Your Soul.<br />
            <span className="italic text-[#E8DDCF]">Create Your Story.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#F5EFE7]/90 max-w-3xl mb-10"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Discover Dubai's leading creative sanctuary. We blend holistic wellness with creative arts, offering expert-led music production and DJ classes, multi-medium art workshops, diverse dance classes, and therapeutic sound healing & yoga in Dubai.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center"
          >
            <a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class" target="_blank" rel="noopener noreferrer" className="w-full sm:w-52">
              <Button variant="primary" className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent">Book a Session</Button>
            </a>
            <Link to="/gallery" className="w-full sm:w-52">
              <Button variant="outline" className="w-full border-2 border-[#E8DDCF] text-[#F5EFE7] hover:bg-[#7A8F7B] hover:border-[#7A8F7B] hover:text-beige-50">
                Explore Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pt-12 pb-12 bg-beige-100/50" aria-label="About Prime Stage DXB Wellness and Creative Studio">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-sage-200"
                role="img"
                aria-label="Prime Stage DXB Wellness Center and Creative Arts Studio Space in Dubai"
              >
                <img
                  src="/home/whoweare.png"
                  alt="Prime Stage DXB creative and wellness community in Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent" />
              </div>
            </motion.div>
            
            <div className="flex flex-col items-start text-left">
              <SectionHeading 
                subtitle="Who We Are" 
                title="Dubai's Premium Creative Hub & Holistic Wellness Studio" 
                align="left"
                className="mb-8"
              />
              <p className="text-sage-700 text-lg mb-6 leading-relaxed">
                <strong>Prime Stage DXB</strong> is Dubai's multi-disciplinary ecosystem where physical wellness and creative expression unite. Located in Dubai, our community space is dedicated to helping individuals discover balance through mindfulness, movement, and art.
              </p>
              <p className="text-sage-700 text-lg mb-8 leading-relaxed">
                We bridge the gap between creative arts and holistic health. Whether you are looking to master music production, join a hands-on art workshop, learn contemporary dance choreography, or experience meditative sound healing, our luxury wellness center offers a welcoming, beginner-friendly space designed to elevate your mind, body, and soul.
              </p>
              <Link to="/about">
                <Button variant="primary" className="bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent">
                  Learn More About Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="pt-12 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading 
            subtitle="Our Offerings" 
            title="Curated Experiences" 
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
             {experiences.map((exp, index) => (
              <Card 
                key={index} 
                delay={index * 0.1} 
                hover={!exp.bgImage}
                className={`p-10 flex flex-col relative overflow-hidden group ${exp.bgImage ? 'text-white border-transparent' : ''}`}
                bgContent={exp.bgImage ? (
                  <div className="absolute inset-0 z-0 bg-black">
                    <img 
                      src={exp.bgImage} 
                      alt={`${exp.title} background`} 
                      className="w-full h-full object-cover opacity-75 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />
                  </div>
                ) : null}
              >
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${exp.bgImage ? 'bg-white/10 backdrop-blur-md border border-white/10' : 'bg-beige-100'}`}>
                  {React.cloneElement(exp.icon, { className: exp.bgImage ? 'text-[#F5EFE7]' : 'text-sage-600' })}
                </div>
                
                <h3 className={`font-serif text-3xl mb-2 ${exp.bgImage ? 'text-[#F5EFE7]' : 'text-sage-900'}`}>{exp.title}</h3>
                {exp.timing ? (
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-4 px-3 py-1 rounded-full w-fit ${exp.bgImage ? 'bg-white/20 text-[#F5EFE7]' : 'bg-sage-100 text-sage-800'}`}>
                    ⏰ {exp.timing}
                  </div>
                ) : (
                  <div className="h-[28px] mb-4" />
                )}
                <p className={`mb-6 min-h-[48px] ${exp.bgImage ? 'text-[#F5EFE7]/85' : 'text-sage-700'}`}>{exp.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow min-h-[176px]">
                  {exp.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-3 ${exp.bgImage ? 'text-[#F5EFE7]/90' : 'text-sage-800'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${exp.bgImage ? 'bg-[#E8DDCF]' : 'bg-sage-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button variant="primary" className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent text-[#F5EFE7]">
                    Book Now
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Editorial Layout */}
      {/* Why Choose Us — Editorial Layout */}
      <section className="pt-12 pb-12 bg-beige-100/50 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sage-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" itemScope itemType="https://schema.org/ItemList">
          
          {/* Top: Label + Headline + Stats in a horizontal band */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20 pb-12 border-b border-beige-300">
            <div className="max-w-xl">
              <span className="text-sage-500 font-medium uppercase tracking-widest text-sm block mb-5">
                Why Prime Stage DXB
              </span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-sage-900 leading-[1.1]" itemProp="name">
                Why Choose Prime Stage:<br />
                <span className="italic text-sage-500">The Difference.</span>
              </h2>
            </div>

            {/* Stats — inline, no card box */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 lg:text-right">
              {[
                { number: "500+", label: "Happy Members" },
                { number: "20+", label: "Expert Instructors" },
                { number: "12+", label: "Disciplines" },
                { number: "5★", label: "Dubai Rated" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="font-serif text-4xl md:text-5xl text-sage-900">{stat.number}</div>
                  <div className="text-sage-500 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits — open numbered list, NO cards */}
          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Certified Instructors & Dubai Tutors",
                description: "Learn music production from active Dubai DJs, fine arts from veteran mentors, contemporary dance from professional choreographers, and vinyasa yoga from certified practitioners.",
                tag: "Expert Tutors"
              },
              {
                num: "02",
                title: "Premium Creative & Wellness Studios",
                description: "Our studio space features professional-grade music production tools, dedicated texture art and ceramics workspaces, spacious dance studios, and calming yoga & sound healing spaces.",
                tag: "Elite Space"
              },
              {
                num: "03",
                title: "Holistic Mind, Body & Soul Programming",
                description: "We fuse active creative expression (music, art, dance) with therapeutic wellness practices (vinyasa yoga, calisthenics, sound healing) to support complete mental and physical balance.",
                tag: "Holistic Wellness"
              },
              {
                num: "04",
                title: "Flexible Class Times & Private Bookings",
                description: "Find balance on your own terms. We offer morning yoga flows, evening DJ courses, weekend art workshops, and customizable private training sessions.",
                tag: "Flexible Classes"
              },
              {
                num: "05",
                title: "Inclusive Workshops for All Skill Levels",
                description: "Our programs welcome everyone — from complete beginners looking to try ceramics or meditation to advanced producers refining their audio mixes.",
                tag: "All Levels Welcome"
              },
              {
                num: "06",
                title: "A Vibrant Creative Wellness Community",
                description: "More than a standard gym or studio space, Prime Stage DXB is a premium Dubai collective where like-minded creatives and wellness seekers connect, share, and grow.",
                tag: "Dubai Community"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-b border-beige-200 hover:border-sage-300 transition-colors duration-300"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={i + 1} />
                
                {/* Number */}
                <span className="font-serif text-5xl md:text-6xl text-sage-200 group-hover:text-sage-400 transition-colors duration-300 leading-none shrink-0 w-20">
                  {item.num}
                </span>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-baseline gap-4 mb-3">
                    <h3 className="font-serif text-2xl md:text-3xl text-sage-900 group-hover:text-sage-700 transition-colors" itemProp="name">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium tracking-widest uppercase text-sage-400 border border-sage-200 rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sage-600 text-lg leading-relaxed max-w-2xl" itemProp="description">
                    {item.description}
                  </p>
                </div>

                {/* Hover arrow indicator */}
                <div className="hidden md:flex items-center text-sage-200 group-hover:text-sage-500 transition-all duration-300 group-hover:translate-x-2 shrink-0 mt-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-6 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <SectionHeading 
            subtitle="Testimonials" 
            title="Stories From Our Community" 
          />
        </div>

        {/* Infinite scroll marquee — flows left */}
        <div className="relative w-full">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-beige-50 to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-beige-50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused]">
            {[
              { name: "Layla Al Mansouri", role: "Yoga Member", review: "The yoga sessions at Prime Stage are unlike anything I've experienced in Dubai. Peaceful, professional, and deeply transformative." },
              { name: "James Thornton", role: "DJ Student", review: "I started with zero experience and now I'm performing at events. The music production tutors are absolutely world-class." },
              { name: "Priya Nair", role: "Art Workshop", review: "The ceramic art workshop was a dream. I found my creative outlet and a beautiful community of like-minded people." },
              { name: "Omar Khaled", role: "Dance Class", review: "The Bollywood and Hip Hop classes are so much fun. The energy is electric and the instructors genuinely care about your progress." },
              { name: "Sofia Reyes", role: "Sound Healing", review: "Sound healing at Prime Stage is magical. I leave every session feeling reset, recharged, and at total peace." },
              { name: "Ahmed Al Farsi", role: "Calisthenics", review: "Incredible facility and world-class coaching. My fitness journey has never been more consistent or more enjoyable." },
              { name: "Nour Hassan", role: "Art Member", review: "The mosaic and texture art workshops pushed my creativity to new heights. The space itself is so calming and inspiring." },
              { name: "Isabelle Morel", role: "K-Pop Dance", review: "I've been to many dance studios but Prime Stage has a special vibe. The K-Pop classes are so professionally taught." },
              { name: "Rayan Saleh", role: "Music Production", review: "Booking sessions here was the best decision I made this year. The studio is premium and the instructors are genuinely passionate." },
              { name: "Amira Joubran", role: "Wellness Member", review: "Prime Stage gave me the balance I was missing. Between yoga, sound healing, and the art classes — I feel whole again." },
              { name: "Daniel Park", role: "Afro Dance", review: "The Afro dance classes are high energy and incredibly well-structured. I look forward to every single session." },
              { name: "Fatima Al Zaabi", role: "String Art", review: "String art was completely new to me and now I'm hooked. The instructors make you feel like an artist from day one." },
              // Duplicate for seamless loop
              { name: "Layla Al Mansouri", role: "Yoga Member", review: "The yoga sessions at Prime Stage are unlike anything I've experienced in Dubai. Peaceful, professional, and deeply transformative." },
              { name: "James Thornton", role: "DJ Student", review: "I started with zero experience and now I'm performing at events. The music production tutors are absolutely world-class." },
              { name: "Priya Nair", role: "Art Workshop", review: "The ceramic art workshop was a dream. I found my creative outlet and a beautiful community of like-minded people." },
              { name: "Omar Khaled", role: "Dance Class", review: "The Bollywood and Hip Hop classes are so much fun. The energy is electric and the instructors genuinely care about your progress." },
              { name: "Sofia Reyes", role: "Sound Healing", review: "Sound healing at Prime Stage is magical. I leave every session feeling reset, recharged, and at total peace." },
              { name: "Ahmed Al Farsi", role: "Calisthenics", review: "Incredible facility and world-class coaching. My fitness journey has never been more consistent or more enjoyable." },
            ].map((t, i) => (
              <div 
                key={i} 
                className="shrink-0 w-[340px] bg-beige-100 rounded-3xl p-8 border border-beige-200"
              >
                <div className="flex text-sage-500 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sage-800 italic leading-relaxed mb-8 text-base">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-sage-300 flex items-center justify-center text-sage-700 font-serif text-lg shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-sage-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="pt-16 pb-24 relative overflow-hidden bg-black isolate"
        aria-label="Book a wellness or creative class at Prime Stage DXB in Dubai"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 bg-black">
          <img 
            src="/home/CTA.png" 
            alt="Prime Stage DXB creative wellness center CTA background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-zinc-900/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-zinc-900/50 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* SEO label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sage-300 font-medium uppercase tracking-widest text-sm mb-6"
          >
            Book Your Class in Dubai
          </motion.span>

          {/* H2 with primary keyword */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-beige-50 mb-8 leading-[1.1]"
          >
            Begin Your Creative &<br />
            <span className="italic text-beige-300">Wellness Journey Today.</span>
          </motion.h2>

          {/* SEO-rich paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sage-200 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Join <strong className="text-beige-200">Prime Stage DXB</strong> — Dubai's premier creative wellness studio. 
            Whether you're looking for music production classes, art workshops, dance lessons, yoga, sound healing, or calisthenics, 
            we have the perfect program for you. <strong className="text-beige-200">Book your first session today</strong> and take the first step toward a more balanced, expressive, and fulfilled life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-base px-10 py-4 bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent text-[#F5EFE7]">
                Book Your First Session
              </Button>
            </a>
            <a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-base px-10 py-4 border-2 border-[#E8DDCF] text-[#F5EFE7] hover:bg-[#7A8F7B] hover:border-[#7A8F7B] hover:text-[#F5EFE7]">
                View All Classes
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
              "⏰ Open 7 Days a Week",
              "🎯 All Skill Levels Welcome",
              "⭐ 5-Star Rated Studio",
            ].map((item, i) => (
              <span key={i} className="text-sage-400 text-sm tracking-wide">{item}</span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
