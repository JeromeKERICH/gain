import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const ref = searchParams.get("ref");

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Hide confetti after 3 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
    
    return () => clearTimeout(confettiTimer);
  }, []);

  // Confetti component
  const Confetti = () => {
    if (!showConfetti) return null;
    
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 opacity-70 animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
              backgroundColor: [
                '#10B981', '#34D399', '#22C55E', '#86EFAC', '#FBBF24', 
                '#F59E0B', '#EF4444', '#F97316', '#8B5CF6', '#A78BFA'
              ][Math.floor(Math.random() * 10)],
              animationDelay: `${i * 0.1}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <Confetti />
      
      <div className={`bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-4">Payment Successful!</h1>
        
        <p className="text-gray-600 text-center mb-6">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>

        {/* Reference Number */}
        {ref && (
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700 mb-1">Order Reference</p>
            <p className="font-mono font-bold text-green-800 text-lg">{ref}</p>
          </div>
        )}

        {/* Ticket Information */}
        <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-lg p-4">
          <div className="mr-3 bg-green-100 p-2 rounded-full">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <p className="text-gray-700">Check your email for your ticket(s)</p>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-700 mb-2">What's next?</h3>
          <ul className="text-sm text-blue-600 list-disc list-inside space-y-1">
            <li>You'll receive a confirmation email shortly</li>
            <li>Save your order reference for future inquiries</li>
            <li>Contact support if you have any questions</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/programs")}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            View Tickets
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Return Home
          </button>
        </div>

        {/* Support Information */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Need help? <button onClick={() => navigate("/contact")} className="text-green-600 hover:text-green-800 underline transition-colors duration-300">Contact support</button>
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg className="relative block w-full h-16 text-green-100" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M500,80L0,80L0,0L500,100L1000,0L1000,80L500,80Z"></path>
        </svg>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}