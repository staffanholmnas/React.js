import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Nasa() {
  const [explanation, setExplanation] = useState('');
  const [url, setUrl] = useState('');
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(data => {
        setExplanation(data.explanation)
        setUrl(data.url)
        setReady(true);
      })
      .catch(err => console.log(err))
  }, [])

  if (!isReady)
    return <div><br></br><br></br>Loading...</div>

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Nasa
          </Typography>
        </Toolbar>
      </AppBar>
      <p></p>
      <br></br>
      <div className='nasatext'>
        <h4>Nasa's picture of the day</h4>
        <p>{explanation}</p>
      </div>
      <div >
        <img alt="Nasa apod" src={url} className='nasapic' />
      </div>
    </div>
  );
}

export default Nasa;