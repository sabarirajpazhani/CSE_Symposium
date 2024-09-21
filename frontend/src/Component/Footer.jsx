import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent px-4 py-10 divide-y dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 mx-auto">
        {/* Brand Logo Section */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <a href="#" className="flex space-x-3 items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center dark:bg-violet-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 dark:text-gray-50">
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479..."></path>
              </svg>
            </div>
            <span className="text-2xl font-semibold">Brand name</span>
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:w-2/3 gap-8 text-sm">
          <div>
            <h3 className="uppercase font-semibold tracking-wide dark:text-gray-900">Product</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold tracking-wide dark:text-gray-900">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold tracking-wide dark:text-gray-900">Developers</h3>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                  <path d="M32 16c0-8.839-7.167-16-16-16..."></path>
                </svg>
              </a>
              <a href="#" title="Twitter" className="flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M23.954 4.569a10 10 0 01-2.825..."></path>
                </svg>
              </a>
              <a href="#" title="Instagram" className="flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16 0c-4.349 0-4.891 0.021..."></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
