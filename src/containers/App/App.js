import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addJobs } from '../../actions';
import JobsContainer from '../JobsContainer/JobsContainer';

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
        this.props.addJobsToStore(jobs);
      })
      .catch(error => console.log(error))
    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/job-types')
      .then(response => response.json())
      .then(job_types => {
        console.log(job_types);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>DevConnect!!</h1>
          <JobsContainer />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addJobsToStore: jobs => dispatch(addJobs(jobs))
})

export default connect(null, mapDispatchToProps)(App);
