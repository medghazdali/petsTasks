import { ThemeColors, ThemeSpacing, ThemeTypography, ThemeShadows } from '../types';

export const colors: ThemeColors = {
  primary: '#5048E5',
  secondary: '#10B981',
  background: '#F9FAFC',
  card: '#FFFFFF',
  text: '#121828',
  textSecondary: '#65748B',
  border: '#E6E8F0',
  error: '#D14343',
  success: '#14B8A6',
};

export const spacing: ThemeSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography: ThemeTypography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
};

export const shadows: ThemeShadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
}; 