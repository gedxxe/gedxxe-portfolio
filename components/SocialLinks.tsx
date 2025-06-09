import React from 'react';
import { SocialLinkItem } from '../types';

interface SocialLinksProps {
  links: SocialLinkItem[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <nav className="flex items-center gap-4 sm:gap-5"> {/* Increased gap slightly */}
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          title={link.name} // Tooltip for accessibility
          className="text-gray-700 hover:text-cyan-500 transition-all duration-300 transform hover:scale-110" // Adjusted for light background
        >
          <link.icon className="w-6 h-6 sm:w-7 sm:h-7" /> {/* Slightly increased icon size */}
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;