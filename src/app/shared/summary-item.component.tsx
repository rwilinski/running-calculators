import { Grid, Paper, Typography } from '@mui/material';
import { orange, common } from '@mui/material/colors';

type SummaryItemProps = {
  label: string;
};

export const SummaryItem: React.FC<SummaryItemProps> = ({
  label,
  children,
}) => {
  return (
    <Grid item xs={12} sm>
      <Paper
        elevation={0}
        sx={{
          p: 1,
          background: orange[600],
          color: common.white,
        }}
      >
        <Typography variant="h6" align="center">
          {label}
        </Typography>
        <Typography variant="h4" align="center">
          {children}
        </Typography>
      </Paper>
    </Grid>
  );
};
