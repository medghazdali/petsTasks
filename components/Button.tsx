import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { colors, spacing, typography } from '../utils/theme';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  style = {},
}) => {
  
  const getBackgroundColor = (): string => {
    if (disabled) return colors.disabled || '#C4CDD5';
    
    switch (variant) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'outline':
        return 'transparent';
      case 'text':
        return 'transparent';
      default:
        return colors.primary;
    }
  };
  
  const getTextColor = (): string => {
    if (disabled) return colors.textSecondary;
    
    switch (variant) {
      case 'primary':
      case 'secondary':
        return colors.card;
      case 'outline':
        return colors.primary;
      case 'text':
        return colors.primary;
      default:
        return colors.card;
    }
  };
  
  const getBorderColor = (): string => {
    if (disabled) return colors.disabled || '#C4CDD5';
    
    switch (variant) {
      case 'outline':
        return colors.primary;
      default:
        return 'transparent';
    }
  };
  
  const getPadding = (): { paddingVertical: number; paddingHorizontal: number } => {
    switch (size) {
      case 'small':
        return { paddingVertical: spacing.xs, paddingHorizontal: spacing.md };
      case 'medium':
        return { paddingVertical: spacing.sm, paddingHorizontal: spacing.lg };
      case 'large':
        return { paddingVertical: spacing.md, paddingHorizontal: spacing.xl };
      default:
        return { paddingVertical: spacing.sm, paddingHorizontal: spacing.lg };
    }
  };
  
  const getFontSize = (): number => {
    switch (size) {
      case 'small':
        return typography.fontSize.sm;
      case 'medium':
        return typography.fontSize.md;
      case 'large':
        return typography.fontSize.lg;
      default:
        return typography.fontSize.md;
    }
  };
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: variant === 'outline' ? 1 : 0,
          ...getPadding(),
          width: fullWidth ? '100%' : 'auto',
        },
        style as StyleProp<ViewStyle>,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={getTextColor()} 
          size="small" 
          style={icon ? styles.iconWithText : undefined} 
        />
      ) : (
        <View style={styles.contentContainer}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text
            style={[
              styles.text,
              {
                color: getTextColor(),
                fontSize: getFontSize(),
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: spacing.xs,
  },
  iconWithText: {
    marginRight: spacing.xs,
  },
});

export default Button; 