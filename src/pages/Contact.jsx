import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/* ─── SEO constants ─── */
const PAGE_TITLE = 'Contact Prime Stage DXB | Book Music, Art & Wellness Classes in Dubai';
const PAGE_DESC  =
  'Contact Prime Stage DXB in Dubai to book music production classes, art workshops, dance lessons, yoga, sound healing sessions, or enquire about private events. Visit our creative studio in Al Ghazal Mall, Dubai.';
const PAGE_URL   = 'https://primestagedxb.com/contact';
const OG_IMAGE   = 'https://primestagedxb.com/services/wellness.png';

/* ─── JSON-LD schemas ─── */
const jsonLdContactPage = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Prime Stage DXB – Book Classes & Events in Dubai',
  description: PAGE_DESC,
  url: PAGE_URL,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://primestagedxb.com/#organization',
    name: 'Prime Stage DXB',
    description:
      "Dubai's premier creative and wellness studio offering music production, DJ courses, art workshops, dance classes, yoga, meditation, and sound healing.",
    url: 'https://primestagedxb.com',
    telephone: '+971585926856',
    email: 'Pr@primestagedxb.com',
    image: 'https://primestagedxb.com/logo.png',
    logo: { '@type': 'ImageObject', url: 'https://primestagedxb.com/logo.png' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Ghazal Mall',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '',
      addressCountry: 'AE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '25.237971', longitude: '55.272984' },
    hasMap: 'https://maps.google.com/?q=Al+Ghazal+Mall+Dubai',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
    sameAs: ['https://www.instagram.com/primestagedxb'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971585926856',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
    },
    knowsAbout: [
      'Music Production Dubai',
      'DJ Classes Dubai',
      'Art Workshops Dubai',
      'Dance Classes Dubai',
      'Yoga Dubai',
      'Sound Healing Dubai',
      'Private Events Dubai',
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://primestagedxb.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: PAGE_URL },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book a music production class at Prime Stage DXB in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a music production, DJ, art, dance, yoga or sound healing class at Prime Stage DXB by filling out our contact form, calling +971 58 592 6856, or messaging us on WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Prime Stage DXB located in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prime Stage DXB is located in Al Ghazal Mall, Dubai, United Arab Emirates. We are easily accessible from all major areas of Dubai.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the opening hours of Prime Stage DXB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open daily (Monday to Sunday) all day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Prime Stage DXB offer private events and corporate wellness sessions in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Prime Stage DXB hosts private events, corporate wellness workshops, and bespoke creative experiences in Dubai. Contact us to discuss your requirements.',
      },
    },
  ],
};

