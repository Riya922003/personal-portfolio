import { useState } from 'react';
import SocialLinks from './SocialLinks';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { GraduationCap, Book, User, Calendar, Clock, Palette, Code, Database, Rocket, Star } from 'lucide-react';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';

const About = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'interests'>('bio');
  
  const education = [
    {
      level: "Primary Education",
      institution: "City Montessori School",
      period: "2007-2018",

    },
    {
      level: "Senior Secondary Education",
      institution: "RAN public School",
      period: "2015-2021",
    },
    {
      level: "Under Graduation (In Progress)",
      institution: "VIT Bhopal University",
      period: "2022-Present",
    }
  ];

  const interests = [
    { 
      name: "Artificial Intelligence",
      icon: <Database className="h-5 w-5" />,
      color: "from-purple-500 to-indigo-500"
    },
    { 
      name: "Web Development",
      icon: <Code className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "UI/UX Design",
      icon: <Palette className="h-5 w-5" />,
      color: "from-pink-500 to-rose-500"
    },
    { 
      name: "3D designing and printing",
      icon: <Book className="h-5 w-5" />,
      color: "from-amber-500 to-orange-500"
    },
    { 
      name: "Open Source Contribution",
      icon: <Star className="h-5 w-5" />,
      color: "from-emerald-500 to-green-500"
    }
  ];

  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Design is not just what it looks like. Design is how it works.", author: "Steve Jobs" }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                  <div className="relative p-5 text-white h-full flex flex-col justify-between">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-white/20 rounded-full mr-3">
                        {interest.icon}
                      </div>
                      <h4 className="font-semibold">{interest.name}</h4>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Rocket className="opacity-50 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-6 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-purple to-portfolio-blue"></div>
              <div className="pl-4">
                <p className="text-gray-700 italic text-lg font-serif relative">
                  "{quotes[currentQuote].text}"
                  <span className="absolute -left-4 top-0 text-4xl text-portfolio-purple opacity-20">"</span>
                </p>
                <p className="mt-2 text-right text-portfolio-darkpurple font-medium">
                  - {quotes[currentQuote].author}
                </p>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {quotes.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-all ${currentQuote === index ? 'bg-portfolio-purple w-6' : 'bg-gray-300'}`}
                    aria-label={`Quote ${index + 1}`}
                  />
                ))}
              </div>
            </div>
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
                  <div className="mt-6 mb-4">
                    <div className="relative mb-6">
                      <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 py-2 rounded-full text-white font-medium shadow-md">
                        Connect with me
                      </span>
                    </div>
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