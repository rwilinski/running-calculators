import { InputLabel, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { calculateSpeed, calculatePace } from '../utils/time.util';
import { displaySpeed, displayPace } from '../utils/display.util';
import { DistancePicker } from './../shared/distance-picker.component';
import { Summary } from './../shared/summary.component';
import { SummaryItem } from './../shared/summary-item.component';
import { TimePicker } from './../shared/time-picker.component';

export const PaceCalculator = () => {
  const [time, setTime] = useState(360);
  const [distance, setDistance] = useState(1000);

  const [speed, setSpeed] = useState<number>();
  const [pace, setPace] = useState<number>();

  useEffect(() => {
    setSpeed(calculateSpeed(time, distance));
    setPace(calculatePace(time, distance));
  }, [time, distance]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Pace calculator
      </Typography>

      <Typography variant="body1" paragraph={true}>
        This calculator helps you to determine what is the necessary speed and
        pace of your run to achieve the planned result at a given distance.
        Below you will find a table with calculated splits for your goal
        finishing time.
      </Typography>

      <InputLabel sx={{ mb: 2 }}>Expected time (h:m:s)</InputLabel>

      <TimePicker value={time} onChange={setTime} />

      <InputLabel sx={{ mb: 2, mt: 2 }}>Distance (meters)</InputLabel>

      <DistancePicker value={distance} onChange={setDistance} />

      <Summary>
        <SummaryItem label="Speed">{displaySpeed(speed)}</SummaryItem>
        <SummaryItem label="Pace">{displayPace(pace)}</SummaryItem>
      </Summary>

      {/* 
      <ExpansionPanel className={classes.expansionPanel}>
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
      */}
    </>
  );
};
