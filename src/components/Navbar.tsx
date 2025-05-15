
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-sm py-2' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          {/* Using md size for small screens and lg for larger screens */}
          <div className="hidden md:block">
            <Logo variant={isScrolled ? "dark" : "light"} size="md" />
          </div>
          <div className="md:hidden">
            <Logo variant={isScrolled ? "dark" : "light"} size="sm" />
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className={`${isScrolled ? 'text-estate-navy' : 'text-white'} hover:text-estate-gold transition-colors font-light text-sm uppercase tracking-wider`}>Home</a>
          <a href="#about" className={`${isScrolled ? 'text-estate-navy' : 'text-white'} hover:text-estate-gold transition-colors font-light text-sm uppercase tracking-wider`}>About</a>
          <a href="#projects" className={`${isScrolled ? 'text-estate-navy' : 'text-white'} hover:text-estate-gold transition-colors font-light text-sm uppercase tracking-wider`}>Projects</a>
          <a href="#services" className={`${isScrolled ? 'text-estate-navy' : 'text-white'} hover:text-estate-gold transition-colors font-light text-sm uppercase tracking-wider`}>Services</a>
          <a href="#testimonials" className={`${isScrolled ? 'text-estate-navy' : 'text-white'} hover:text-estate-gold transition-colors font-light text-sm uppercase tracking-wider`}>Testimonials</a>
          <a href="#contact" className="border border-estate-gold hover:bg-estate-gold hover:text-white text-sm uppercase tracking-wider px-6 py-2 transition-all font-light text-white">Contact Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-estate-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 w-full shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a href="#" className="text-estate-navy hover:text-estate-gold transition-colors px-4 py-2 font-light text-sm uppercase tracking-wider">Home</a>
            <a href="#about" className="text-estate-navy hover:text-estate-gold transition-colors px-4 py-2 font-light text-sm uppercase tracking-wider">About</a>
            <a href="#projects" className="text-estate-navy hover:text-estate-gold transition-colors px-4 py-2 font-light text-sm uppercase tracking-wider">Projects</a>
            <a href="#services" className="text-estate-navy hover:text-estate-gold transition-colors px-4 py-2 font-light text-sm uppercase tracking-wider">Services</a>
            <a href="#testimonials" className="text-estate-navy hover:text-estate-gold transition-colors px-4 py-2 font-light text-sm uppercase tracking-wider">Testimonials</a>
            <a href="#contact" className="bg-estate-navy text-white px-4 py-2 mx-4 text-center transition-all font-light text-sm uppercase tracking-wider">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
