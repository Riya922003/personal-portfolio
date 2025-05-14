
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative inline-block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button 
        className={`bg-portfolio-purple hover:bg-portfolio-darkpurple transition-all duration-300 
                   relative z-10 pl-4 pr-10 py-6 text-base overflow-hidden`}
      >
        <span className="relative z-10">Download Resume</span>
        <span 
          className={`absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center 
                    bg-portfolio-darkpurple transition-transform duration-300
                    ${isHovered ? 'translate-x-0' : 'translate-x-2'}`}
        >
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-y-1' : 'translate-y-0'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </span>
        
        {/* Animated particles */}
        {isHovered && (
          <>
            <span className="absolute w-2 h-2 rounded-full bg-white/30 top-2 left-2 animate-ping" />
            <span className="absolute w-1 h-1 rounded-full bg-white/30 bottom-2 right-10 animate-ping" style={{ animationDuration: '1.5s' }} />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-white/30 top-1/2 right-12 animate-ping" style={{ animationDuration: '2s' }} />
          </>
        )}
      </Button>
      
      {/* Shadow effect */}
      <div className="absolute inset-0 bg-portfolio-purple/20 rounded-md filter blur-md transform translate-y-2 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ResumeButton;
