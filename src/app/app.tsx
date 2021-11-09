import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Paper,
} from '@mui/material';

import { PaceCalculator } from './modules/pace-calculator.module';
import { TimeCalculator } from './modules/time-calculator.module';
import { DistanceCalculator } from './modules/distance-calculator.module';
import { SpeedToPaceConverter } from './modules/speed-to-pace-converter.module';
import { PaceToSpeedConverter } from './modules/pace-to-speed-converter.module';

import logo from './images/logo-35.png';

export const App = () => {
  return (
    <>
      <CssBaseline />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <Box
              sx={{
                mr: 1,
                pt: 1,
              }}
            >
              <img src={logo} alt="" />
            </Box>

            <Typography variant="h6" component="div">
              Running Calculators
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mb: 3 }}>
          <Paper sx={{ p: 2 }}>
            <PaceCalculator />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 3 }}>
          <Paper sx={{ p: 2 }}>
            <TimeCalculator />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 3 }}>
          <Paper sx={{ p: 2 }}>
            <DistanceCalculator />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 3 }}>
          <Paper sx={{ p: 2 }}>
            <SpeedToPaceConverter />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 3 }}>
          <Paper sx={{ p: 2 }}>
            <PaceToSpeedConverter />
          </Paper>
        </Container>
      </Box>
    </>
  );
};
