import React from "react";

export default function Question(props) {
  console.log(props.questiondata);
  const { question, correct_answer, incorrect_answers } = props.questiondata;

  function htmlDecode(input) {
    var e = document.createElement("span");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  let allChoices = incorrect_answers;
  allChoices.push(correct_answer);
  allChoices.sort();
  console.log(allChoices);

  const answerElements = allChoices.map((choice) => (
    <button
      className="answer--choice"
      onClick={() => checkAnswer(choice, correct_answer)}
    >
      {htmlDecode(choice)}
    </button>
  ));

  function checkAnswer(answer, correct_answer) {
    if (answer === correct_answer) {
      alert("YES");
    } else {
      alert("NO");
    }
  }

  return (
    <div className="question">
      <h3>{htmlDecode(question)}</h3>
      <div className="answers">{answerElements}</div>
      <hr />
    </div>
  );
}
