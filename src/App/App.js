import React, { Component } from 'react';
import './App.scss';
import DistanceCalculator from './../DistanceCalculator/DistanceCalculator';
import PaceCalculator from './../PaceCalculator/PaceCalculator';
import TimeCalculator from './../TimeCalculator/TimeCalculator';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pace calculator:</h1>
        <PaceCalculator />
        <hr />

        <h1>Time calculator:</h1>
        <TimeCalculator />
        <hr />

        <h1>Distance calculator:</h1>
        <DistanceCalculator />
        <hr />
      </div>
    );
  }
}

export default App;
