import React, { useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [reponame, setReponame] = useState('')

  const searchRepo = () => {
    fetch('https://api.github.com/search/repositories?q=' + reponame)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      setRepos(resData.items);
    })
  };

  const inputChanged = (event) => {
    setReponame(event.target.value);
  }

  return (
    <div className="App">
      <h3>Repositories</h3>
      <input placeholder="repo name" value={reponame} onChange={inputChanged}/>
      <button onClick={searchRepo}>Search</button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>URL</td>
          </tr>
        </thead>
        <tbody>
        { 
          repos.map((repo, index) => 
           <tr key={index}>
             <td>{repo.full_name}</td>
             <td><a href={repo.html_url}>{repo.html_url}</a></td>
           </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;