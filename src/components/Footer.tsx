
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-darkpurple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Riya Gupta</h3>
            <p className="text-white/70 mb-6">
              Creative designer and programmer specializing in developing
              elegant solutions to complex problems.
            </p>
            <SocialLinks dark />
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#tech-stack" className="text-white/70 hover:text-white transition-colors">Tech Stack</a></li>
              <li><a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-portfolio-lightpurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/70">riya.gupta@example.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-portfolio-lightpurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-portfolio-lightpurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/70">VIT Bhopal University, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Riya Gupta. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
