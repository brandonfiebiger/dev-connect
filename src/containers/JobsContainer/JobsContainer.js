import React from 'react';
import { connect } from 'react-redux';
import './JobsContainer.css';
import { JobCard } from '../../components/JobCard/JobCard';


export const JobsContainer = (props) => {
  
  const displayJobCards = () => {
    return props.jobs.map(job =>  {
    const jobType = props.jobTypes.find(type => type.id === job.job_title_id);
    // console.log(jobType)
    return <JobCard description={job.description} company={job.company} location={job.location} status={job.status} jobType={jobType} jobTypes={props.jobTypes}/>
    })
  }

  return (
    <ul>
      {displayJobCards()}
    </ul>
  )
}

  export const mapStateToProps = state => ({
    jobs: state.jobs,
    jobTypes: state.jobTypes
  })

  export default connect(mapStateToProps, null)(JobsContainer);