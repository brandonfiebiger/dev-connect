import React from 'react';
import './JobCard.css';

export const JobCard = props => {
  const { description, company, location, status, jobType } = props;
  const allLocations = location.split(' ');
  const newLocations = allLocations.map(
    location =>
      location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()
  );
  const newCompany =
    company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();

  console.log(newLocations);
  return (
    <div className="job-card">
      <h3>{newCompany}</h3>
      <p>{newLocations.join(' ')}</p>
      <p>{description}</p>
    </div>
  );
};
