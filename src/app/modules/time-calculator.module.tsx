import { InputLabel, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { displayTime } from '../utils/display.util';
import { DistancePicker } from './../shared/distance-picker.component';
import { Summary } from './../shared/summary.component';
import { SummaryItem } from './../shared/summary-item.component';
import { TimePicker } from './../shared/time-picker.component';

export const TimeCalculator = () => {
  const [time, setTime] = useState(360);
  const [distance, setDistance] = useState(1000);

  const [timeOutput, setTimeOutput] = useState<number>();

  useEffect(() => {
    setTimeOutput(time * (distance / 1000));
  }, [time, distance]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Time calculator
      </Typography>

      <Typography variant="body1" paragraph={true}>
        Provide your pace and planned distance to calculate your finish time.
      </Typography>

      <InputLabel sx={{ mb: 2 }}>Pace (m:s)</InputLabel>

      <TimePicker value={time} onChange={setTime} asPace />

      <InputLabel sx={{ mb: 2, mt: 2 }}>Distance (meters)</InputLabel>

      <DistancePicker distance={distance} onChange={setDistance} />

      <Summary>
        <SummaryItem label="Time">{displayTime(timeOutput)}</SummaryItem>
      </Summary>
    </>
  );
};
