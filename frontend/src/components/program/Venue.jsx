import { useState, useEffect } from 'react';

export default function VenueSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Venue images for the slider
  const venueImages = [
    "assets/ven1.avif",
    "assets/ven2.jpg",
    "assets/ven3.jpeg",
    
    
  ];

  // Auto-advance the image slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === venueImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [venueImages.length]);

  // Handle phone call
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Handle email
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="venue" className="py-5 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" >
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A1F44] mb-4"style={{ fontFamily: 'Georgia, serif'}}>Conference Venue</h2>
          <span className="inline-block w-16 h-1 bg-[#143E37] mb-4"></span>
          <p className="text-xl text-gray-600">
            A world-class venue for a world-class gathering
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Venue Image Slider and Description */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6 relative h-72">
              {/* Image Slider */}
              {venueImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={image} 
                    alt={`Al Habtoor Palace, Dubai view ${index + 1}`} 
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
              
              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {venueImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              
              
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Al Habtoor Palace, Business Bay, Dubai</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nestled in the heart of Business Bay, the iconic Al Habtoor Palace offers the perfect setting for 
                high-level networking, strategic discussions, and curated deal-making. With state-of-the-art facilities 
                and luxury surroundings, it embodies the spirit of ambition and collaboration that defines GAIN 2025.
              </p>
              
              <div className="bg-gradient-to-r from-[#143E37] to-[#0A1F44] p-4 rounded-xl text-white">
                <h4 className="font-semibold mb-2 flex items-center">
                  
                  Experience Beyond the Conference
                </h4>
                <p className="text-sm">Surrounded by fine dining, shopping, and luxury accommodations for delegates.</p>
              </div>
            </div>
          </div>

          {/* Map and Contact Information */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.89723298114!2d55.27087631536491!3d25.241121983877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4338e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sAl%20Habtoor%20Palace!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Habtoor Palace Location"
                className="rounded-2xl"
              ></iframe>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Contact & Logistics</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#143E37] flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1F44]">Address</h4>
                    <a 
                      href="https://goo.gl/maps/ABC123" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#143E37] transition-colors block"
                    >
                      Al Habtoor Palace, Business Bay, Dubai, United Arab Emirates
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#143E37] flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1F44]">Phone</h4>
                    <button 
                      onClick={() => handlePhoneCall('+971581009603')}
                      className="text-gray-700 hover:text-[#143E37] transition-colors text-left"
                    >
                      +971 58 100 9603
                    </button>
                    <span className="mx-2 text-gray-400">|</span>
                    <button 
                      onClick={() => handlePhoneCall('+254783400300')}
                      className="text-gray-700 hover:text-[#143E37] transition-colors text-left"
                    >
                      +254 78 340 0300
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#143E37] flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1F44]">Email</h4>
                    <button 
                      onClick={() => handleEmail('contact@gulfafricanexus.com')}
                      className="text-gray-700 hover:text-[#143E37] transition-colors"
                    >
                      contact@gulfafricanexus.com
                    </button>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
          
        </div>
    </section>
  );
}