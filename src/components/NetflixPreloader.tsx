import React, { useState, useEffect } from 'react';
import './NetflixPreloader.css';

interface NetflixPreloaderProps {
  onLoadingComplete: () => void;
}

const NetflixPreloader: React.FC<NetflixPreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState('Initializing');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const loadingPhases = [
      'Initializing',
      'Loading components',
      'Preparing experience',
      'Almost ready',
      'Finalizing'
    ];
    // Show text after a brief delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Try to preload the optional logo image at /L1.png
    const logo = new Image();
    logo.onload = () => {
      setLogoLoaded(true);
      // give a little progress bump when the logo loads
      setProgress((p) => Math.max(p, 8));
    };
    logo.onerror = () => {
      setLogoError(true);
    };
    logo.src = '/L1.png';

    // Simulate loading progress with phases
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setLoadingPhase('Complete!');
          // Complete loading after a brief pause
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        
        // Update loading phase based on progress
        const phaseIndex = Math.floor((prevProgress / 100) * (loadingPhases.length - 1));
        setLoadingPhase(loadingPhases[phaseIndex]);
        
        // Simulate realistic loading with varying speeds
        const increment = Math.random() * 12 + 3;
        return Math.min(prevProgress + increment, 100);
      });
    }, 250);

    return () => {
      clearTimeout(textTimer);
      clearInterval(progressInterval);
      // cleanup image handlers
      logo.onload = null;
      logo.onerror = null;
    };
  }, [onLoadingComplete]);

  return (
    <div className="netflix-preloader fixed inset-0 bg-[#E50914] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background pattern for subtle texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-transparent to-red-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-red-800 via-transparent to-red-600"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 floating-element">
        {/* Optional logo/image (place your attachment at `public/L1.png`) */}
        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mb-2 flex items-center justify-center">
          <img
            src="/L1.png"
            alt="logo"
            onError={() => setLogoError(true)}
            onLoad={() => setLogoLoaded(true)}
            className={`object-contain max-w-full max-h-full transition-all duration-700 ${logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          />
        </div>

        {/* Custom Netflix-style logo/text */}
        <div className={`transition-all duration-1000 transform ${showText ? 'opacity-100 translate-y-0 fade-in-scale' : 'opacity-0 translate-y-4'}`}>
          <h1 className="netflix-text text-white font-bold text-4xl md:text-6xl lg:text-7xl tracking-wide text-center">
            <span className="inline-block animate-pulse bg-gradient-to-r from-white via-red-100 to-white bg-clip-text">
              Compiling
            </span>
            <br />
            <span className="inline-block animate-pulse delay-200 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text">
              awesomeness
            </span>
          </h1>
        </div>

        {/* Loading progress bar */}
        <div className="w-64 md:w-80 lg:w-96">
          <div className="bg-red-900/30 rounded-full h-2 overflow-hidden shadow-lg">
            <div 
              className="progress-bar h-full bg-gradient-to-r from-white to-red-100 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="text-center mt-4">
            <span className="text-white text-xl font-medium tracking-wider">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Netflix-style loading dots animation */}
        <div className="flex space-x-3">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: '1.6s'
              }}
            />
          ))}
        </div>

        {/* Dynamic loading phase text */}
        <div className={`transition-all duration-500 ${showText ? 'opacity-70' : 'opacity-0'}`}>
          <p className="text-white text-base md:text-lg text-center font-light tracking-wider">
            {loadingPhase}...
          </p>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.1 + 0.05,
              animationDelay: Math.random() * 4 + 's',
              animationDuration: Math.random() * 4 + 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Additional glowing effect */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default NetflixPreloader;