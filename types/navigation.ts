import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pet } from './index';

// Define the navigation stack parameter list
export type RootStackParamList = {
  Home: undefined;
  PetDetails: Pet;
  Adoption: { pet: Pet };
  Success: { pet: Pet; adoptionId: string; adopter: string };
  Location: undefined;
};

// Screen props types
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PetDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'PetDetails'>;
export type AdoptionScreenProps = NativeStackScreenProps<RootStackParamList, 'Adoption'>;
export type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;
export type LocationScreenProps = NativeStackScreenProps<RootStackParamList, 'Location'>;

// Declare navigation types to be available globally
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 