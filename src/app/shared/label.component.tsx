import { Typography } from '@mui/material';

export const Label: React.FC = ({ children }) => {
  return (
    <Typography
      variant="h6"
      sx={{ mb: 2.5 }}
      color="grey.700"
      fontSize="1.1rem"
    >
      {children}
    </Typography>
  );
};
