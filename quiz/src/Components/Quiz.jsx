// importing required components
import React, { useContext, useState } from "react";
import { AppContext } from "./Context";
export default function Quiz(props) {
  const questions = props.questions;
  console.log(questions);
  const [count, setCount] = useState(0);
  const { dark } = useContext(AppContext);
  const { score, setScore } = useContext(AppContext);
  const { setClick } = useContext(AppContext);
  const [highlight, setHighlight] = useState(false);
  const { isHovered, setIsHovered } = useContext(AppContext);

  // optionClick for when clicking on a option, score will increase 
  // if correct, and will go to next question
  const optionClick = (param) => {
    if (param == true) {
      setScore(score + 1);
    }
    if (count < questions.length - 1) {
      setCount(count + 1);
    } else if (count == questions.length - 1) {
      setClick("result");
    }
  };

  // styles for dark and light theme
  const buttonStyle = {
    color: `${dark ? "#D0D5FA" : "#3B5B7C"}`,
    background: `${
      dark
        ? "linear-gradient(90deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%)"
        : "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
    } `,
    border: `1px solid ${dark ? "#D0D5FA" : "#3B5B7C"}`,
  };

  if (isHovered) {
    buttonStyle.background = dark
      ? "linear-gradient(90deg, hsla(211, 36%, 46%, 1) 0%, hsla(208, 33%, 21%, 1) 100%)"
      : "linear-gradient(90deg, hsla(0, 0%, 89%, 1) 0%, hsla(233, 100%, 90%, 1) 100%)";
  }

  // returning the component for rendering
  return (
    <>

    {/* name of the website */}
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

      {/* parent quiz div */}
      <div id="quiz">
        <div className="kbnormal">
          Question {count + 1} out of {questions.length}
        </div>
        <div
          className="kbsketch"
          style={{ fontSize: "2vmax", color: `${highlight ? "darkred" : ""}`, maxWidth:"100%", textAlign:"center",wordWrap:"break-word" }}
        >
          {questions[count].text}
        </div>

        {/* options div, for mapping options on to the quiz div */}
        <div id="options">
          {questions[count].options.map((e) => {
            return (
              <div
                id="option"
                style={{
                  backgroundColor: `${
                    dark ? "#3B5B7C" : "hsla(233, 100%, 90%, 1)"
                  }`,
                }}
                onClick={() => {
                  optionClick(e.isCorrect);
                }}
              >
                {e.text}
              </div>
            );
          })}
        </div>

        {/* button for highlighting the question */}
        <button
          style={buttonStyle}
          id="btn"
          className="kbnormal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            setHighlight(!highlight);
          }}
        >
          {highlight ? "Un-Higlight" : "Highlight"}
        </button>
      </div>
    </>
  );
}
