import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../../utils/theme';

export const adoptionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  petInfoCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    padding: spacing.md,
    ...shadows.medium,
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  petInfo: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: 'center',
  },
  petName: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  petBreed: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  priceContainer: {
    backgroundColor: colors.primary + '20', // 20% opacity
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  priceLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.primary,
    fontWeight: '600',
  },
  price: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
  section: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
  },
  cardTypes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.md,
  },
  submitButton: {
    marginTop: spacing.md,
  },
  securePaymentText: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.sm,
  },
  securityIcon: {
    alignSelf: 'center',
    marginBottom: spacing.sm,
  },
  disclaimer: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    lineHeight: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  totalLabel: {
    fontSize: typography.fontSize.md,
    fontWeight: '600',
    color: colors.text,
  },
  totalAmount: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
}); 