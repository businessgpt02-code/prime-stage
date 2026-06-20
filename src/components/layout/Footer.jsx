import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-beige-100/50 text-sage-800 pt-3 pb-8 rounded-t-[3rem] mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start justify-start">
            <Link to="/" className="inline-block mb-2">
              <img 
                src="/logo.png" 
                alt="Prime Stage DXB Logo" 
                className="h-28 md:h-32 w-auto object-contain drop-shadow-md hover:scale-105 transition-all duration-300"
              />
            </Link>
            <a 
              href="https://www.instagram.com/primestagedxb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#7A8F7B] text-[#F5EFE7] hover:bg-[#A7B8A5] transition-all duration-300 shadow-sm font-medium text-sm w-fit group" 
              aria-label="Follow Prime Stage DXB on Instagram"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>Follow @primestagedxb</span>
              </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-sage-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sage-700 hover:text-sage-900 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-sage-700 hover:text-sage-900 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sage-700 hover:text-sage-900 transition-colors">Book a Session</Link></li>
              <li><a href="#" className="text-sage-700 hover:text-sage-900 transition-colors">Instructors</a></li>
              <li><a href="#" className="text-sage-700 hover:text-sage-900 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl text-sage-900 mb-6">Experiences</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20inquire%20about%20Music%20%26%20DJing" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 transition-colors">Music & DJing</a></li>
              <li><a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20inquire%20about%20Art%20Workshops" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 transition-colors">Art Workshops</a></li>
              <li><a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20inquire%20about%20Dance%20Classes" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 transition-colors">Dance Classes</a></li>
              <li><a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20inquire%20about%20Yoga%20%26%20Wellness" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 transition-colors">Yoga & Wellness</a></li>
              <li><a href="https://wa.me/971543867889?text=Hi%20Prime%20Stage%20DXB%2C%20I%27d%20like%20to%20inquire%20about%20Sound%20Healing" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 transition-colors">Sound Healing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl text-sage-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sage-700">
                <MapPin size={20} className="shrink-0 mt-1 text-sage-800" />
                <span>Al Ghazal Mall, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-sage-700">
                <Phone size={20} className="shrink-0 text-sage-800" />
                <a href="tel:+971543867889" className="hover:text-sage-900 transition-colors">+971 54 386 7889</a>
              </li>
              <li className="flex items-center gap-3 text-sage-700">
                <Mail size={20} className="shrink-0 text-sage-800" />
                <a href="mailto:Pr@primestagedxb.com" className="hover:text-sage-900 transition-colors">Pr@primestagedxb.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-sage-600">
          <p>&copy; {new Date().getFullYear()} Prime Stage DXB. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sage-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
