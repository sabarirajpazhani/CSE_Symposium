import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2b2a2a] bg-opacity-60 px-4 py-10 divide-y dark:text-gray-800">
      <div className="container flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 mx-auto">
        {/* Brand Logo Section */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <a href="#" className="flex space-x-3 items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center ">
              <img src="/images/brand-logo.png" alt="Brand Logo" className="w-12 h-12" />
            </div>
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:w-2/3 gap-8 text-sm">
          <div>
            <h3 className="uppercase font-semibold tracking-wide dark:text-white">Product</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold tracking-wide dark:text-white">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold tracking-wide dark:text-white">Developers</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Public API</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold dark:text-gray-900">Social media</h3>
            <div className="mt-2 flex space-x-3">
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
      </div>
    </footer>
  );
};

export default Footer;
