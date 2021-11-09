import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Paper,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import { PaceCalculator } from './modules/pace-calculator.module';
import { TimeCalculator } from './modules/time-calculator.module';
import { DistanceCalculator } from './modules/distance-calculator.module';
import { SpeedToPaceConverter } from './modules/speed-to-pace-converter.module';
import { PaceToSpeedConverter } from './modules/pace-to-speed-converter.module';

import logo from './images/logo-35.png';

const theme = createTheme({
  palette: {
    background: {
      default: grey[200],
    },
    text: {
      primary: grey[800],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            textAlign: 'center',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
            },
          },
        },
      },
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: 3 }}>
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

        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <PaceCalculator />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <TimeCalculator />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <DistanceCalculator />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <SpeedToPaceConverter />
          </Paper>
        </Container>

        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <PaceToSpeedConverter />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
