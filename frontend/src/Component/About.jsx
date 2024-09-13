// import React, { memo, useState } from "react";
// import { useSpring, animated, config } from "react-spring";
// import CSElogo1 from '../Assets/Images/cse.png';
// import CSElogo2 from '../Assets/Images/cse1.png';
// import styled from "styled-components";

// const About = () => {
//   // Fade-in effect
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: config.slow,
//   });

//   // Springy effect on image hover
//   const [scale, setScale] = useState(1);
//   const springProps = useSpring({
//     transform: `scale(${scale})`,
//     config: config.wobbly,
//   });

//   // Slide-up effect
//   const slideUp = useSpring({
//     transform: "translate3d(0,0px,0)",
//     from: { transform: "translate3d(0,40px,0)" },
//     delay: 200,
//   });

//   const vibrate = {
//     animation: "vibrate 0.3s infinite",
//   };

//   return (
//     <animated.div
//       style={fadeIn}
//       id="about"
//       className="container mx-auto  my-20 bg-lightDesert min-h-screen p-8 flex flex-col items-center justify-center"
//     >
//       {/* First Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12">
//         <animated.img
//           style={{ ...springProps , ...vibrate}}
//           src={CSElogo1}
//           alt="DeptLogo"
//           className="w-48 h-48 md:w-64 md:h-64 object-cover mb-6 md:mb-0 md:mr-8"
//           onMouseEnter={() => setScale(1.1)}
//           onMouseLeave={() => setScale(1)}
//         />
//         <animated.div style={slideUp} className="md:flex-1">
//           <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
//             THE SYMPOSIUM
//           </h1>
//           <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%]  mb-4 text-center">
//             Hackerz is an annual tech-fest hosted by the Department of Computer Science and Engineering of Adhi College of Engineering and Technology. Embark on an exciting journey with a diverse range of activities and challenges that blend the thrill of fun with the excitement of technology.
//           </p>
//         </animated.div>
//       </div>

//       {/* Second Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full">
//         <animated.img
//           style={{ ...springProps, ...vibrate }}
//           src={CSElogo2}
//           alt="DeptLogo"
//           className="w-48 h-48 md:w-64 md:h-64  object-cover mb-10 md:mb-0 md:mr-8"
//           onMouseEnter={() => setScale(1.1)}  
//         />
//         <animated.div style={slideUp} className="md:flex-1">
//           <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
//             Department Of Computer Science and Engineering
//           </h1>
//           <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%]  mb-4 text-center">
//             Computer Science and Engineering (CSE) is an academic programme that integrates the field of Computer Engineering and Computer Science. The course contains a plethora of topics but emphasizes the basics of computer programming and networking. We work with hardware, software and software systems, including the theory, design, development, and implementation of software and software systems. It is a realm of invention and application that always pushes you to accomplish more and there is never enough. This field has a long and storied history and has seen many advancements. From these, we should conclude that computer science is a revolutionary field.
//           </p>
//         </animated.div>
//       </div>
//     </animated.div>
//   );
// };



// export default memo(About);





// import React, { memo, useState } from "react";
// import { useSpring, animated, config } from "react-spring";
// import CSElogo1 from '../Assets/Images/cse.png';
// import CSElogo2 from '../Assets/Images/cse1.png';
// import styled from "styled-components";

// const About = () => {
//   // Fade-in effect
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: config.slow,
//   });

//   // Springy effect on image hover
//   const [scale, setScale] = useState(1);
//   const springProps = useSpring({
//     transform: `scale(${scale})`,
//     config: config.wobbly,
//   });

//   // Slide-up effect
//   const slideUp = useSpring({
//     transform: "translate3d(0,0px,0)",
//     from: { transform: "translate3d(0,40px,0)" },
//     delay: 200,
//   });

//   return (
//     <StyledWrapper>
//       <animated.div
//         style={fadeIn}
//         id="about"
//         className="container mx-auto my-20 bg-lightDesert min-h-screen p-8 flex flex-col items-center justify-center"
//       >
//         {/* First Section */}
//         <div className="section flex flex-col md:flex-row items-center justify-between w-full mb-12">
//           <animated.img
//             style={{ ...springProps }}
//             src={CSElogo1}
//             alt="DeptLogo"
//             className="w-48 h-48 md:w-64 md:h-64 object-cover mb-6 md:mb-0 md:mr-8"
//             onMouseEnter={() => setScale(1.1)}
//             onMouseLeave={() => setScale(1)}
//           />
//           <animated.div style={slideUp} className="md:flex-1">
//             <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
//               THE SYMPOSIUM
//             </h1>
//             <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%] mb-4 text-center">
//               Hackerz is an annual tech-fest hosted by the Department of Computer Science and Engineering of Adhi College of Engineering and Technology. Embark on an exciting journey with a diverse range of activities and challenges that blend the thrill of fun with the excitement of technology.
//             </p>
//           </animated.div>
//         </div>

