import React from 'react';
import { connect } from 'react-redux';
import './JobsContainer.css';


export const JobsContainer = (props) => {
  console.log(props)

  return (
    <div>
      Container
    </div>
  )
}

  export const mapStateToProps = state => ({
    jobs: state.jobs
  })

  export default connect(mapStateToProps, null)(JobsContainer);