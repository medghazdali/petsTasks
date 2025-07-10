import React from 'react';
import { 
  View,
  FlatList, 
  Text,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../utils/theme';
import PetCard from '../components/PetCard';
import LoadingIndicator from '../components/LoadingIndicator';
import { Pet } from '../types';
import { HomeScreenProps } from '../types/navigation';
import { usePets } from './hooks';
import { FilterType } from './interfaces';
import { homeStyles } from './styles';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { 
    pets,
    loading,
    refreshing,
    error,
    filter,
    setFilter,
    filteredPets,
    loadPets,
    handleRefresh
  } = usePets();

  const handlePetPress = (pet: Pet): void => {
    navigation.navigate('PetDetails', pet);
  };

  const handleLocationPress = async (): Promise<void> => {
    try {
      navigation.navigate('Location');
    } catch (error) {
      Alert.alert(
        'Feature Not Available',
        'The location feature is not available in this environment.',
        [{ text: 'OK' }]
      );
    }
  };

  const renderFilterButton = (label: string, value: FilterType): React.ReactNode => (
    <TouchableOpacity
      style={[
        homeStyles.filterButton,
        filter === value && homeStyles.filterButtonActive,
      ]}
      onPress={() => setFilter(value)}
    >
      <Text
        style={[
          homeStyles.filterButtonText,
          filter === value && homeStyles.filterButtonTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  if (loading && !refreshing) {
    return <LoadingIndicator message="Finding adorable pets..." />;
  }

  return (
    <SafeAreaView style={homeStyles.container}>
      <StatusBar style="auto" />
      
      <View style={homeStyles.header}>
        <Text style={homeStyles.title}>Find Your Perfect Pet</Text>
        <TouchableOpacity 
          style={homeStyles.locationButton}
          onPress={handleLocationPress}
        >
          <MaterialIcons name="location-on" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={homeStyles.filterContainer}>
        {renderFilterButton('All Pets', 'all')}
        {renderFilterButton('Dogs', 'dog')}
        {renderFilterButton('Cats', 'cat')}
      </View>
      
      {error ? (
        <View style={homeStyles.errorContainer}>
          <Text style={homeStyles.errorText}>{error}</Text>
          <TouchableOpacity style={homeStyles.retryButton} onPress={loadPets}>
            <Text style={homeStyles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredPets()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PetCard pet={item} onPress={() => handlePetPress(item)} />
          )}
          contentContainerStyle={homeStyles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[colors.primary]}
              tintColor={colors.primary}
            />
          }
          ListEmptyComponent={
            <View style={homeStyles.emptyContainer}>
              <Text style={homeStyles.emptyText}>
                No pets found. Try changing your filter or check back later!
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

// Styles moved to ./styles/HomeScreenStyles.ts

export default HomeScreen; 