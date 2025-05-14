
const TechStack = () => {
  const technologies = [
    {
      category: "Problem Solving",
      techs: ["C++", "Java", "Python"],
      icon: "💡"
    },
    {
      category: "Database Management",
      techs: ["MySQL", "MongoDB"],
      icon: "🗄️"
    },
    {
      category: "Computer Networking",
      techs: ["TCP/IP", "DNS", "HTTP/HTTPS"],
      icon: "🌐"
    },
    {
      category: "3D Design",
      techs: ["Blender", "AutoCAD", "Maya"],
      icon: "🎨"
    },
    {
      category: "Advanced Java",
      techs: ["Spring Boot", "Hibernate", "Servlets"],
      icon: "☕"
    },
    {
      category: "Frameworks",
      techs: ["Django", "Flask", "React"],
      icon: "⚙️"
    }
  ];

  return (
    <section id="tech-stack" className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-portfolio-lightpurple"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{tech.icon}</span>
                <h3 className="text-xl font-semibold text-portfolio-darkpurple">
                  {tech.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {tech.techs.map((item, idx) => (
                  <span 
                    key={idx}
                    className="tech-tag"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="max-w-3xl text-center">
            <h3 className="text-2xl font-medium mb-6 gradient-text">Constantly Learning & Growing</h3>
            <p className="text-gray-700">
              Technology is always evolving, and so am I. I'm passionate about continuous learning
              and keeping up with the latest advancements in my field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
