import { useState, useEffect } from 'react';

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Schedule data
  const scheduleData = {
    1: {
      date: "November 24, 2025",
      theme: "Capital, Governance & Partnerships",
      themeColor: "from-[#143E37] to-[#0A1F44]",
      sessions: [
        {
          time: "08:00 – 10:00",
          title: "Opening Keynote: From Dependency to Destiny",
          speaker: "Prof. PLO Lumumba — Pro Pan Africanist",
          description: "Forging a Gulf–Africa Investment Alliance for the African Century.",
          type: "keynote",
          category: "governance",
  
          duration: "120 min",
          location: "Main Hall"
        },
        {
          time: "12:00 – 14:00",
          title: "Finance & Wealth",
          speaker: "Islamic Finance & Sukuk: Transforming African infrastructure.",
          description: "Family Offices & Long-Term Capital: Spotlight on Africa-focused investment vehicles.",
          type: "panel",
          category: "finance",
      
          speakers: "J. Bradley Hall & Mokom Ndi",
          duration: "120 min",
     
        },
        {
          time: "16:00 – 18:00",
          title: "Policy, Leadership & Governance",
          speaker: "Africa–Arab World Diplomacy: Strategic alliances shaping a multipolar world.",
          description: "Vision 2030 & Agenda 2063: Aligning strategies for shared prosperity.",
          type: "panel",
          category: "governance",
       
          speakers: "Dr., Founder & CEO NeuralCore",
          duration: "120 min",
         
        },
        {
          time: "20:00 – 22:00",
          title: "Agriculture, Food Security & Creative Economy",
          speaker: "Farm to Market to Export: Agri-finance & Gulf logistics.",
          description: "Africa's Soft Power: Scaling sports, fashion, and media into global assets.",
          type: "panel",
          category: "economy",
 
          speakers: "Maria Gonzalez, Founder & CEO SynthCore AI",
          duration: "120 min",
        
        }
      ]
    },
    2: {
      date: "November 25, 2025",
      theme: "Applied AI & Innovation",
      themeColor: "from-[#0A1F44] to-[#143E37]",
      sessions: [
        {
          time: "09:00 – 10:30",
          title: "Ethical AI — From Theory to Practice",
          speaker: "Leila Zhang — Moderator/Panelist",
          description: "Implementing fairness, accountability & transparency in real-world AI.",
          type: "panel",
          category: "ai",
      
          duration: "90 min",
   
        },
        {
          time: "12:00 – 14:00",
          title: "Bias in Data — Hidden Dangers in AI Pipelines",
          speaker: "Lisa Zhang — Moderator/Panelist",
          description: "Uncovering hidden bias and methods to mitigate harm.",
          type: "panel",
          category: "ai",
  
          duration: "120 min",
          
        },
        {
          time: "16:00 – 18:00",
          title: "Generative Models Beyond Text",
          speaker: "Markus Blom — Moderator/Panelist",
          description: "Exploring multimodal models for images, video, and 3D environments.",
          type: "panel",
          category: "ai",
        
          duration: "120 min",
        
        },
        {
          time: "20:00 – 22:00",
          title: "Workshop: Building AI-Powered Interfaces",
          speaker: "Priya Natarajan — Moderator/Panelist",
          description: "Hands-on session on embedding conversational AI into apps.",
          type: "workshop",
          category: "ai",
        
          duration: "120 min",
        
        }
      ]
    },
    3: {
      date: "November 26, 2025",
      theme: "Frontiers of AI & Policy",
      themeColor: "from-[#143E37] to-[#0A1F44]",
      sessions: [
        {
          time: "08:00 – 10:00",
          title: "Transformers in 2025 — What's Next?",
          speaker: "Sofia Romero — ML Engineer, NeuronEdge",
          description: "Future of transformer architectures, scaling challenges & optimization.",
          type: "keynote",
          category: "ai",

          duration: "120 min",
        
        },
        {
          time: "12:00 – 14:00",
          title: "Synthetic Data Generation for Training",
          speaker: "Tomás Eriksson — Founder, RealSim AI",
          description: "Techniques for creating synthetic datasets that speed up training & reduce risk.",
          type: "panel",
          category: "ai",
         
          duration: "120 min",
       
        },
        {
          time: "16:00 – 18:00",
          title: "AI Regulation & Global Policy Outlook",
          speaker: "Aisha Mensah — Senior AI Strategist, Datavine",
          description: "Global legislation and its impact on AI deployment.",
          type: "panel",
          category: "policy",
    
          duration: "120 min",
         
        },
        {
          time: "20:00 – 22:00",
          title: "Embodied AI in Robotics",
          speaker: "Leo Tanaka — Robotics Engineer, MetaForm",
          description: "How embodied AI is transforming robotics in manufacturing, logistics & mobility.",
          type: "panel",
          category: "robotics",
        
          duration: "120 min",
  
        }
      ]
    }
  };

  // Category options for filtering
  const categories = [
    { id: 'all', name: 'All Sessions'},
    { id: 'keynote', name: 'Keynotes' },
    { id: 'panel', name: 'Panels' },
    { id: 'ai', name: 'AI'},
    { id: 'policy', name: 'Policy' },
  ];

  // Filter sessions based on active filter
  const filteredSessions = activeFilter === 'all' 
    ? scheduleData[activeDay].sessions 
    : scheduleData[activeDay].sessions.filter(session => 
        session.type === activeFilter || session.category === activeFilter
      );

  return (
    <section id="schedule" className="py-5 md:py-10 bg-[#0A1F44]/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#fff]/5 rounded-full -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fff]/5 rounded-full translate-y-48 -translate-x-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="inline-block w-16 h-1 bg-[#fff] mb-4"></span>
          <h2 className="text-4xl md:text-5xl font-light text-[#fff] mb-4">Conference Schedule</h2>
          <p className="text-xl text-gray-50">
            3 Days. 3 Themes. One Vision. From capital flows and governance to cutting-edge AI and robotics.
          </p>
        </div>

        {/* Sticky Day Navigation */}
        <div className={`sticky top-4 z-20 mb-8 transition-all duration-300 ${isScrolled ? '' : ''}`}>
          <div className="flex flex-wrap justify-center gap-2">
            {[1, 2, 3].map(day => (
              <button
                key={day}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeDay === day 
                ? `bg-gradient-to-r ${scheduleData[day].themeColor} text-white shadow-md` 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                onClick={() => {
                  setActiveDay(day);
                  setActiveFilter('all');
                }}
              >
                Day {day} - {scheduleData[day].date}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Banner */}
        <div className={` ${scheduleData[activeDay].themeColor} text-[#fff] text-sm  mb-8 text-center `}>

          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#fff]">Theme: {scheduleData[activeDay].theme}</h3>
          <p className="opacity-90 text-lg text-[#fff]">November {23 + activeDay}, 2025</p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === category.id 
                  ? 'bg-[#143E37] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#fff] to-[#0A1F44] transform -translate-x-1/2 rounded-full"></div>

          
          {filteredSessions.length > 0 ? (
            <div className="space-y-12 relative">
              {filteredSessions.map((session, index) => (
                <div key={index} className="relative">
                  {/* Time marker */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-8 bg-white border-4 border-[#143E37] rounded-full transform -translate-x-1/2 -translate-y-3 z-10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#143E37]">{session.time.split(' ')[0]}</span>
                  </div>
                  
                  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl ml-12 md:ml-0 md:w-5/6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>

                    <div className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-3">{session.icon}</span>
                            <span className="font-semibold text-[#143E37]">{session.time}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className={`inline-block text-xs px-3 py-1 rounded-full ${session.type === 'keynote' ? 'bg-[#D4AF37] text-[#0A1F44]' : session.type === 'workshop' ? 'bg-[#C9A15A] text-white' : 'bg-gray-200 text-gray-800'}`}>
                              {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                            </span>
                            <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                              {session.duration}
                            </span>
                          </div>
                          <div className="mt-3 text-sm text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 极速赛车开奖结果记录
                              0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 极速赛车开奖结果记录
                              0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            
                          </div>
                        </div>
                        <div className="md:w-3/4 md:pl-8 md:border-l md:border-gray-200">
                          <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{session.title}</h3>
                          <p className="text-gray-700 mb-2 font-medium">{session.speaker}</p>
                          {session.speakers && (
                            <p className="text-sm text-[#143E37] font-medium mb-3 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Featuring: {session.speakers}
                            </p>
                          )}
                          <p className="text-gray-600 mb-4">{session.description}</p>
                          <button className="text-sm text-[#143E37] font-medium hover:underline flex items-center">
                            Add to my schedule
                            
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
             
              <p className="text-gray-500 text-lg">No sessions match the selected filter.</p>
              <button 
                className="mt-4 text-[#143E37] font-medium hover:underline"
                onClick={() => setActiveFilter('all')}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}