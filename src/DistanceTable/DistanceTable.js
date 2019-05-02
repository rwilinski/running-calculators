import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  calculatePace,
  displayTime,
  displayDistance
} from '../helpers/TimeHelper';

const styles = theme => ({
  muted: {
    color: theme.palette.grey[500]
  }
});

class DistanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: []
    };
  }

  render() {
    const { classes } = this.props;
    const pace = calculatePace(this.props.time, this.props.distance);
    const km = Math.floor(this.props.distance / 1000);

    let rows = Array(km)
      .fill(null)
      .map((x, i) => (i + 1) * 1000);

    if (this.props.distance > km * 1000) {
      rows = [...rows, this.props.distance];
    }

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Split</TableCell>
            <TableCell>Elapsed time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((km, i) => (
            <TableRow key={km} hover selected={(i + 1) % 5 === 0}>
              <TableCell>
                {displayDistance(km)}
                {i === rows.length - 1 && (
                  <span className={classes.muted}> (Finish)</span>
                )}
              </TableCell>
              <TableCell>{displayTime(pace * (km / 1000))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(DistanceTable);
