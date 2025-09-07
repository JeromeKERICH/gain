import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Handle click outside to close menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      ref={menuRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-b from-gray-900/95 to-gray-900/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link to="/" onClick={handleLinkClick} className="flex items-center">
              <img 
                src="/assets/gain.png" 
                alt="Gulf Africa Investment Nexus Logo" 
                className="h-10 w-auto mr-3"
              />
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 font-medium transition-all duration-300 hover:text-[#d4a23f] ${
                isScrolled ? 'text-gray-700 hover:text-[#d4a23f]' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about" 
              className={`px-4 py-2 transition-all duration-300 hover:text-[#d4a23f] ${
                isScrolled ? 'text-gray-600 hover:text-[#d4a23f]' : 'text-gray-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/programs" 
              className={`px-4 py-2 transition-all duration-300 hover:text-[#d4a23f] ${
                isScrolled ? 'text-gray-600 hover:text-[#d4a23f]' : 'text-gray-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              Programs
            </Link>
            <Link
              to="/contact" 
              className={`px-4 py-2 transition-all duration-300 hover:text-[#d4a23f] ${
                isScrolled ? 'text-gray-600 hover:text-[#d4a23f]' : 'text-gray-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>

          {/* Tickets Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="#tickets" 
              className="bg-gradient-to-r from-[#d4a23f] to-[#e9b85d] hover:from-[#e9b85d] hover:to-[#d4a23f] text-gray-900 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={handleLinkClick}
            >
              Buy Tickets
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button 
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-xl border border-gray-700/50 backdrop-blur-md">
            <Link 
              to="/" 
              className="block py-4 px-6 text-white font-medium border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about" 
              className="block py-4 px-6 text-gray-300 border-b border-gray-700/50 hover:bg-gray-800/50 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              About GAIN
            </Link>
            <Link
              to="/programs" 
              className="block py-4 px-6 text-gray-300 border-b border-gray-700/50 hover:bg-gray-800/50 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className="block py-4 px-6 text-gray-300 border-b border-gray-700/50 hover:bg-gray-800/50 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <div className="p-4 border-t border-gray-700/50">
              <a
                href="#tickets" 
                className="block w-full bg-gradient-to-r from-[#d4a23f] to-[#e9b85d] hover:from-[#e9b85d] hover:to-[#d4a23f] text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center shadow-lg"
                onClick={handleLinkClick}
              >
                Buy Tickets
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}