const Contact = () => {
  return (
    <>
      {/* ─── SEO Head ─── */}
      <Helmet>
        <html lang="en" />
        <title>{PAGE_TITLE}</title>
        <meta name="description"         content={PAGE_DESC} />
        <meta name="keywords"            content="contact Prime Stage DXB, book music class Dubai, art workshop Dubai, dance class booking Dubai, yoga Dubai, sound healing Dubai, Prime Stage DXB location, creative studio Dubai contact, wellness studio Dubai, private events Dubai" />
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
        <meta property="og:image:alt"    content="Contact Prime Stage DXB – Dubai's premier creative & wellness studio" />
        <meta property="og:site_name"    content="Prime Stage DXB" />
        <meta property="og:locale"       content="en_AE" />

        {/* Twitter / X Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="Contact Prime Stage DXB – Book classes and events in Dubai" />

        {/* Geo targeting */}
        <meta name="geo.region"          content="AE-DU" />
        <meta name="geo.placename"       content="Dubai" />
        <meta name="geo.position"        content="25.1384;55.2281" />
        <meta name="ICBM"                content="25.1384, 55.2281" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLdContactPage)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFAQ)}</script>
      </Helmet>

      {/* ─── Page Wrapper ─── */}
      <div
        className="w-full"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <meta itemProp="name" content="Contact Prime Stage DXB – Dubai Creative & Wellness Studio" />
        <meta itemProp="url"  content={PAGE_URL} />

        {/* ─── Hero Section ─── */}
        <section
          className="relative min-h-screen flex items-end justify-center pb-36 overflow-hidden isolate"
          aria-label="Contact Prime Stage DXB – Book classes and events in Dubai"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10 bg-black" role="presentation">
            <img
              src="/contact/hero.png"
              alt="Wellness and yoga sessions at Prime Stage DXB – Dubai's creative and wellness studio"
              className="w-full h-full object-cover opacity-50"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          </div>

          {/* Structured breadcrumb – visually hidden for crawlers */}
          <nav aria-label="Breadcrumb" className="sr-only">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name">Contact</span>
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
              Get in Touch
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5EFE7] mb-6 leading-tight"
              style={{ textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}
              itemProp="headline"
            >
              Let&apos;s Create<br />
              <span className="italic text-[#E8DDCF]">Something Together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-xl text-[#F5EFE7]/90 max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              itemProp="description"
            >
              Whether you want to{' '}
              <strong className="text-[#F5EFE7] font-semibold">book a music, art, dance, or wellness class</strong>,
              host a <strong className="text-[#F5EFE7] font-semibold">private event in Dubai</strong>,
              or simply say hello — the team at{' '}
              <strong className="text-[#F5EFE7] font-semibold">Prime Stage DXB</strong> is always here for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://wa.me/971585926856?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-52"
                aria-label="Send a message to Prime Stage DXB on WhatsApp"
              >
                <Button variant="primary" className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent">
                  Send a Message
                </Button>
              </a>
              <Link
                to="/gallery"
                className="w-full sm:w-52"
                aria-label="View Prime Stage DXB gallery – photos of our Dubai studio and classes"
              >
                <Button variant="outline" className="w-full border-2 border-[#E8DDCF] text-[#F5EFE7] hover:bg-[#7A8F7B] hover:border-[#7A8F7B] hover:text-beige-50">
                  View Gallery
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── Contact Content ─── */}
        <section
          id="contact-form"
          className="pb-24 relative overflow-hidden"
          aria-label="Contact form and location details for Prime Stage DXB Dubai"
        >
          {/* Background blobs */}
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sage-200/40 blur-3xl -z-10" aria-hidden="true" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-beige-300/40 blur-3xl -z-10"  aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
            <SectionHeading
              subtitle="Get in Touch"
              title="Let's Connect"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* ── Contact Details ── */}
              <address
                className="space-y-8 not-italic"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name"      content="Prime Stage DXB" />
                <meta itemProp="url"       content="https://primestagedxb.com" />
                <meta itemProp="telephone" content="+971585926856" />
                <meta itemProp="email"     content="Pr@primestagedxb.com" />

                <h2 className="font-serif text-3xl text-sage-900 mb-6">Visit Our Space</h2>
                <p className="text-sage-700 text-lg mb-10">
                  We&apos;d love to hear from you. Whether you have a question about our{' '}
                  <strong className="font-semibold text-sage-800">music, art, dance, or wellness classes in Dubai</strong>,
                  want to host a private event, or just want to say hello — our team is ready to help.
                </p>

                <div className="grid gap-6">
                  {/* Location */}
                  <Card className="p-6" hover={false}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center shrink-0" aria-hidden="true">
                        <MapPin className="text-sage-700" size={24} />
                      </div>
                      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <h3 className="font-bold text-sage-900 mb-1">Our Location</h3>
                        <p className="text-sage-600">
                          <span itemProp="streetAddress">Al Ghazal Mall</span><br />
                          <span itemProp="addressLocality">Dubai</span>,{' '}
                          <span itemProp="addressCountry">United Arab Emirates</span>
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Hours */}
                  <Card className="p-6" hover={false}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center shrink-0" aria-hidden="true">
                        <Clock className="text-sage-700" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sage-900 mb-1">Business Hours</h3>
                        <p className="text-sage-600">
                          <time dateTime="Mo-Su 00:00-24:00">Open Daily: All Day</time>
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Phone & Email */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Card className="p-6 flex-1 text-center" hover={true}>
                      <Phone className="mx-auto text-sage-700 mb-3" size={24} aria-hidden="true" />
                      <h3 className="font-bold text-sage-900 mb-1">Call Us</h3>
                      <a
                        href="tel:+971585926856"
                        className="text-sage-600 text-sm hover:text-sage-800 transition-colors"
                        itemProp="telephone"
                        aria-label="Call Prime Stage DXB at +971 58 592 6856"
                      >
                        +971 58 592 6856
                      </a>
                    </Card>
                    <Card className="p-6 flex-1 text-center" hover={true}>
                      <Mail className="mx-auto text-sage-700 mb-3" size={24} aria-hidden="true" />
                      <h3 className="font-bold text-sage-900 mb-1">Email</h3>
                      <a
                        href="mailto:Pr@primestagedxb.com"
                        className="text-sage-600 text-sm hover:text-sage-800 transition-colors"
                        itemProp="email"
                        aria-label="Email Prime Stage DXB at Pr@primestagedxb.com"
                      >
                        Pr@primestagedxb.com
                      </a>
                    </Card>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/971585926856?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20book%20a%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Prime Stage DXB on WhatsApp to book a class or event in Dubai"
                  className="block"
                >
                  <Button className="w-full mt-4 gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white border-none">
                    <MessageCircle size={20} aria-hidden="true" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </address>

              {/* ── Contact Form ── */}
              <Card className="p-8 md:p-10 bg-beige-50/80 backdrop-blur-md">
                <h2 className="font-serif text-3xl text-sage-900 mb-8">Send a Message</h2>
                <form
                  className="space-y-6"
                  aria-label="Contact form for Prime Stage DXB Dubai"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <meta itemProp="contactType" content="customer service" />
                  <meta itemProp="areaServed"  content="Dubai, UAE" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-sage-800">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        className="w-full bg-beige-100 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:bg-beige-50 transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-sage-800">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        className="w-full bg-beige-100 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:bg-beige-50 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-sage-800">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="w-full bg-beige-100 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:bg-beige-50 transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-sage-800">Phone Number <span className="text-sage-500 font-normal">(optional)</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="w-full bg-beige-100 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:bg-beige-50 transition-colors"
                      placeholder="+971 58 592 6856"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-sage-800">I&apos;m interested in</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full bg-beige-100 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:bg-beige-50 transition-colors text-sage-800"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="music">Music Production / DJ Class</option>
                      <option value="art">Art Workshop</option>
                      <option value="dance">Dance Class</option>
                      <option value="wellness">Yoga / Wellness / Sound Healing</option>
                      <option value="event">Private Event</option>
                      <option value="corporate">Corporate Wellness</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-sage-800">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full bg-beige-100 border border-beige-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:bg-beige-50 transition-colors resize-none"
                      placeholder="Tell us how we can help you — we'd love to hear from you!"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full bg-[#7A8F7B] hover:bg-[#A7B8A5] border-2 border-transparent"
                    aria-label="Submit contact form to Prime Stage DXB Dubai"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* ── Google Maps Iframe ── */}
            <div
              className="mt-20 w-full h-[450px] bg-sage-200 rounded-3xl overflow-hidden relative shadow-md group cursor-pointer"
              role="region"
              aria-label="Map location of Prime Stage DXB at Al Ghazal Mall, Dubai"
              itemScope
              itemType="https://schema.org/Map"
            >
              <meta itemProp="name" content="Prime Stage DXB Location Map – Al Ghazal Mall, Dubai" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.0511118047793!2d55.272983800000006!3d25.237970999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4354ba50509b%3A0x30ea002884183ef6!2sVie%20Fashion%20Academy!5e1!3m2!1sen!2sae!4v1781964784755!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Stage DXB Location Map at Al Ghazal Mall"
              ></iframe>
              {/* Clickable Overlay to redirect to Google Maps */}
              <a 
                href="https://maps.google.com/?q=Vie+Fashion+Academy+Al+Ghazal+Mall+Dubai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-20 bg-transparent cursor-pointer"
                title="Open in Google Maps"
                aria-label="Open location of Prime Stage DXB in Google Maps"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
