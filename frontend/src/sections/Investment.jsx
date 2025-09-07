import React, { useState, useEffect } from 'react';

const InvestmentFrontiers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectors = [
    {
      id: 1,
      title: "Energy & Infrastructure",
      
    },
    {
      id: 2,
      title: "ICT & Innovation",

      
    },
    {
      id: 3,
      title: "Agriculture & Food",
     
    },
    {
      id: 4,
      title: "Healthcare",
      
    },
    {
      id: 5,
      title: "Logistics & Supply Chains",
      
    },
    {
      id: 6,
      title: "Real Estate",
   
    },
    {
      id: 7,
      title: "Manufacturing",
      
    },
    {
      id: 8,
      title: "Tourism & Hospitality",
      
    },
    {
      id: 9,
      title: "Water & Environment",
     
    },
    {
      id: 10,
      title: "Public–Private Partnerships",
     
    },
    {
      id: 11,
      title: "Mining & Trade",

    },
    {
      id: 12,
      title: "Sport Business & Creative Economy",
      
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sectors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sectors.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sectors.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sectors.length) % sectors.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-5 md:py-10 bg-gray-50 relative overflow-hidden" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Intro */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c1c] mb-4 ">
            Investment <span className="text-[#d4a23f]">Frontiers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From energy to creative industries, we spotlight Africa's most bankable sectors for Gulf investors.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / 5)}%)` }}
            >
              {sectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5 px-3"
                  onMouseEnter={() => setHoveredCard(sector.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-gradient-to-br ${sector.color} rounded-xl p-5 h-20 flex flex-col justify-between transition-all duration-300 ${hoveredCard === sector.id ? 'transform -translate-y-2 shadow-xl' : ''}`}>
                    <div>
                 
                      <h3 className="text-[#142626] font-bold text-sm md:text-xl leading-tight">{sector.title}</h3>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === sector.id ? 'max-h-20' : 'max-h-0'}`}>
                      <p className="text-gray-200 text-xs">{sector.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {sectors.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#d4a23f] w-6' : 'bg-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFrontiers;