import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { secondsToTime, timeToSeconds } from './../utils/time.util';
import { InputSpinner } from './input-spinner.component';
import { Label } from './label.component';

type TimePickerProps = {
  asPace?: boolean;
  value: number;
  onChange: (time: number) => void;
};

export const TimePicker: React.FC<TimePickerProps> = ({
  asPace,
  value,
  onChange,
}) => {
  const {
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  } = secondsToTime(value);

  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const time = timeToSeconds({ hours, minutes, seconds });

    onChange(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  return (
    <>
      <Label>{asPace ? 'Pace (m:s)' : 'Time (h:m:s)'}</Label>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        {!asPace && (
          <>
            <Grid item xs>
              <InputSpinner
                label="Hours"
                value={hours}
                onChange={setHours}
                downDisabled={hours <= 0}
              />
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="h6">:</Typography>
            </Grid>
          </>
        )}
        <Grid item xs>
          <InputSpinner
            label="Minutes"
            value={minutes}
            max={59}
            onChange={setMinutes}
          />
        </Grid>
        <Grid item alignSelf="center">
          <Typography variant="h6">:</Typography>
        </Grid>
        <Grid item xs>
          <InputSpinner
            label="Seconds"
            value={seconds}
            max={59}
            onChange={setSeconds}
          />
        </Grid>
      </Grid>
    </>
  );
};
