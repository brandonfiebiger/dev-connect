import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewJobType, addNewJob } from '../../actions';
import './EmployerContainer.css';

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

  postJob = (state, event) => {
    event.preventDefault();
    let placholderId;
    const {
      jobType,
      jobTitle,
      company,
      location,
      salary,
      description
    } = this.state;
    if (!Object.keys(jobType).length && jobTitle) {
      fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/job-types', {
        method: 'POST',
        body: JSON.stringify({
          job_title: jobTitle,
          average_salary: salary
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(id => {
          jobType.id = id.id;
          this.props.addJobType({
            job_title: jobTitle,
            average_salary: salary,
            id: id.id
          });
        })
        .catch(error => console.log(error.error));

      fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs', {
        method: 'POST',
        body: JSON.stringify({
          description,
          company,
          location,
          status: 'none',
          job_title_id: jobType.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(id => {
          this.props.addJob({
            id: id.id,
            company,
            description,
            location,
            status: 'none',
            job_title_id: jobType.id
          });
        })
        .catch(error => console.log(error));
    } else {
      fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/jobs', {
        method: 'POST',
        body: JSON.stringify({
          description,
          company,
          location,
          status: 'none',
          job_title_id: jobType.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(id => {
          this.props.addJob({
            id: id.id,
            company,
            description,
            location,
            status: 'none',
            job_title_id: jobType.id
          });
        })
        .catch(error => console.log(error));
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
          <input
            className="employer-input description"
            name="description"
            placeholder="Job Description"
            onChange={this.handleChange}
          />
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
