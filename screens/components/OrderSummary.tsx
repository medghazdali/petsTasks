import React from 'react';
import { View, Text } from 'react-native';
import { adoptionStyles } from '../styles';

interface OrderSummaryProps {
  petPrice: number;
  processingFee?: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  petPrice, 
  processingFee = 5 
}) => {
  const totalAmount = petPrice + processingFee;
  
  return (
    <View style={adoptionStyles.section}>
      <Text style={adoptionStyles.sectionTitle}>Summary</Text>
      
      <View style={adoptionStyles.row}>
        <Text style={adoptionStyles.totalLabel}>Adoption Fee</Text>
        <Text style={adoptionStyles.totalAmount}>${petPrice}</Text>
      </View>
      
      <View style={adoptionStyles.row}>
        <Text style={adoptionStyles.totalLabel}>Processing Fee</Text>
        <Text style={adoptionStyles.totalAmount}>${processingFee.toFixed(2)}</Text>
      </View>
      
      <View style={adoptionStyles.totalContainer}>
        <Text style={adoptionStyles.totalLabel}>Total</Text>
        <Text style={adoptionStyles.totalAmount}>${totalAmount}</Text>
      </View>
    </View>
  );
}; 