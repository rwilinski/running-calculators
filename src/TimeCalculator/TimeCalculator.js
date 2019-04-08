import React, { Component } from 'react';
import DistancePicker from '../DistancePicker/DistancePicker';
import TimePicker from '../TimePicker/TimePicker';
import { secondsToTime, displayTime } from '../helpers/TimeHelper';

class TimeCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pace: 360,
      distance: 1000,
      time: 0
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
      time: secondsToTime(this.state.pace * (this.state.distance / 1000))
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
        Distance:
        <DistancePicker
          value={this.state.distance}
          onChange={value => this.onUpdate('distance', value)}
        />
        time: {displayTime(this.state.time)}
      </div>
    );
  }
}

export default TimeCalculator;
