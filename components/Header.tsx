import React, { useState, useEffect, useCallback } from 'react';
import { LOGO_TEXT } from '../constants';
import { NavLinkItem } from '../types';

interface HeaderProps {
  navLinks: NavLinkItem[];
  // socialLinks: SocialLinkItem[]; // Removed
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0]?.href || '#home');

  const handleScroll = useCallback(() => {
    let currentSection = navLinks[0]?.href || '#home';
    const offset = window.innerHeight / 3; 

    for (let i = navLinks.length - 1; i >= 0; i--) {
      const sectionId = navLinks[i].href.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = navLinks[i].href;
          break;
        }
        if (i === 0 && rect.top >= 0 && rect.top <= offset) {
            currentSection = navLinks[i].href;
            break;
        }
      }
    }
    setActiveSection(currentSection);
  }, [navLinks]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinkClasses = (href: string, isMobile: boolean = false) => {
    const isActive = activeSection === href;
    if (isMobile) {
      return `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-sf-pro ${
        isActive ? 'bg-cyan-600 text-white' : 'text-gray-200 hover:bg-gray-700 hover:text-white'
      }`;
    }
    return `text-sm font-medium transition-colors duration-300 font-sf-pro
      ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
    `;
  };
  
  const headerHeight = "h-20";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg ${headerHeight} px-4 sm:px-6 lg:px-8 flex items-center`}
    >
      <div className="container mx-auto flex justify-between items-center w-full">
        <a href="#home" className="text-2xl sm:text-3xl font-jetbrains-mono font-bold text-white hover:text-cyan-400 transition-colors duration-300">
          {LOGO_TEXT}
        </a>
        
        <nav className="hidden md:flex flex-grow justify-center space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={navLinkClasses(link.href)}
              aria-current={activeSection === link.href ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social links removed from here */}

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 p-2 rounded-md"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
         {/* Placeholder to balance the flex layout if social icons were on the right */}
        <div className="hidden md:block w-[140px] "></div> {/* Adjust width as needed, roughly to match social icons width */}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 shadow-xl rounded-b-lg">
          <nav className="flex flex-col space-y-1 px-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                  setActiveSection(link.href);
                }}
                className={navLinkClasses(link.href, true)}
                aria-current={activeSection === link.href ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
            {/* Social links removed from mobile menu too */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;