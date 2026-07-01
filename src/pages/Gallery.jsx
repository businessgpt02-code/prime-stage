import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { cn } from '../components/ui/Button';

/* ─── SEO constants ─── */
const PAGE_TITLE = 'Gallery | Prime Stage DXB – Music, Art, Dance & Wellness in Dubai';
const PAGE_DESC  =
  'Explore the Prime Stage DXB gallery — stunning visuals from our music production studios, art workshops, dance classes, yoga sessions, and sound healing events in Dubai.';
const PAGE_URL   = 'https://primestagedxb.com/gallery';
const OG_IMAGE   = 'https://primestagedxb.com/services/art.png';

/* ─── JSON-LD schemas ─── */
const jsonLdImageGallery = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Prime Stage DXB Gallery – Music, Art, Dance & Wellness Dubai',
  description:
    'A curated visual showcase of Prime Stage DXB creative and wellness activities in Dubai: music production, DJ classes, art workshops, dance, yoga, and sound healing.',
  url: PAGE_URL,
  image: [
    { '@type': 'ImageObject', url: 'https://primestagedxb.com/services/music.png',   name: 'Music production and DJ classes at Prime Stage DXB Dubai' },
    { '@type': 'ImageObject', url: 'https://primestagedxb.com/services/art.png',     name: 'Art workshops – painting, ceramics and mosaic at Prime Stage DXB Dubai' },
    { '@type': 'ImageObject', url: 'https://primestagedxb.com/services/dance.png',   name: 'Dance classes – hip hop, K-pop, Bollywood at Prime Stage DXB Dubai' },
    { '@type': 'ImageObject', url: 'https://primestagedxb.com/services/wellness.png',name: 'Yoga, meditation and sound healing sessions at Prime Stage DXB Dubai' },
  ],
  author: {
    '@type': 'Organization',
    name: 'Prime Stage DXB',
    url: 'https://primestagedxb.com',
    logo: { '@type': 'ImageObject', url: 'https://primestagedxb.com/logo.png' },
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://primestagedxb.com/' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: PAGE_URL },
  ],
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://primestagedxb.com/#organization',
  name: 'Prime Stage DXB',
  description:
    'Dubai\'s premier creative and wellness studio offering music production, DJ courses, art workshops, dance classes, yoga, meditation, and sound healing.',
  url: 'https://primestagedxb.com',
  telephone: '+971585926856',
  image: 'https://primestagedxb.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Ghazal Mall',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '25.237971', longitude: '55.272984' },
  sameAs: ['https://www.instagram.com/primestagedxb'],
  hasMap: 'https://maps.google.com/?q=Prime+Stage+DXB+Dubai',
  priceRange: '$$',
  servesCuisine: [],
  knowsAbout: [
    'Music Production Dubai',
    'DJ Classes Dubai',
    'Art Workshops Dubai',
    'Dance Classes Dubai',
    'Yoga Dubai',
    'Sound Healing Dubai',
    'Wellness Studio Dubai',
  ],
};

