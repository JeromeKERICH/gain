import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TicketsSection() {
  const [activeTab, setActiveTab] = useState('vip');
  const [showAllStandard, setShowAllStandard] = useState(false);
  const [showAllVIP, setShowAllVIP] = useState(false);

  const standardFeatures = [
    "Full access to all main conference sessions and panels",
    "Entry to Sector Matchmaking Zones",
    "Invitation to Business Networking Luncheon",
    "Access to Legal and Advisory Pods",
    "Participation in Deal Flow Showcases (Observer role)",
    "Digital access to GAIN Market Entry Guide",
    "Standard registration and badge kit",
    "Access to GAIN mobile networking app",
    "Ticket to the Business Connect Tour"
  ];

  const vipFeatures = [
    "1 guaranteed pre-arranged 1:1 meeting with Dubai investment/Gulf sovereign fund",
    "Reserved access to Capital Exchange Hub",
    "Priority seating at plenaries and invitation-only roundtables",
    "Access to Private Investor Pods (live pitching)",
    "Invitation-only VIP Dinner",
    "Dedicated deal concierge",
    "1 year Full access to Market Entry Guide (Gulf & Africa)",
    "Eligibility for GAIN Deal Passport",
    "Dubai 2025 Business Connect Tour",
    "Access to GAIN Networking App"
  ];

  return (
    <section id="tickets" className="py-5 md:py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a23f]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4db6ac]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center text-[#d4a23f] mb-4">
            <div className="w-12 h-px bg-[#d4a23f] mr-4"></div>
            <span className="text-sm uppercase tracking-widest font-medium">Exclusive Access</span>
            <div className="w-12 h-px bg-[#d4a23f] ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Summit <span className="text-[#d4a23f]">Tickets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Select the experience that matches your ambitions and unlock premium networking, insights, and opportunities.
          </p>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden mb-6 flex justify-center">
          <div className="flex bg-gradient-to-b from-[#142626] to-gray-800 font-bold p-1 rounded-xl">
            <button
              className={`py-3 px-8 rounded-xl text-center font-medium transition-all ${activeTab === 'vip' ? 'bg-white text-[#d4a23f] shadow-sm' : 'text-[#d4a23f] hover:text-gray-900'}`}
              onClick={() => setActiveTab('vip')}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              VIP Class
            </button>
            <button
              className={`py-3 px-8 rounded-xl text-center font-medium transition-all ${activeTab === 'standard' ? 'bg-white text-gray-600 shadow-sm' : 'text-white hover:text-gray-900'}`}
              onClick={() => setActiveTab('standard')}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Business Class
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 justify-center items-stretch max-w-6xl mx-auto">
          {/* Standard Pass Card */}
          <div className={`w-full lg:w-2/5 ${activeTab === 'standard' ? 'block' : 'hidden lg:block'}`}>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 h-full hover:shadow-2xl">
              <div className="p-8 pb-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>Business Access</h3>
                  <div className="flex items-end">
                    <span className="text-4xl font-light text-gray-900">$1,000</span>
                    <span className="ml-2 text-gray-500 text-sm mb-1">/person</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">For Entrepreneurs, Executives & Emerging Investors</p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

                <ul className="space-y-5 mb-6">
                  {standardFeatures.slice(0, showAllStandard ? standardFeatures.length : 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#142626] flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {standardFeatures.length > 4 && (
                  <button 
                    onClick={() => setShowAllStandard(!showAllStandard)}
                    className="text-[#142626] hover:text-[#142626] transition-colors duration-300 font-medium flex items-center mb-6"
                  >
                    {showAllStandard ? 'Show Less' : 'Read More'}
                    <svg 
                      className={`w-4 h-4 ml-2 transition-transform ${showAllStandard ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="px-8 pb-8">
                <Link 
                  to="/business" 
                  className="w-full bg-white border border-[#142626]  text-[#142626] font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#4db6ac] hover:text-white hover:shadow-lg flex items-center justify-center group"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Select Business Class
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* VIP Pass Card - Featured */}
          <div className={`w-full lg:w-2/5 ${activeTab === 'vip' ? 'block' : 'hidden lg:block'}`}>
            <div className="relative  bg-gradient-to-b from-[#142626] to-gray-800  rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 h-full border border-[#d4a23f]/20 /20">
              

              <div className="p-8 pb-6 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>VIP Experience</h3>
                  <div className="flex items-end">
                    <span className="text-4xl font-light">$3,000</span>
                    <span className="ml-2 text-gray-300 text-sm mb-1">/person</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">For VVIPs, Strategic Investors & Decision Makers</p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#d4a23f]/30 to-transparent my-8"></div>

                <ul className="space-y-5 mb-6">
                  {vipFeatures.slice(0, showAllVIP ? vipFeatures.length : 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#d4a23f]/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-[#d4a23f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {vipFeatures.length > 4 && (
                  <button 
                    onClick={() => setShowAllVIP(!showAllVIP)}
                    className="text-[#d4a23f] hover:text-[#4db6ac] transition-colors duration-300 font-medium flex items-center mb-6"
                  >
                    {showAllVIP ? 'Show Less' : 'Read More'}
                    <svg 
                      className={`w-4 h-4 ml-2 transition-transform ${showAllVIP ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="px-8 pb-8">
                <Link 
                  to="/vip" 
                  className="w-full bg-[#d4a23f] text-gray-900 font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#e9b85d] hover:shadow-lg flex items-center justify-center group"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Select VIP Class
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm">
            All passes include access to the main conference sessions, networking opportunities, and digital resources. 
            Additional terms and conditions may apply.
          </p>
        </div>
      </div>
    </section>
  );
}