import React from "react";

export default function Quiz() {
  return (
    <div className="quiz">
      <div className="question">
        <h3>How would one say goodbye in Spanish?</h3>
        <div className="answers">
          <button className="answer--choice">Adiòs</button>
          <button className="answer--choice">Hola</button>
          <button className="answer--choice">Au revoir</button>
          <button className="answer--choice">Salir</button>
        </div>
        <hr />
      </div>
      <div className="question">
        <h3>
          Which best selling toy of 1983 caused hysteria, resulting in riots
          breaking in stores?
        </h3>
        <div className="answers">
          <button className="answer--choice">Cabbage Patch Kids</button>
          <button className="answer--choice">Transformers</button>
          <button className="answer--choice">Care Bears</button>
          <button className="answer--choice">Rubik's Cube</button>
        </div>
        <hr />
      </div>
      <div className="question">
        <h3>What is the hottest planet in our Solar System?</h3>
        <div className="answers">
          <button className="answer--choice">Mercury</button>
          <button className="answer--choice">Venus</button>
          <button className="answer--choice">Mars</button>
          <button className="answer--choice">Saturn</button>
        </div>
        <hr />
      </div>
      <div className="question">
        <h3>In which country was the caesar salad invented?</h3>
        <div className="answers">
          <button className="answer--choice">Italy</button>
          <button className="answer--choice">Portugal</button>
          <button className="answer--choice">Mexico</button>
          <button className="answer--choice">France</button>
        </div>
        <hr />
      </div>
      <div className="question">
        <h3>How many hearts does an octopus have?</h3>
        <div className="answers">
          <button className="answer--choice">One</button>
          <button className="answer--choice">Two</button>
          <button className="answer--choice">Three</button>
          <button className="answer--choice">Four</button>
        </div>
        <hr />
      </div>
      <button className="answer">Check answers</button>
    </div>
  );
}
