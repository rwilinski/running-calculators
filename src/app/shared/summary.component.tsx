import { Grid } from '@mui/material';
import React from 'react';

export const Summary: React.FC = ({ children }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {children}
    </Grid>
  );
};
