import React, { useEffect, useState } from 'react';
import './App.css';

function GitHubApp() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(resData => setRepos(resData.items))
  }, []);

  return (
    <div className="App">
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

export default GitHubApp;
