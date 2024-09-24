
import React, { useCallback, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavBar from './NavBar';
import styled from "styled-components";
import HomeLogo from '../Assets/Images/Cebroid.png';
import Cebroid from '../Assets/Images/cebroid24.png';
import Dragon from '../Assets/Images/countdownImage/dragon.png';
import Fox from '../Assets/Images/countdownImage/fox.jpeg';
import House from '../Assets/Images/countdownImage/house.jpeg';
import Raven from '../Assets/Images/countdownImage/raven.png';
import '../Fonts/GlichFont.css';
import About from './About';
import TechEvents from './TechEvents';
import NonTechEvents from './NonTechEvents';
import Footer from './Footer';
import Members from './Members';

// New Countdown Component
const Countdown = () => {
  const targetDate = '2024-10-18T23:59:59';

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-5 sm:gap-8">
      {/* Days */}
      <div className="flex flex-col gap-7 relative">
        <div
          className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex rounded-full justify-between items-center bg-[#343650] bg-cover bg-center"
          style={{ backgroundImage: `url(${Dragon})` }}
        >
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
            {timeLeft.days || '00'}
          </span>
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
          {timeLeft.days === 1 ? 'Day' : 'Days'}
        </span>
      </div>

      {/* Hours */}
      <div className="flex flex-col gap-7 relative">
        <div
          className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Fox})` }}
        >
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
            {timeLeft.hours || '00'}
          </span>
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
          {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
        </span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col gap-7 relative">
        <div
          className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${House})` }}
        >
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
            {timeLeft.minutes || '00'}
          </span>
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
          {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
        </span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col gap-7 relative">
        <div
          className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#000000] rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Raven})` }}
        >
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
            {timeLeft.seconds || '00'}
          </span>
          <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
          {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
        </span>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  return (
    <>
      <NavBar />
      <div className="container mx-auto bg-lightDesert mt-14 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col sm:mb-10 md:flex-row items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl text-center text-[#57cfdc] mt-[-15%] sm:mt-8 glitch">
            The <span className="text-[#FF4500]">Symposium</span>
          </h1>
          <animated.img
            style={logoSpring}
            className="w-35 sm:w-[36%] my-20 sm:mb-0"
            src={HomeLogo}
            alt="Trumpet with tentacle logo"
          />
          <h1 className="text-4xl sm:text-5xl sm:mt-8 text-[#57cfdc] text-center glitch">
            Begins <span className="text-[#FF4500]">Now</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full gap-6 sm:gap-16">
        <animated.img
          style={logoSpring}
          className="w-35 sm:w-[36%] my-25 sm:mb-0"
          src={Cebroid}
          alt="Trumpet with tentacle logo"
        />
        <h2 className="text-[22px] sm:text-4xl font-semibold py-1 text-[#57cfdc] text-center tracking-widest px-2 glitch">
          Winter is <span className="text-[#FF4500]">Coming</span>
        </h2>

        {/* Countdown Component */}
        <Countdown />

        <h2 className="text-[22px] sm:text-4xl font-semibold py-12 text-[#57cfdc] text-center tracking-widest px-2 glitch">
  October <span className="font-serif text-[22px] text-[#FF4500] sm:text-5xl">18, 2024</span>
</h2>

        <Button />
      </div>

      <div id="about">
        <About />
        <TechEvents />
        <NonTechEvents />
        <Members/>
        <Footer />
      </div>
    </>
  );
};

// Button component with Google Form redirection
const Button = () => {
  return (
    <StyledWrapper>
      <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
        <button className="glitch">Register Now</button>
      </a>
    </StyledWrapper>
  );
};

// Styled button using styled-components
const StyledWrapper = styled.div`
  button {
    color: #ff4500;
    background: transparent;
    font-size: 18px;
    font-weight: 600;
    padding: 12px 24px;
    border: 2px solid #ff4500;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff4500;
      color: white;
    }
  }
`;

export default Home;
