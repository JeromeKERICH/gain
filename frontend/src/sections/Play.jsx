import React from 'react';

const InvestorsPlaybook = () => {
  return (
    <section className="py-5 md:py-10 bg-gray-white relative overflow-hidden" style={{ fontFamily: 'Cambria, serif' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4a23f]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4db6ac]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-3">
          
            
            <h2 className="text-2xl md:text-5xl font-bold text-gradient-to-b from-[#142626] to-gray-800 mb-6">
              THE INVESTOR'S PLAYBOOK
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              GAIN Market Entry Guides – powered by CR Advocates LLP
            </p>
          </div>

          <div className="bg-gray-100 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-600/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Content */}
              <div>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  The only pan-African legal blueprint for investors: compliance, regulation, and strategy in key African markets.
                </p>
                
                <div className="space-y-4 mb-8">
                    
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-[#d4a23f]"></div>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                      For Gulf investors: Clarity on Africa's legal frameworks, sectoral entry points, and de-risked transactions.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-[#d4a23f]"></div>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                      For African investors: Direct access to Gulf markets, export channels, distribution partnerships, and joint ventures.
                    </p>
                  </div>
                </div>
                
                
              </div>
              
              {/* Right Column - CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-[#142626]  p-6 rounded-xl border border-gray-600/30 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#d4a23f] to-[#e9b85d] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Download the Investor's Playbook</h3>
                    <p className="text-gray-400 text-sm">Get your comprehensive guide to Kenya's investment landscape</p>
                  </div>
                  
                  <form className="space-y-4">
                    
                    <a href="https://drive.google.com/file/d/1N3MR9C4hLFIQaCbbwLS4sxzRcTxeZdK6/view" target="_blank" rel="noopener noreferrer"
                    
                      className="w-full bg-gradient-to-r from-[#d4a23f] to-[#e9b85d] text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:from-[#e9b85d] hover:to-[#d4a23f] hover:shadow-lg text-center block"
                    >
                      Download Here
                    </a>
                  </form>
                  
                  <p className="text-gray-400 text-xs text-center mt-4">
                    By downloading, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default InvestorsPlaybook;