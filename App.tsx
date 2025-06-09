import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import PCBBackground from './components/PCBBackground'; // Removed
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor'; // Import CustomCursor
import { NAV_LINKS } from './constants';


const App: React.FC = () => {
  const headerHeight = "5rem"; // Adjusted for new header design (h-20)

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-800 flex flex-col"> {/* Changed background */}
      {/* <PCBBackground /> */} {/* Removed */}
      <CustomCursor /> {/* Add CustomCursor here */}
      
      <Header navLinks={NAV_LINKS} />

      {/* Main content container that will scroll */}
      <main style={{ paddingTop: headerHeight }} className="flex-grow">
        <HeroSection id={NAV_LINKS[0].href.substring(1)} />
        <AboutSection id={NAV_LINKS[1].href.substring(1)} />
        <ProjectsSection id={NAV_LINKS[2].href.substring(1)} />
        <ContactSection id={NAV_LINKS[3].href.substring(1)} />
      </main>
      
      <footer className="relative z-10 text-center py-8 text-sm text-gray-500 font-sf-pro border-t border-gray-200"> {/* Adjusted for light theme */}
        <p>&copy; {new Date().getFullYear()} I Gede Bagus Jayendra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;