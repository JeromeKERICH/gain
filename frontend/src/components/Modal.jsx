import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckoutModal({ showCheckout, setShowCheckout, selectedTicket, ticketCount, setTicketCount, total }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [safeSelectedTicket, setSafeSelectedTicket] = useState({ type: "BUSINESS" });

  // Update safeSelectedTicket when selectedTicket changes
  useEffect(() => {
    if (selectedTicket && selectedTicket.type) {
      setSafeSelectedTicket(selectedTicket);
    }
  }, [selectedTicket]);

  if (!showCheckout) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone)");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/api/payments/initiate-transaction", {
        email: formData.email,
        fullName: formData.name,
        phone: formData.phone,
        country: formData.country,
        company: formData.company,
        items: [
          { type: safeSelectedTicket.type, qty: ticketCount },
        ],
        successUrl: `${window.location.origin}/payment-callback`,
      });

      const { authorization_url } = res.data;
      window.location.href = authorization_url; // redirect to Paystack
    } catch (err) {
      alert("Payment initialization failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#143E37] to-[#0A1F44] p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Complete Your Purchase</h2>
            <button 
              onClick={() => setShowCheckout(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
          </div>
          <p className="text-gray-100 mt-2">Secure payment processed by Paystack</p>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">
                {safeSelectedTicket.type === "BUSINESS" ? "Business Class" : "VIP Class"} Ticket × {ticketCount}
              </span>
              <span className="font-semibold">${total}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span className="text-[#143E37]">${total}</span>
              </div>
            </div>
          </div>

          {/* User Info */}
          <h3 className="font-semibold text-gray-800 mb-4">Personal Information</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent"
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent"
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 234 567 8900"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent"
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your company name (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Your country (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Ticket Quantity Adjuster */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Number of Tickets</label>
            <div className="flex items-center">
              <button
                onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                disabled={ticketCount <= 1}
              >
                −
              </button>
              <span className="mx-4 font-semibold text-lg">{ticketCount}</span>
              <button
                onClick={() => setTicketCount(ticketCount + 1)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Secure SSL Encryption
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePay}
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#143E37] to-[#0A1F44] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              `Pay $${total}`
            )}
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => setShowCheckout(false)}
            className="w-full mt-3 text-gray-600 py-2 rounded-lg font-medium hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}