import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import TechEvents from './Component/TechEvents'
import NonTechEvents from './Component/NonTechEvents';
import Footer from './Component/Footer';
import Partners from "./Component/Partners";
import Members from "./Component/Members";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Switch to mobile view when width <= 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="relative">
        {/* Background video for desktop */}
        {!isMobile && (
          <video
            autoPlay
            loop
            muted
            className="fixed inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video/desktop_view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Background video for mobile */}
        {isMobile && (
          <video
            autoPlay
            loop
            muted
            className="fixed inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video/phone_view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Scrollable page content */}
        <div className="relative z-10 min-h-screen bg-transparent">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/techEvents" element ={<TechEvents/>}/>
              <Route path="/nontechEvents" element={<NonTechEvents/>}/>
              <Route path="/footer" element={<Footer/>}/>
              <Route path="/partners" element={<Partners/>}/>
              <Route path="/members" element={<Members/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;













