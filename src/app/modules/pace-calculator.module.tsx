import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputLabel,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';

import { calculateSpeed, calculatePace } from '../utils/calculate.util';
import { displaySpeed, displayPace } from '../utils/display.util';
import { DistancePicker } from './../shared/distance-picker.component';
import { Summary } from './../shared/summary.component';
import { SummaryItem } from './../shared/summary-item.component';
import { TimePicker } from './../shared/time-picker.component';
import { DistanceTable } from './../shared/distance-table.component';

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

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Your target split times:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistanceTable time={time} distance={distance} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};
