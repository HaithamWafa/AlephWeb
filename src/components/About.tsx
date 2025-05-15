
import { Award, Building, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-estate-cream">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">About Aleph Developments</h2>
          <p className="section-subtitle">
            We bring over two decades of expertise to every property development, creating spaces that blend luxury, functionality, and sustainability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-estate-charcoal/80">
              Founded in 2002, Aleph Developments has established itself as a premier real estate development company, specializing in luxury residential and commercial properties around the world.
            </p>
            <p className="text-lg text-estate-charcoal/80">
              Our philosophy is centered around creating exceptional spaces that not only meet the highest standards of quality but also enhance the lives of those who inhabit them.
            </p>
            <p className="text-lg text-estate-charcoal/80">
              From concept to completion, we maintain unwavering commitment to excellence, sustainability, and innovation, ensuring that each property bears our signature of sophistication and timeless elegance.
            </p>
            
            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-block">Learn More About Us</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-60 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=500&h=400" 
                alt="Modern architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 overflow-hidden rounded-lg shadow-lg md:mt-10">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=500&h=400" 
                alt="Luxury interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 overflow-hidden rounded-lg shadow-lg md:mt-[-40px]">
              <img 
                src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=500&h=400" 
                alt="Architectural detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-60 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500&h=400" 
                alt="Modern workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-estate-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="text-estate-gold" size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-estate-navy">250+</h3>
            <p className="text-estate-charcoal mt-2">Projects Completed</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-estate-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-estate-gold" size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-estate-navy">500+</h3>
            <p className="text-estate-charcoal mt-2">Satisfied Clients</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-estate-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-estate-gold" size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-estate-navy">45</h3>
            <p className="text-estate-charcoal mt-2">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
