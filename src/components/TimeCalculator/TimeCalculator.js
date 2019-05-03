import React, { Component } from 'react';
import DistancePicker from './../DistancePicker/DistancePicker';
import TimePicker from './../TimePicker/TimePicker';
import Summary from './../Summary/Summary';
import { displayTime } from '../../helpers/DisplayHelper/DisplayHelper';
import { secondsToTime } from '../../helpers/TimeHelper/TimeHelper';

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
      <React.Fragment>
        <TimePicker
          noHours
          value={this.state.pace}
          onChange={value => this.onUpdate('pace', value)}
        />
        <DistancePicker
          value={this.state.distance}
          onChange={value => this.onUpdate('distance', value)}
        />
        <Summary
          data={[
            {
              label: 'Time',
              text: displayTime(this.state.time)
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default TimeCalculator;
