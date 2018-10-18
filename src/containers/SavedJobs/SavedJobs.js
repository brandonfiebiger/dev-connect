import React, { Component } from 'react';
import SavedCard from '../SavedCard/SavedCard';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeJob } from '../../actions';

export class SavedJobs extends Component {
  displaySavedCard = () => {
    const { savedJobs, jobs, jobTypes } = this.props;

    if (!savedJobs.length) {
      return;
    }
    return savedJobs.map(id => {
      const matchedJob = jobs.find(job => job.id === id);
      const matchedJobType = jobTypes.find(
        type => type.id === matchedJob.job_title_id
      );

      return (
        <SavedCard
          description={matchedJob.description}
          company={matchedJob.company}
          location={matchedJob.location}
          title={matchedJobType.job_title}
          status={matchedJob.status}
          id={matchedJob.id}
        />
      );
    });
  };

  render() {
    const savedCards = this.displaySavedCard();
    return (
      <div>
        <h1>Saved Jobs</h1>
        <NavLink className="jobs-container-link" to="/">
          Home
        </NavLink>
        {savedCards}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.jobs,
  jobTypes: state.jobTypes,
  savedJobs: state.savedJobs
});

export const mapDispatchToProps = dispatch => ({
  removeJob: job => dispatch(removeJob(job))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedJobs);
