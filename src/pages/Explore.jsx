import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Users, Star, ChevronRight, Grid } from 'lucide-react';
import Button from '../components/ui/Button';

/* ---- SEO constants ---- */
const PAGE_TITLE = 'Explore | Prime Stage DXB \u2013 Creative Workshops & Classes in Dubai';
const PAGE_DESC =
  'Explore all creative workshops and classes at Prime Stage DXB Dubai \u2014 from DJ production and acrylic painting to ceramic art, string art, and more.';
const PAGE_URL = 'https://primestagedxb.com/explore';

/* ---- Workshop data ---- */
const workshops = [
  {
    id: 'dj',
    title: 'DJ Class',
    subtitle: 'Music Production & Mixing',
    poster: '/posters/1.png',
    category: 'Music',
    duration: '2 hours',
    level: 'Beginner \u2013 Intermediate',
    groupSize: 'Up to 8',
    rating: '5.0',
    color: '#4A5568',
    description:
      "Step into the world of DJing and learn the art of mixing, beat matching, transitions, and live performance in a fun, beginner-friendly environment. Gain hands-on experience with professional DJ equipment and build the confidence to create your own unique sound.",
    highlights: [
      "Monday \u2013 Thursday: 2:00 PM \u2013 9:00 PM",
      "Saturday \u2013 Sunday: 2:00 PM \u2013 6:00 PM",
      "Flexible batches available for beginners.",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20DJ%20Class',
  },
  {
    id: 'production',
    title: 'Music Production',
    subtitle: 'Beat Making & Studio Skills',
    poster: '/posters/2.png',
    category: 'Music',
    duration: '3 hours',
    level: 'Beginner \u2013 Advanced',
    groupSize: 'Up to 6',
    rating: '4.9',
    color: '#2D3748',
    description:
      "Create, record, and produce your own music with hands-on training in DAWs, beat making, sound design, and mixing. Perfect for beginners and aspiring producers.",
    highlights: [
      "Sat \u2013 Sun",
      "11:00 AM \u2013 2:00 PM",
      "Beginner-friendly batches available.",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20Music%20Production%20session',
  },
  {
    id: 'acrylic',
    title: 'Acrylic Painting',
    subtitle: 'Canvas Art Workshop',
    poster: '/posters/3.png',
    category: 'Art',
    duration: '3 hours',
    level: 'All Levels',
    groupSize: 'Up to 12',
    rating: '4.9',
    color: '#7A8F7B',
    description:
      "Explore the beauty of acrylic painting and bring your imagination to life with colors, textures, and creative techniques. Perfect for beginners and art enthusiasts alike.",
    highlights: [
      "Flexible Batches Available",
      "Weekdays & Weekends",
      "Beginner Friendly Sessions",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20the%20Acrylic%20Painting%20workshop',
  },
  {
    id: 'ceramic',
    title: 'Ceramic Art',
    subtitle: 'Clay & Pottery Workshop',
    poster: '/posters/4.png',
    category: 'Art',
    duration: '2.5 hours',
    level: 'All Levels',
    groupSize: 'Up to 10',
    rating: '4.8',
    color: '#8B7355',
    description:
      "Shape, paint, and glaze beautiful handmade ceramics while learning essential pottery techniques. A relaxing and creative experience for beginners and art lovers.",
    highlights: [
      "Flexible Batches Available",
      "Weekdays & Weekends",
      "No Prior Experience Required",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20the%20Ceramic%20Art%20workshop',
  },
  {
    id: 'paper-mache',
    title: 'Paper Mache',
    subtitle: '3D Sculpting Workshop',
    poster: '/posters/5.png',
    category: 'Art',
    duration: '3.5 hours',
    level: 'All Levels',
    groupSize: 'Up to 12',
    rating: '4.8',
    color: '#5A7A6B',
    description:
      "Transform simple paper into stunning 3D creations using layering, shaping, and sculpting techniques. Unleash your creativity in a fun, hands-on environment.",
    highlights: [
      "Flexible Batches Available",
      "Weekdays & Weekends",
      "Beginner Friendly Sessions",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20the%20Paper%20Mache%20workshop',
  },
  {
    id: 'thread',
    title: 'Thread Art',
    subtitle: 'Embroidery & Fibre Craft',
    poster: '/posters/8.png',
    category: 'Art',
    duration: '2 hours',
    level: 'Beginner Friendly',
    groupSize: 'Up to 14',
    rating: '4.9',
    color: '#7B6B8D',
    description:
      "Discover the beauty of thread art by creating textured masterpieces with colors, patterns, and intricate designs. Perfect for expressing creativity in a unique way.",
    highlights: [
      "Flexible Batches Available",
      "Weekdays & Weekends",
      "Suitable for Beginners & All Age Groups",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20the%20Thread%20Art%20workshop',
  },
  {
    id: 'texture',
    title: 'Texture Art',
    subtitle: 'Mixed Media Sculpting',
    poster: '/posters/7.png',
    category: 'Art',
    duration: '3 hours',
    level: 'All Levels',
    groupSize: 'Up to 12',
    rating: '4.8',
    color: '#9B7653',
    description:
      "Experiment with textures, layers, and mixed media to create bold, expressive artworks. Discover unique techniques and turn simple materials into stunning creations.",
    highlights: [
      "Flexible Batches Available",
      "Weekdays & Weekends",
      "Suitable for Beginners & Creatives",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20the%20Texture%20Art%20workshop',
  },
  {
    id: 'string-art',
    title: 'String Art',
    subtitle: 'Thread & Nail Artwork',
    poster: '/posters/6.png',
    category: 'Art',
    duration: '2.5 hours',
    level: 'All Levels',
    groupSize: 'Up to 15',
    rating: '4.7',
    color: '#6B4226',
    description:
      "Create stunning artworks using nails and colorful threads while exploring patterns, shapes, and creativity. A fun, relaxing workshop perfect for beginners.",
    highlights: [
      "Flexible Batches Available",
      "Weekdays & Weekends",
      "Beginner Friendly Sessions",
    ],
    whatsapp:
      'https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20the%20String%20Art%20workshop',
  },
];

const categoryStyles = {
  Art: 'bg-beige-200 text-beige-900',
  Music: 'bg-sage-200 text-sage-900',
};

/* ---- Reusable poster thumbnail button ---- */
function PosterButton({ w, activeId, setActiveId }) {
  return (
    <motion.button
      onClick={() => setActiveId(w.id)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={[
        'group relative rounded-2xl overflow-hidden flex-shrink-0 w-[155px] lg:w-full transition-all duration-300 cursor-pointer text-left',
        'outline-none focus-visible:ring-2 focus-visible:ring-sage-500',
        activeId === w.id
          ? 'ring-2 ring-sage-700 shadow-xl'
          : 'shadow-md hover:shadow-lg',
      ].join(' ')}
      aria-label={'View ' + w.title + ' workshop'}
      aria-pressed={activeId === w.id}
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={w.poster}
          alt={w.title + ' workshop poster'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {activeId === w.id && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute inset-0 ring-inset ring-2 ring-beige-300 rounded-2xl"
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-semibold leading-snug drop-shadow-lg">{w.title}</p>
        <p className="text-beige-200/80 text-xs">{w.category}</p>
      </div>
      {activeId === w.id && (
        <div className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-beige-50 items-center justify-center shadow-md">
          <ChevronRight size={14} className="text-sage-900" />
        </div>
      )}
    </motion.button>
  );
}

export default function Explore() {
  const [activeId, setActiveId] = useState(workshops[0].id);
  const active = workshops.find((w) => w.id === activeId);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
      </Helmet>

      <div className="min-h-screen bg-beige-50">

        {/* ─── Hero Section ─── */}
        <section
          className="relative min-h-screen flex items-end justify-center pb-36 overflow-hidden isolate"
          aria-label="Prime Stage DXB Workshops – Creative Classes in Dubai"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 -z-10 bg-black" role="presentation">
            <img
              src="/explore.png"
              alt="Art workshop and creative classes at Prime Stage DXB – Dubai's leading arts studio"
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
              Our Offerings &amp; Experiences
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5EFE7] mb-6 leading-tight"
              style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
            >
              Explore Our<br />
              <span className="italic text-[#E8DDCF]">Workshops &amp; Classes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-xl text-[#F5EFE7]/90 max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              From music production studios to hands-on art workshops &mdash; discover every creative experience we offer at Prime Stage DXB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#workshops-grid"
                className="w-full sm:w-52"
                aria-label="Scroll to workshops and classes"
              >
                <Button variant="primary" className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent text-white font-semibold flex items-center justify-center">
                  <Grid size={18} className="mr-2" aria-hidden="true" /> Browse Classes
                </Button>
              </a>
              <a
                href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-52"
                aria-label="Book a class or session at Prime Stage DXB Dubai on WhatsApp"
              >
                <Button variant="outline" className="w-full border-2 border-[#E8DDCF] text-[#F5EFE7] hover:bg-[#7A8F7B] hover:border-[#7A8F7B] hover:text-beige-50">
                  Book a Session
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Main: Sidebar + Detail ── */}
        <section id="workshops-grid" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* LEFT: Poster thumbnails */}
            <aside className="w-full lg:w-[290px] xl:w-[310px] flex-shrink-0 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-4 px-1">
                Select a Workshop
              </p>

              {/* ── Music section ── */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sage-400">Music</span>
                  <div className="flex-1 h-px bg-sage-200" />
                </div>
                <div className="flex lg:grid lg:grid-cols-2 gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {workshops.filter((w) => w.category === 'Music').map((w) => (
                    <PosterButton key={w.id} w={w} activeId={activeId} setActiveId={setActiveId} />
                  ))}
                </div>
              </div>

              {/* ── Art section ── */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sage-400">Art</span>
                  <div className="flex-1 h-px bg-sage-200" />
                </div>
                <div className="flex lg:grid lg:grid-cols-2 gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {workshops.filter((w) => w.category === 'Art').map((w) => (
                    <PosterButton key={w.id} w={w} activeId={activeId} setActiveId={setActiveId} />
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT: Detail panel */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full"
                >
                  {/* Large poster */}
                  <div className="flex justify-center mb-8">
                  <div
                    className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
                    style={{ aspectRatio: '3/4', maxWidth: '360px' }}
                  >
                    <img
                      src={active.poster}
                      alt={active.title + ' \u2013 ' + active.subtitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className={'text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full ' + (categoryStyles[active.category] ?? 'bg-beige-200 text-beige-800')}>
                        {active.category}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                      <span className="text-white text-sm font-semibold">{active.rating}</span>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-beige-300 text-sm font-medium uppercase tracking-widest mb-1">{active.subtitle}</p>
                      <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">{active.title}</h2>
                    </div>
                  </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="font-serif text-2xl text-sage-900 mb-3">About this Workshop</h3>
                    <p className="text-sage-700 text-base leading-relaxed">{active.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl text-sage-900 mb-4">Timings</h3>
                    <ul className="space-y-3">
                      {active.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: active.color + '30' }}
                          >
                            <ArrowRight size={12} style={{ color: active.color }} />
                          </span>
                          <span className="text-sage-700 text-sm leading-relaxed">{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-0">
                    <a
                      href={active.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: '#25D366' }}
                      aria-label={'Book ' + active.title + ' workshop on WhatsApp'}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Book Now on WhatsApp
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base border-2 border-sage-700 text-sage-800 transition-all duration-300 hover:bg-sage-900 hover:text-beige-50 hover:border-sage-900"
                      aria-label={'Enquire about ' + active.title}
                    >
                      Send an Enquiry
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
