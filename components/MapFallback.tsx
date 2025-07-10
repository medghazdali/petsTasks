import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../utils/theme';

interface MapFallbackProps {
  message?: string;
}

const MapFallback: React.FC<MapFallbackProps> = ({ message = 'Map view not available.' }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="map" size={64} color={colors.primary} />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.subtext}>
        Your location coordinates are still available below.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  message: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  subtext: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});

export default MapFallback; 