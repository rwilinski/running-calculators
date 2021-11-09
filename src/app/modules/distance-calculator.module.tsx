import { InputLabel, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { displayDistance } from '../utils/display.util';
import { Summary } from './../shared/summary.component';
import { SummaryItem } from './../shared/summary-item.component';
import { TimePicker } from './../shared/time-picker.component';

export const DistanceCalculator = () => {
  const [pace, setPace] = useState(360);
  const [time, setTime] = useState(1800);

  const [distance, setDistance] = useState<number>();

  useEffect(() => {
    setDistance(pace ? (time / pace) * 1000 : 0);
  }, [pace, time]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Distance calculator
      </Typography>

      <Typography variant="body1" paragraph={true}>
        Provide your pace and planned time to calculate your target distance.
      </Typography>

      <InputLabel sx={{ mb: 2 }}>Pace (m:s)</InputLabel>

      <TimePicker value={pace} onChange={setPace} asPace />

      <InputLabel sx={{ mb: 2, mt: 2 }}>Time (h:m:s)</InputLabel>

      <TimePicker value={time} onChange={setTime} />

      <Summary>
        <SummaryItem label="Distance">{displayDistance(distance)}</SummaryItem>
      </Summary>
    </>
  );
};
