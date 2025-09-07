import React, { useState } from 'react';

const LeadershipSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const leaders = [
   
    {
      id: 2,
      name: "Dr. Princess C. Mutisya",
      title: "Chief Executive Officer and Head of Legal",
      bio: "Princess Caroline Mutisya is the Founder and Strategic Lead at CR Advocates LLP. With over 14 years of experience in international trade law, cross-border investment structuring, and high-level negotiations, she brings unmatched insight into the African and GULF markets.",
      image: "assets/2.jpg",
      linkedin: "https://www.linkedin.com/in/princess-c-mutisya/"
    },
    {
      id: 3,
      name: "Fai Derick",
      title: "Executive Chairman",
      bio: "Fai Derick is a cross-sector strategist and institutional advisor operating at the convergence of real estate, global capital, and frontier technologies. Based in Dubai, he serves as Executive Chairman of the Gulf Africa Investment Nexus (GAIN), a sovereign-aligned initiative connecting Africa’s most bankable opportunities with Gulf liquidity, strategic diplomacy, and innovation ecosystems.",
      image: "assets/3.jpg",
      linkedin: "https://www.linkedin.com/in/fai-derick-874a01111/"
    },
    {
      id: 4,
      name: "Feras Jala Wali",
      title: "Gulf Relations Director",
      bio: "I leverage my 8+ years of experience in procurement and strategic sourcing to drive cost savings and efficiency. I develop and implement sourcing strategies, lead supplier negotiations, manage vendor relationships, and conduct spend analysis to identify cost optimization opportunities. I also oversee procurement operations, aligning sourcing plans with business objectives, and mentor and lead procurement teams to drive continuous improvement and process efficiency.",
      image: "assets/feras.jpg",
      linkedin: "https://www.linkedin.com/in/feras"
    },
    {
      id: 5,
      name: "Agnes Nsor",
      title: "Director of Business Development",
      bio: "Agnes is a legal and business professional with over 7 years of experience leading cross-functional initiatives in international strategy, regulatory compliance, and stakeholder engagement. Holding both a JD and an MBA (STEM) in Business Analysis, she blends legal expertise with strategic insight to tackle complex challenges and deliver scalable, high-impact solutions.",
      image: "assets/1.jpg",
      linkedin: "https://www.linkedin.com/in/agnes-nsor/"
    }
  ];

  return (
    <section className="py-5 md:py-10 bg-[#0c1c1c] relative overflow-hidden">
      {/* Gold gradient divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a23f] to-transparent"></div>
      
      {/* Geometric overlays */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#b3b3b3] clip-path-triangle"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#b3b3b3] clip-path-hexagon"></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-32 h-32 bg-[#b3b3b3] clip-path-triangle rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a23f] mb-4" style={{ fontFamily: 'Cambria, serif' }}>
            Meet Our Leadership
          </h2>
          <p className="text-[#4db6ac] text-lg mb-6 font-medium">
            The GAIN Leadership
          </p>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            Our experienced team brings decades of expertise in finance, law, and international relations 
            to bridge Gulf capital with Africa's most promising opportunities.
          </p>
        </div>

        {/* Leadership Cards - 3/4 to 1/4 Layout */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className={`flex flex-col lg:flex-row gap-8 items-center transition-all duration-500 ${
                hoveredCard === leader.id 
                  ? 'transform -translate-y-1' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredCard(leader.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content Side - 3/4 width on large screens */}
              <div className="lg:w-3/4 w-full">
                <div className={`p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-500 ${
                  hoveredCard === leader.id ? 'shadow-xl' : 'shadow-lg'
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-[#d4a23f] mb-6 font-medium text-lg">{leader.title}</p>
                  
                  <p className="text-[#b3b3b3] mb-8 leading-relaxed text-base text-justify md:text-lg">
                    {leader.bio}
                  </p>
                  
                  <div className="flex items-center space-x-6">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center py-2 px-4 rounded-full transition-all duration-300 ${
                        hoveredCard === leader.id 
                          ? 'bg-[#fff] text-#4db6ac ' 
                          : 'bg-[##4db6ac] text-white'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="ml-2 text-sm font-medium">View Profile</span>
                    </a>
                    
                    
                  </div>
                </div>
              </div>

              {/* Image Side - 1/4 width on large screens */}
              <div className="lg:w-1/4 w-full">
                <div className={`relative transition-all duration-500 ${
                  hoveredCard === leader.id ? 'transform scale-105' : ''
                }`}>
                  <div className={`w-full h-82 lg:h-96 rounded-xl overflow-hidden border-2 transition-all duration-500 ${
                    hoveredCard === leader.id ? 'border-[#d4a23f] shadow-lg' : 'border-transparent'
                  }`}>
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`absolute -z-10 top-4 -right-4 w-full h-72 lg:h-96 rounded-xl transition-all duration-500 ${
                    hoveredCard === leader.id ? 'bg-[#d4a23f]/20' : 'bg-[#4db6ac]/20'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-path-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;