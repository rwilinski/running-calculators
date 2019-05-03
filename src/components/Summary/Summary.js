import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  summary: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  left: {
    opacity: 0.5,
    paddingRight: theme.spacing.unit
  },
  right: {
    paddingRight: theme.spacing.unit
  }
});

class Summary extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper elevation={0} className={classes.summary}>
        {this.props.data.map(row => {
          return (
            <Grid container key={row.label}>
              <Grid item xs align="right">
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.left}
                >
                  {row.label}:
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.right}
                >
                  {row.text}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Paper>
    );
  }
}

export default withStyles(styles)(Summary);
