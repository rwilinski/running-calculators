import { InputLabel, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { displaySpeed } from '../utils/display.util';
import { Summary } from './../shared/summary.component';
import { TimePicker } from './../shared/time-picker.component';

export const PaceToSpeedConverter = () => {
  const [pace, setPace] = useState(360);

  const [speed, setSpeed] = useState<number>();

  useEffect(() => {
    setSpeed(pace ? (1 / pace) * 3600 : 0);
  }, [pace]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Pace to Speed Converter
      </Typography>

      <Typography variant="body1" paragraph={true}>
        Enter a pace to find the corresponding speed.
      </Typography>

      <InputLabel sx={{ mb: 2 }}>Pace (m:s)</InputLabel>

      <TimePicker asPace value={pace} onChange={setPace} />

      <Summary
        data={[
          {
            label: 'Speed',
            text: displaySpeed(speed || 0),
          },
        ]}
      />
    </>
  );
};
