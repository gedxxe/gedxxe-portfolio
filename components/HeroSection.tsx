import React from 'react';
import { INNOVATOR_TITLE, INNOVATOR_DESC, DEVELOPER_TITLE, DEVELOPER_DESC, SOCIAL_LINKS } from '../constants';
import SocialLinks from './SocialLinks'; // Import SocialLinks

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section 
      id={id} 
      className="w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-gray-800 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-12">
          {/* Left Column: Innovator */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-jetbrains-mono font-bold mb-3 text-gray-900">
              {INNOVATOR_TITLE}
            </h1>
            <p className="text-md sm:text-lg text-gray-600 font-sf-pro max-w-xs mx-auto text-center">
              {INNOVATOR_DESC}
            </p>
          </div>

          {/* Center Column: Image & Social Links */}
          <div className="flex flex-col justify-center items-center order-first md:order-none">
            <div 
              className="w-48 h-64 sm:w-60 sm:h-80 md:w-64 md:h-96 rounded-lg shadow-2xl overflow-hidden relative mb-6 bg-gray-200" // Added bg-gray-200 for loading state
            >
              <img 
                src="/public/images/fotodiri.jpg" // Path changed back
                alt="I Gede Bagus Jayendra" 
                className="w-full h-full object-cover" 
              />
            </div>
            <SocialLinks links={SOCIAL_LINKS} />
          </div>

          {/* Right Column: Developer */}
          <div className="text-center md:text-left relative">
            {/* Background code snippet styling */}
            <div className="absolute -top-10 -right-10 bottom-0 -left-10 md:left-auto md:-bottom-10 opacity-5 pointer-events-none font-jetbrains-mono text-xs text-gray-400 leading-tight overflow-hidden hidden sm:block" aria-hidden="true">
              <pre className="whitespace-pre-wrap">
                {`body {\n  font-family: 'SF Pro Text';\n  color: #333;\n}\n\n.highlight {\n  background: cyan;\n  border-radius: 3px;\n}\n\nfunction greet(name) {\n  console.log('Hello, ' + name);\n}\n\n// Welcome to my portfolio!`}
              </pre>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-jetbrains-mono font-bold mb-3 text-gray-900">
              {DEVELOPER_TITLE}
            </h1>
            <p className="text-md sm:text-lg text-gray-600 font-sf-pro max-w-xs mx-auto text-center">
              {DEVELOPER_DESC}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;