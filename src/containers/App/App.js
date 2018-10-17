import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../Home/Home';
import JobsContainer from '../JobsContainer/JobsContainer';
import EmployerContainer from '../EmployerContainer/EmployerContainer';
import SavedJobs from '../SavedJobs/SavedJobs';
import './App.css';
import { addJobs, addJobTypes } from '../../actions';
import { connect } from 'react-redux';

export class App extends Component {
  componentDidMount() {
    const { addJobsToStore, addJobTypesToStore } = this.props;
    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs')
      .then(response => response.json())
      .then(jobs => {
        addJobsToStore(jobs);
      })
      .catch(error => console.log(error));

    fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/job-types')
      .then(response => response.json())
      .then(job_types => {
        addJobTypesToStore(job_types);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/job-seeker" component={JobsContainer} />
        <Route exact path="/employer" component={EmployerContainer} />
        <Route exact path="/saved" component={SavedJobs} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addJobsToStore: jobs => dispatch(addJobs(jobs)),
  addJobTypesToStore: jobTypes => dispatch(addJobTypes(jobTypes))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
