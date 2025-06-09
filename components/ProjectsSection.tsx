import React from 'react';
import { SECTION_TITLE_CLASS, SECTION_SUBTITLE_CLASS } from '../constants';

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative z-10 py-16 sm:py-24 bg-gray-50"> {/* Light gray background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={SECTION_TITLE_CLASS}>
          Projects
        </h2>
        <p className={`${SECTION_SUBTITLE_CLASS} mb-12 sm:mb-16`}>
          Here's a glimpse of what I've been working on. More details coming soon!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="w-full h-48 bg-gray-200 rounded-md mb-5 animate-pulse"></div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 font-jetbrains-mono">Project Title {p}</h3>
              <p className="text-gray-600 text-sm font-sf-pro">
                A brief description of the project will go here. Stay tuned for updates and more detailed case studies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;