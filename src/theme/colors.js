// Base colors
const baseColors = {
  // Primary brand color and its variations
  teal: {
    main: '#64ffda',
    light: '#9fffeb',
    dark: '#4db3a4',
    hover: 'rgba(100, 255, 218, 0.1)',
    transparent: 'rgba(100, 255, 218, 0.2)',
  },
  
  // Background colors
  background: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d',
    elevation1: 'rgba(45, 45, 45, 0.5)',
    elevation2: 'rgba(45, 45, 45, 0.8)',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    blur: 'rgba(26, 26, 26, 0.8)',
  },
  
  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#8892b0',
    highlight: '#64ffda',
    muted: 'rgba(136, 146, 176, 0.8)',
  },
  
  // Border colors
  border: {
    primary: 'rgba(100, 255, 218, 0.1)',
    secondary: 'rgba(136, 146, 176, 0.1)',
    hover: 'rgba(100, 255, 218, 0.2)',
  },
  
  // Effect colors
  effects: {
    glow: 'rgba(100, 255, 218, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.2)',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  
  // Status colors
  status: {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  },
};

// Semantic color mapping
const colors = {
  // Theme colors
  primary: baseColors.teal.main,
  primaryLight: baseColors.teal.light,
  primaryDark: baseColors.teal.dark,
  primaryHover: baseColors.teal.hover,
  primaryTransparent: baseColors.teal.transparent,

  // Background
  background: baseColors.background.primary,
  backgroundSecondary: baseColors.background.secondary,
  backgroundElevated: baseColors.background.elevation1,
  backgroundElevatedHover: baseColors.background.elevation2,
  backgroundGradient: baseColors.background.gradient,
  backgroundBlur: baseColors.background.blur,

  // Text
  textPrimary: baseColors.text.primary,
  textSecondary: baseColors.text.secondary,
  textHighlight: baseColors.text.highlight,
  textMuted: baseColors.text.muted,

  // Borders
  borderPrimary: baseColors.border.primary,
  borderSecondary: baseColors.border.secondary,
  borderHover: baseColors.border.hover,

  // Effects
  glowEffect: baseColors.effects.glow,
  shadowEffect: baseColors.effects.shadow,
  overlayEffect: baseColors.effects.overlay,

  // Status
  success: baseColors.status.success,
  error: baseColors.status.error,
  warning: baseColors.status.warning,
  info: baseColors.status.info,

  // Gradients
  gradients: {
    primary: `linear-gradient(135deg, ${baseColors.background.primary} 0%, ${baseColors.background.secondary} 100%)`,
    glow: `radial-gradient(circle, ${baseColors.teal.transparent} 0%, rgba(100,255,218,0) 70%)`,
    text: `linear-gradient(90deg, ${baseColors.text.primary}, ${baseColors.text.secondary})`,
  },
};

export default colors;
