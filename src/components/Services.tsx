
import { Building, Home, Globe, CreditCard, Key, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="text-estate-gold" size={32} />,
      title: "Property Development",
      description: "End-to-end development of residential and commercial properties with expert project management and execution."
    },
    {
      icon: <Home className="text-estate-gold" size={32} />,
      title: "Custom Home Design",
      description: "Bespoke home design and construction services tailored to your specific needs, preferences, and lifestyle."
    },
    {
      icon: <Globe className="text-estate-gold" size={32} />,
      title: "International Investments",
      description: "Strategic real estate investment opportunities in emerging and established markets worldwide."
    },
    {
      icon: <CreditCard className="text-estate-gold" size={32} />,
      title: "Financing Solutions",
      description: "Customized financing options and investment strategies for both individual and institutional clients."
    },
    {
      icon: <Key className="text-estate-gold" size={32} />,
      title: "Property Management",
      description: "Comprehensive property management services ensuring optimal performance and value retention."
    },
    {
      icon: <Users className="text-estate-gold" size={32} />,
      title: "Consulting Services",
      description: "Expert consulting on real estate development, market analysis, and feasibility studies."
    }
  ];

  return (
    <section id="services" className="py-24 bg-estate-navy text-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Our Services</h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl">
            We offer a comprehensive suite of real estate development services designed to meet the diverse needs of our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition-all group"
            >
              <div className="bg-estate-navy p-3 rounded-lg inline-block mb-4 group-hover:bg-estate-gold/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-20 bg-estate-gold/20 rounded-xl p-10 text-center">
          <h3 className="text-3xl font-serif font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you bring your vision to life. Contact us today for a consultation.
          </p>
          <a href="#contact" className="bg-estate-gold hover:bg-estate-gold/90 text-white px-8 py-4 rounded inline-block transition-all">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
