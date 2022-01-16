import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Trivia
          </Typography>
        </Toolbar>
      </AppBar>
      <p></p>
      <br></br>
      <h4>Random trivia!</h4>
      <div><Button style= {{margin: 10}} color="primary" variant="contained" size="small" onClick={handleClick}>Get question</Button></div>
      <p>{question}</p>
      <br></br>
      <div><Button style= {{margin: 10}} color="primary" variant="contained" size="small" onClick={showAnswer}>Show answer</Button></div>
      <p>{answer}</p>
    </div>
  );
}

export default Trivia;