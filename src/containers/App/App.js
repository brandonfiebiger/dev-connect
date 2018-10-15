import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
     
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs')
      .then(response => response.json())
      .then(jobs => {
        this.setState({
          jobs
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>DevConnect</h1>
        </header>
      </div>
    );
  }
}

export default App;
