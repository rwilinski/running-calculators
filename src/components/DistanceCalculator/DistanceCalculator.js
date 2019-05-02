import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import TimePicker from '../TimePicker/TimePicker';
import { displayDistance } from '../../helpers/DisplayHelper';

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
      <React.Fragment>
        <TimePicker
          noHours
          value={this.state.pace}
          onChange={value => this.onUpdate('pace', value)}
        />
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
