import React, { useState, useEffect } from 'react';
import './App.css';

function NasaApp() {
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
  },[])

  if (!isReady)
    return <div>Loading...</div>

  return (
    <div className="App">
      <p>{explanation}</p>
      <img alt="Nasa apod" src={url} />
    </div>
  );
}

function UsersApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(resData => setUsers(resData.data))
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
        {
          users.map((user, index) => 
           <tr key={index}>
             <td>{user.first_name}</td>
             <td>{user.last_name}</td>
             <td>{user.email}</td>
             <td><p><img src={user.avatar} alt='user avatar'></img></p></td>
           </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

function UserApp() {
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState('')

  const fetchData = () => {
    fetch('https://reqres.in/api/users/' + userid)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => setUser(resData.data))
  };

  const inputChanged = (event) => {
    setUserid(event.target.value);
  }

  return (
    <div className="App">
      <input placeholder="User ID" value={userid} onChange={inputChanged} />
      <button onClick={fetchData}>Fetch</button>
      <p>{user.first_name} {user.last_name} {user.email}</p>
    </div>
  );
}

export default UsersApp;