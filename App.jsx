// src/App.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Competencies from './components/competencies';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <Competencies />
      <AboutMeSection /> 
      <ContactSection />
    </>
  );
}