/* ─── Gallery data ─── */
const galleryItems = [
  // Music (2 images)
  { id: 1, category: 'Music',   image: '/Music/music.png',   alt: 'Music production session at Prime Stage DXB Dubai creative studio' },
  { id: 2, category: 'Music',   image: '/Music/music2.png',  alt: 'DJ training and music production at Prime Stage DXB Dubai' },

  // Art (4 images)
  { id: 3, category: 'Art',     image: '/art/art.png',       alt: 'Art workshop – painting and ceramics class at Prime Stage DXB Dubai' },
  { id: 4, category: 'Art',     image: '/art/art2.png',      alt: 'Mosaic and texture art workshop at Prime Stage DXB Dubai' },
  { id: 5, category: 'Art',     image: '/art/art3.png',      alt: 'Acrylic painting and canvas art class at Prime Stage DXB Dubai' },
  { id: 6, category: 'Art',     image: '/art/art4.png',      alt: 'Handmade pottery and clay workshop at Prime Stage DXB Dubai' },

  // Dance (5 images)
  { id: 7, category: 'Dance',   image: '/dance/dance.png',   alt: 'Dance class – hip hop and K-pop at Prime Stage DXB Dubai' },
  { id: 8, category: 'Dance',   image: '/dance/dance2.png',  alt: 'Bollywood and Afro dance workshop at Prime Stage DXB Dubai' },
  { id: 9, category: 'Dance',   image: '/dance/dance3.png',  alt: 'Contemporary dance training at Prime Stage DXB Dubai' },
  { id: 10, category: 'Dance',  image: '/dance/dance4.png',  alt: 'Choreography class and dance practice at Prime Stage DXB Dubai' },
  { id: 11, category: 'Dance',  image: '/dance/dance5.png',  alt: 'Street dance and freestyle studio session at Prime Stage DXB Dubai' },

  // Wellness (3 images)
  { id: 12, category: 'Wellness',image: '/wellness/yoga.png',  alt: 'Yoga and meditation wellness class at Prime Stage DXB Dubai' },
  { id: 13, category: 'Wellness',image: '/wellness/yoga1.png', alt: 'Sound healing therapy session at Prime Stage DXB Dubai wellness hub' },
  { id: 14, category: 'Wellness',image: '/wellness/yoga2.png', alt: 'Mindful meditation and yoga practice at Prime Stage DXB Dubai' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Music', 'Art', 'Dance', 'Wellness'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* ─── SEO Head ─── */}
      <Helmet>
        <html lang="en" />
        <title>{PAGE_TITLE}</title>
        <meta name="description"         content={PAGE_DESC} />
        <meta name="keywords"            content="Prime Stage DXB gallery, Dubai creative arts gallery, music production Dubai photos, art workshop Dubai, dance class Dubai, yoga Dubai, sound healing Dubai, wellness studio Dubai, Dubai creative hub gallery" />
        <meta name="robots"              content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical"            href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={PAGE_URL} />
        <meta property="og:title"        content={PAGE_TITLE} />
        <meta property="og:description"  content={PAGE_DESC} />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="Prime Stage DXB Gallery – Creative arts and wellness in Dubai" />
        <meta property="og:site_name"    content="Prime Stage DXB" />
        <meta property="og:locale"       content="en_AE" />

        {/* Twitter / X Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="Prime Stage DXB Gallery – Dubai's premier creative & wellness studio" />

        {/* Geo targeting */}
        <meta name="geo.region"          content="AE-DU" />
        <meta name="geo.placename"       content="Dubai" />
        <meta name="geo.position"        content="25.1384;55.2281" />
        <meta name="ICBM"                content="25.1384, 55.2281" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLdImageGallery)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdLocalBusiness)}</script>
      </Helmet>

      {/* ─── Page Wrapper ─── */}
      <div className="w-full" itemScope itemType="https://schema.org/ImageGallery">
        <meta itemProp="name" content="Prime Stage DXB Gallery – Music, Art, Dance & Wellness Dubai" />
        <meta itemProp="url"  content={PAGE_URL} />

        {/* ─── Hero Section ─── */}
        <section
          className="relative min-h-screen flex items-end justify-center pb-36 overflow-hidden isolate"
          aria-label="Prime Stage DXB Gallery – Creative Arts and Wellness Dubai"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 -z-10 bg-black" role="presentation">
            <img
              src="/gallery/hero.png"
              alt="Art workshop and creative classes at Prime Stage DXB – Dubai's leading arts studio"
              className="w-full h-full object-cover opacity-50"
              fetchpriority="high"
              decoding="async"
              itemProp="image"
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          </div>

          {/* Structured breadcrumb visible to crawlers (visually hidden) */}
          <nav aria-label="Breadcrumb" className="sr-only">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name">Gallery</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 px-4 py-1.5 rounded-full border border-[#E8DDCF]/20 bg-black/40 backdrop-blur-sm text-[#E8DDCF] text-sm font-medium tracking-wide inline-block"
            >
              Our Space &amp; Community
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5EFE7] mb-6 leading-tight"
              style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
              itemProp="headline"
            >
              Captured Moments,<br />
              <span className="italic text-[#E8DDCF]">Endless Creativity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-xl text-[#F5EFE7]/90 max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              itemProp="description"
            >
              Step inside <strong className="text-[#F5EFE7] font-semibold">Prime Stage DXB</strong> through our visual gallery — a showcase of{' '}
              <strong className="text-[#F5EFE7] font-semibold">music production, art workshops, dance classes, and wellness sessions</strong>{' '}
              from our vibrant Dubai creative community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#gallery-grid"
                className="w-full sm:w-52"
                aria-label="Scroll to Prime Stage DXB photo gallery"
              >
                <Button variant="primary" className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent">
                  <Grid size={18} className="mr-2" aria-hidden="true" /> Explore Gallery
                </Button>
              </a>
              <a
                href="https://wa.me/971585926856?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class"
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

        {/* ─── Gallery Grid ─── */}
        <section
          id="gallery-grid"
          className="pt-20 pb-24"
          aria-label="Photo gallery of music, art, dance and wellness classes at Prime Stage DXB Dubai"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading
              subtitle="Our Space &amp; Community"
              title="The Gallery"
              className="mb-12"
            />

            {/* Category Filters */}
            <nav
              aria-label="Filter gallery by category"
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  aria-label={`Show ${filter === 'All' ? 'all gallery photos' : `${filter} photos`} from Prime Stage DXB`}
                  className={cn(
                    'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeFilter === filter
                      ? 'bg-sage-900 text-beige-50 shadow-md'
                      : 'bg-beige-200 text-sage-800 hover:bg-beige-300'
                  )}
                >
                  {filter}
                </button>
              ))}
            </nav>

            {/* Uniform Gallery Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              role="list"
              aria-label="Prime Stage DXB gallery images"
            >
              <AnimatePresence>
                {filteredItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    role="listitem"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-[320px] rounded-3xl bg-sage-200 overflow-hidden relative group"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <meta itemProp="name"        content={item.alt} />
                    <meta itemProp="description" content={item.alt} />
                    <meta itemProp="contentUrl"  content={`https://primestagedxb.com${item.image}`} />

                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tinted overlay */}
                    <div
                      className="absolute inset-0 bg-sage-300/50 mix-blend-multiply group-hover:bg-transparent transition-all duration-500"
                      aria-hidden="true"
                    />
                    {/* Hover label */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-sage-900/40 backdrop-blur-sm transition-all duration-300"
                      aria-hidden="true"
                    >
                      <span className="text-beige-50 font-serif text-2xl px-6 py-2 border border-beige-50/50 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
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
              Ready to discover a space where artistic expression and mindfulness unite? Prime Stage DXB is your home for expert-guided music production & DJ courses, hands-on ceramic art workshops, contemporary dance classes, and therapeutic yoga and sound healing sessions. Whether you want to cultivate inner peace, master a new craft, or join a supportive community, we welcome all skill levels. <strong className="text-beige-200">Book a session or visit our wellness studio today.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button variant="primary" className="text-base px-10 py-4 bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent text-[#F5EFE7]">
                Book a Private Session
              </Button>
              <Button variant="outline" className="text-base px-10 py-4 border-2 border-[#E8DDCF] text-[#F5EFE7] hover:bg-[#7A8F7B] hover:border-[#7A8F7B] hover:text-[#F5EFE7]">
                Explore Our Story
              </Button>
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
                "🌿 Top-tier Art & Yoga Facilities",
              ].map((item, i) => (
                <span key={i} className="text-sage-400 text-sm tracking-wide">{item}</span>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
