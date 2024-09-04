import React, { useCallback, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavBar from './NavBar';
import HomeLogo from '../Assets/Images/cse.png';
import '../Fonts/GlichFont.css'


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
          className="container mx-auto bg-lightDesert mt-4/2 flex flex-col items-center justify-center min-h-screen"
        >
          <div className="flex flex-col sm:mb-10 md:flex-row items-center justify-center gap-4">
            <h1 className="text-6xl sm:text-7xl text-center mt-[-15%] sm:mt-8 glitch ">The <span className="text-[#57cfdc]">Symposium</span></h1>
            <animated.img
              style={logoSpring}
              className="w-35 sm:w-100 my-20 sm:mb-0"
              src={HomeLogo}
              alt="Trumpet with tentacle logo"
            />
            <h1 className="text-6xl sm:text-7xl sm:mt-8  text-center glitch">Begins <span className="text-[#57cfdc]">Now</span></h1>
          </div>
      </div>


      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
        <span className="text-2xl sm:text-5xl text-[#57cfdc]   text-center tracking-widest px-2 glitch">
          Countdown
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
              {countDownTime.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
