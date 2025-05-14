
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

interface SocialLinkProps {
  dark?: boolean;
}

const SocialLinks = ({ dark = false }: SocialLinkProps) => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/',
      bgColor: 'bg-[#0A66C2]' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/',
      bgColor: 'bg-[#333333]' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/',
      bgColor: 'bg-[#1DA1F2]' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:riya.gupta@example.com',
      bgColor: 'bg-[#EA4335]' 
    }
  ];

  const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300";
  const lightModeClasses = "shadow-md hover:-translate-y-1 hover:shadow-lg";
  const darkModeClasses = "text-white/80 hover:text-white hover:bg-white/20";

  return (
    <div className="flex space-x-5 justify-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`${baseClasses} ${dark ? darkModeClasses : `${link.bgColor} ${lightModeClasses}`}`}
          aria-label={link.name}
          title={link.name}
        >
          <link.icon size={18} className={dark ? "" : "text-white"} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
