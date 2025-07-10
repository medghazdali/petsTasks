import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Animated,
} from 'react-native';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utils/theme';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import { Pet } from '../types';
import { PetDetailsScreenProps } from '../types/navigation';
import { DetailItemProps, FeatureItemProps } from './interfaces';
import { useAnimation } from './hooks';
import { petDetailsStyles } from './styles';

const { width } = Dimensions.get('window');

const PetDetailsScreen: React.FC<PetDetailsScreenProps> = ({ route, navigation }) => {
  const pet = route.params;
  const { animatedValue: buttonOpacity, fadeIn } = useAnimation(0);
  
  // Animate button to fade in
  React.useEffect(() => {
    fadeIn(500, 300);
  }, [fadeIn]);

  const handleAdoptPress = (): void => {
    navigation.navigate('Adoption', { pet });
  };

  const renderDetailItem = ({ icon, label, value }: DetailItemProps): React.ReactNode => (
    <View style={petDetailsStyles.detailItem}>
      {icon}
      <View style={petDetailsStyles.detailTextContainer}>
        <Text style={petDetailsStyles.detailLabel}>{label}</Text>
        <Text style={petDetailsStyles.detailValue}>{value}</Text>
      </View>
    </View>
  );

  const renderFeatureItem = ({ text }: FeatureItemProps): React.ReactNode => (
    <View style={petDetailsStyles.featureItem}>
      <MaterialIcons name="check-circle" size={16} color={colors.secondary} />
      <Text style={petDetailsStyles.featureText}>{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={petDetailsStyles.safeArea}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView 
        style={petDetailsStyles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={petDetailsStyles.scrollContent}
      >
        <View style={petDetailsStyles.imageContainer}>
          <ImageCarousel 
            images={pet.images || [pet.image as string]} 
            height={width * 0.8}
            showControls={true}
            showPagination={true}
          />
          
          <TouchableOpacity
            style={petDetailsStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color={colors.card} />
          </TouchableOpacity>
        </View>
        
        <View style={petDetailsStyles.content}>
          <View style={petDetailsStyles.header}>
            <View>
              <Text style={petDetailsStyles.name}>{pet.name}</Text>
              <Text style={petDetailsStyles.breed}>{pet.breed}</Text>
            </View>
            
            <View style={petDetailsStyles.priceContainer}>
              <Text style={petDetailsStyles.priceLabel}>Adoption Fee</Text>
              <Text style={petDetailsStyles.price}>${pet.price}</Text>
            </View>
          </View>
          
          <View style={petDetailsStyles.detailsContainer}>
            {renderDetailItem({
              icon: <MaterialIcons name="location-on" size={24} color={colors.primary} />,
              label: 'Location',
              value: pet.location
            })}
            
            {renderDetailItem({
              icon: <MaterialCommunityIcons name="calendar" size={24} color={colors.primary} />,
              label: 'Age',
              value: pet.age
            })}
            
            {renderDetailItem({
              icon: <MaterialIcons 
                name={pet.gender === 'Male' ? 'male' : 'female'} 
                size={24} 
                color={colors.primary} 
              />,
              label: 'Gender',
              value: pet.gender
            })}
          </View>
          
          <View style={petDetailsStyles.section}>
            <Text style={petDetailsStyles.sectionTitle}>About {pet.name}</Text>
            <Text style={petDetailsStyles.description}>{pet.description}</Text>
          </View>
          
          <View style={petDetailsStyles.section}>
            <Text style={petDetailsStyles.sectionTitle}>Pet Details</Text>
            <View style={petDetailsStyles.featuresContainer}>
              {pet.vaccinated && renderFeatureItem({ text: 'Vaccinated' })}
              {pet.neutered && renderFeatureItem({ text: 'Neutered/Spayed' })}
              {renderFeatureItem({ text: `${pet.species} / ${pet.breed}` })}
              {renderFeatureItem({ text: `${pet.age} old` })}
            </View>
          </View>
          
          <View style={petDetailsStyles.section}>
            <Text style={petDetailsStyles.sectionTitle}>Personality</Text>
            <View style={petDetailsStyles.tagsContainer}>
              {pet.traits.map((trait, index) => (
                <View key={index} style={petDetailsStyles.tag}>
                  <Text style={petDetailsStyles.tagText}>{trait}</Text>
                </View>
              ))}
            </View>
          </View>
          
          {/* Add padding at the bottom to ensure content is not hidden behind the fixed button */}
          <View style={petDetailsStyles.bottomPadding} />
        </View>
      </ScrollView>
      
      {/* Fixed Adopt Me button at the bottom */}
      <Animated.View style={[
        petDetailsStyles.fixedButtonContainer,
        { opacity: buttonOpacity }
      ]}>
        <SafeAreaView>
          <Button 
            title="Adopt Me" 
            onPress={handleAdoptPress} 
            size="large"
            fullWidth
            icon={<FontAwesome name="heart" size={18} color={colors.card} />}
          />
        </SafeAreaView>
      </Animated.View>
    </SafeAreaView>
  );
};

// Styles moved to ./styles/PetDetailsScreenStyles.ts

export default PetDetailsScreen; 