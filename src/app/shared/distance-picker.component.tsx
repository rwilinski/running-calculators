import { Chip, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import { displayDistance } from './../utils/display.util';

const DISTANCES = [
  {
    name: displayDistance(1000),
    value: 1000,
  },
  {
    name: displayDistance(2000),
    value: 2000,
  },
  {
    name: displayDistance(5000),
    value: 5000,
  },
  {
    name: displayDistance(10000),
    value: 10000,
  },
  {
    name: 'Halfmarathon',
    value: 21097,
  },
  {
    name: 'Marathon',
    value: 42195,
  },
];

type DistancePickerProps = {
  distance: number;
  onChange: (distance: number) => void;
};

export const DistancePicker: React.FC<DistancePickerProps> = ({
  distance,
  onChange,
}) => {
  const [value, setValue] = useState(String(distance));

  useEffect(() => {
    onChange(Number(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <TextField
        type="number"
        fullWidth
        sx={{ mb: 2 }}
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
        inputProps={{ min: 0, className: 'hideInputArrows textCenter' }}
      />

      <Stack direction="row" spacing={1} justifyContent="center">
        {DISTANCES.map((item) => (
          <Chip
            key={item.value}
            color="primary"
            variant="outlined"
            label={item.name}
            onClick={() => setValue(String(item.value))}
          />
        ))}
      </Stack>
    </>
  );
};
