import React from 'react';
import { USER_INTRO_PARAGRAPH, SECTION_TITLE_CLASS, SECTION_PARAGRAPH_CLASS } from '../constants';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative z-10 py-16 sm:py-24 bg-white"> {/* Ensure light background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={SECTION_TITLE_CLASS}>
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className={`${SECTION_PARAGRAPH_CLASS} text-lg md:text-xl text-gray-700 leading-relaxed text-center mx-auto`}> {/* Added mx-auto */}
            {USER_INTRO_PARAGRAPH}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;