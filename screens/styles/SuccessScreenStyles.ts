import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../../utils/theme';

export const successStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginBottom: spacing.xl,
    ...shadows.medium,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: colors.primary,
    padding: spacing.md,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.card,
  },
  cardContent: {
    padding: spacing.md,
  },
  petInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  petInfo: {
    marginLeft: spacing.md,
  },
  petName: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.text,
  },
  petBreed: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  detailLabel: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  detailValue: {
    fontSize: typography.fontSize.md,
    fontWeight: '600',
    color: colors.text,
  },
  message: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 24,
  },
  buttonsContainer: {
    gap: spacing.md,
  },
  locationButton: {
    marginBottom: spacing.sm,
  },
}); 