import React from 'react';
import './JobCard.css';

export const JobCard = (props) => {


  // const jobTypeTitle = () => {
  //   const jobType = props.jobTypes.filter(type => type.id === props.jobTitleId);
  //   console.log(jobType[0])
  //   jobTitle = jobType.job_title
  // }
  // jobTypeTitle();

  return (
    <li>
      {props.description}
    </li>
  )
}