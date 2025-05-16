  import { useState } from 'react';
import { Code, Database, Globe, Palette, Coffee, Layers } from 'lucide-react';

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const technologies = [
    {
      category: "Problem Solving",
      techs: ["C++", "Java", "Python"],
      icon: <Code className="text-indigo-600" />,
      color: "from-indigo-500 to-indigo-700",
      bgLight: "bg-indigo-50"
    },
    {
      category: "Database Management",
      techs: ["MySQL", "MongoDB"],
      icon: <Database className="text-emerald-600" />,
      color: "from-emerald-500 to-emerald-700",
      bgLight: "bg-emerald-50"
    },
    {
      category: "Computer Networking",
      techs: ["TCP/IP", "DNS", "HTTP/HTTPS"],
      icon: <Globe className="text-blue-600" />,
      color: "from-blue-500 to-blue-700",
      bgLight: "bg-blue-50"
    },
    {
      category: "3D Design",
      techs: ["Blender", "AutoCAD", "Maya"],
      icon: <Palette className="text-purple-600" />,
      color: "from-purple-500 to-purple-700",
      bgLight: "bg-purple-50"
    },
    {
      category: "Advanced Java",
      techs: ["Spring Boot", "Hibernate", "Servlets"],
      icon: <Coffee className="text-amber-600" />,
      color: "from-amber-500 to-amber-700",
      bgLight: "bg-amber-50"
    },
    {
      category: "Frameworks",
      techs: ["Django", "Flask", "React"],
      icon: <Layers className="text-rose-600" />,
      color: "from-rose-500 to-rose-700",
      bgLight: "bg-rose-50"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              My Tech Stack
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Expertise across multiple domains with a focus on robust solutions and elegant implementations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 group ${tech.bgLight} shadow-lg transform hover:-translate-y-2`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-br ${tech.color} opacity-20`}></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-md mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {tech.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {tech.techs.map((item, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index 
                          ? `bg-gradient-to-r ${tech.color} text-white` 
                          : "bg-white text-gray-700"
                      } shadow-sm`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <div className="max-w-3xl text-center">
            <div className="inline-block mb-6 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="bg-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Constantly Learning & Growing
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Technology is always evolving, and so am I. I'm passionate about continuous learning
              and keeping up with the latest advancements in my field.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Problem Solving</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Critical Thinking</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Adaptability</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
