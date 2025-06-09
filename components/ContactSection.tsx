import React from 'react';
import { SECTION_TITLE_CLASS, SECTION_SUBTITLE_CLASS } from '../constants';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative z-10 py-16 sm:py-24 bg-white"> {/* White background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={SECTION_TITLE_CLASS}>
          Get In Touch
        </h2>
        <p className={`${SECTION_SUBTITLE_CLASS} mb-8`}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
        </p>
        <div className="mt-8">
          <a 
            href="mailto:your.email@example.com" // Replace with actual email
            className="font-sf-pro inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            aria-label="Send an email to I Gede Bagus Jayendra"
          >
            Say Hello
          </a>
          <p className="mt-6 text-gray-500 font-sf-pro">
            Alternatively, feel free to connect with me on LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;