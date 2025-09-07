import { useEffect, useState } from 'react';
import { FaCheck, FaUserTie, FaBuilding, FaGlobe, FaPhone, FaEnvelope, FaLock, FaReceipt, FaHandshake, FaUsers, FaChartLine, FaBook, FaTicketAlt, FaBus, FaPlus, FaMinus, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import CheckoutModal from '../components/Modal'; // Import the modal component

export default function BusinessTicketPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [showCheckout, setShowCheckout] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);

  // Calculate pricing
  const basePrice = 1000;
  const calculateTotal = () => {
    return basePrice * ticketCount;
  };

  const calculateDiscount = () => {
    if (ticketCount >= 5) return 0.15;
    if (ticketCount >= 3) return 0.10;
    return 0;
  };

  const discount = calculateDiscount();
  const subtotal = calculateTotal();
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const incrementTickets = () => {
    if (ticketCount < 10) {
      setTicketCount(ticketCount + 1);
    }
  };

  const decrementTickets = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const benefits = [
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Full access to all main conference sessions & panels' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Entry to Sector Matchmaking Zones' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Invitation to Business Networking Luncheon' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Access to Legal & Advisory Pods' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Participation in Deal Flow Showcases (Observer Role)' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Digital access to the GAIN Market Entry Guide' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Standard registration & badge kit' },
    { icon: <FaCheckCircle className="text-[#143E37] text-lg" />, text: 'Ticket to the Business Connect Tour' }
  ];

  return (
    <div className="min-h-screen bg-luxury-pattern">
      {/* Hero Section */}
      <section className="relative bg-dark-navy text-white pt-20 pb-20 md:pb-22 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('assets/hero.png')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center text-gold text-1sm uppercase tracking-wider mb-6 border border-gold rounded-full px-4 py-2">
              <span>Premium Access</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 leading-tight">
              Business Class <span className="font-semibold">Experience</span>
            </h1>
            <p className="text-sm md:text-2xl text-gray-300 max-w-2xl mx-auto mb-2 font-light">
              Exclusive premium access for professionals and innovators at GAIN 2025
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-5 md:py-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Ticket Card - Shows first on mobile */}
          <div className="w-full lg:w-2/5 order-1">
            <div className="bg-gray-50 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Ticket Header */}
              <div className="bg-gradient-to-br from-[#0A1F44] via-[#143E37] to-[#0A1F44] opacity-95 z-0 text-white p-8 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl text-white font-serif font-semibold mb-2">Business Class</h3>
                  <div className="text-5xl text-gold font-serif font-light mb-2">$1,000</div>
                  <p className="text-gray-300 text-sm">per person</p>
                </div>
              </div>

              {/* Ticket Details */}
              <div className="p-8">
                <div className="space-y-5 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Ticket Type</span>
                    <span className="font-semibold text-dark-navy">Business Class</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Access Level</span>
                    <span className="font-semibold text-dark-navy">Full Conference</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Validity</span>
                    <span className="font-semibold">Nov 24-25, 2025</span>
                  </div>
                </div>

                <hr className="my-6 border-gray-100" />

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Number of Tickets</label>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                    <button 
                      onClick={decrementTickets}
                      disabled={ticketCount <= 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${ticketCount > 1 ? 'bg-dark-navy text-white hover:bg-navy transition-colors' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      <FaMinus size={12} />
                    </button>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-dark-navy">{ticketCount}</span>
                      <span className="text-xs text-gray-500">ticket{ticketCount !== 1 ? 's' : ''}</span>
                    </div>
                    
                    <button 
                      onClick={incrementTickets}
                      disabled={ticketCount >= 10}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${ticketCount < 10 ? 'bg-dark-navy text-white hover:bg-navy transition-colors' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="bg-gray-50 rounded-xl p-5 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">Discount ({discount * 100}%)</span>
                      <span className="text-green-600 font-medium">-${discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <hr className="my-3 border-gray-200" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-dark-navy">${total.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="mt-3 text-sm text-green-600 font-medium text-center">
                      You save ${discountAmount.toLocaleString()}!
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gold hover:from-navy hover:to-dark-navy text-white font-medium py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <FaLock className="mr-2" />
                  {ticketCount > 1 ? `Purchase ${ticketCount} Tickets` : 'Purchase Ticket'} - ${total.toLocaleString()}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                  <FaLock className="mr-1 text-gray-400" />
                  Secure payment processing
                </p>
              </div>
            </div>
          </div>

          {/* Content Column - About & Benefits */}
          <div className="w-full lg:w-3/5 order-2 lg:pl-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-serif font-semibold text-dark-navy mb-6">About This Ticket</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Business Class Ticket provides distinguished access to GAIN 2025 for professionals, 
                entrepreneurs, and innovators seeking meaningful connections and growth opportunities. 
                Experience the conference in style with premium amenities and exclusive networking events.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-dark-navy mb-3">Who should attend?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-700">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#143E37] mr-2" />
                    <span>Business Executives</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#143E37] mr-2" />
                    <span>Entrepreneurs</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#143E37] mr-2" />
                    <span>Investors</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-[#143E37] mr-2" />
                    <span>Industry Innovators</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-semibold text-dark-navy mb-8">Premium Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        showCheckout={showCheckout}
        setShowCheckout={setShowCheckout}
        ticketCount={ticketCount}
        total={total}
        discount={discount}
        discountAmount={discountAmount}
      />

      <style jsx>{`
        .bg-luxury-pattern {
          background-color: #f8f9fa;
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .bg-dark-navy {
          background-color: #0A1F44;
        }
        .bg-navy {
          background-color: #143E37;
        }
        .text-dark-navy {
          color: #0A1F44;
        }
        .text-gold {
          color: #C9A15A;
        }
        .bg-gold {
          background-color: #C9A15A;
        }
      `}</style>
    </div>
  );
}