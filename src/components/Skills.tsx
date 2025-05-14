
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    { name: "Web Development", percentage: 85 },
    { name: "Problem Solving", percentage: 90 },
    { name: "Database Design", percentage: 80 },
    { name: "UI/UX Design", percentage: 75 },
    { name: "Network Architecture", percentage: 70 },
    { name: "Mobile Development", percentage: 65 }
  ]);

  return (
    <section id="skills" className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">{skill.name}</h3>
                <span className="text-portfolio-purple font-semibold">{skill.percentage}%</span>
              </div>
              
              <div className="relative">
                <Progress 
                  value={skill.percentage} 
                  className="h-2 bg-gray-200"
                />
                <div 
                  className={`absolute top-0 left-0 h-2 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-center text-portfolio-darkpurple">Languages & Tools</h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
            {["HTML/CSS", "JavaScript", "Python", "Java", "C++", "MySQL", 
              "MongoDB", "Git", "Figma", "React", "Django", "Flask"].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-portfolio-lightpurple rounded-full mb-2">
                  <span className="text-lg text-portfolio-darkpurple">{item.charAt(0)}</span>
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
