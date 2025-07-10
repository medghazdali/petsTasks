export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  gender: 'Male' | 'Female';
  price: number;
  location: string;
  description: string;
  vaccinated: boolean;
  neutered: boolean;
  traits: string[];
  images: string[];
  image?: string; // For backward compatibility
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  disabled?: string;
  placeholder?: string;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface ThemeTypography {
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

export interface ThemeShadows {
  small: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  medium: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  large: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
}

export interface NavigationProps {
  navigation: any;
  route: any;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode | null;
  style?: any;
}

export interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  error?: string;
  multiline?: boolean;
  numberOfLines?: number;
  style?: any;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  inputStyle?: any;
  required?: boolean;
}

export interface ImageCarouselProps {
  images: string[];
  height: number;
  showControls?: boolean;
  showPagination?: boolean;
}

export interface PetCardProps {
  pet: Pet;
  onPress: (pet: Pet) => void;
}

export interface LoadingIndicatorProps {
  size?: 'small' | 'large';
  color?: string;
  message?: string;
}

export interface FeatureConfig {
  enableMaps: boolean;
}

export interface PaymentInfo {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
  cardholderName?: string; // Added for backward compatibility
} 