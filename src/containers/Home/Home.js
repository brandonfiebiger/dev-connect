import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addJobs, addJobTypes } from '../../actions';
import './Home.css';

export class Home extends Component {
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
      <div className="homepage-container">
        <header>
          <h1>DevConnect</h1>
        </header>
        <div className="button-container">
          <button className="homepage-button">
            <NavLink className="job-seeker-link" to="/job-seeker">
              For Job Seekers
            </NavLink>
          </button>
          <button className="homepage-button">
            <NavLink className="employer-link" to="/employer">
              For Employers
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addJobsToStore: jobs => dispatch(addJobs(jobs)),
  addJobTypesToStore: jobTypes => dispatch(addJobTypes(jobTypes))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
