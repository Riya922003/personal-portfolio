
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with features like drag-and-drop, categories, and reminder notifications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Django", "PostgreSQL", "React", "Redux"],
      github: "#",
      demo: "#"
    },
    {
      title: "3D Portfolio Showcase",
      description: "An interactive 3D portfolio website showcasing design projects with immersive visualization techniques.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Three.js", "WebGL", "JavaScript", "GSAP"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="work" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Work</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-portfolio-purple">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-white text-xs font-medium text-portfolio-darkpurple rounded-full border border-portfolio-lightpurple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-700 hover:text-portfolio-purple transition-colors text-sm"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-portfolio-purple hover:text-portfolio-darkpurple transition-colors text-sm font-medium"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
