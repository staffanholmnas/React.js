import React, { useState } from 'react';
import './App.css';

function StateApp() {
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

function PropsApp(props) {
  return (
    <div className='App'>
      Hello World {props.firstname} {props.lastname}
    </div>
  );
}

function CountApp() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      {count <= 10 
        ? <p>You have pressed the button {count} times</p> 
        : <p>You have pressed the button more than 10 times</p>
      }
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount(0)}>Clear</button>
    </div>
  );
}

function FormApp() {
  const [person, setPerson] = useState({firstname: '', lastname: '', email: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  }

  const formSubmitted = (event) => {
    event.preventDefault();
     showAlert();
    }

  return (
  <div className="App">
      Name: {person.firstname} {person.lastname} Email: {person.email}<br />
      <form onSubmit={formSubmitted}>
    <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
    <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged} />
    <input placeholder="Email" name="email" value={person.email} onChange={inputChanged} />
    <input type="submit" value="Submit" />
    </form>
  </div>
  );
}

function TodoApp() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo,index) => index !== row));
  }

  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <table style={{margin: 'auto'}}>
        <tbody style={{textAlign: 'left'}}>
          { 
            todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>) 
          }
        </tbody>
      </table>
    </div>
  );
}
export default TodoApp;