import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    const trxref = searchParams.get("trxref");
    const reference = searchParams.get("reference");

    if (trxref && reference) {
      // Call backend to verify payment
      axios.post("http://localhost:4000/api/payments/verify-payment", { reference })
        .then(res => {
          console.log("Payment verified ✅", res.data);
          setStatus("success");
          setMessage("Payment verified successfully! Redirecting to your tickets...");
          
          // Redirect to success page after 2 seconds
          setTimeout(() => {
            navigate("/success", { state: { transactionData: res.data } });
          }, 2000);
        })
        .catch(err => {
          console.error("Verification failed ❌", err);
          setStatus("error");
          setMessage("Payment verification failed. Redirecting to try again...");
          
          // Redirect to failure page after 2 seconds
          setTimeout(() => {
            navigate("/failure", { state: { error: err.response?.data || "Unknown error" } });
          }, 2000);
        });
    } else {
      setStatus("error");
      setMessage("Invalid payment reference. Redirecting to home...");
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          {status === "verifying" && (
            <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
          )}
          {status === "success" && (
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          )}
          {status === "error" && (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          )}
        </div>

        {/* Status Message */}
        <h2 className={`text-2xl font-bold text-center mb-4 ${
          status === "verifying" ? "text-blue-600" : 
          status === "success" ? "text-green-600" : "text-red-600"
        }`}>
          {status === "verifying" && "Verifying Payment"}
          {status === "success" && "Payment Successful!"}
          {status === "error" && "Payment Failed"}
        </h2>
        
        <p className="text-gray-600 text-center mb-6">{message}</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className={`h-2.5 rounded-full ${
            status === "verifying" ? "bg-blue-500 animate-pulse w-3/4" : 
            status === "success" ? "bg-green-500 w-full" : "bg-red-500 w-full"
          } transition-all duration-500`}></div>
        </div>
        
        {/* Additional Info */}
        <div className="text-center text-sm text-gray-500">
          {status === "verifying" && (
            <p>This may take a few moments. Please don't close this page.</p>
          )}
          {status !== "verifying" && (
            <p>You will be redirected automatically...</p>
          )}
        </div>
        
        {/* Manual Redirect Options */}
        {(status === "success" || status === "error") && (
          <div className="mt-6 flex justify-center space-x-4">
            <button 
              onClick={() => navigate(status === "success" ? "/payment-success" : "/payment-failed")}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Go Now
            </button>
            <button 
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}