//         {/* Second Section */}
//         <div className="section flex flex-col md:flex-row items-center justify-between w-full">
//           <animated.img
//             style={{ ...springProps }}
//             src={CSElogo2}
//             alt="DeptLogo"
//             className="w-48 h-48 md:w-64 md:h-64 object-cover mb-10 md:mb-0 md:mr-8"
//             onMouseEnter={() => setScale(1.1)}
//           />
//           <animated.div style={slideUp} className="md:flex-1">
//             <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
//               Department Of Computer Science and Engineering
//             </h1>
//             <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%] mb-4 text-center">
//               Computer Science and Engineering (CSE) is an academic programme that integrates the field of Computer Engineering and Computer Science. The course contains a plethora of topics but emphasizes the basics of computer programming and networking. We work with hardware, software and software systems, including the theory, design, development, and implementation of software and software systems. It is a realm of invention and application that always pushes you to accomplish more and there is never enough. This field has a long and storied history and has seen many advancements. From these, we should conclude that computer science is a revolutionary field.
//             </p>
//           </animated.div>
//         </div>
//       </animated.div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .section {
//     position: relative;
//     padding: 2rem;
//     border-radius: 16px;
//     border: 4px solid;
//     border-image: linear-gradient(90deg, #f3ec78, #af4261) 1;
//     overflow: hidden;
//     transition: border-color 0.6s ease-in-out;
//   }

//   .section::before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: linear-gradient(90deg, #f3ec78, #af4261);
//     z-index: -1;
//     animation: rotate 4s linear infinite;
//     transition: all 0.4s ease;
//   }

//   .section:hover::before {
//     filter: blur(20px);
//   }

//   @keyframes rotate {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

// export default memo(About);


import React, { memo, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import CSElogo1 from '../Assets/Images/Cebroid.png';
import CSElogo2 from '../Assets/Images/cse1.png';
import Adhilogo from '../Assets/Images/AdhiLogo.png';
import styled from "styled-components";

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  // Vibration effect
  const vibrate = {
    animation: "vibrate 0.3s infinite",
  };

  return (
    <StyledWrapper>
      <animated.div
        style={fadeIn}
        id="about"
        className="container mx-auto my-20 min-h-screen p-8 flex flex-col items-center justify-center"
      >
        {/* First Section */}
        <div className="section flex flex-col md:flex-row items-center justify-between w-full mb-12">
          <animated.img
            style={{ ...springProps, ...vibrate }}
            src={CSElogo1}
            alt="DeptLogo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover mb-6 md:mb-0 md:mr-8"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
          <animated.div style={slideUp} className="md:flex-1">
            <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
              THE SYMPOSIUM
            </h1>
            <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%] mb-4 text-center">
              Hackerz is an annual tech-fest hosted by the Department of Computer Science and Engineering of Adhi College of Engineering and Technology. Embark on an exciting journey with a diverse range of activities and challenges that blend the thrill of fun with the excitement of technology.
            </p>
          </animated.div>
        </div>

        {/* Second Section */}
        <div className="section flex flex-col md:flex-row items-center justify-between w-full">
          <animated.div style={slideUp} className="md:flex-1">
            <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
              Department Of Computer Science and Engineering
            </h1>
            <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%] mb-4 text-center">
              Computer Science and Engineering (CSE) is an academic programme that integrates the field of Computer Engineering and Computer Science. The course contains a plethora of topics but emphasizes the basics of computer programming and networking. We work with hardware, software and software systems, including the theory, design, development, and implementation of software and software systems. It is a realm of invention and application that always pushes you to accomplish more and there is never enough. This field has a long and storied history and has seen many advancements. From these, we should conclude that computer science is a revolutionary field.
            </p>
          </animated.div>
          <animated.img
            style={{ ...springProps, ...vibrate }}
            src={CSElogo2}
            alt="DeptLogo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover mb-10 md:mb-0 md:mr-8"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
        </div>

        {/* thrid Section */}
        <div className="section flex flex-col md:flex-row items-center my-12 justify-between w-full">
          <animated.img
            style={{ ...springProps, ...vibrate }}
            src={Adhilogo}
            alt="DeptLogo"
            className="w-40 h-40 md:w-63 md:h-63 object-cover mb-10 md:mb-0 md:mr-8"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
          <animated.div style={slideUp} className="md:flex-1">
            <h1 className="text-3xl md:text-4xl glitch text-darkDesert mb-4 text-center">
              Our College
            </h1>
            <p className="text-base md:text-lg text-white text-opacity-60 text-[18px] font-normal leading-[2.15em] py-5 w-[100%] mb-4 text-center">
              Computer Science and Engineering (CSE) is an academic programme that integrates the field of Computer Engineering and Computer Science. The course contains a plethora of topics but emphasizes the basics of computer programming and networking. We work with hardware, software and software systems, including the theory, design, development, and implementation of software and software systems. It is a realm of invention and application that always pushes you to accomplish more and there is never enough. This field has a long and storied history and has seen many advancements. From these, we should conclude that computer science is a revolutionary field.
            </p>
          </animated.div>
        </div>
      </animated.div>

    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .section {
    position: relative;
    padding: 2rem;
    border-radius: 10px;
    overflow: hidden;
    /* Ensure border does not interfere with content */
    border: 4px solid transparent;
  }

  .section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 7px solid;
    border-image: linear-gradient(90deg, #57cfdc, #af4261) 1;
    z-index: -1;
    animation: borderAnimation 1.5s linear infinite;
    pointer-events: none;
  }

  @keyframes borderAnimation {
    0% {
      border-image-source: linear-gradient(90deg, #57cfdc, #af4261);
    }
    50% {
      border-image-source: linear-gradient(90deg, #af4261, #57cfdc);
    }
    100% {
      border-image-source: linear-gradient(90deg, #57cfdc, #af4261);
    }
  }
`;

export default memo(About);
