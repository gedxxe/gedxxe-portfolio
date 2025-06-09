
import { SocialLinkItem, NavLinkItem } from './types';
import GithubIcon from './components/icons/GithubIcon';
import InstagramIcon from './components/icons/InstagramIcon';
import ScholarIcon from './components/icons/ScholarIcon';
import IeeeIcon from './components/icons/IeeeIcon';
import LinkedinIcon from './components/icons/LinkedinIcon';

export const LOGO_TEXT = "gedxxe"; 
// export const PORTFOLIO_TITLE = "gdxxe-portfolio"; // No longer used for hero title display like before
export const USER_NAME = "I Gede Bagus Jayendra";

export const USER_INTRO_PARAGRAPH = `An Electrical Engineering student at Universitas Negeri Semarang (Class of '22), I am deeply passionate about the field, with a research focus on Machine Learning and Deep Learning. My work centers on applying these advanced technologies to innovate within the agricultural sector, driven by both research initiatives and community service projects. I am proficient in Python for machine learning applications and MATLAB for power electronics simulations.`;

export const INNOVATOR_TITLE = "INNOVATOR";
export const INNOVATOR_DESC = "Passionate Electrical Engineering student applying ML & Deep Learning to innovate in agriculture and community projects.";

export const DEVELOPER_TITLE = "<developer>";
export const DEVELOPER_DESC = "Proficient in Python for machine learning and MATLAB for power electronics simulations, creating efficient solutions.";


export const SOCIAL_LINKS: SocialLinkItem[] = [
  { name: 'GitHub', url: 'https://github.com/gedxxe', icon: GithubIcon, ariaLabel: "Visit I Gede Bagus Jayendra's GitHub profile" },
  { name: 'Instagram', url: 'https://www.instagram.com/gedxxe/', icon: InstagramIcon, ariaLabel: "Visit I Gede Bagus Jayendra's Instagram profile" },
  { name: 'Scholar', url: 'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID', icon: ScholarIcon, ariaLabel: "Visit I Gede Bagus Jayendra's Google Scholar profile" }, // Replace YOUR_SCHOLAR_ID
  { name: 'IEEE', url: 'https://ieeexplore.ieee.org/author/YOUR_IEEE_AUTHOR_ID', icon: IeeeIcon, ariaLabel: "Visit I Gede Bagus Jayendra's IEEE Author Page" }, // Replace YOUR_IEEE_AUTHOR_ID
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/igedebagusjayendra/', icon: LinkedinIcon, ariaLabel: "Visit I Gede Bagus Jayendra's LinkedIn profile" },
];

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '#home' }, // Home will be the new hero section
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SECTION_TITLE_CLASS = "text-3xl sm:text-4xl font-jetbrains-mono font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600"; // Gradient should work on light bg
export const SECTION_SUBTITLE_CLASS = "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sf-pro"; // Darker text for light bg
export const SECTION_PARAGRAPH_CLASS = "text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl font-sf-pro"; // Darker text for light bg