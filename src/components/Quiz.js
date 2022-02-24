import React from "react";
import Question from "./Question";

export default function Quiz() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    );
    const data = await res.json();
    setQuestions(data.results);
  }, []);

  return (
    <div className="quiz">
      {questions.map((q, i) => (
        <Question questiondata={q} key={i} />
      ))}
      <button className="checkanswer">Check answers</button>
    </div>
  );
}
