import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../components/Button';
import { adoptionStyles } from '../styles';
import { colors } from '../../utils/theme';

interface ActionButtonsProps {
  totalAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  totalAmount, 
  onSubmit, 
  onCancel 
}) => {
  return (
    <>
      <View style={adoptionStyles.section}>
        <Button
          title={`Complete Adoption • $${totalAmount}`}
          onPress={onSubmit}
          size="large"
          fullWidth
          style={adoptionStyles.submitButton}
        />
        
        <TouchableOpacity
          style={adoptionStyles.submitButton}
          onPress={onCancel}
        >
          <Text style={adoptionStyles.securePaymentText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      
      <View style={adoptionStyles.section}>
        <MaterialIcons 
          name="lock" 
          size={16} 
          color={colors.secondary} 
          style={adoptionStyles.securityIcon} 
        />
        <Text style={adoptionStyles.disclaimer}>
          Your payment information is secure and encrypted
        </Text>
      </View>
    </>
  );
}; 