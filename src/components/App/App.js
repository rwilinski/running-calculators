import React, { Component } from 'react';

import 'typeface-roboto';

import { withStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DistanceCalculator from './../DistanceCalculator/DistanceCalculator';
import PaceCalculator from './../PaceCalculator/PaceCalculator';
import TimeCalculator from './../TimeCalculator/TimeCalculator';
import SpeedToPaceConverter from '../SpeedToPaceConverter/SpeedToPaceConverter';
import PaceToSpeedConverter from '../PaceToSpeedConverter/PaceToSpeedConverter';

import logo from './logo-35.png';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    text: {
      primary: grey[800]
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  '@global': {
    '.hideInputArrows': {
      '&::-webkit-clear-button, &::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        display: 'none'
      }
    },
    '.textCenter': {
      textAlign: 'center'
    }
  },
  contentPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(3, 0)
  },
  logo: {
    marginRight: theme.spacing(1)
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar position="static">
          <Toolbar>
            <img src={logo} alt="" className={classes.logo} />
            <Typography variant="h6" color="inherit">
              Running Calculators
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Paper className={classes.contentPaper}>
            <PaceCalculator />
          </Paper>

          <Paper className={classes.contentPaper}>
            <TimeCalculator />
          </Paper>

          <Paper className={classes.contentPaper}>
            <DistanceCalculator />
          </Paper>

          <Paper className={classes.contentPaper}>
            <SpeedToPaceConverter />
          </Paper>

          <Paper className={classes.contentPaper}>
            <PaceToSpeedConverter />
          </Paper>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
