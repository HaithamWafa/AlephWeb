
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero background with video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-estate-navy/95 to-estate-navy/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=2340&h=1300" 
          alt="Luxury real estate development" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl text-white">
          <div className="mb-10 animate-fade-up">
            <Logo variant="light" size="lg" />
          </div>
          
          <div className="h-px w-24 bg-estate-gold mb-8 animate-fade-up" style={{animationDelay: '0.1s'}}></div>
          
          <h1 className="text-4xl md:text-6xl font-display font-normal mb-6 animate-fade-up tracking-tight leading-tight" style={{animationDelay: '0.2s'}}>
            Crafting Extraordinary Spaces
          </h1>
          
          <p className="text-xl mb-12 opacity-90 animate-fade-up font-light leading-relaxed" style={{animationDelay: '0.3s'}}>
            Luxury real estate developments that combine timeless elegance with innovative design, creating unparalleled living experiences.
          </p>
          
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <a href="#projects" className="bg-estate-gold hover:bg-estate-gold/90 text-estate-navy px-10 py-4 flex items-center gap-2 transition-all font-light tracking-wide shadow-md uppercase text-sm">
              View Collection <ArrowRight size={16} />
            </a>
            <a href="#contact" className="bg-transparent border border-white hover:bg-white/10 text-white px-10 py-4 transition-all font-light tracking-wide uppercase text-sm">
              Inquire
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <div className="h-12 w-px bg-white/30"></div>
        <span className="text-xs mt-2 font-light uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
