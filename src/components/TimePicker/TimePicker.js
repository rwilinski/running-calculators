import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  secondsToTime,
  timeToSeconds
} from './../../helpers/TimeHelper/TimeHelper';

const styles = theme => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

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

  updateInput(inputName, type = 'increment') {
    const newVal =
      type === 'increment'
        ? parseInt(this.state[inputName] || 0) + 1
        : parseInt(this.state[inputName] || 0) - 1;

    this.setState(
      {
        [inputName]: newVal
      },
      () => {
        const seconds = timeToSeconds(this.state);

        this.props.onChange(seconds);
      }
    );
  }

  render() {
    const { asPace, classes } = this.props;

    return (
      <Grid container spacing={2}>
        {!asPace && (
          <>
            <Grid item xs className={classes.gridItem}>
              <IconButton
                tabIndex="-1"
                color="primary"
                onClick={() => this.updateInput('hours')}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
              <TextField
                type="number"
                placeholder="hours"
                name="hours"
                InputProps={{
                  inputProps: {
                    min: 0,
                    className: 'hideInputArrows textCenter',
                    'aria-label': 'Hours'
                  }
                }}
                fullWidth
                value={this.state.hours}
                onChange={this.onChange}
                variant="outlined"
              />
              <IconButton
                tabIndex="-1"
                color="primary"
                onClick={() => this.updateInput('hours', 'decrement')}
                disabled={this.state.hours <= 0}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography variant="h6">:</Typography>
            </Grid>
          </>
        )}
        <Grid item xs className={classes.gridItem}>
          <IconButton
            tabIndex="-1"
            color="primary"
            onClick={() => this.updateInput('minutes')}
            disabled={this.state.minutes >= 59}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <TextField
            type="number"
            placeholder="minutes"
            name="minutes"
            InputProps={{
              inputProps: {
                min: 0,
                max: 59,
                className: 'hideInputArrows textCenter',
                'aria-label': 'Minutes'
              }
            }}
            fullWidth
            value={this.state.minutes}
            onChange={this.onChange}
            variant="outlined"
          />
          <IconButton
            tabIndex="-1"
            color="primary"
            onClick={() => this.updateInput('minutes', 'decrement')}
            disabled={this.state.minutes <= 0}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography variant="h6">:</Typography>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <IconButton
            tabIndex="-1"
            color="primary"
            onClick={() => this.updateInput('seconds')}
            disabled={this.state.seconds >= 59}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <TextField
            type="number"
            placeholder="seconds"
            name="seconds"
            InputProps={{
              inputProps: {
                min: 0,
                max: 59,
                className: 'hideInputArrows textCenter',
                'aria-label': 'Seconds'
              }
            }}
            fullWidth
            value={this.state.seconds}
            onChange={this.onChange}
            variant="outlined"
          />
          <IconButton
            tabIndex="-1"
            color="primary"
            onClick={() => this.updateInput('seconds', 'decrement')}
            disabled={this.state.seconds <= 0}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TimePicker);
