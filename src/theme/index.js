import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    background: {
      default: colors.background,
      paper: colors.backgroundSecondary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      color: colors.textPrimary,
    },
    h2: {
      color: colors.textPrimary,
    },
    h3: {
      color: colors.textPrimary,
    },
    h4: {
      color: colors.textPrimary,
    },
    h5: {
      color: colors.textPrimary,
    },
    h6: {
      color: colors.textPrimary,
    },
    subtitle1: {
      color: colors.textSecondary,
    },
    subtitle2: {
      color: colors.textSecondary,
    },
    body1: {
      color: colors.textSecondary,
    },
    body2: {
      color: colors.textSecondary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: colors.background,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: colors.background,
          },
          '&::-webkit-scrollbar-thumb': {
            background: colors.primary,
            borderRadius: '4px',
            '&:hover': {
              background: colors.primaryDark,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          backgroundColor: colors.primary,
          color: colors.background,
          '&:hover': {
            backgroundColor: colors.primaryDark,
          },
        },
        outlined: {
          borderColor: colors.primary,
          color: colors.primary,
          '&:hover': {
            borderColor: colors.primary,
            backgroundColor: colors.primaryHover,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundElevated,
          borderRadius: 8,
          border: `1px solid ${colors.borderPrimary}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primaryHover,
          color: colors.primary,
          '&:hover': {
            backgroundColor: colors.primaryTransparent,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primary,
          '&:hover': {
            backgroundColor: colors.primaryHover,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.primary,
          textDecoration: 'none',
          '&:hover': {
            color: colors.primaryDark,
          },
        },
      },
    },
  },
});

// Custom theme additions
theme.gradients = colors.gradients;
theme.effects = {
  glow: colors.glowEffect,
  shadow: colors.shadowEffect,
  overlay: colors.overlayEffect,
};

export default theme;
