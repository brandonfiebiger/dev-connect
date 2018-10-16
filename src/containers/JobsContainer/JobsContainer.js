import React from 'react';
import { connect } from 'react-redux';
import './JobsContainer.css';
import { JobCard } from '../../components/JobCard/JobCard';


export const JobsContainer = (props) => {
  
  const displayJobCards = () => {
    return props.jobs.map(job =>  <JobCard description={job.description} company={job.company} location={job.location} status={job.status} jobTitleId={job.job_title_id}/>)
  }

  return (
    <div>
      {displayJobCards()}
    </div>
  )
}

  export const mapStateToProps = state => ({
    jobs: state.jobs
  })

  export default connect(mapStateToProps, null)(JobsContainer);