import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FailurePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = searchParams.get("ref");

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full border-4 border-red-200 animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4">Payment Failed</h1>
        
        <p className="text-gray-600 text-center mb-6">
          We encountered an issue processing your payment. Please try again or contact support if the problem persists.
        </p>

        {/* Reference Number */}
        {ref && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Reference Number</p>
            <p className="font-mono font-bold text-gray-800">{ref}</p>
          </div>
        )}

        {/* Support Information */}
        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-700 mb-2">Need help?</h3>
          <p className="text-sm text-red-600">
            Contact our support team at <span className="font-medium">contact@gulfafricanexus.com</span> or call <span className="font-medium">+971 58 100 9603 / +971 52 240 7930</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/programs")}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Return Home
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate("/help")}
            className="text-sm text-red-600 hover:text-red-800 underline transition-colors duration-300"
          >
            Visit Help Center
          </button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg className="relative block w-full h-16 text-red-100" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M500,80L0,80L0,0L500,100L1000,0L1000,80L500,80Z"></path>
        </svg>
      </div>
    </div>
  );
}