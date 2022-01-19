import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function GitHub() {
  const [repos, setRepos] = useState([]);
  const [reponame, setReponame] = useState('')

  const searchRepo = () => {
    if (reponame !== '') {
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
  }

  const inputChanged = (event) => {
    setReponame(event.target.value);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            GitHub repos
          </Typography>
        </Toolbar>
      </AppBar>
      <p></p>
      <br></br>
      
      <TextField 
       style={{marginRight: 10}} 
       label="Search repos" 
       name="date" 
       variant="outlined"
       value={reponame} 
       onChange={inputChanged}
      />
      <p></p>
      <div><Button style={{ margin: 10 }} color="primary" variant="contained" size="small" onClick={searchRepo}>Search</Button></div>
      <div className='repolist'>
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
    </div>
  );
}

export default GitHub;