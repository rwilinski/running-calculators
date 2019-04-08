import React from 'react';
import { secondsToTime, timeToSeconds } from './../helpers/TimeHelper';

class TimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = secondsToTime(props.value);

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    this.setState(
      {
        [target.name]: target.value
      },
      () => {
        const seconds = timeToSeconds(this.state);

        this.props.onChange(seconds);
      }
    );
  }

  render() {
    return (
      <div>
        {!this.props.noHours && (
          <input
            type="number"
            name="hours"
            min="0"
            value={this.state.hours}
            onChange={this.onChange}
          />
        )}
        <input
          type="number"
          name="minutes"
          min="0"
          max="59"
          value={this.state.minutes}
          onChange={this.onChange}
        />
        <input
          type="number"
          name="seconds"
          min="0"
          max="59"
          value={this.state.seconds}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TimePicker;
