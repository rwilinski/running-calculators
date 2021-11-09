import { InputLabel, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { displayTime } from '../utils/display.util';
import { DistancePicker } from './../shared/distance-picker.component';
import { Summary } from './../shared/summary.component';
import { TimePicker } from './../shared/time-picker.component';

export const TimeCalculator = () => {
  const [seconds, setSeconds] = useState(360);
  const [distance, setDistance] = useState(1000);

  const [time, setTime] = useState<number>();

  useEffect(() => {
    setTime(seconds * (distance / 1000));
  }, [seconds, distance]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Time calculator
      </Typography>

      <Typography variant="body1" paragraph={true}>
        Provide your pace and planned distance to calculate your finish time.
      </Typography>

      <InputLabel sx={{ mb: 2 }}>Pace (m:s)</InputLabel>

      <TimePicker value={seconds} onChange={setSeconds} asPace />

      <InputLabel sx={{ mb: 2, mt: 2 }}>Distance (meters)</InputLabel>

      <DistancePicker distance={distance} onChange={setDistance} />

      <Summary
        data={[
          {
            label: 'Time',
            text: time ? displayTime(time) : '00:00:00',
          },
        ]}
      />
    </>
  );
};
