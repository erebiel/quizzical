import React from "react";

export default function Startscreen(props) {
  return (
    <div className="start">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="start" onClick={props.startQuiz}>
        Start quiz
      </button>
    </div>
  );
}
