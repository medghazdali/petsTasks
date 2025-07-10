import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../utils/theme';
import Button from '../components/Button';
import LoadingIndicator from '../components/LoadingIndicator';
import MapFallback from '../components/MapFallback';
import { config, isFeatureEnabled } from '../utils/config';
import { LocationScreenProps } from '../types/navigation';
import { useLocation } from './hooks';
import { locationStyles } from './styles';

// Import MapView conditionally to prevent crashes
let MapView: any, Marker: any, PROVIDER_GOOGLE: any;
try {
  if (isFeatureEnabled('enableMaps')) {
    const MapModule = require('react-native-maps');
    MapView = MapModule.default;
    Marker = MapModule.Marker;
    PROVIDER_GOOGLE = MapModule.PROVIDER_GOOGLE;
  }
} catch (error) {
  console.log('Maps module not available');
}

const { width } = Dimensions.get('window');

const LocationScreen: React.FC<LocationScreenProps> = ({ navigation }) => {
  const [mapsAvailable] = useState<boolean>(!!MapView);
  const { 
    location, 
    errorMsg, 
    loading, 
    mapRegion, 
    address, 
    refreshLocation 
  } = useLocation();

  if (loading) {
    return <LoadingIndicator message="Finding your location..." />;
  }

  if (errorMsg) {
    return (
      <View style={locationStyles.errorContainer}>
        <MaterialIcons name="location-off" size={64} color={colors.error} />
        <Text style={locationStyles.errorText}>{errorMsg}</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          style={locationStyles.errorButton}
        />
      </View>
    );
  }

  return (
    <View style={locationStyles.container}>
      <View style={locationStyles.mapContainer}>
        {mapsAvailable && mapRegion ? (
          <MapView
            style={locationStyles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={mapRegion}
            showsUserLocation={true}
            showsMyLocationButton={false}
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Your Location"
              />
            )}
          </MapView>
        ) : (
          <MapFallback message="Map view is not available in this environment." />
        )}
      </View>

      <View style={locationStyles.infoCard}>
        <Text style={locationStyles.infoTitle}>Your Location</Text>
        
        {address ? (
          <Text style={locationStyles.address}>{address}</Text>
        ) : (
          <Text style={locationStyles.address}>Address not available</Text>
        )}
        
        <View style={locationStyles.coordinatesContainer}>
          <View style={locationStyles.coordinateItem}>
            <Text style={locationStyles.coordinateLabel}>Latitude</Text>
            <Text style={locationStyles.coordinateValue}>
              {location?.coords.latitude.toFixed(6)}
            </Text>
          </View>
          
          <View style={locationStyles.coordinateItem}>
            <Text style={locationStyles.coordinateLabel}>Longitude</Text>
            <Text style={locationStyles.coordinateValue}>
              {location?.coords.longitude.toFixed(6)}
            </Text>
          </View>
        </View>
        
        <View style={locationStyles.buttonsContainer}>
          <Button
            title="Refresh Location"
            onPress={refreshLocation}
            variant="outline"
            icon={<MaterialIcons name="refresh" size={20} color={colors.primary} />}
            style={locationStyles.refreshButton}
          />
          
          <Button
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
            fullWidth
          />
        </View>
      </View>
    </View>
  );
};

// Styles moved to ./styles/LocationScreenStyles.ts

export default LocationScreen; 