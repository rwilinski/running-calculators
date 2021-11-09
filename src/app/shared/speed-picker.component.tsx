import { Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { roundNumber } from '../utils/display.util';

type SpeedPickerProps = {
  value: number;
  onChange: (speed: number) => void;
};

export const SpeedPicker: React.FC<SpeedPickerProps> = ({
  value,
  onChange,
}) => {
  const [speed, setSpeed] = useState(String(value));

  useEffect(() => {
    onChange(Number(speed));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <Button
          sx={{ mb: 1 }}
          onClick={() => {
            setSpeed(String(roundNumber(Number(speed) + 0.1)));
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>

        <TextField
          type="number"
          label="Speed"
          sx={{ mb: 1 }}
          value={value}
          onChange={({ target: { value } }) => {
            setSpeed(value);
          }}
          inputProps={{ min: 0 }}
        />

        <Button
          onClick={() => {
            setSpeed(String(roundNumber(Number(speed) - 0.1)));
          }}
          disabled={speed === '0'}
        >
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
