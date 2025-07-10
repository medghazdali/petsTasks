import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { fetchPets } from '../../utils/api';
import { Pet } from '../../types';
import { FilterType } from '../interfaces';

export const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  const loadPets = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPets();
      setPets(data);
    } catch (err) {
      setError('Failed to load pets. Please try again.');
      console.error('Error fetching pets:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleRefresh = useCallback(async (): Promise<void> => {
    setRefreshing(true);
    await loadPets();
    setRefreshing(false);
  }, [loadPets]);

  const filteredPets = useCallback((): Pet[] => {
    if (filter === 'all') return pets;
    return pets.filter(pet => pet.species.toLowerCase() === filter);
  }, [pets, filter]);

  useEffect(() => {
    loadPets();
  }, [loadPets]);

  return {
    pets,
    loading,
    refreshing,
    error,
    filter,
    setFilter,
    filteredPets,
    loadPets,
    handleRefresh
  };
}; 