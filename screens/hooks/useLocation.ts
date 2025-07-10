import { useState, useEffect, useCallback } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { MapRegion } from '../interfaces';

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [mapRegion, setMapRegion] = useState<MapRegion | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const getLocation = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      
      // Get address from coordinates
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      
      if (addressResponse && addressResponse.length > 0) {
        const addressData = addressResponse[0];
        const formattedAddress = [
          addressData.street,
          addressData.city,
          addressData.region,
          addressData.postalCode,
          addressData.country,
        ]
          .filter(Boolean)
          .join(', ');
        
        setAddress(formattedAddress);
      }
    } catch (error) {
      setErrorMsg('Could not fetch location. Please try again.');
      console.error('Error getting location:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshLocation = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      
      // Update address
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      
      if (addressResponse && addressResponse.length > 0) {
        const addressData = addressResponse[0];
        const formattedAddress = [
          addressData.street,
          addressData.city,
          addressData.region,
          addressData.postalCode,
          addressData.country,
        ]
          .filter(Boolean)
          .join(', ');
        
        setAddress(formattedAddress);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to refresh location. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return {
    location,
    errorMsg,
    loading,
    mapRegion,
    address,
    refreshLocation
  };
}; 