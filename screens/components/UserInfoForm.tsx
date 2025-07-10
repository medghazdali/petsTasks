import React from 'react';
import { View, Text } from 'react-native';
import InputField from '../../components/InputField';
import { adoptionStyles } from '../styles';
import { FormData, FormErrors } from '../interfaces/AdoptionScreenInterfaces';

interface UserInfoFormProps {
  formData: FormData;
  errors: FormErrors;
  updateFormField: (field: keyof FormData, value: string) => void;
}

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ 
  formData, 
  errors, 
  updateFormField 
}) => {
  return (
    <View style={adoptionStyles.section}>
      <Text style={adoptionStyles.sectionTitle}>Your Information</Text>
      
      <InputField
        label="Full Name"
        value={formData.fullName}
        onChangeText={(text: string) => updateFormField('fullName', text)}
        placeholder="Enter your full name"
        error={errors.fullName}
      />
      
      <InputField
        label="Email"
        value={formData.email}
        onChangeText={(text: string) => updateFormField('email', text)}
        placeholder="Enter your email"
        keyboardType="email-address"
        error={errors.email}
      />
      
      <InputField
        label="Phone Number"
        value={formData.phone}
        onChangeText={(text: string) => updateFormField('phone', text)}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        error={errors.phone}
      />
      
      <InputField
        label="Address"
        value={formData.address}
        onChangeText={(text: string) => updateFormField('address', text)}
        placeholder="Enter your address"
        error={errors.address}
      />
    </View>
  );
}; 