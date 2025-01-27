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
        className="container mx-auto my-20 min-h-screen p-8 flex flex-col items-center justify-center pt-20" // Added pt-20 for spacing below the navbar
      >
        {/* First Section */}
        <div className="section flex flex-col md:flex-row items-center justify-between w-full mb-12">
          <animated.img
            style={{ ...springProps, ...vibrate }}
            src={CSElogo1}
            alt="CebroidLogo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover mb-6 md:mb-0 md:mr-8"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
          <animated.div style={slideUp} className="md:flex-1">
            <h1 className="text-3xl md:text-4xl glitch text-darkDesert text-[#57cfdc] mb-4 text-center">
              THE <span className="text-[#FF4500] text-darkDesert"> SYMPOSIUM</span>
            </h1>
            <p className="text-base md:text-lg text-white text-opacity-90 text-[20px] font-serif leading-[2.15em] py-5 w-[100%] mb-4 text-center">
            Cebroid, the annual tech fest organized by the Department of Computer Science and Engineering at Adhi College of Engineering and Technology, invites you to dive into an exhilarating world where innovation meets entertainment, featuring a captivating array of activities and challenges designed to spark creativity and ignite your passion for technology!
            </p>
          </animated.div>
        </div>

        {/* Second Section */}
        <div className="section flex flex-col md:flex-row items-center justify-between w-full">
          <animated.div style={slideUp} className="md:flex-1">
            <h1 className="text-3xl md:text-4xl glitch text-[#57cfdc] text-darkDesert mb-4 text-center">
              Department Of <span className="text-[#FF4500] text-darkDesert"> Computer Science and Engineering</span>
            </h1>
            <p className="text-base md:text-lg text-white text-opacity-90 text-[20px] font-serif leading-[2.15em] py-5 w-[100%] mb-4 text-center">
            Computer Science and Engineering (CSE) is a dynamic academic program that seamlessly merges the realms of Computer Engineering and Computer Science, offering a rich tapestry of subjects that delve into the fundamentals of programming and networking. This field is a playground for innovation and creativity, where the design, development, and implementation of cutting-edge software systems challenge you to think beyond limits and continuously strive for excellence. With a legacy steeped in groundbreaking advancements, CSE stands as a testament to the transformative power of technology in shaping our world.
            </p>
          </animated.div>
          <animated.img
            style={{ ...springProps, ...vibrate }}
            src={CSElogo2}
            alt="CSEDeptLogo"
            className="w-48 h-48 md:w-60 md:h-60 object-cover mb-10 md:mb-0 md:mr-8"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
        </div>

        {/* Third Section */}
        <div className="section flex flex-col md:flex-row items-center my-12 justify-between w-full">
          <animated.img
            style={{ ...springProps, ...vibrate }}
            src={Adhilogo}
            alt="AdhiCollegeLogo"
            className="w-40 h-40 md:w-63 md:h-63 object-cover mb-10 md:mb-0 md:mr-8"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
          <animated.div style={slideUp} className="md:flex-1">
            <h1 className="text-3xl md:text-4xl text-[#57cfdc] glitch text-darkDesert mb-4 text-center">
              Our <span className="text-[#FF4500] text-darkDesert"> College</span>
            </h1>
            <p className="text-base md:text-lg text-white text-opacity-90 text-[20px] font-serif leading-[2.15em] py-5 w-[100%] mb-4 text-center">
              
Adhi College of Engineering and Technology, a distinguished institution in Tamil Nadu, was founded with the mission of delivering hands-on education. Through robust industry partnerships, the college has made a significant global impact while offering students a harmonious blend of academic rigor and extracurricular activities. At ACET, we provide a wide range of opportunities designed for our students to excel and achieve their aspirations. Committed to fostering practical learning and industry collaboration, Adhi College of Engineering and Technology empowers students to thrive in their careers.
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
    border-image: linear-gradient(90deg, #57cfdc,#FF4500) 1;
    z-index: -1;
    animation: borderAnimation 2.5s linear infinite;
    pointer-events: none;
  }

  @keyframes borderAnimation {
    0% {
      border-image-source: linear-gradient(90deg, #FF4500,#57cfdc);
    }
    50% {
      border-image-source: linear-gradient(90deg, #57cfdc, #FF4500);
    }
    100% {
      border-image-source: linear-gradient(90deg, #FF4500, #57cfdc);
    }
  }
`;

export default memo(About);
