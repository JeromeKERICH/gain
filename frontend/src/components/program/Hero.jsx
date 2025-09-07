import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('November 24, 2025 00:00:00');
    const now = new Date();
    const difference = targetDate - now;
    
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden pt-10">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1c1c] to-[#142424]/10"></div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-10 right-10 w-64 h-64 border-4 border-[#D4AF37]/20 rotate-45 animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#C9A15A]/10 rounded-lg animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative mt-5 mb-5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ fontFamily: 'Georgia, serif' }}>
            GULF AFRICA INVESTMENT NEXUS SUMMIT 2025
          </h1>
          
          {/* Tagline */}
          <p className="text-l md:text-3xl text-[#C9A15A] mb-3 animate-fade-in-up italic" style={{ fontFamily: 'Georgia, serif' }}>
            Bridging Capital, Catalyzing Growth, Empowering Africa's Future
          </p>
          
          {/* Compact Event Info */}
          <div className="bg-[#143E37]/70 backdrop-blur-sm rounded-2xl p-6 border border-[#C9A15A]/30 animate-fade-in-up mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Date */}
              <div className="flex items-center">
                <div className="bg-[#D4AF37] p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-[#143E37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">DATE</div>
                  <div className="text-white font-semibold">Nov 24–25, 2025</div>
                </div>
              </div>
              
              {/* Vertical Divider */}
              <div className="hidden md:block h-10 w-px bg-[#C9A15A]/50"></div>
              
              {/* Location */}
              <div className="flex items-center">
                <div className="bg-[#D4AF37] p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-[#143E37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">VENUE</div>
                  <div className="text-white font-semibold">Al Habtoor Palace, Dubai</div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Countdown Timer */}
          <div className=" mb-4 max-w-2xl mx-auto">
            <div className="flex justify-center gap-2 md:gap-4">
              {[
                { value: timeLeft.days || 0, label: 'Days' },
                { value: timeLeft.hours || 0, label: 'Hours' },
                { value: timeLeft.minutes || 0, label: 'Mins' },
                { value: timeLeft.seconds || 0, label: 'Secs' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#143E37]/70 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.value.toString().padStart(2, '0')}</span>
                  </div>
                  <div className="text-xs text-gray-300 mt-2 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row sm:flex-row gap-2 justify-center animate-fade-in-up">
            <a href='#tickets' className="bg-[#C9A15A] text-[#143E37] font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              <span>Get Tickets</span>
              
            </a>
            <a href='https://drive.google.com/file/d/1Dla1juzW5T2OU-_gHy_HdqLv6kiBsxtH/view' className="bg-transparent border-2 border-[#C9A15A] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#C9A15A]/10 flex items-center justify-center">
              <span>Download Brochure</span>
              
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}