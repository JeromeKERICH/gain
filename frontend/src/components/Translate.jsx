import { useState, useEffect } from "react";

export default function FloatingLanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize Google Translate when component mounts
    if (window.google && window.google.translate) {
      initializeGoogleTranslate();
    } else {
      // If Google Translate script hasn't loaded yet, wait for it
      const checkGoogleTranslate = setInterval(() => {
        if (window.google && window.google.translate) {
          initializeGoogleTranslate();
          clearInterval(checkGoogleTranslate);
        }
      }, 100);
      
      // Cleanup interval on unmount
      return () => clearInterval(checkGoogleTranslate);
    }
  }, []);

  const initializeGoogleTranslate = () => {
    if (!window.google || !window.google.translate) return;
    
    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.HIDE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      
      // Clean up any Google Translate branding
      cleanupGoogleBranding();
    } catch (error) {
      console.error("Error initializing Google Translate:", error);
    }
  };

  const cleanupGoogleBranding = () => {
    // Remove Google's branding
    const removeBranding = () => {
      const googleBranding = document.querySelector('.goog-te-banner-frame');
      if (googleBranding) {
        googleBranding.style.display = 'none';
      }
      
      const googleFooter = document.querySelector('.goog-te-ftab-frame');
      if (googleFooter) {
        googleFooter.style.display = 'none';
      }
      
      const googleGadget = document.querySelector('.goog-te-gadget');
      if (googleGadget) {
        googleGadget.style.display = 'none';
      }
    };
    
    // Try to remove branding immediately and on interval
    removeBranding();
    const brandingInterval = setInterval(removeBranding, 1000);
    
    // Clear interval after 5 seconds
    setTimeout(() => clearInterval(brandingInterval), 5000);
  };

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      
      // Also trigger the iframe change for Google Translate
      const iframe = document.querySelector('.goog-te-menu-frame');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
          type: 'changeLanguage',
          language: lang
        }, '*');
      }
    }
    setCurrentLanguage(lang);
    setIsOpen(false);
    
    // Force page reload to ensure complete translation
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Language options panel */}
      {isOpen && (
        <div className="mb-2 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform origin-bottom-right transition-all duration-300">
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full px-4 py-3 text-left transition-colors flex items-center ${
              currentLanguage === "en" 
                ? "bg-[#0A1F44] text-white" 
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <span className="mr-2">🇬🇧</span>
            <span className="flex-1">English</span>
            {currentLanguage === "en" && (
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`w-full px-4 py-3 text-left transition-colors flex items-center ${
              currentLanguage === "fr" 
                ? "bg-[#0A1F44] text-white" 
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <span className="mr-2">🇫🇷</span>
            <span className="flex-1">Français</span>
            {currentLanguage === "fr" && (
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>
      )}
      
      {/* Floating selector button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0A1F44] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#143E37] transition-all duration-300 border border-[#C9A15A] relative"
        aria-label="Change language"
      >
        {currentLanguage === "en" ? "EN" : "FR"}
        <svg 
          className={`w-4 h-4 absolute -top-1 -right-1 bg-[#C9A15A] text-[#0A1F44] rounded-full p-0.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}