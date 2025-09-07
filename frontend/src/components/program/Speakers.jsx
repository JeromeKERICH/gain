import { useState } from 'react';

export default function SpeakersSection() {
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  // Speaker data
  const speakers = [
    {
      id: 1,
      name: "Prof. PLO Lumumba",
      title: "Patron",
      organization: "Pro Pan-Africanist | Keynote Speaker",
      quote: "I define Pan-Africanism in its broader context to mean the creation of an Africa which is borderless. An Africa whose sons and daughters will have the ability to move from Djibouti to Dakar, from Tunisia to Cape Town without the hindrance of borders; an Africa which is proud in itself.",
      isPatron: true,
      image: "assets/PLO.jpg"
    },
    {
      id: 2,
      name: "Ayman Al Afifi",
      title: "President",
      organization: "Ayman Al Afifi & Co",
      quote: "Bridging economic opportunities between Gulf and African markets.",
      isPatron: false,
      image: "assets/Ayman.jpg"
    },
    
    {
      id: 4,
      name: "Mokom Ndi N.",
      title: "CEO",
      organization: "Stoneshed Asset Management",
      quote: "Unlocking Africa's potential through sustainable investment strategies.",
      isPatron: false,
      image: "assets/mokom.jpg"
    },
    {
      id: 5,
      name: "Peter Muthoka",
      title: "CEO",
      organization: "Acceler Global Logistics",
      quote: "Creating seamless trade corridors between continents.",
      isPatron: false,
      image: "assets/peter.jpg"
    }
  ];

  return (
    <section id="speakers" className="py-5 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block w-16 h-1 bg-[#143E37] mb-4"></span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0A1F44] mb-4">Meet the Visionaries Speakers</h2>
          <p className="text-xl text-gray-600">
            Industry leaders and innovators driving Africa's growth narrative
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
                  
             
          
          {/* Other Speakers */}
          {speakers.filter(speaker => !speaker.isPatron).map((speaker) => (
            <div 
              key={speaker.id} 
              className="group relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              onMouseEnter={() => setActiveSpeaker(speaker.id)}
              onMouseLeave={() => setActiveSpeaker(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-85 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-1">{speaker.name}</h3>
                <p className="text-[#143E37] font-medium mb-1">{speaker.title}</p>
                <p className="text-gray-600 text-sm mb-3">{speaker.organization}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeSpeaker === speaker.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-gray-700 italic">"{speaker.quote}"</p>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <button 
                    className="text-xs text-[#143E37] font-medium border border-[#143E37] px-3 py-1 rounded-full hover:bg-[#143E37] hover:text-white transition-colors"
                    onClick={() => setActiveSpeaker(activeSpeaker === speaker.id ? null : speaker.id)}
                  >
                    {activeSpeaker === speaker.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#143E37] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}