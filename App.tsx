import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { RootStackParamList } from './types/navigation';

// Import screens
import HomeScreen from './screens/HomeScreen';
import PetDetailsScreen from './screens/PetDetailsScreen';
import AdoptionScreen from './screens/AdoptionScreen';
import LocationScreen from './screens/LocationScreen';
import SuccessScreen from './screens/SuccessScreen';

// Ignore specific warnings
LogBox.ignoreLogs([
  'TurboModuleRegistry.getEnforcing(...): \'RNMapsAirModule\' could not be found',
  'TurboModuleRegistry.getEnforcing(...): \'RNMapsModule\' could not be found',
  'ViewPropTypes will be removed from React Native',
]);

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  // Handle global errors
  useEffect(() => {
    // Add event listener for uncaught JS errors
    LogBox.ignoreLogs(['Error: Invariant Violation']);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        fallback={<StatusBar style="auto" />}
      >
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#5048E5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Pet Adoption' }} 
          />
          <Stack.Screen 
            name="PetDetails" 
            component={PetDetailsScreen} 
            options={({ route }) => ({ title: route.params?.name || 'Pet Details' })} 
          />
          <Stack.Screen 
            name="Adoption" 
            component={AdoptionScreen} 
            options={{ title: 'Adopt a Pet' }} 
          />
          <Stack.Screen 
            name="Location" 
            component={LocationScreen} 
            options={{ title: 'Your Location' }} 
          />
          <Stack.Screen 
            name="Success" 
            component={SuccessScreen} 
            options={{ 
              title: 'Adoption Successful',
              headerBackVisible: false,
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App; 