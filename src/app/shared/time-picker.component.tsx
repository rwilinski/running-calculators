import { Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { secondsToTime, timeToSeconds } from './../utils/time.util';

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

  const [hours, setHours] = useState(String(initialHours));
  const [minutes, setMinutes] = useState(String(initialMinutes));
  const [seconds, setSeconds] = useState(String(initialSeconds));

  useEffect(() => {
    const time = timeToSeconds({
      hours: Number(hours),
      minutes: Number(minutes),
      seconds: Number(seconds),
    });

    onChange(time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  return (
    <Grid container spacing={2}>
      {!asPace && (
        <>
          <Grid item xs>
            <Button
              variant="outlined"
              sx={{ mb: 1 }}
              onClick={() => {
                setHours(String(Number(hours) + 1));
              }}
              fullWidth
            >
              <KeyboardArrowUpIcon />
            </Button>

            <TextField
              type="number"
              label="Hours"
              variant="outlined"
              sx={{ mb: 1 }}
              value={hours}
              onChange={({ target: { value } }) => {
                setHours(value);
              }}
              inputProps={{ min: 0, className: 'hideInputArrows textCenter' }}
              fullWidth
            />

            <Button
              variant="outlined"
              onClick={() => {
                setHours(String(Number(hours) - 1 > 0 ? Number(hours) - 1 : 0));
              }}
              fullWidth
              disabled={hours === '0'}
            >
              <KeyboardArrowDownIcon />
            </Button>
          </Grid>
          <Grid item alignSelf="center">
            <Typography variant="h6">:</Typography>
          </Grid>
        </>
      )}
      <Grid item xs>
        <Button
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={() => {
            setMinutes(
              String(Number(minutes) + 1 > 59 ? 0 : Number(minutes) + 1)
            );
          }}
          fullWidth
        >
          <KeyboardArrowUpIcon />
        </Button>

        <TextField
          type="number"
          label="Minutes"
          variant="outlined"
          sx={{ mb: 1 }}
          value={minutes}
          onChange={({ target: { value } }) => {
            setMinutes(value);
          }}
          inputProps={{
            min: 0,
            max: 59,
            className: 'hideInputArrows textCenter',
          }}
          fullWidth
        />

        <Button
          variant="outlined"
          onClick={() => {
            setMinutes(
              String(Number(minutes) - 1 < 0 ? 59 : Number(minutes) - 1)
            );
          }}
          fullWidth
        >
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
      <Grid item alignSelf="center">
        <Typography variant="h6">:</Typography>
      </Grid>
      <Grid item xs>
        <Button
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={() => {
            setSeconds(
              String(Number(seconds) + 1 > 59 ? 0 : Number(seconds) + 1)
            );
          }}
          fullWidth
        >
          <KeyboardArrowUpIcon />
        </Button>

        <TextField
          type="number"
          label="Seconds"
          variant="outlined"
          sx={{ mb: 1 }}
          value={seconds}
          onChange={({ target: { value } }) => {
            setSeconds(value);
          }}
          inputProps={{
            min: 0,
            max: 59,
            className: 'hideInputArrows textCenter',
          }}
          fullWidth
        />

        <Button
          variant="outlined"
          onClick={() => {
            setSeconds(
              String(Number(seconds) - 1 < 0 ? 59 : Number(seconds) - 1)
            );
          }}
          fullWidth
        >
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
