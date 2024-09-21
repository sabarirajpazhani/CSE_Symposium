// import React, { useState } from 'react';
// import logo from '../Assets/Images/cse1.png';
// import { Sling as Hamburger } from 'hamburger-react'

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="bg-transparent">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} className="h-14" alt="Logo" />
//         </a>
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="md:hidden"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen ? 'true' : 'false'}
//         >
//           <Hamburger size={30} color="black" toggled={isOpen} toggle={toggleMenu} />
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
//                 className="block py-2 px-3 text-white  hover:text-[#FF4500] hover:underline hover:decoration-4 md:p-0 glitch"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="block py-2 px-3 text-white  hover:text-blue-500 hover:underline hover:decoration-4 md:p-0 glitch"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white hover:text-[#FF4500] hover:underline hover:decoration-4 md:p-0 glitch"
//               >
//                 Events
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white hover:text-blue-500 hover:underline hover:decoration-4 md:p-0 glitch"
//               >
//                 Partners
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import React, { useState } from 'react';
// import logo from '../Assets/Images/cse1.png';
// import { Sling as Hamburger } from 'hamburger-react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false); // Close the menu after scrolling
//     }
//   };

//   const closeMenu = () => {
//     setIsOpen(false); // Close the menu after clicking
//   };

//   return (
//     <nav className="bg-transparent">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} className="h-14" alt="Logo" />
//         </a>
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="md:hidden"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen ? 'true' : 'false'}
//         >
//           <Hamburger size={30} color="black" toggled={isOpen} toggle={toggleMenu} />
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
//                 className="block py-2 px-3 text-white hover:text-[#FF4500] hover:underline hover:decoration-4 md:p-0 glitch"
//                 aria-current="page"
//                 onClick={closeMenu}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <button
//                 onClick={() => {
//                   scrollToSection('about');
//                   closeMenu();
//                 }}
//                 className="block py-2 px-3 text-white hover:text-blue-500 hover:underline hover:decoration-4 md:p-0 glitch"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white hover:text-[#FF4500] hover:underline hover:decoration-4 md:p-0 glitch"
//                 onClick={closeMenu}
//               >
//                 Events
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white hover:text-blue-500 hover:underline hover:decoration-4 md:p-0 glitch"
//                 onClick={closeMenu}
//               >
//                 Partners
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
import logo from '../Assets/Images/cse1.png';
import { Sling as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after scrolling
    }
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="bg-transparent top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="Logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <Hamburger size={30} color="black" toggled={isOpen} toggle={toggleMenu} />
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
                className="block py-2 px-3 text-white hover:text-[#FF4500] hover:underline hover:decoration-4 md:p-0 glitch"
                aria-current="page"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('about');
                  closeMenu();
                }}
                className="block py-2 px-3 text-white hover:text-blue-500 hover:underline hover:decoration-4 md:p-0 glitch"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  // Replace 'techEvents' with the section ID or scroll function you want
                  scrollToSection('techEvents'); 
                  closeMenu();
                }}
                className="block py-2 px-3 text-white hover:text-[#FF4500] hover:underline hover:decoration-4 md:p-0 glitch"
              >
                Events
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-blue-500 hover:underline hover:decoration-4 md:p-0 glitch"
                onClick={closeMenu}
              >
                Partners
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
