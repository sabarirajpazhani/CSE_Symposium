import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const sponsors = [
  {
    id: 1,
    name: "Company A",
    logo: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Company B",
    logo: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    id: 3,
    name: "Company C",
    logo: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
];

const SponsorsPage = () => {
  return (
    <StyledWrapper>
      <div className="sponsors-container glitch text-center py-10">
        <h1 className="text-4xl text-[#57cfdc] mb-8">Our<span className="text-[#FF4500]">Partners</span> </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card p-4 animated-border">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="mx-auto mb-4 h-40 w-40 object-contain"
              />
              <h2 className="text-xl">{sponsor.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
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
