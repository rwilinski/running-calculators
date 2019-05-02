import React from 'react';
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  chipsContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3
  },
  chip: {
    margin: theme.spacing.unit / 2
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
      name: '1km',
      value: 1000
    },
    {
      name: '2km',
      value: 2000
    },
    {
      name: '5km',
      value: 5000
    },
    {
      name: '10km',
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
            inputProps: { min: 0 },
            endAdornment: <InputAdornment position="end">meters</InputAdornment>
          }}
        />

        <div className={classes.chipsContainer}>
          {this.distances.map(item => {
            return (
              <Chip
                color="primary"
                label={item.name}
                key={item.value}
                onClick={() => this.setDistance(item.value)}
                className={classes.chip}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DistancePicker);
