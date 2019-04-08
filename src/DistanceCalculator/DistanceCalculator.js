import React, { Component } from 'react';
import TimePicker from '../TimePicker/TimePicker';

class DistanceCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pace: 360,
      time: 1800,
      distance: 0
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
      distance: (this.state.time / this.state.pace) * 1000
    });
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    return (
      <div>
        Pace:
        <TimePicker
          noHours
          value={this.state.pace}
          onChange={value => this.onUpdate('pace', value)}
        />
        Time:
        <TimePicker
          value={this.state.time}
          onChange={value => this.onUpdate('time', value)}
        />
        distance: {this.state.distance} m
      </div>
    );
  }
}

export default DistanceCalculator;
