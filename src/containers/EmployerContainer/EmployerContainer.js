import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewJobType, addNewJob } from '../../actions';
import './EmployerContainer.css';

export class EmployerContainer extends Component {
  constructor() {
    super();
    this.state = {
      jobType: {}
    };
  }

  addJobTitleOptions = () => {
    const { jobs, jobTypes } = this.props;
    return jobTypes.map(type => <option>{type.job_title}</option>);
  };

  render() {
    return (
      <div>
        <h1>Employers</h1>
        <form>
          <select>
            {this.addJobTitleOptions()}
            <option>Add New Job Title +</option>
          </select>
          <input name="title" />
          <input name="salary" />
          <input name="company" />
          <input name="location" />
          <input name="description" />
          <button>Add Job</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.jobs,
  jobTypes: state.jobTypes
});

export const mapDispatchToProps = dispatch => ({
  addJobType: jobType => dispatch(addNewJobType(jobType)),
  addJob: job => dispatch(addNewJob(job))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployerContainer);
