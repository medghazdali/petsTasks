import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import InputField from '../../components/InputField';
import { adoptionStyles } from '../styles';
import { FormData, FormErrors } from '../interfaces/AdoptionScreenInterfaces';
import { colors } from '../../utils/theme';

interface PaymentFormProps {
  formData: FormData;
  errors: FormErrors;
  updateFormField: (field: keyof FormData, value: string) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ 
  formData, 
  errors, 
  updateFormField 
}) => {
  return (
    <View style={adoptionStyles.section}>
      <Text style={adoptionStyles.sectionTitle}>Payment Information</Text>
      
      <View style={adoptionStyles.cardTypes}>
        <FontAwesome name="cc-visa" size={24} color={colors.textSecondary} />
        <FontAwesome name="cc-mastercard" size={24} color={colors.textSecondary} />
        <FontAwesome name="cc-amex" size={24} color={colors.textSecondary} />
        <FontAwesome name="cc-discover" size={24} color={colors.textSecondary} />
      </View>
      
      <InputField
        label="Card Number"
        value={formData.cardNumber}
        onChangeText={(text: string) => updateFormField('cardNumber', text)}
        placeholder="1234 5678 9012 3456"
        keyboardType="numeric"
        error={errors.cardNumber}
      />
      
      <View style={adoptionStyles.row}>
        <InputField
          label="Expiry Date"
          value={formData.expiryDate}
          onChangeText={(text: string) => updateFormField('expiryDate', text)}
          placeholder="MM/YY"
          style={{ flex: 1, marginRight: 16 }}
          error={errors.expiryDate}
        />
        
        <InputField
          label="CVV"
          value={formData.cvv}
          onChangeText={(text: string) => updateFormField('cvv', text)}
          placeholder="123"
          keyboardType="numeric"
          style={{ flex: 1 }}
          error={errors.cvv}
        />
      </View>
      
      <InputField
        label="Cardholder Name"
        value={formData.cardholderName}
        onChangeText={(text: string) => updateFormField('cardholderName', text)}
        placeholder="Name on card"
        error={errors.cardholderName}
      />
    </View>
  );
}; 