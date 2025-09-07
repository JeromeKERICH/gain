import React, { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Enterprise Fund",
      subtitle: "GAEF",
      description: "Sovereign-grade SME investment fund fueling Africa's scalable ventures.",
      cta: "Discover",
      link: "/enterprise-fund",
      image: "assets/s4.jpg"
    },
    {
      id: 2,
      title: "Market Entry",
      subtitle: "Regulatory Guidance",
      description: "Comprehensive legal & regulatory guides for seamless Gulf–Africa market entry.",
      cta: "Explore",
      link: "/market-playbook",
      image: "assets/s1.jpg"
    },
    {
      id: 3,
      title: "Deal Corridor",
      subtitle: "Matchmaking",
      description: "From investor pods to VIP negotiations, we turn introductions into closed deals.",
      cta: "Connect",
      link: "/deal-corridor",
      image: "assets/s2.jpg"
    },
    {
      id: 4,
      title: "Business Connect",
      subtitle: "Immersive Tours",
      description: "Trade missions that unlock real Gulf–Africa access and partnerships.",
      cta: "Journey",
      link: "/business-connect-tours",
      image: "assets/s3.jpg"
    }
  ];

  return (
    <section className="py-5 md:py-10 bg-gradient-to-b from-[#142626] to-gray-800 relative overflow-hidden" >
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4a23f] to-transparent mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cambria, Sans' }}>
            What we <span className="text-[#d4a23f]">do</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Exclusive services designed to bridge Gulf capital with Africa's most promising opportunities
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-700 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image with Gradient */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40"></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-[#d4a23f]/10 via-transparent to-transparent transition-opacity duration-700 ${
                  hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              
              {/* Gold Accent Border */}
              <div className={`absolute inset-0 border border-[#d4a23f]/30 rounded-2xl transition-all duration-500 ${
                hoveredCard === service.id ? 'border-[#d4a23f] opacity-100 scale-105' : 'opacity-0'
              }`}></div>

              {/* Content */}
              <div className="relative z-10 p-8 h-96 flex flex-col justify-end transform transition-all duration-700 group-hover:-translate-y-4">
                <div className="mb-4">
                  <div className="text-[#d4a23f] text-sm uppercase tracking-widest mb-1 transition-all duration-500 group-hover:translate-y-1">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transition-all duration-500 group-hover:translate-y-1">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#d4a23f] mb-4 transition-all duration-700 group-hover:w-20"></div>
                </div>
                
                <p className="text-gray-300 mb-6 ">
                  {service.description}
                </p>
                
                <div className="opacity-1">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-white font-medium "
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">{service.cta}</span>
                      <svg 
                        className="w-4 h-4 " 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a23f] btn:bg-[#d4a23f]/10"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServicesSection;