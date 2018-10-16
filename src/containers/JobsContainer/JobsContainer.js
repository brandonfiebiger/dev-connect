import React from 'react';
import { connect } from 'react-redux';
import './JobsContainer.css';
import { JobCard } from '../../components/JobCard/JobCard';


export const JobsContainer = (props) => {
  
  const displayJobCards = () => {
    return props.jobs.map(job =>  <JobCard />)
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