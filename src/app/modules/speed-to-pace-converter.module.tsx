import { InputLabel, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SpeedPicker } from '../shared/speed-picker.component';

import { displayPace } from '../utils/display.util';
import { Summary } from './../shared/summary.component';

export const SpeedToPaceConverter = () => {
  const [speed, setSpeed] = useState(10);

  const [pace, setPace] = useState<number>();

  useEffect(() => {
    setPace(speed ? (1 / speed) * 3600 : 0);
  }, [speed]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Speed to Pace Converter
      </Typography>

      <Typography variant="body1" paragraph={true}>
        Enter a speed to find the corresponding pace.
      </Typography>

      <InputLabel sx={{ mb: 2 }}>Speed (km/h)</InputLabel>

      <SpeedPicker value={speed} onChange={setSpeed} />

      <Summary
        data={[
          {
            label: 'Pace',
            text: displayPace(pace || 0),
          },
        ]}
      />
    </>
  );
};
