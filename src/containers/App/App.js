import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addJobs, addJobTypes } from '../../actions';
import JobsContainer from '../JobsContainer/JobsContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    const { addJobsToStore, addJobTypesToStore } = this.props;
    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs')
      .then(response => response.json())
      .then(jobs => {
        addJobsToStore(jobs);
      })
      .catch(error => console.log(error))

    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/job-types')
      .then(responses => responses.json())
      .then(job_types => {
        addJobTypesToStore(job_types);
      })
      .catch(error => {
        console.log(error);
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
  addJobsToStore: jobs => dispatch(addJobs(jobs)),
  addJobTypesToStore: jobTypes => dispatch(addJobTypes(jobTypes))
})

export default connect(null, mapDispatchToProps)(App);
