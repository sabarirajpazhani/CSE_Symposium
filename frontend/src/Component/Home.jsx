import React, { useCallback, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavBar from './NavBar';
import styled from "styled-components";
import HomeLogo from '../Assets/Images/Cebroid.png';
import Cebroid from '../Assets/Images/cebroid24.png'
import Dragon from '../Assets/Images/countdownImage/dragon.png'
import Fox from '../Assets/Images/countdownImage/fox.jpeg'
import House from '../Assets/Images/countdownImage/house.jpeg'
import Raven from '../Assets/Images/countdownImage/raven.png'
import '../Fonts/GlichFont.css'
import About from './About';
import TechEvent from './TechEvents'


const Home = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const days = String(Math.floor(timeDifference / (24 * 60 * 60 * 1000))).padStart(2, '0');
    const hours = String(Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeDifference % (60 * 1000)) / 1000)).padStart(2, '0');

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 2,  // 2 days
      customDate.getHours() + 4,  // 4 hours
      customDate.getMinutes() + 5,  // 5 minutes
      customDate.getSeconds()
    );

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  return (
    <>
      <NavBar />

      <div
          id="home"
          className="container mx-auto bg-lightDesert mt-14 flex flex-col items-center justify-center min-h-screen"
        >
          <div className="flex flex-col sm:mb-10 md:flex-row items-center justify-center gap-4">
            <h1 className="text-4xl sm:text-5xl text-center  text-[#57cfdc] mt-[-15%] sm:mt-8 glitch ">The <span className="text-[#FF4500]">Symposium</span></h1>
            <animated.img
              style={logoSpring}
              //className="w-35 sm:w-100 my-20 sm:mb-0"
              className="w-35 sm:w-[36%] my-20 sm:mb-0"
              src={HomeLogo}
              alt="Trumpet with tentacle logo"
            />
            <h1 className="text-4xl sm:text-5xl sm:mt-8  text-[#57cfdc]  text-center glitch">Begins <span className="text-[#FF4500]">Now</span></h1>
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
          

          <div className="flex justify-center gap-5 sm:gap-8">
            {/* Days countdown */}
            <div className="flex flex-col gap-7 relative">
              <div
                className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex rounded-full justify-between items-center bg-[#343650] bg-cover bg-center"
                style={{ backgroundImage:  `url(${Dragon})` }}
              >
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
                  {countDownTime.days}
                </span>
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
                {countDownTime.days == 1 ? "Day" : "Days"}
              </span>
            </div>

            {/* Hours countdown */}
            <div className="flex flex-col gap-7 relative">
              <div
                className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Fox})` }}
              >
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
                  {countDownTime.hours}
                </span>
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
                {countDownTime.hours == 1 ? "Hour" : "Hours"}
              </span>
            </div>

            {/* Minutes countdown */}
            <div className="flex flex-col gap-7 relative">
              <div
                className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${House})`  }}
              >
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
                  {countDownTime.minutes}
                </span>
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
                {countDownTime.minutes == 1 ? "Minute" : "Minutes"}
              </span>
            </div>

            {/* Seconds countdown */}
            <div className="flex flex-col gap-7 relative">
              <div
                className="h-20 w-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#000000] rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Raven})` }}
              >
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-4xl font-semibold text-[#ffffff]">
                  {countDownTime.seconds}
                </span>
                <div className="relative h-3 w-3 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#dadae2] text-sm sm:text-2xl glitch text-center capitalize">
                {countDownTime.seconds == 1 ? "Second" : "Seconds"}
              </span>
            </div>
          </div>






          <h2 className="text-[22px] sm:text-4xl  font-semibold py-7 text-[#FF4500] text-center tracking-widest px-2 glitch">
            October 20, 2024
          </h2>
          <Button />
      </div>
      {/* <About/> */}
      <div id="about">
        <About />
        <TechEvent/>
      </div>
    </>
  );
};

export default Home;

// Button component with Google Form redirection
const Button = () => {
  return (
    <StyledWrapper>
      <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
        <button className='glitch'>Register Now</button>
      </a>
    </StyledWrapper>
  );
};




// Styled component for the button
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    --b: 3px;
    --s: 0.45em;
    --color: #e2e2e2;

    padding: calc(.5em + var(--s)) calc(.9em + var(--s));
    color: var(--color);
    --_p: var(--s);
    background: conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
      var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
    transition: 0.3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: 0.6em;
    font-size: 16px;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover,
  button:focus-visible {
    --_p: 0px;
    outline-color: #ffffff;
    outline-offset: 0.05em;
  }

  button:active {
    background: #ffffff;
    color: #000000;
  }
`;