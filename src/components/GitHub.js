import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

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

  if (repos === []) {
    return <div className="App"></div>
  }
  return (
    <div className="App">
      <br></br>
      <h4>Search for repositories on GitHub</h4>
      <input placeholder="repo name" value={reponame} onChange={inputChanged} />
      <p></p>
      <div><p><ReactiveButton onClick={searchRepo} idleText='Search' size='big'></ReactiveButton></p></div>
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

export default GitHub;