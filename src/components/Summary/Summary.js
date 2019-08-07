import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  summaryPaper: {
    padding: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    textAlign: 'center'
  }
});

class Summary extends React.Component {
  render() {
    const { classes, data } = this.props;
    const cols = 12 / data.length;

    return (
      <Grid container spacing={2}>
        {data.map(row => (
          <Grid key={row.label} item xs={12} sm={cols}>
            <Paper elevation={0} className={classes.summaryPaper}>
              <Typography variant="h6">{row.label}</Typography>
              <Typography variant="h4">{row.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Summary);
