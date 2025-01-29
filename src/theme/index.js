import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    background: {
      default: colors.backgroundPrimary,
      paper: colors.backgroundElevated,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
    },
    overline: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.2em',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    `0 2px 4px ${colors.shadowPrimary}`,
    `0 4px 8px ${colors.shadowPrimary}`,
    `0 8px 16px ${colors.shadowPrimary}`,
    `0 12px 24px ${colors.shadowPrimary}`,
    `0 16px 32px ${colors.shadowPrimary}`,
    ...Array(19).fill('none'), // Fill remaining shadows with 'none'
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: colors.backgroundElevated,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: '"Outfit", sans-serif',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
