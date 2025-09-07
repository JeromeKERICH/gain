import React, { useState, useEffect, useRef } from 'react';

const PerformanceSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      value: 10,
      suffix: "M+",
      label: "SECURED FUNDING",
      description: "Secured through strategic partnerships & high-value engagements."
    },
    {
      value: 20,
      suffix: "+",
      label: "PRE-EVENT ACTIVATIONS",
      description: "Executed across Africa & the Gulf with exceptional results."
    },
    {
      value: 5,
      suffix: "M+",
      label: "CLOSED DEALS",
      description: "Proving the strength and efficacy of our extensive network."
    },
    {
      value: 1000,
      suffix: "+",
      label: "SATISFIED CLIENTS",
      description: "Across consulting, legal frameworks, and project execution."
    }
  ];

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-5 md:py-10 bg-[#0c1c1c] relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNiM2IzYjMiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCwwIEw2MCw2ME02MCwwIEwwLDYwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Diagonal Gold Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YTIzZiIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNLTEwMCwyMDAgTDIwMCwtMTAwIi8+PHBhdGggZD0iTTEwMCwyMDAgTDQwMCwtMTAwIi8+PHBhdGggZD0iTDMwMCwyMDAgTDYwMCwtMTAwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Stylized Map Graphic */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified Africa outline */}
            <path d="M200,200 Q250,150 300,200 Q350,250 400,200 Q450,150 500,200 L550,250 Q500,300 450,250 Q400,200 350,250 Q300,300 250,250 Z" stroke="#d4a23f" strokeWidth="2" fill="rgba(212, 162, 63, 0.05)" />
            
            {/* Simplified Gulf outline */}
            <path d="M600,150 Q650,100 700,150 Q750,200 700,250 Q650,300 600,250 Q550,200 600,150 Z" stroke="#4db6ac" strokeWidth="2" fill="rgba(77, 182, 172, 0.05)" />
            
            {/* Trade flow arrows */}
            <path d="M550,200 L450,200" stroke="#d4a23f" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M450,200 L550,200" stroke="#4db6ac" strokeWidth="2" strokeDasharray="5,5" />
            
            <path d="M550,200 L450,200" markerEnd="url(#arrowhead1)" stroke="transparent" strokeWidth="8" />
            <path d="M450,200 L550,200" markerEnd="url(#arrowhead2)" stroke="transparent" strokeWidth="8" />
            
            <defs>
              <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#d4a23f" />
              </marker>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
                <polygon points="10 0, 0 3.5, 10 7" fill="#4db6ac" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#d4a23f] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Our Performance
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-6 font-medium">
            Delivering measurable impact across Africa & the Gulf
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/20 rounded-xl border border-gray-800/50 hover:border-[#d4a23f]/30 transition-all duration-500">
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold text-[#d4a23f] mb-2">
                  {countersVisible ? (
                    <Counter targetValue={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-white text-sm uppercase tracking-widest font-medium mb-3">
                  {stat.label}
                </div>
              </div>
              <p className="text-[#b3b3b3] text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter component for animated numbers
const Counter = ({ targetValue, suffix }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in ms
  const steps = 60; // Number of steps in the animation
  const stepValue = targetValue / steps;
  const stepTime = duration / steps;

  useEffect(() => {
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += stepValue;
      if (currentCount >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, stepValue, stepTime]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

export default PerformanceSection;