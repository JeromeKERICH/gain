import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
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
    <section id="about" ref={sectionRef} className="py-5 md:py-10 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          {/* Left Column - Text Content */}
          <div className="w-full">
            {/* Animated header */}
            <div className={`transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-l md:text-xl font-semibold text-[#0A1F44] mb-2">
                At GAIN, We Bridge Capital, Trade, and Growth between the Gulf and Africa
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                We are a transaction-driven platform that connects Gulf capital with Africa's most scalable opportunities.
              </p>
            </div>
            
            {/* Core Highlights */}
            <div className="space-y-3 mb-8">
              <div className={`flex items-start transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#143E37] flex items-center justify-center mr-4 relative">
                  <div className={`absolute inset-0 rounded-full bg-[#143E37] animate-ping ${animated ? 'opacity-75' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}></div>
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className={`transition-all duration-700 delay-150 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <h4 className="font-semibold text-[#0A1F44]">Africa → The Source of Growth</h4>
                  <p className="text-gray-600 text-justify mt-1">Africa contributes investable projects and vast growth potential, offering high-demand sectors such as energy, infrastructure, agriculture, technology, and manufacturing that can deliver both financial returns and lasting economic transformation.</p>
                </div>
              </div>
              
              <div className={`flex items-start transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#143E37] flex items-center justify-center mr-4 relative">
                  <div className={`absolute inset-0 rounded-full bg-[#143E37] animate-ping ${animated ? 'opacity-75' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className={`transition-all duration-700 delay-350 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <h4 className="font-semibold text-[#0A1F44]">The Gulf → The Capital Powerhouse</h4>
                  <p className="text-gray-600 text-justify mt-1">The Gulf contributes liquidity, expertise, and execution power, with sovereign wealth funds and investors bringing both capital and proven know-how in scaling global infrastructure, logistics, and finance.</p>
                </div>
              </div>
              
              <div className={`flex items-start transition-all duration-700 delay-400 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#143E37] flex items-center justify-center mr-4 relative">
                  <div className={`absolute inset-0 rounded-full bg-[#143E37] animate-ping ${animated ? 'opacity-75' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}></div>
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className={`transition-all duration-700 delay-550 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <h4 className="font-semibold text-[#0A1F44]">GAIN → The Bridge of Trust</h4>
                  <p className="text-gray-600 text-justify mt-1">GAIN bridges the two regions by institutionalizing trust, embedding legal and regulatory frameworks, and facilitating curated, pre-vetted introductions that transform opportunities into de-risked, bankable investments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}