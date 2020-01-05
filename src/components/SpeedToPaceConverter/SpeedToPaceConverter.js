import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import SpeedPicker from '../SpeedPicker/SpeedPicker';
import Summary from '../Summary/Summary';

import { displayTime } from '../../helpers/DisplayHelper/DisplayHelper';

class SpeedToPaceConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pace: 0,
      speed: 10
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(speed) {
    this.setState({ speed }, () => {
      this.calculate();
    });
  }

  calculate() {
    this.setState({
      pace: this.state.speed ? (1 / this.state.speed) * 3600 : 0
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
          Speed to Pace Converter
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Enter a speed to find the corresponding pace.
        </Typography>

        <InputLabel>Speed (km/h)</InputLabel>
        <SpeedPicker value={speed} onChange={this.onChange} />

        <Summary
          data={[
            {
              label: 'Pace',
              text: `${displayTime(pace, true)} min/km`
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default SpeedToPaceConverter;
