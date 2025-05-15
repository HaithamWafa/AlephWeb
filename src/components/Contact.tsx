
import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message. We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Contact us to discuss your real estate development needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="bg-estate-navy text-white rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-serif font-semibold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-estate-gold/20 rounded-full p-3 mr-4">
                  <MapPin className="text-estate-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Main Office</h4>
                  <p className="text-white/70">1234 Park Avenue, New York, NY 10022</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-estate-gold/20 rounded-full p-3 mr-4">
                  <Mail className="text-estate-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-white/70">info@alephworx.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-estate-gold/20 rounded-full p-3 mr-4">
                  <Phone className="text-estate-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            {/* Office hours */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-serif font-semibold text-estate-navy mb-6">Send us a Message</h3>
            
            {submitMessage && (
              <div className="bg-green-50 text-green-700 p-4 rounded mb-6">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-estate-charcoal mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-estate-gold/50 focus:border-estate-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-estate-charcoal mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-estate-gold/50 focus:border-estate-gold"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-estate-charcoal mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-estate-gold/50 focus:border-estate-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-estate-charcoal mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-estate-gold/50 focus:border-estate-gold"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-estate-navy hover:bg-opacity-90 text-white py-4 rounded-lg transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
