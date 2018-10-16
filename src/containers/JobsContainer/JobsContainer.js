import React from 'react';
import { connect } from 'react-redux';
import { JobCard } from '../../components/JobCard/JobCard';
import './JobsContainer.css';

export const JobsContainer = props => {
  const displayJobCards = () => {

    return props.jobs.map(job => (
      <JobCard
        description={job.description}
        company={job.company}
        location={job.location}
        status={job.status}
        jobTitleId={job.job_title_id}
        jobTypes={props.jobTypes}
      />
    ));
  };

  return (
    <div>
      <h1>Job Seekers</h1>
      <ul>{displayJobCards()}</ul>
    </div>
  );
};

export const mapStateToProps = state => ({
  jobs: state.jobs,
  jobTypes: state.jobTypes
});

export default connect(
  mapStateToProps,
  null
)(JobsContainer);
