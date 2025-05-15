
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-estate-navy text-white pt-24 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo variant="light" size="md" />
            </div>
            <div className="h-px w-12 bg-estate-gold mb-6"></div>
            <p className="text-white/70 mb-8 font-light leading-relaxed">
              Creating exceptional living experiences through innovative design, premium materials, and unmatched attention to detail.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="border border-white/20 hover:border-estate-gold hover:bg-estate-gold text-white p-2 transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="border border-white/20 hover:border-estate-gold hover:bg-estate-gold text-white p-2 transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="border border-white/20 hover:border-estate-gold hover:bg-estate-gold text-white p-2 transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="border border-white/20 hover:border-estate-gold hover:bg-estate-gold text-white p-2 transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Quick Links</h4>
            <div className="h-px w-12 bg-estate-gold mb-6"></div>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-estate-gold transition-colors font-light">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-estate-gold transition-colors font-light">About Us</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-estate-gold transition-colors font-light">Our Projects</a></li>
              <li><a href="#services" className="text-white/70 hover:text-estate-gold transition-colors font-light">Services</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-estate-gold transition-colors font-light">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-estate-gold transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-6">Our Services</h4>
            <div className="h-px w-12 bg-estate-gold mb-6"></div>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/70 hover:text-estate-gold transition-colors font-light">Property Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-estate-gold transition-colors font-light">Custom Home Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-estate-gold transition-colors font-light">International Investments</a></li>
              <li><a href="#services" className="text-white/70 hover:text-estate-gold transition-colors font-light">Financing Solutions</a></li>
              <li><a href="#services" className="text-white/70 hover:text-estate-gold transition-colors font-light">Property Management</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg mb-6">Stay Informed</h4>
            <div className="h-px w-12 bg-estate-gold mb-6"></div>
            <p className="text-white/70 mb-6 font-light">Subscribe to receive updates on our latest projects and offerings.</p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="premium-input w-full text-white placeholder:text-white/50"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-estate-gold hover:bg-estate-gold/90 text-estate-navy py-3 transition-all text-sm uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0 font-light">
              &copy; {currentYear} <span className="text-estate-gold">ALEPH</span> DEVELOPMENTS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-estate-gold transition-colors font-light">Privacy Policy</a>
              <a href="#" className="hover:text-estate-gold transition-colors font-light">Terms of Service</a>
              <a href="#" className="hover:text-estate-gold transition-colors font-light">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
