import React from 'react';
import { connect } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import { NavLink } from 'react-router-dom';
import './JobsContainer.css';

export class JobsContainer extends React.Component {
  displayJobCards = () => {
    if (!this.props.jobTypes.length) {
      return;
    }
    return this.props.jobs.map(job => {
      const jobType = this.props.jobTypes.find(type => {
        return type.id === job.job_title_id;
      });

      return (
        <JobCard
          description={job.description}
          company={job.company}
          location={job.location}
          status={job.status}
          id={job.id}
          jobType={jobType.job_title}
        />
      );
    });
  };

  render() {
    const jobCards = this.displayJobCards();
    return (
      <div className="jobs-container">
        <header className="jobs-container-header">
          <h1>Job Seekers</h1>
          <NavLink to="/saved">Saved Jobs</NavLink>
        </header>
        <div>{jobCards}</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.jobs,
  jobTypes: state.jobTypes
});

export default connect(
  mapStateToProps,
  null
)(JobsContainer);
