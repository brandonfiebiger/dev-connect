import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveJob, removeJob } from '../../actions';
import './JobCard.css';

export class JobCard extends Component {
  updateJobSaveStatus = async () => {
    const { id, status } = this.props;

    const url = process.env.REACT_APP_DATABASE_API_URL + `/api/v1/jobs/${id}`;
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
          status: status === 'saved' ? 'none' : 'saved'
        }),
        headers: {
          'content-type': 'application/json'
        }
      });

      await response.json();
    } catch (error) {
      console.log('something went wrong', error);
    }

    this.handleJobStatus();
  };

  handleJobStatus = () => {
    const { status, removeJob, saveJob } = this.props;

    if (status === 'saved') {
      return removeJob(this.props);
    }
    saveJob(this.props);
  };

  render() {
    const { description, company, location } = this.props;

    const allLocations = location.split(' ');

    const newLocations = allLocations.map(
      location =>
        location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()
    );

    const newCompany =
      company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();

    return (
      <div className="job-card">
        <h3>{newCompany}</h3>
        <p>{newLocations.join(' ')}</p>
        <p>{description}</p>
        <button onClick={this.updateJobSaveStatus}>Save Job</button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  saveJob: job => dispatch(saveJob(job)),
  removeJob: job => dispatch(removeJob(job))
});

export default connect(
  null,
  mapDispatchToProps
)(JobCard);
