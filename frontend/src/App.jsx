import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import BusinessTicketPage from "./pages/Business";
import VIPTicketPage from "./pages/VIP";
import FloatingLanguageSelector from "./components/Translate";
import AboutSection from "./pages/About";
import Program from "./pages/Program";

import PaymentCallback from "./pages/Callback";
import SuccessPage from "./pages/Success";
import FailurePage from "./pages/Failure";
import EventModal from "./components/HomeModal";
import ContactPage from "./pages/Contact";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <>
            
            {/* Your site content */}
            <FloatingLanguageSelector />
          </>
      <Navbar />
     
      <main className="flex-grow">
        <Routes>
        
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/programs" element={<Program/>}/>
          <Route path="/business" element={<BusinessTicketPage/>}/>
          <Route path="/vip" element={<VIPTicketPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
          <Route path="/failure" element={<FailurePage />} />
          <Route path="/payment-callback" element={<PaymentCallback/>}/>
        
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
