
import ResumeButton from './ResumeButton';
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-portfolio-lightpurple/30"
    >
      <div className="container mx-auto px-4 md:flex">
        <div className="md:w-3/5 space-y-6 animate-fade-in">
          <h2 className="text-portfolio-purple font-semibold text-xl">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Riya Gupta
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-700">
            I'm a <span className="gradient-text">Creative Designer</span>
          </h3>
          <p className="text-gray-600 max-w-lg text-lg">
            As a 3rd-year student pursuing a B.Tech in Computer Science, 
            I have honed in problem solving and programming skills.
            I am passionate about creating innovative solutions and products.
            I am always eager to learn and grow, and I am excited to take on new challenges.
            I am looking for opportunities to apply my skills and knowledge in a real-world setting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
            <ResumeButton />
            <SocialLinks />
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center mt-12 md:mt-0">
          <div className="relative">
            {/* Main circle */}
            <div className={cn(
              "w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-purple/20",
              "flex items-center justify-center animate-float"
            )}>
              {/* Inner circle with image */}
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://i.postimg.cc/gJqf9hFN/profile.jpg" 
                  alt="Riya Gupta"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 -right-6 w-12 h-12 rounded-full bg-portfolio-blue/30 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 -left-8 w-16 h-16 rounded-full bg-portfolio-purple/40 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 right-12 w-8 h-8 rounded-full bg-portfolio-lightblue/60 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
