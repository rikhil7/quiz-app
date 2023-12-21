// importing required components
import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

// Result function for result component
export default function Result() {
  const { score, setScore } = useContext(AppContext);
  const { dark } = useContext(AppContext);
  const { isHovered, setIsHovered } = useContext(AppContext);
  const { setClick } = useContext(AppContext);

  // changing button style, according to theme
  const buttonStyle = {
    color: `${dark ? "#D0D5FA" : "#3B5B7C"}`,
    background: `${
      dark
        ? "linear-gradient(90deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%)"
        : "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
    } `,
    border: `1px solid ${dark ? "#D0D5FA" : "#3B5B7C"}`,
  };

  // for hover gradient inverse effect on button
  if (isHovered) {
    buttonStyle.background = dark
      ? "linear-gradient(90deg, hsla(211, 36%, 46%, 1) 0%, hsla(208, 33%, 21%, 1) 100%)"
      : "linear-gradient(90deg, hsla(0, 0%, 89%, 1) 0%, hsla(233, 100%, 90%, 1) 100%)";
  }

  // returning the component for rendering
  return (
    <>
      <div
        className="kbsketch"
        id="name"
        onClick={() => {
          setClick("home");
          setScore(0);
        }}
      >
        Quizzy
      </div>

      {/* parent result div */}
      <div id="result">
        <div id="heading" className="kbsketch">
          Result
        </div>

        {/* taglines of result according to score */}
        <div id="tagline" className="kbnormal">
          {score > 2 ? "You did good!" : "You need to study more!"}
        </div>

        {/* calculating the % of score */}
        <div id="score" className="kbsketch">
          {score} / 10 ~ ({(score / 10) * 100}%)
        </div>

        {/* button for restarting the game */}
        <button
          style={buttonStyle}
          id="btn"
          className="kbnormal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            setClick("home");
            setScore(0);
          }}
        >
          Restart Game
        </button>
      </div>
    </>
  );
}
