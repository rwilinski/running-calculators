import { AppBar, Box, Toolbar, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import { ModuleWrapper } from './layout/module-container.component';
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
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          input: {
            textAlign: 'center',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        fullWidth: true,
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

        <ModuleWrapper>
          <PaceCalculator />
        </ModuleWrapper>

        <ModuleWrapper>
          <TimeCalculator />
        </ModuleWrapper>

        <ModuleWrapper>
          <DistanceCalculator />
        </ModuleWrapper>

        <ModuleWrapper>
          <SpeedToPaceConverter />
        </ModuleWrapper>

        <ModuleWrapper>
          <PaceToSpeedConverter />
        </ModuleWrapper>
      </Box>
    </ThemeProvider>
  );
};
