import React from 'react';
import { View, Text, Image } from 'react-native';
import { Pet } from '../../types';
import { adoptionStyles } from '../styles';

interface PetInfoCardProps {
  pet: Pet;
}

export const PetInfoCard: React.FC<PetInfoCardProps> = ({ pet }) => {
  return (
    <View style={adoptionStyles.petInfoCard}>
      <Image 
        source={{ uri: pet.images ? pet.images[0] : pet.image }} 
        style={adoptionStyles.petImage} 
      />
      <View style={adoptionStyles.petInfo}>
        <Text style={adoptionStyles.petName}>{pet.name}</Text>
        <Text style={adoptionStyles.petBreed}>{pet.breed}</Text>
        <View style={adoptionStyles.priceContainer}>
          <Text style={adoptionStyles.priceLabel}>Adoption Fee</Text>
          <Text style={adoptionStyles.price}>${pet.price}</Text>
        </View>
      </View>
    </View>
  );
}; 