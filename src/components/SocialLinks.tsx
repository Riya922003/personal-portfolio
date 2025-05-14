
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLinkProps {
  dark?: boolean;
}

const SocialLinks = ({ dark = false }: SocialLinkProps) => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:riya.gupta@example.com' 
    }
  ];

  const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300";
  const lightClasses = "text-gray-700 hover:text-white hover:bg-portfolio-purple";
  const darkClasses = "text-white/80 hover:text-white hover:bg-white/20";

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`${baseClasses} ${dark ? darkClasses : lightClasses}`}
          aria-label={link.name}
        >
          <link.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
