import React, { useState } from 'react';
import {
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { adoptPet } from '../utils/api';
import LoadingIndicator from '../components/LoadingIndicator';
import { AdoptionScreenProps } from '../types/navigation';
import { PaymentInfo } from '../types';
import { useForm } from './hooks';
import { adoptionStyles } from './styles';
import {
  PetInfoCard,
  UserInfoForm,
  PaymentForm,
  OrderSummary,
  ActionButtons
} from './components';

const AdoptionScreen: React.FC<AdoptionScreenProps> = ({ route, navigation }) => {
  const { pet } = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  
  const initialFormValues = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  };
  
  const { formData, errors, updateFormField, validateForm } = useForm(initialFormValues);
  
  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      return;
    }
    
    try {
      setLoading(true);
      
      // For demo purposes, we're using a mock API
      const result = await adoptPet(pet.id, {
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        cardHolderName: formData.cardholderName, // Using the correct property name
      });
      
      navigation.navigate('Success', {
        pet,
        adoptionId: result.adoptionId,
        adopter: formData.fullName,
      });
    } catch (error) {
      Alert.alert(
        'Payment Failed',
        error instanceof Error ? error.message : 'There was an error processing your payment. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
    }
  };
  
  const handleCancel = () => {
    navigation.goBack();
  };
  
  if (loading) {
    return <LoadingIndicator message="Processing your adoption request..." />;
  }
  
  const processingFee = 5;
  const totalAmount = pet.price + processingFee;
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView style={adoptionStyles.container} showsVerticalScrollIndicator={false}>
        <PetInfoCard pet={pet} />
        <UserInfoForm 
          formData={formData}
          errors={errors}
          updateFormField={updateFormField}
        />
        <PaymentForm 
          formData={formData}
          errors={errors}
          updateFormField={updateFormField}
        />
        <OrderSummary 
          petPrice={pet.price}
          processingFee={processingFee}
        />
        <ActionButtons 
          totalAmount={totalAmount}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdoptionScreen; 