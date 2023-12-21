// importing required components
import React, { useContext, useState } from "react";
import { AppContext } from "../Components/Context";

// Home function for home page
export default function Home() {
  const { dark } = useContext(AppContext);
  const {setClick } = useContext(AppContext);
  const {isHovered, setIsHovered} = useContext(AppContext);

  // changing style according to the theme
  const buttonStyle = {
    color: `${dark ? "#D0D5FA" : "#3B5B7C"}`,
    background: `${
      dark
        ? "linear-gradient(90deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%)"
        : "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
    } `,
    border: `1px solid ${dark ? "#D0D5FA" : "#3B5B7C"}`,
  };

  // gradient inverse effect on hover of button
  if (isHovered) {
    buttonStyle.background = dark
      ? "linear-gradient(90deg, hsla(211, 36%, 46%, 1) 0%, hsla(208, 33%, 21%, 1) 100%)"
      : "linear-gradient(90deg, hsla(0, 0%, 89%, 1) 0%, hsla(233, 100%, 90%, 1) 100%)";
  }

  // returning component for rendering
  return (
    <div id="home">

    {/* header of the website */}
      <div style={{ fontSize: "5vmax"}}>Quizzy!</div>
      {/* button for starting the quiz */}
      <button
        id="btn"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=>{
            setClick("quiz")
        }}
      >
        Ready, Set, Quiz!
      </button>
    </div>
  );
}
