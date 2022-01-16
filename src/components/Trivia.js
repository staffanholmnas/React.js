import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function Trivia() {
  const [trivia, setTrivia] = useState({});
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response status not ok');
        }
        return response.json();
      })
      .then(data => {
        setTrivia(data.results[0]);
        setQuestion(data.results[0].question.replaceAll('&quot;', '"')
          .replaceAll('&#039;', "'")
          .replaceAll('&ldquo;', '"')
          .replaceAll('&rdquo;', '"')
          .replaceAll('&amp;', "&")
        );
      })
  };

  const handleClick = () => {
    setAnswer('');
    fetchData();
  }

  const showAnswer = () => {
    setAnswer(trivia.correct_answer.replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&ldquo;', '"')
    .replaceAll('&rdquo;', '"')
    .replaceAll('&amp;', "&"))
  }

  return (
    <div className="App">
      <br></br>
      <h4>Random trivia!</h4>
      <p><ReactiveButton onClick={handleClick} idleText='Get question' size='big'></ReactiveButton></p>
      <p>{question}</p>
      <br></br>
      <p><ReactiveButton onClick={showAnswer} idleText='Show answer' size='big'></ReactiveButton></p>
      <p>{answer}</p>
    </div>
  );
}

export default Trivia;