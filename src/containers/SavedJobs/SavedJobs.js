import React, { Component } from 'react';
import SavedCard from '../SavedCard/SavedCard';
import { connect } from 'react-redux';
import { removeJob } from '../../actions';

export class SavedJobs extends Component {
  displaySavedCard = () => {
    if (!this.props.savedJobs.length) {
      return;
    }
    return this.props.savedJobs.map(job => (
      <SavedCard
        description={job.description}
        company={job.company}
        location={job.location}
        id={job.id}
      />
    ));
  };

  render() {
    const savedCards = this.displaySavedCard();
    return (
      <div>
        <h1>Saved Jobs</h1>
        {savedCards}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  savedJobs: state.savedJobs
});

export const mapDispatchToProps = dispatch => ({
  removeJob: job => dispatch(removeJob(job))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedJobs);
