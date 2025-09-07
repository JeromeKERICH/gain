import React, { useEffect, useState } from 'react';

const GAINHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative  flex items-center justify-center overflow-hidden bg-[#0c1c1c]/90 px-4 md:py-25 py-25">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkNGEyM2YiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCwwIEw2MCw2ME02MCwwIEwwLDYwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Animated Map Lines */}
      <div className="absolute inset-0">
        {/* Africa to Gulf Arc */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            className="stroke-[#143E37] stroke-1 fill-none animate-dash"
            d="M25,70 Q50,30 75,40"
            strokeDasharray="5,3"
            style={{ filter: 'drop-shadow(0 0 2px rgba(77, 182, 172, 0.7))' }}
          />
        </svg>
        
        {/* Gulf to Africa Arc */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            className="stroke-[#d4a23f] stroke-1 fill-none animate-dash-reverse"
            d="M75,40 Q50,30 25,70"
            strokeDasharray="5,3"
            style={{ filter: 'drop-shadow(0 0 2px rgba(77, 182, 172, 0.7))' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-[#d4a23f] mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="block text-white">About </span>Gulf-Africa Investment Nexus
          
        </h1>
        
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-[#143E37]"></div>
        </div>
    
      </div>


      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 15s linear infinite;
        }
        @keyframes dash-reverse {
          to {
            stroke-dashoffset: 20;
          }
        }
        .animate-dash-reverse {
          animation: dash-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GAINHero;