import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronRight, Star, Eye } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Online FIR registration System",
      description: "A fully responsive online FIR registration system developed as a college project, also addressing an SIH problem statement.",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5qDsMnKCfnfQ124iaR1ddwHaEc%26cb%3Diwp2%26pid%3DApi&f=1&ipt=cfbf8d054de7d561e154cdcc477ac5182afacfdbc9520d4353b4efb071e273af&ipo=images",
      tags: ["HTML","CSS","Javascript","Flask","Python"],
      category: "web",
      github: "https://github.com/Riya922003/FIR-SAHAYAK.git",
      demo: "https://www.youtube.com/watch?si=no9gF-5NhQX3oGLU&v=4pad51SZs9E&feature=youtu.be",
      featured: true
    },
    {
      title: "Smart Land Registry using Blockchain",
      description: "A blockchain-based smart contract land registry system ensuring secure, transparent, and tamper-proof property transactions.",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.S-BuMXsPRtdf8MBu5a17RgHaEP%26cb%3Diwp2%26pid%3DApi&f=1&ipt=45d68b61b37832e97bdde47825bf599f9eedfdc64a66f1776d112cf8b6742b67&ipo=images",
      tags: ["React","Blockchain","Solidity","Ethereum"],
      category: "app",
      github: "https://github.com/Riya922003/smart-contract-based-land-registration-system-using-blockchain.git",
      demo: "https://smart-contract-based-land-registration-system-using-blockchain.vercel.app/",
      featured: false
    },
    {
      title: "3D SmartTorch",
      description: "A custom-designed SmartTorch, crafted from scratch using Fusion 360 for 3D design and brought to life through 3D printing.",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.Msgv5Ve1-adsQFffUn31TAHaDt%26cb%3Diwp2%26pid%3DApi&f=1&ipt=c9547a6b02414aa38825715a3be300a9ecb4fdd751a5cd643f0e3d10065de00a&ipo=images",
      tags: ["3D Design","Fusion 360","Blender"],
      category: "design",
      github: "#",
      demo: "https://www.linkedin.com/posts/rohan-gautam-b33695250_innovation-smartdevices-hardwaredesign-activity-7296641501814530049-COHI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5A9NkBTrWSbtUWggUoSj1a5OtNWUvINec",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'Applications' },
    { id: 'design', label: '3D & Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Featured Projects
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Showcasing my best work across various domains and technologies
          </p>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-xl group relative"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Star size={12} className="mr-1" />
                  FEATURED
                </div>
              )}

              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-between p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <a 
                    href={project.demo}
                    className="text-sm text-white/90 hover:text-white flex items-center transition-all duration-300"
                  >
                    <Eye size={14} className="mr-1" /> Preview
                  </a>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-50 text-xs font-medium text-indigo-700 rounded-md border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                  >
                    <Github size={16} className="mr-1" />
                    View code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium"
                  >
                    Live demo
                    <ChevronRight size={16} 
                      className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
        <a 
  href="https://github.com/Riya922003" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    className="border-indigo-600 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 px-6 py-2 rounded-full"
  >
    View All Projects <ChevronRight size={16} className="ml-1" />
  </Button>
</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;