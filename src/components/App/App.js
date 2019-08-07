import React, { Component } from 'react';

import 'typeface-roboto';

import { withStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
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
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
