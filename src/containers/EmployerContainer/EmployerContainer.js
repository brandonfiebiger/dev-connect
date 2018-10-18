import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewJobType, addNewJob } from '../../actions';
import './EmployerContainer.css';
import { postNewJobType, postNewJobWithNewJobType, postNewJob } from '../../utils/apiCalls';

export class EmployerContainer extends Component {
  constructor() {
    super();
    this.state = {
      jobType: {},
      jobTitle: '',
      description: '',
      company: '',
      location: '',
      salary: 0,
    };
  }

  addJobTitleOptions = () => {
    const { jobTypes } = this.props;
    return jobTypes.map(type => <option>{type.job_title}</option>);
  };

  handleJobTitleSelect = e => {
    const selectValue = e.target.value;

    if (e.target.value !== 'Add New Job Title +') {
      const foundType = this.props.jobTypes.find(
        type => type.job_title === selectValue
      );
      this.setState({ jobType: foundType });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postJob = async (state, event) => {
    event.preventDefault();
    const {
      jobType,
      jobTitle,
      company,
      location,
      salary,
      description
    } = this.state;
    if (!Object.keys(jobType).length && jobTitle) {
      const jobTypeId = await postNewJobType(this.state)
      
      this.props.addJobType({
        job_title: jobTitle,
        average_salary: salary,
        id: jobTypeId
      });

      const jobId = await postNewJobWithNewJobType(this.state, jobTypeId);

      this.props.addJob({
        id: jobId,
        company,
        description,
        location,
        status: 'none',
        job_title_id: jobType.id
      });
    } else {
      const newId = await postNewJob(this.state)

      this.props.addJob({
        id: newId,
        company,
        description,
        location,
        status: 'none',
        job_title_id: jobType.id
      });
    }
  };

  render() {
    const titleInput = document.querySelector('.employer-input');

    return (
      <div>
        <h1>Employers</h1>
        <form
          className="employer-form"
          onSubmit={e => this.postJob(this.state, e)}
        >
          <div>
            <select
              className="job-title-select"
              name="jobTitle"
              onChange={
                (e => this.handleChange(e), e => this.handleJobTitleSelect(e))
              }
            >
              <option>Please Select A Job Type</option>
              {this.addJobTitleOptions()}
              <option>Add New Job Title +</option>
            </select>
          </div>
            <input
              className="employer-input"
              name="jobTitle"
              placeholder="Job Title"
              onChange={this.handleChange}
            />
          <input
            className="employer-input"
            name="company"
            placeholder="Company Name"
            onChange={this.handleChange}
          />
          <input
            className="employer-input"
            name="location"
            placeholder="Location"
            onChange={this.handleChange}
          />
            <input
              type="number"
              className="employer-input"
              name="salary"
              placeholder="Salary"
              onChange={this.handleChange}
            />
          <textarea 
            className="employer-input description" 
            name="description"
            placeholder="Job Description"
            onChange={this.handleChange}
            ></textarea>
          <button className="add-job-button">Add Job</button>
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
