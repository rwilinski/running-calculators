import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import Summary from '../Summary/Summary';
import TimePicker from '../TimePicker/TimePicker';

import { displaySpeed } from '../../helpers/DisplayHelper/DisplayHelper';

class PaceToSpeedConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pace: 360,
      speed: 0
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(pace) {
    this.setState({ pace }, () => {
      this.calculate();
    });
  }

  calculate() {
    this.setState({
      speed: this.state.pace ? (1 / this.state.pace) * 3600 : 0
    });
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    const { pace, speed } = this.state;

    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Pace to Speed Converter
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Enter a pace to find the corresponding speed.
        </Typography>

        <InputLabel>Pace (m:s)</InputLabel>
        <TimePicker asPace value={pace} onChange={this.onChange} />

        <Summary
          data={[
            {
              label: 'Speed',
              text: displaySpeed(speed)
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default PaceToSpeedConverter;
