import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { roundNumber } from '../../helpers/DisplayHelper/DisplayHelper';

const styles = theme => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class SpeedPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    this.setState({ speed: target.value }, () => {
      this.props.onChange(Number(target.value));
    });
  }

  updateInput(type = 'increment') {
    const newVal =
      type === 'increment'
        ? roundNumber((Number(this.state.speed) || 0) + 0.1)
        : roundNumber((Number(this.state.speed) || 0) - 0.1);

    this.setState({ speed: newVal }, () => {
      this.props.onChange(newVal);
    });
  }

  render() {
    const { classes } = this.props;
    const { speed } = this.state;

    return (
      <Grid container spacing={2}>
        <Grid item xs className={classes.gridItem}>
          <IconButton
            tabIndex="-1"
            color="primary"
            onClick={() => this.updateInput()}
            aria-label="Speed increase"
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <TextField
            type="number"
            placeholder="speed"
            name="speed"
            InputProps={{
              inputProps: {
                min: 0,
                step: '.01',
                className: 'hideInputArrows textCenter',
                'aria-label': 'Speed'
              }
            }}
            fullWidth
            value={speed}
            onChange={this.onChange}
            variant="outlined"
          />
          <IconButton
            tabIndex="-1"
            color="primary"
            onClick={() => this.updateInput('decrement')}
            disabled={speed - 0.1 <= 0}
            aria-label="Speed decrease"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SpeedPicker);
