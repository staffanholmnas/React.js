import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Delete, Save } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';


// A todo app that uses MUI a.k.a material UI
function Todo() {
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
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
      <p></p>
      <TextField 
        style={{marginRight: 10}} 
        label="Description" 
        name="description" 
        variant="outlined"
        value={todo.description} 
        onChange={inputChanged} 
      />
     <TextField 
       style={{marginRight: 10}} 
       label="Date" 
       name="date" 
       variant="outlined"
       value={todo.date} 
       onChange={inputChanged}
      />
      <Button style= {{margin: 10}} color="primary" variant="contained" size="small" onClick={addTodo}><Save style= {{margin: 5}}/>Add</Button>
      <table>
        <tbody>
       {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.description}</td>
             <td>{todo.date}</td>
             <td><Tooltip title="Delete">
               <IconButton variant="contained" size="small" color="error" onClick={() => deleteTodo(index)}><Delete />
               </IconButton>
               </Tooltip>
            </td>
            </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

export default Todo;