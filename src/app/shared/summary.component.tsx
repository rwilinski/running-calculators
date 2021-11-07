import { Card, CardContent, Grid, Typography } from "@mui/material";

type SummaryData = {
  label: string;
  text: string;
};

type SummaryProps = {
  data: SummaryData[];
};

export const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {data.map((row) => (
        <Grid key={row.label} item xs={12} sm>
          <Card variant="outlined" color="text.secondary">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {row.label}
              </Typography>
              <Typography variant="h5">{row.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
