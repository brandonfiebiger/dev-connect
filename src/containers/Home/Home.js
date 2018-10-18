import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="homepage-container">
        <header className="homepage-header">
          <h1 className="dev-connect-header">DevConnect</h1>
        </header>
        <div className="button-container">
          <button className="homepage-button">
            <NavLink className="job-seeker-link" to="/job-seeker">
              For Job Seekers
            </NavLink>
          </button>
          <button className="homepage-button">
            <NavLink className="employer-link" to="/employer">
              For Employers
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
