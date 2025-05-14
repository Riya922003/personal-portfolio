
import { useState } from 'react';
import SocialLinks from './SocialLinks';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { GraduationCap, Book, User, Calendar, Clock } from 'lucide-react';
import { Separator } from './ui/separator';

const About = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'interests'>('bio');
  
  const education = [
    {
      level: "Primary Education",
      institution: "XYZ School",
      period: "2007-2015",
      description: "Completed primary education with emphasis on fundamental skills development."
    },
    {
      level: "Senior Secondary Education",
      institution: "PQR School",
      period: "2015-2019",
      description: "Focused on computer science fundamentals and mathematics."
    },
    {
      level: "Post Graduation (In Progress)",
      institution: "VIT Bhopal University",
      period: "2020-Present",
      description: "Pursuing B.Tech in Computer Science with specialization in AI and ML."
    }
  ];

  const interests = [
    "Artificial Intelligence",
    "Web Development",
    "UI/UX Design",
    "Reading Tech Blogs",
    "Open Source Contribution"
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'bio':
        return (
          <div className="space-y-4 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              A coder of algorithms, architect of digital realms, weaving logic into code, 
              crafting innovations from the ephemeral to the profound.
            </p>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-portfolio-darkpurple">What I bring to the table:</span>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Creative problem solving with elegant solutions</li>
                <li>Detail-oriented approach to code quality</li>
                <li>Passion for learning new technologies</li>
                <li>Effective communication and collaboration</li>
              </ul>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="space-y-6 animate-fade-in px-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-purple to-portfolio-blue"></div>
              
              {/* Timeline items */}
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative ml-14 mb-8 ${index === education.length - 1 ? '' : 'pb-6'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-14 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white border-2 border-portfolio-purple flex items-center justify-center shadow-md z-10">
                      {index === education.length - 1 ? 
                        <Clock className="h-6 w-6 text-portfolio-purple" /> : 
                        <Calendar className="h-6 w-6 text-portfolio-purple" />
                      }
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="p-5 rounded-lg bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-portfolio-purple" />
                        <h4 className="text-lg font-semibold text-portfolio-darkpurple">{item.level}</h4>
                      </div>
                      <div className="mt-2">
                        <p className="font-medium text-gray-800">{item.institution}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'interests':
        return (
          <div className="animate-fade-in">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-gradient-to-r from-portfolio-lightpurple to-portfolio-lightblue 
                          text-portfolio-darkpurple rounded-full text-sm font-medium
                          transition-transform hover:scale-105"
                >
                  {interest}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-600 italic">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
          </div>
        );
    }
  };

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="section-title mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Profile */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-40 bg-gradient-to-r from-portfolio-purple to-portfolio-blue">
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                  <Avatar className="h-24 w-24 ring-4 ring-white">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop" />
                    <AvatarFallback className="bg-portfolio-lightpurple text-portfolio-darkpurple text-2xl">RG</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardContent className="pt-16">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1 text-portfolio-darkpurple">Riya Gupta</h3>
                  <p className="text-gray-500 text-sm mb-4">Computer Science Student</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-3 text-gray-800">Connect with me</h4>
                    <SocialLinks />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Tabbed content */}
          <div className="md:col-span-2">
            <Card className="h-full shadow-lg border-none">
              <div className="flex border-b">
                <button 
                  onClick={() => setActiveTab('bio')}
                  className={`flex items-center gap-2 px-6 py-4 transition-colors ${activeTab === 'bio' 
                    ? 'border-b-2 border-portfolio-purple text-portfolio-purple' 
                    : 'text-gray-500 hover:text-portfolio-purple'}`}
                >
                  <User size={16} />
                  <span>Bio</span>
                </button>
                <button 
                  onClick={() => setActiveTab('education')}
                  className={`flex items-center gap-2 px-6 py-4 transition-colors ${activeTab === 'education' 
                    ? 'border-b-2 border-portfolio-purple text-portfolio-purple' 
                    : 'text-gray-500 hover:text-portfolio-purple'}`}
                >
                  <GraduationCap size={16} />
                  <span>Education</span>
                </button>
                <button 
                  onClick={() => setActiveTab('interests')}
                  className={`flex items-center gap-2 px-6 py-4 transition-colors ${activeTab === 'interests' 
                    ? 'border-b-2 border-portfolio-purple text-portfolio-purple' 
                    : 'text-gray-500 hover:text-portfolio-purple'}`}
                >
                  <Book size={16} />
                  <span>Interests</span>
                </button>
              </div>
              <CardContent className="p-6">
                {renderContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
