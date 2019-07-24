import React from 'react';
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { displayDistance } from '../../helpers/DisplayHelper/DisplayHelper';

const styles = theme => ({
  chipsContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
});

class DistancePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: props.value
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  distances = [
    {
      name: displayDistance(1000),
      value: 1000
    },
    {
      name: displayDistance(2000),
      value: 2000
    },
    {
      name: displayDistance(5000),
      value: 5000
    },
    {
      name: displayDistance(10000),
      value: 10000
    },
    {
      name: 'Halfmarathon',
      value: 21097
    },
    {
      name: 'Marathon',
      value: 42195
    }
  ];

  onInputChange({ target }) {
    this.setDistance(target.value);
  }

  setDistance(distance) {
    this.setState({ distance }, () => {
      this.props.onChange(parseInt(this.state.distance || 0));
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <TextField
          type="number"
          label="Distance"
          min="0"
          fullWidth
          value={this.state.distance}
          onChange={this.onInputChange}
          margin="normal"
          variant="outlined"
          InputProps={{
            inputProps: { min: 0, name: 'distance' },
            endAdornment: <InputAdornment position="end">meters</InputAdornment>
          }}
        />

        <div className={classes.chipsContainer}>
          {this.distances.map(item => (
            <Chip
              color="primary"
              variant="outlined"
              label={item.name}
              key={item.value}
              onClick={() => this.setDistance(item.value)}
              className={classes.chip}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DistancePicker);
