
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'py-4 bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold gradient-text">
          Riya Gupta
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-portfolio-purple transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-portfolio-purple border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
