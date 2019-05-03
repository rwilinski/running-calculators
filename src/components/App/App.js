import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DistanceCalculator from './../DistanceCalculator/DistanceCalculator';
import PaceCalculator from './../PaceCalculator/PaceCalculator';
import TimeCalculator from './../TimeCalculator/TimeCalculator';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange
  },
  typography: {
    useNextVariants: true
  }
});

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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <div className={classes.container}>
          <Paper className={classes.contentPaper}>
            <Typography variant="h4" gutterBottom>
              Pace calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              This calculator helps you to determine what is the necessary speed
              and pace of your run to achieve the planned result at a given
              distance. Below you will find a table with calculated splits for
              your goal finishing time.
            </Typography>
            <PaceCalculator />
          </Paper>

          <Paper className={classes.contentPaper}>
            <Typography variant="h4" gutterBottom>
              Time calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Provide your <u>pace</u> and planned <u>distance</u> to calculate
              your finish time.
            </Typography>

            <TimeCalculator />
          </Paper>
          <Paper className={classes.contentPaper}>
            <Typography variant="h4" gutterBottom>
              Distance calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Provide your <u>pace</u> and planned <u>time</u> to calculate your
              target distance.
            </Typography>

            <DistanceCalculator />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
