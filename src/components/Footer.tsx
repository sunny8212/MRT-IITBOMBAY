
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-space-dark py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mars via-cosmic to-mars"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop} 
            className="bg-space p-3 rounded-full mb-8 hover:bg-space-light/30 transition-colors"
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </button>
          
          <div className="text-center mb-8">
            <div className="text-2xl font-bold font-technospace text-gradient mb-2">
              IITB MARTIAN
            </div>
            <p className="text-white/70 max-w-md mx-auto">
              Building the future of Mars exploration through student innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10 w-full max-w-4xl">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#about" className="text-white/70 hover:text-white transition-colors">Our Mission</a></li>
                <li><Link to="/team" className="text-white/70 hover:text-white transition-colors">Team</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Projects</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/rover" className="text-white/70 hover:text-white transition-colors">Rovers</Link></li>
                <li><Link to="/competitions" className="text-white/70 hover:text-white transition-colors">Competitions</Link></li>
                <li><Link to="/gallery" className="text-white/70 hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
                <li><Link to="/updates" className="text-white/70 hover:text-white transition-colors">Updates & Media</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} IIT Bombay Mars Rover Team. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
