import React, { Component } from 'react';
import DistancePicker from '../DistancePicker/DistancePicker';
import TimePicker from '../TimePicker/TimePicker';
import { calculatePace, calculateSpeed } from '../helpers/TimeHelper';

class PaceCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: 1000,
      time: 360,
      speed: 0,
      pace: 0
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(key, data) {
    this.setState(
      {
        [key]: data
      },
      () => {
        this.calculate();
      }
    );
  }

  calculate() {
    this.setState({
      speed: calculateSpeed(this.state.time, this.state.distance),
      pace: calculatePace(this.state.time, this.state.distance)
    });
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    return (
      <div>
        <TimePicker
          value={this.state.time}
          onChange={value => this.onUpdate('time', value)}
        />
        <DistancePicker
          value={this.state.distance}
          onChange={value => this.onUpdate('distance', value)}
        />
        speed: {this.state.speed} km/h
        <br />
        pace: {this.state.pace} min/km
      </div>
    );
  }
}

export default PaceCalculator;
