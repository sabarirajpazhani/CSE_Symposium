// import React, { useState } from 'react';
// import logo from '../Assets/Images/College_logo.png';
// import { Twirl as Hamburger } from 'hamburger-react'

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-transparent">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} className="h-12" alt="Logo" />
//         </a>
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="md:hidden"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen ? 'true' : 'false'}
//         >
//           <Hamburger size={30} color="white" toggled={isOpen} toggle={toggleMenu} />
//         </button>
//         <div
//           className={`${
//             isOpen ? 'block' : 'hidden'
//           } w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-medium text-3rem flex flex-col p-4 md:p-0 justify-center items-center mt-4 border border-gray-700 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
//             <li>
//               <a
//                 href="/"
//                 className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
//                 aria-current="page"
//               >
//                 Home  
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/about"
//                 className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
//               >
//                 Events
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
//               >
//                 Sponsors
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




import React, { useState } from 'react';
import logo from '../Assets/Images/College_logo.png';
import { Twirl as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="Logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <Hamburger size={30} color="white" toggled={isOpen} toggle={toggleMenu} />
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium text-3rem flex flex-col p-4 md:p-0 justify-center items-center mt-4 border border-gray-700 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
              >
                About
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white font-bold hover:text-blue-500 hover:underline hover:decoration-4 md:p-0"
              >
                Sponsors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
