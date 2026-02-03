// src/components/Navbar.jsx
import { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['PROJECTS', 'ABOUT', 'CONTACT']; // Updated to match your sections

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Mobile Header */}
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white p-1 rounded">
              <span className="text-primary font-mono font-bold text-lg">{'</>'}</span>
            </div>
            <span className="font-bold text-xl">Noctirion.Dev</span> {/* Updated name */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => ( // <- This map needs a key
              <a
                key={item} // <- This is crucial!
                href={`#${item.toLowerCase().replace(' ', '-')}`} // e.g., 'ABOUT' -> 'about', 'CONTACT' -> 'contact'
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-medium text-gray-300 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="#contact"> {/* Link to contact section */}
              <button className="bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                HIRE ME
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => ( // <- This map also needs a key
                <a
                  key={item} // <- This is crucial!
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-medium text-gray-300 hover:text-accent transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <a href="#contact"> {/* Link to contact section */}
                <button className="mt-2 bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors w-full">
                  HIRE ME
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}