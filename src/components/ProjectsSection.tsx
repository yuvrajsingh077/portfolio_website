
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    description: 'A modern e-commerce platform with advanced filtering and cart functionality.'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    description: 'A sleek mobile banking application focused on user experience and security.'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2874&auto=format&fit=crop',
    description: 'A creative portfolio for a digital artist with dynamic transitions.'
  },
  {
    id: 4,
    title: 'Health Tracker Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2455&auto=format&fit=crop',
    description: 'A comprehensive health stats tracking dashboard with visual data representation.'
  },
  {
    id: 5,
    title: 'Restaurant Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2474&auto=format&fit=crop',
    description: 'A responsive website for a high-end restaurant with online booking.'
  },
  {
    id: 6,
    title: 'Travel App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2421&auto=format&fit=crop',
    description: 'A travel planning app with itinerary management and location-based services.'
  }
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my recent work and personal projects. Each project represents my 
            dedication to creating beautiful and functional digital experiences.
          </p>
        </div>
        
        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button 
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={cn(
                "border-white/10",
                activeCategory === category 
                  ? "bg-primary hover:bg-primary/90" 
                  : "hover:bg-white/5"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="rounded-xl overflow-hidden glass group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent flex items-end transition-opacity duration-300",
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )}>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <span className="text-sm text-primary">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show more button */}
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">Show More Projects</Button>
        </div>
      </div>
    </section>
  );
}
