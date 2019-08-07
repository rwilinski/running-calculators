import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="h4" gutterBottom>
          Time calculator
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Provide your pace and planned distance to calculate your finish time.
        </Typography>

        <InputLabel>Pace (m:s)</InputLabel>
        <TimePicker
          asPace
          value={this.state.pace}
          onChange={value => this.onUpdate('pace', value)}
        />

        <InputLabel>Distance (meters)</InputLabel>
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
