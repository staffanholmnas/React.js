import React, { useState } from 'react';
import './App.css';

function MyComponent() {
  const [firstName, setFirstName] = useState('John');
  const [message, setMessage] = useState('Hello')
  const [person, setPerson] = useState({firstName: 'Ben', lastName: 'Kenobi', age: 50});
  const [count, setCount] = useState(30);
  
  return(
    
    <div>
      {message} {firstName} {count}
      <p>{person.firstName} {person.lastName} {person.age}</p>
        <button onClick={()=> {
          setPerson({firstName: 'Luke', lastName: 'Skywalker', age: 30});
          setFirstName('Anakin')}}>
          Use the force!
        </button>
        <button onClick={()=> {
          setPerson({...person, age: 25});
          setCount(count + 1)}}>
          Grow older!
        </button>
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