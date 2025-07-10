import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../../utils/theme';

export const locationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mapContainer: {
    width: '100%',
    height: '60%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    backgroundColor: colors.card,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    padding: spacing.lg,
    flex: 1,
    ...shadows.medium,
  },
  infoTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  address: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  coordinatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
    ...shadows.small,
  },
  coordinateItem: {
    alignItems: 'center',
  },
  coordinateLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  coordinateValue: {
    fontSize: typography.fontSize.md,
    fontWeight: '600',
    color: colors.primary,
  },
  buttonsContainer: {
    marginTop: 'auto',
  },
  refreshButton: {
    marginBottom: spacing.md,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  errorText: {
    fontSize: typography.fontSize.lg,
    color: colors.error,
    textAlign: 'center',
    marginVertical: spacing.lg,
  },
  errorButton: {
    marginTop: spacing.lg,
  },
}); 