import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, spacing, shadows, typography } from '../utils/theme';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { PetCardProps } from '../types';

const PetCard: React.FC<PetCardProps> = ({ pet, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, shadows.medium]} 
      onPress={() => onPress(pet)}
      activeOpacity={0.9}
    >
      <Image source={{ uri: pet.image || pet.images?.[0] }} style={styles.image} />
      
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{pet.species}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{pet.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${pet.price}</Text>
          </View>
        </View>
        
        <Text style={styles.breed}>{pet.breed}</Text>
        
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <MaterialIcons name="location-on" size={16} color={colors.textSecondary} />
            <Text style={styles.detailText}>{pet.location}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <MaterialCommunityIcons name="calendar" size={16} color={colors.textSecondary} />
            <Text style={styles.detailText}>{pet.age}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <MaterialIcons 
              name={pet.gender === 'Male' ? 'male' : 'female'} 
              size={16} 
              color={colors.textSecondary} 
            />
            <Text style={styles.detailText}>{pet.gender}</Text>
          </View>
        </View>
        
        <View style={styles.tagsContainer}>
          {pet.traits.slice(0, 2).map((trait, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{trait}</Text>
            </View>
          ))}
          {pet.traits.length > 2 && (
            <View style={styles.tag}>
              <Text style={styles.tagText}>+{pet.traits.length - 2}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 16,
  },
  badgeText: {
    color: colors.card,
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
  },
  infoContainer: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  name: {
    fontSize: typography.fontSize.lg,
    fontWeight: '700',
    color: colors.text,
  },
  priceContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  price: {
    color: colors.card,
    fontWeight: '700',
    fontSize: typography.fontSize.sm,
  },
  breed: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.md,
    marginBottom: spacing.sm,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  detailText: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: colors.background,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.xs,
  },
});

export default PetCard; 