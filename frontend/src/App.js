import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Particle from './Component/Particles/Particles';
import About from './Component/About';


function App() {
  return (
    <>
      <Particle/>
      <BrowserRouter>
        <div className="relative overflow-hidden">
          
          <div className="relative z-10">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Component/Home';
// import Particle from './Component/Particles/Particles';
// import Loader from './Component/Loading/Loading'; // Import the Loader component

// function App() {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading effect
//   useEffect(() => {
//     // Simulate a loading delay (e.g., fetching data or page load)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Adjust the time as needed (3 seconds here)

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   return (
//     <>{loading && <Loader />} {/* Show Loader while loading */}
//       <Particle />
//       <BrowserRouter>
//         <div className="relative overflow-hidden">
//           <div className="relative z-10">
//             <Routes>
//               <Route path='/' element={<Home />} />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

