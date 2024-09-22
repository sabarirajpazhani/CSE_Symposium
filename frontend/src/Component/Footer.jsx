import React from 'react';
import cebroid from '../Assets/Images/Cebroid.png';
import clg from '../Assets/Images/AdhiLogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#2b2a2a] bg-opacity-60 px-4 py-10 shadow-custom dark:text-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        
        {/* Left Logo */}
        <div className="flex justify-center lg:justify-start lg:w-1/3">
          <a href="#" className="flex space-x-3 items-center">
            <div className="w-32 h-32 flex items-center justify-center">
              <img src={cebroid} alt="Cebroid Logo" className="w-32 h-32" />
            </div>
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-center text-sm lg:w-1/3">
          {/* Technical Events */}
          <div>
            <h3 className="text-center glitch font-bold text-2xl tracking-wide text-[#FF4500]"> 
              Events
            </h3>
            <ul className="mt-2 space-y-1">
              <li><a className="text-white" href="#">Technical Events</a></li>
              <li><a className="text-white" href="#">Non-Technical Events</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-center glitch font-bold text-2xl tracking-wide text-[#57cfdc]">
              About
            </h3>
            <ul className="mt-2 space-y-1">
              <li><a className="text-white" href="#">Cebroid</a></li>
              <li><a className="text-white" href="#">Dept. of CSE</a></li>
              <li><a className="text-white" href="#">Our College</a></li>
            </ul>
          </div>

          {/* Reach Us Section */}
          <div>
            <h3 className="glitch font-bold text-2xl tracking-wide text-[#57cfdc]">
              Reach <span className="text-[#FF4500]">US</span>
            </h3>
            <div className="mt-2 flex justify-center space-x-3">
              <a href="#" title="Facebook" className="flex items-center p-1">
                <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" title="Twitter" className="flex items-center p-1">
                <img src="/images/twitter.png" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" title="Instagram" className="flex items-center p-1">
                <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center lg:justify-end lg:w-1/3">
          <div className="w-32 h-32 flex items-center justify-center">
            <img src={clg} alt="Adhi College Logo" className="w-32 h-32" />
          </div>
        </div>
      </div>

      <div className='mt-8 text-center text-white text-sm'>
        <p>
          <a href="mailto:cebroidcse@gmail.com" className="text-white underline hover:text-[#57cfdc]">
            cebroidcse@gmail.com
          </a>
        </p>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 tracking-wide text-center text-white text-sm">
        <p>COPYRIGHT © CEBROID'24</p>
        <p className='text-[#57cfdc] glitch'>Developed by <span className="text-[#FF4500]">CEBROID Web Development Crew</span></p>
      </div>
    </footer>
  );
};

export default Footer;
