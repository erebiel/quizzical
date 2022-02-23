import React from "react";
import Startscreen from "./components/Startscreen";
import Quiz from "./components/Quiz";

export default function App() {
  const [quizStart, setQuizStart] = React.useState(false);

  function startQuiz() {
    setQuizStart(true);
  }

  return (
    <div className="App">
      {quizStart ? <Quiz /> : <Startscreen startQuiz={startQuiz} />}
    </div>
  );
}
