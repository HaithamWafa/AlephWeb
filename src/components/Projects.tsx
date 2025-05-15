
import { useState } from 'react';
import { MapPin } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: "Skyline Residences",
    location: "New York City",
    description: "A collection of luxury penthouses offering panoramic views of the city skyline with premium amenities and sustainable features.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500",
    type: "Residential",
    status: "Completed",
  },
  {
    id: 2,
    title: "The Madison",
    location: "Los Angeles",
    description: "Modern condominiums designed for the urban professional, featuring smart home technology and community workspaces.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800&h=500",
    type: "Residential",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Oceanview Towers",
    location: "Miami",
    description: "Beachfront luxury apartments with resort-style amenities and stunning views of the Atlantic Ocean.",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=800&h=500",
    type: "Residential",
    status: "Completed",
  },
  {
    id: 4,
    title: "Metropolitan Plaza",
    location: "Chicago",
    description: "A mixed-use development combining retail, office spaces, and luxury apartments in the heart of downtown.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500",
    type: "Commercial",
    status: "In Progress",
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(project => project.type === filter || project.status === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Our Signature Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of distinguished developments that showcase our commitment to excellence and innovation.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => setFilter('All')} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'All' 
                  ? 'bg-estate-navy text-white' 
                  : 'bg-gray-100 text-estate-charcoal hover:bg-estate-gold/10'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('Residential')} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'Residential' 
                  ? 'bg-estate-navy text-white' 
                  : 'bg-gray-100 text-estate-charcoal hover:bg-estate-gold/10'
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setFilter('Commercial')} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'Commercial' 
                  ? 'bg-estate-navy text-white' 
                  : 'bg-gray-100 text-estate-charcoal hover:bg-estate-gold/10'
              }`}
            >
              Commercial
            </button>
            <button 
              onClick={() => setFilter('Completed')} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'Completed' 
                  ? 'bg-estate-navy text-white' 
                  : 'bg-gray-100 text-estate-charcoal hover:bg-estate-gold/10'
              }`}
            >
              Completed
            </button>
            <button 
              onClick={() => setFilter('In Progress')} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'In Progress' 
                  ? 'bg-estate-navy text-white' 
                  : 'bg-gray-100 text-estate-charcoal hover:bg-estate-gold/10'
              }`}
            >
              In Progress
            </button>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-estate-navy/10 group-hover:bg-estate-navy/30 transition-all"></div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-sm font-semibold text-estate-navy">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-estate-gold mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-estate-navy mb-2">{project.title}</h3>
                <p className="text-estate-charcoal/80 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-estate-navy font-semibold hover:text-estate-gold transition-colors">
                  View Project Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
