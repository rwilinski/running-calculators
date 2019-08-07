import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import Summary from '../Summary/Summary';
import TimePicker from '../TimePicker/TimePicker';
import { displayDistance } from '../../helpers/DisplayHelper/DisplayHelper';

class DistanceCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pace: 360,
      time: 1800,
      distance: 0
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
      distance: this.state.pace ? (this.state.time / this.state.pace) * 1000 : 0
    });
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Distance calculator
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Provide your pace and planned time to calculate your target distance.
        </Typography>

        <InputLabel>Pace (m:s)</InputLabel>
        <TimePicker
          asPace
          value={this.state.pace}
          onChange={value => this.onUpdate('pace', value)}
        />

        <InputLabel>Time (h:m:s)</InputLabel>
        <TimePicker
          value={this.state.time}
          onChange={value => this.onUpdate('time', value)}
        />

        <Summary
          data={[
            {
              label: 'Distance',
              text: displayDistance(this.state.distance)
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default DistanceCalculator;
