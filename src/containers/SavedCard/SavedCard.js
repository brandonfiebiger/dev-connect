import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeJob } from '../../actions';
import './SavedCard.css';

export class SavedCard extends Component {
  updateJobSaveStatus = async () => {
    const { id } = this.props;

    const url = process.env.REACT_APP_DATABASE_API_URL + `/api/v1/jobs/${id}`;
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
          status: 'none'
        }),
        headers: {
          'content-type': 'application/json'
        }
      });

      await response.json();
    } catch (error) {
      console.log('something went wrong', error);
    }

    this.handleRemoveCard();
  };

  handleRemoveCard = () => {
    const { removeJob } = this.props;

    removeJob(this.props);
  };

  render() {
    const { description, company, location } = this.props;

    return (
      <div className="job-card">
        <h3>{company}</h3>
        <p>{location}</p>
        <p>{description}</p>
        <button onClick={this.updateJobSaveStatus}>Remove Job</button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  removeJob: job => dispatch(removeJob(job))
});

export default connect(
  null,
  mapDispatchToProps
)(SavedCard);
