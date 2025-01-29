import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryHover,
    },
    background: {
      default: colors.backgroundPrimary,
      paper: colors.backgroundSecondary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: colors.scrollTrack,
          },
          '&::-webkit-scrollbar-thumb': {
            background: colors.scrollThumb,
            borderRadius: '4px',
            '&:hover': {
              background: colors.scrollThumbHover,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: colors.disabled,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primaryLight,
          color: colors.primary,
          '&:hover': {
            backgroundColor: colors.primaryLightHover,
          },
        },
      },
    },
  },
});

export default theme;
