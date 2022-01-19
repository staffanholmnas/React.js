import React from 'react';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <br></br>
      <Typography variant="h6">
        This is a collection of apps made with React, enjoy!
        <p></p>
        <br></br>
        <div className='carousel'>
          <Carousel variant='dark'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../pics/pic4.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../pics/pic5.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../pics/pic7.jpg")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Typography>
    </div>
  )
}

export default Home;