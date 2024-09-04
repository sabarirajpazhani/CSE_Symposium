import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span />
        <div id="dot-1" className="dot" />
        <div id="dot-2" className="dot" />
        <div id="dot-3" className="dot" />
        <div id="dot-4" className="dot" />
        <div id="dot-5" className="dot" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .loader {
    position: relative;
    width: 10em;
    height: 10em;
    background: #212121;
    border-radius: 50%;
    box-shadow: inset 0px 0px 7px seagreen;
    border: 0.1em solid seagreen;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .loader::before {
    content: "";
    position: absolute;
    inset: 2em;
    background: transparent;
    border: 0.1em solid seagreen;
    border-radius: 50%;
    box-shadow: inset 0px 0px 5px seagreen;
  }

  .loader::after {
    content: "";
    position: absolute;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    border: 0.1em solid seagreen;
    box-shadow: inset 0px 0px 3px seagreen;
  }

  .loader span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: radar81 2s linear infinite;
    box-shadow: -1.7em -5.2em 2em -3.4em seagreen;
    border-top: 0.13em solid #2e8b57;
  }

  .dot {
    width: 0.3em;
    height: 0.3em;
    position: absolute;
    border-radius: 9999px;
    background: rgba(255, 255, 255);
    box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
      0px 0px 10px 2px rgba(0, 255, 135, 0.3);
    animation: fly 32s linear infinite;
  }

  #dot-1 {
    --dot-start-top: 6.7em;
    --dot-start-left: 9.3em;
    --dot-end-top: 8.7em;
    --dot-end-left: 1.3em;
  }

  #dot-2 {
    --dot-start-top: 6.7em;
    --dot-start-left: 0em;
    --dot-end-top: -0.2em;
    --dot-end-left: 6em;
  }

  #dot-3 {
    --dot-start-top: 7em;
    --dot-start-left: 7em;
    --dot-end-top: 1.2em;
    --dot-end-left: 1.2em;
  }

  #dot-4 {
    --dot-start-top: 7.3em;
    --dot-start-left: 9.7em;
    --dot-end-top: 9.3em;
    --dot-end-left: 2em;
  }

  #dot-5 {
    --dot-start-top: -0.3em;
    --dot-start-left: 5.7em;
    --dot-end-top: 8.3em;
    --dot-end-left: 8em;
  }

  @keyframes radar81 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fly {
    0% {
      top: var(--dot-start-top);
      left: var(--dot-start-left);
    }

    100% {
      top: var(--dot-end-top);
      left: var(--dot-end-left);
    }

    5%,
    15%,
    25%,
    35%,
    45%,
    55%,
    65%,
    75%,
    85%,
    95% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0 0 10px 2px rgba(0, 255, 182, 0.5),
        0 0 15px 2px rgba(0, 255, 135, 1);
    }

    0%,
    10%,
    20%,
    30%,
    40%,
    50%,
    60%,
    70%,
    80%,
    90% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 10px 2px rgba(0, 255, 182, 0.5),
        0 0 5px 2px rgba(0, 255, 135, 0.3);
    }
  }

  @media (max-width: 768px) {
    .loader {
      width: 7em;
      height: 7em;
    }

    .dot {
      width: 0.2em;
      height: 0.2em;
    }

    .loader::before {
      inset: 1em;
    }

    .loader::after {
      width: 2em;
      height: 2em;
    }

    .loader span {
      box-shadow: -1em -3em 1.5em -2.5em seagreen;
      border-top: 0.1em solid #2e8b57;
    }

    #dot-1 {
      --dot-start-top: 4em;
      --dot-start-left: 5.5em;
      --dot-end-top: 6.3em;
      --dot-end-left: 0.8em;
    }

    #dot-2 {
      --dot-start-top: 4em;
      --dot-start-left: 0em;
      --dot-end-top: -0.5em;
      --dot-end-left: 3.5em;
    }

    #dot-3 {
      --dot-start-top: 4.3em;
      --dot-start-left: 4.3em;
      --dot-end-top: 0.6em;
      --dot-end-left: 0.6em;
    }

    #dot-4 {
      --dot-start-top: 4.5em;
      --dot-start-left: 6em;
      --dot-end-top: 6.3em;
      --dot-end-left: 1.2em;
    }

    #dot-5 {
      --dot-start-top: -0.5em;
      --dot-start-left: 3.4em;
      --dot-end-top: 6em;
      --dot-end-left: 5.2em;
    }
  }
`;
export default Loader;
