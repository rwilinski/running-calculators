import { Grid } from '@mui/material';

import { SpinInput } from './spin-input.component';
import { Label } from './label.component';

type SpeedPickerProps = {
  value: number;
  onChange: (speed: number) => void;
};

export const SpeedPicker: React.FC<SpeedPickerProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <Label>Speed (km/h)</Label>

      <Grid container spacing={2}>
        <Grid item xs>
          <SpinInput
            label="Speed"
            value={value}
            onChange={onChange}
            downDisabled={value === 0}
            factor={0.5}
          />
        </Grid>
      </Grid>
    </>
  );
};
