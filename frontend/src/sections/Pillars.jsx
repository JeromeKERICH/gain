import React, { useState, useRef, useEffect } from 'react';

const OurAdvantage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const pillars = [
    {
      id: 1,
      title: "ROI-First",
      description: "Focus on high-yield, sustainable investments with measurable returns.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      animation: "handshake"
    },
    {
      id: 2,
      title: "Curated Access",
      description: "Exclusive opportunities vetted by industry experts and regional specialists.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      animation: "star"
    },
    {
      id: 3,
      title: "Execution Engine",
      description: "End-to-end support from due diligence to operational implementation.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      animation: "gear"
    },
    {
      id: 4,
      title: "Diplomatic Integrity",
      description: "Navigating cross-border regulations with trusted government partnerships.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      animation: "shield"
    }
  ];

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Adjust trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-5 md:py-10 bg-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkNGEyM2YiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCwwIEw2MCw2ME02MCwwIEwwLDYwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Diagonal Gold Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YTIzZiIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNLTEwMCwyMDAgTDIwMCwtMTAwIi8+PHBhdGggZD0iTTEwMCwyMDAgTDQwMCwtMTAwIi8+PHBhdGggZD0iTDMwMCwyMDAgTDYwMCwtMTAwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Intro */}
        <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0c1c1c] mb-4 inline-block relative">
            Our Pillars
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4a23f] to-transparent"></span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a23f] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></span>
          </h2>
          <p className="text-[#0c1c1c] text-lg md:text-xl max-w-2xl mx-auto">
            The GAIN framework: bridging Gulf liquidity with Africa's bankable opportunities.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`bg-[#142626] rounded-2xl p-6 transition-all duration-500 transform ${
                hoveredCard === pillar.id 
                  ? 'shadow-lg -translate-y-2 shadow-[#d4a23f]/20 border border-[#d4a23f]/10' 
                  : 'shadow-md'
              } ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
              onMouseEnter={() => setHoveredCard(pillar.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                  hoveredCard === pillar.id
                    ? 'bg-gradient-to-br from-[#d4a23f] to-[#f3d9a4] text-[#0c1c1c]'
                    : 'bg-gradient-to-br from-[#142626] to-[#1e2e2e] text-[#d4a23f] border border-[#d4a23f]/30'
                } transition-all duration-500`}>
                  <div className={`
                    ${hoveredCard === pillar.id ? 'scale-110' : 'scale-100'} 
                    ${pillar.animation === 'gear' && hoveredCard === pillar.id ? 'animate-spin' : ''}
                    ${pillar.animation === 'shield' && hoveredCard === pillar.id ? 'animate-pulse' : ''}
                    transition-transform duration-500
                  `}>
                    {pillar.icon}
                  </div>
                </div>
                
                {/* Hover Effect Ring */}
                <div className={`absolute -inset-2 rounded-full border-2 border-[#d4a23f] opacity-0 ${
                  hoveredCard === pillar.id ? 'animate-ping opacity-30' : ''
                } transition-opacity duration-500`}></div>
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold text-center mb-3">{pillar.title}</h3>
              <p className="text-[#b3b3b3] text-center text-sm md:text-base">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdvantage;