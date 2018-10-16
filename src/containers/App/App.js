import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import JobsContainer from '../JobsContainer/JobsContainer';
import { EmployerContainer } from '../EmployerContainer/EmployerContainer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/job-seeker" component={JobsContainer} />
        <Route exact path="/employer" component={EmployerContainer} />
      </div>
    );
  }
}
