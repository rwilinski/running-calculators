import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import DistancePicker from '../DistancePicker/DistancePicker';
import DistanceTable from '../DistanceTable/DistanceTable';
import Summary from '../Summary/Summary';
import TimePicker from '../TimePicker/TimePicker';
import {
  calculatePace,
  calculateSpeed,
  displayTime
} from '../../helpers/TimeHelper';

const styles = theme => ({
  panel: {
    marginTop: theme.spacing.unit * 3
  }
});

class PaceCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: 1000,
      time: 360,
      speed: 0,
      pace: 0
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(key, data) {
    this.setState(
      {
        [key]: data
      },
      () => {
        this.calculate();
      }
    );
  }

  calculate() {
    this.setState({
      speed: calculateSpeed(this.state.time, this.state.distance),
      pace: calculatePace(this.state.time, this.state.distance)
    });
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <TimePicker
          value={this.state.time}
          onChange={value => this.onUpdate('time', value)}
        />
        <DistancePicker
          value={this.state.distance}
          onChange={value => this.onUpdate('distance', value)}
        />
        <Summary
          data={[
            {
              label: 'Speed',
              text: `${this.state.speed} km/h`
            },
            {
              label: 'Pace',
              text: `${displayTime(this.state.pace, true)} min/km`
            }
          ]}
        />

        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Your target split times:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DistanceTable
              time={this.state.time}
              distance={this.state.distance}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaceCalculator);
