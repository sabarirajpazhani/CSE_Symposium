import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Partner1 from '../Assets/Images/Partners/csp.jpeg';
import Partner2 from '../Assets/Images/Partners/ccp.jpeg';
import { useSpring, animated } from "react-spring"; // Import react-spring

const sponsors = [
  {
    id: 1,
    name: "Marketing Partner",
    logo: Partner1, // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Marketing Partner",
    logo: Partner2, // Replace with actual image URLs
  }
];

const SponsorsPage = () => {
  // Define the spring animation for logos
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 10 },
    delay: 300,
  });

  return (
    <StyledWrapper>
      <div className="sponsors-container glitch text-center py-10">
        <h1 className="text-4xl text-[#57cfdc] mb-8">
          Our<span className="text-[#FF4500]">Partners</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card p-4 animated-border">
              {/* Apply the animated.img with the spring animation */}
              <animated.img
                style={logoSpring}
                src={sponsor.logo}
                alt={sponsor.name}
                className="mx-auto mb-4 h-40 w-40 object-contain"
              />
              <h2 className="text-xl">{sponsor.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </StyledWrapper>
  );
};

export default SponsorsPage;

const StyledWrapper = styled.div`
  .sponsor-card {
    position: relative;
    border: 2px solid transparent;
    padding: 15px;
    border-radius: 10px;
    background-clip: padding-box;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .sponsor-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 7px solid;
    border-image: linear-gradient(90deg, #57cfdc, #FF4500) 1;
    z-index: -1;
    animation: borderAnimation 2.5s linear infinite;
    pointer-events: none;
  }

  @keyframes borderAnimation {
    0% {
      border-image-source: linear-gradient(90deg, #FF4500, #57cfdc);
    }
    50% {
      border-image-source: linear-gradient(90deg, #57cfdc, #FF4500);
    }
    100% {
      border-image-source: linear-gradient(90deg, #FF4500, #57cfdc);
    }
  }

  .sponsor-card:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
`;
