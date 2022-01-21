import React from 'react';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <br></br>
      <Typography variant="h6">
        Browse apps from the navbar
        <p></p>
        <br></br>
        <div className='carousel'>
          <Carousel variant='dark'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                
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