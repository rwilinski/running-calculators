import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DistanceCalculator from './../DistanceCalculator/DistanceCalculator';
import PaceCalculator from './../PaceCalculator/PaceCalculator';
import TimeCalculator from './../TimeCalculator/TimeCalculator';

const styles = theme => ({
  container: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  contentPaper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <div className={classes.container}>
          <Paper className={classes.contentPaper}>
            <Typography variant="h4" gutterBottom>
              Pace calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Provide time and distance to calculate required pace to finish
              race in expected time. Below is a table with expected times on
              individual distances.
            </Typography>

            <PaceCalculator />
          </Paper>

          <Paper className={classes.contentPaper}>
            <Typography variant="h4" gutterBottom>
              Time calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Provide pace and distance to calculate time of finish.
            </Typography>

            <TimeCalculator />
          </Paper>
          <Paper className={classes.contentPaper}>
            <Typography variant="h4" gutterBottom>
              Distance calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Provide pace and time to calculate distance.
            </Typography>

            <DistanceCalculator />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
