import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../utils/theme';
import Button from '../components/Button';
import LottieView from 'lottie-react-native';
import { SuccessScreenProps } from '../types/navigation';
import { successStyles } from './styles';

const SuccessScreen: React.FC<SuccessScreenProps> = ({ route, navigation }) => {
  const { pet, adoptionId, adopter } = route.params;

  // Prevent going back with hardware back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );
    return () => backHandler.remove();
  }, []);

  const handleHomePress = (): void => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const handleLocationPress = (): void => {
    navigation.navigate('Location');
  };

  return (
    <View style={successStyles.container}>
      <View style={successStyles.content}>
        <View style={successStyles.iconContainer}>
          <MaterialIcons name="check-circle" size={80} color={colors.secondary} />
        </View>

        <Text style={successStyles.title}>Congratulations!</Text>
        <Text style={successStyles.subtitle}>
          You've successfully adopted {pet.name}
        </Text>

        <View style={successStyles.card}>
          <View style={successStyles.cardHeader}>
            <Text style={successStyles.cardTitle}>Adoption Details</Text>
          </View>

          <View style={successStyles.cardContent}>
            <View style={successStyles.petInfoRow}>
              <Image 
                source={{ uri: pet.images ? pet.images[0] : pet.image }} 
                style={successStyles.petImage} 
              />
              <View style={successStyles.petInfo}>
                <Text style={successStyles.petName}>{pet.name}</Text>
                <Text style={successStyles.petBreed}>{pet.breed}</Text>
              </View>
            </View>

            <View style={successStyles.divider} />

            <View style={successStyles.detailRow}>
              <Text style={successStyles.detailLabel}>Adoption ID</Text>
              <Text style={successStyles.detailValue}>{adoptionId}</Text>
            </View>

            <View style={successStyles.detailRow}>
              <Text style={successStyles.detailLabel}>Adopter</Text>
              <Text style={successStyles.detailValue}>{adopter}</Text>
            </View>

            <View style={successStyles.detailRow}>
              <Text style={successStyles.detailLabel}>Date</Text>
              <Text style={successStyles.detailValue}>
                {new Date().toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        <Text style={successStyles.message}>
          Thank you for giving {pet.name} a forever home! We'll be in touch soon
          with next steps.
        </Text>

        <View style={successStyles.buttonsContainer}>
          <Button
            title="Find Your Location"
            onPress={handleLocationPress}
            variant="outline"
            fullWidth
            icon={<MaterialIcons name="location-on" size={20} color={colors.primary} />}
            style={successStyles.locationButton}
          />

          <Button
            title="Back to Home"
            onPress={handleHomePress}
            fullWidth
          />
        </View>
      </View>
    </View>
  );
};

// Styles moved to ./styles/SuccessScreenStyles.ts

export default SuccessScreen; 