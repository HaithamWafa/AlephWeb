
import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Robert Anderson",
    position: "CEO, Anderson Enterprises",
    quote: "Working with Aleph Developments was an exceptional experience from start to finish. Their attention to detail and commitment to quality is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Sophia Chen",
    position: "Real Estate Investor",
    quote: "The team at Aleph Developments demonstrated profound expertise and professionalism throughout our project. Their innovative approach to development has significantly enhanced our investment portfolio.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Johnson",
    position: "Property Developer",
    quote: "Aleph Developments consistently delivers beyond expectations. Their strategic vision and flawless execution have made them our preferred partner for all our development projects.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-estate-cream">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from our satisfied clients about their experience working with Aleph Developments.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="text-estate-gold fill-estate-gold" size={20} />
              ))}
              {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[activeIndex].rating} className="text-gray-300" size={20} />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center text-estate-charcoal italic mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-estate-gold/20 mb-4"
              />
              <div className="text-center">
                <h4 className="font-serif font-semibold text-estate-navy text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-estate-charcoal/70">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-estate-navy hover:bg-estate-gold hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-estate-navy hover:bg-estate-gold hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-estate-gold w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
