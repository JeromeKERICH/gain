import React, { useState, useRef, useEffect } from 'react';

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-5 md:py-10 bg-gray-50 overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkNGEyM2YiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCwwIEw2MCw2ME02MCwwIEwwLDYwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Animated Gold Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#d4a23f] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0c1c1c] mb-4">
              Our Guiding Principles
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4a23f] to-transparent"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Guiding principles that define our purpose and direction in bridging Gulf and African markets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c1c1c] to-[#142626] opacity-95"></div>
            
            {/* Gold Accent Border */}
            <div className="absolute inset-0 border border-[#d4a23f] rounded-2xl opacity-30"></div>
            
            {/* Continuous Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4a23f]/10 to-transparent -skew-x-12 animate-shimmer"></div>
            
            <div className="relative z-10 p-8 md:p-10">
              {/* Icon with continuous subtle pulse */}
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#d4a23f] to-[#f3d9a4] flex items-center justify-center shadow-lg animate-pulse-slow">
                  <svg className="w-10 h-10 text-[#0c1c1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              {/* Title with subtle glow */}
              <h3 className="text-2xl md:text-3xl font-bold text-center text-[#d4a23f] mb-6 animate-glow">
                Our Vision
              </h3>
              
              {/* Content */}
              <div className="text-center">
                <p className="text-white text-lg md:text-xl font-light leading-relaxed text-justify">
                  To be the premier Gulf–Africa investment corridor where capital, innovation, and opportunity flow seamlessly across continents.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c1c1c] to-[#142626] opacity-95"></div>
            
            {/* Gold Accent Border */}
            <div className="absolute inset-0 border border-[#d4a23f] rounded-2xl opacity-30"></div>
            
            {/* Continuous Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4a23f]/10 to-transparent -skew-x-12 animate-shimmer" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 p-8 md:p-10">
              {/* Icon with continuous subtle pulse */}
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#d4a23f] to-[#f3d9a4] flex items-center justify-center shadow-lg animate-pulse-slow">
                  <svg className="w-10 h-10 text-[#0c1c1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Title with subtle glow */}
              <h3 className="text-2xl md:text-3xl font-bold text-center text-[#d4a23f] mb-6 animate-glow">
                Our Mission
              </h3>
              
              {/* Content with animated list items */}
              <div className="space-y-4">
                <div className="flex items-start mission-item">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#d4a23f] rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white ml-4 font-light text-justify">
                  To channel Gulf capital into Africa's scalable sectors through curated, de-risked transactions.
                  </p>
                </div>
                
                <div className="flex items-start mission-item" style={{ animationDelay: '0.2s' }}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#d4a23f] rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white ml-4 font-light text-justify">
                    To open Gulf markets for African exports and ventures, creating two-way trade corridors.
                  </p>
                </div>
                
                <div className="flex items-start mission-item" style={{ animationDelay: '0.4s' }}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#d4a23f] rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white ml-4 font-light text-justify">
                    To equip SMEs and entrepreneurs with sovereign-grade access to financing, compliance, and distribution networks.
                  </p>
                </div>
                
                <div className="flex items-start mission-item" style={{ animationDelay: '0.6s' }}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#d4a23f] rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white ml-4 font-light text-justify">
                    To Institutionalizing trust via legal, financial, and policy frameworks that safeguard every deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements with continuous animation */}
        <div className="absolute left-10 top-1/4 w-24 h-24 border border-[#d4a23f] rounded-full opacity-10 animate-ping-slow"></div>
        <div className="absolute right-20 bottom-1/3 w-32 h-32 border border-[#d4a23f] rounded-full opacity-10 animate-ping-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Continuous connecting line between vision and mission */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <div className="w-0.5 h-40 bg-gradient-to-b from-[#d4a23f] via-[#d4a23f]/40 to-[#d4a23f] animate-pulse"></div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(212, 162, 63, 0.5); }
          50% { text-shadow: 0 0 15px rgba(212, 162, 63, 0.8); }
        }
        .animate-glow {
          animation: glow 3s infinite;
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.5); opacity: 0.05; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        .animate-ping-slow {
          animation: ping-slow 6s infinite;
        }
        
        .mission-item {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
