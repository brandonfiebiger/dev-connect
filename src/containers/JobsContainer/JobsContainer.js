import React from 'react';
import { connect } from 'react-redux';
import { JobCard } from '../../components/JobCard/JobCard';
import './JobsContainer.css';


export class JobsContainer extends React.Component {
  displayJobCards = () => {
    if(!this.props.jobTypes.length) {
      return
    }
    return this.props.jobs.map(job =>  {
      console.log(this.props.jobTypes)
    const jobType = this.props.jobTypes.find(type => {
      return type.id === job.job_title_id
    });
    return <JobCard description={job.description} company={job.company} location={job.location} status={job.status} jobType={jobType} />
    })
  }

  render() {
    const jobCards = this.displayJobCards()
    return (
      <ul>
        {jobCards}
      </ul>
    )

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
