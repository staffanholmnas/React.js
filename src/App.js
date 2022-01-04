import React, { useState } from 'react';
import './App.css';

function MyComponent() {
  const [firstName, setFirstName] = useState('John');
  const [message, setMessage] = useState('Hello')
  return(
    <div>
      {message} {firstName}
    </div>
  )
}

function App(props) {
  return (
    <div className='App'>
      Hello World {props.firstname} {props.lastname}
    </div>
  );
}

export default MyComponent;