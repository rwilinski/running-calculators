import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type InputSpinnerProps = {
  label?: string;
  value: number;
  max?: number;
  downDisabled?: boolean;
  onChange: (value: number) => void;
};

export const InputSpinner: React.FC<InputSpinnerProps> = ({
  label,
  value,
  max,
  downDisabled,
  onChange,
}) => {
  const [tempValue, setTempValue] = useState(String(value));

  const onUpClick = () => {
    if (max) {
      setTempValue(
        String(Number(tempValue) + 1 > max ? 0 : Number(tempValue) + 1)
      );
    } else {
      setTempValue(String(Number(tempValue) + 1));
    }
  };

  const onDownClick = () => {
    setTempValue(
      String(Number(tempValue) - 1 < 0 ? max || 0 : Number(tempValue) - 1)
    );
  };

  useEffect(() => {
    onChange(!isNaN(Number(tempValue)) ? Number(tempValue) : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempValue]);

  return (
    <>
      <Button sx={{ mb: 1 }} onClick={onUpClick}>
        <KeyboardArrowUpIcon />
      </Button>

      <TextField
        type="number"
        label={label}
        sx={{ mb: 1 }}
        value={tempValue}
        onChange={({ target: { value } }) => {
          if (Number(value) < 0) {
            setTempValue('0');
          } else if (max && Number(value) > max) {
            setTempValue(String(max));
          } else {
            setTempValue(value);
          }
        }}
        inputProps={{ min: 0, max }}
      />

      <Button onClick={onDownClick} disabled={downDisabled}>
        <KeyboardArrowDownIcon />
      </Button>
    </>
  );
};
