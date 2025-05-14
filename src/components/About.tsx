
import SocialLinks from './SocialLinks';

const About = () => {
  const education = [
    {
      level: "Primary Education",
      institution: "XYZ School",
      period: "2007-2015"
    },
    {
      level: "Senior Secondary Education",
      institution: "PQR School",
      period: "2015-2019"
    },
    {
      level: "Post Graduation (In Progress)",
      institution: "VIT Bhopal University",
      period: "2020-Present"
    }
  ];

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left column - Bio */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-darkpurple">Hello! I'm Riya Gupta.</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A coder of algorithms, architect of digital realms, weaving logic into code, 
                crafting innovations from the ephemeral to the profound.
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-3 text-gray-800">Connect with me</h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          
          {/* Right column - Education */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-darkpurple">Education</h3>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col md:flex-row md:items-center p-4 rounded-lg bg-white border border-gray-100 transition-transform hover:-translate-y-1"
                  >
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <h4 className="text-portfolio-purple font-medium">{item.level}</h4>
                      <span className="text-sm text-gray-500">{item.period}</span>
                    </div>
                    <div className="md:w-2/3">
                      <h5 className="font-medium text-gray-800">{item.institution}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
