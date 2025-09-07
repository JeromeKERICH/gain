import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function EventModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // Close modal after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    // Countdown timer
    const countdown = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-[#d4a23f] shadow-2xl max-w-md w-full overflow-hidden">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Countdown indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
          <div 
            className="h-full bg-[#d4a23f] transition-all duration-1000"
            style={{ width: `${(timeLeft / 5) * 100}%` }}
          ></div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/assets/gain.png" 
              alt="GAIN Summit" 
              className="h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">GAIN Summit 2025</h2>
            <p className="text-[#d4a23f] text-sm">Dubai, November 24-25</p>
          </div>

          {/* Main message */}
          <div className="mb-6">
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Join Gulf-Africa's premier investment platform connecting capital with high-growth opportunities. 
              Limited early-bird tickets available.
            </p>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Link to='/programs'
              onClick={closeModal}
              className="bg-[#d4a23f] hover:bg-[#e9b85d] text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </Link>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              View Details Later
            </button>
          </div>

          {/* Timer text */}
          <div className="mt-4 text-xs text-gray-500">
            Closing in {timeLeft} second{timeLeft !== 1 ? 's' : ''}...
          </div>
        </div>
      </div>
    </div>
  );
}