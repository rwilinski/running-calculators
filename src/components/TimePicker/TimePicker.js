import React from 'react';
import { secondsToTime, timeToSeconds } from './../../helpers/TimeHelper';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
        ? parseInt(this.state[inputName]) + 1
        : parseInt(this.state[inputName]) - 1;

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
    const { classes } = this.props;

    return (
      <Grid container spacing={16}>
        {!this.props.noHours && (
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
              label="Hours"
              name="hours"
              InputProps={{
                inputProps: { min: 0 },
                endAdornment: <InputAdornment position="end">h</InputAdornment>
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
            label="Minutes"
            name="minutes"
            InputProps={{
              inputProps: { min: 0, max: 59 },
              endAdornment: <InputAdornment position="end">m</InputAdornment>
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
            label="Seconds"
            name="seconds"
            InputProps={{
              inputProps: { min: 0, max: 59 },
              endAdornment: <InputAdornment position="end">s</InputAdornment>
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
