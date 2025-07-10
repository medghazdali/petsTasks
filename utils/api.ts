import { Pet } from '../types';

interface PaymentInfo {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

interface AdoptionResponse {
  success: boolean;
  message: string;
  adoptionId: string;
  petId: string;
}

// Mock pet data
const pets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Female',
    description: 'Luna is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. She is great with children and other pets.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    price: 250,
    location: 'San Francisco, CA',
    vaccinated: true,
    neutered: true,
    traits: ['Friendly', 'Energetic', 'Loyal', 'Playful'],
  },
  {
    id: '2',
    name: 'Max',
    species: 'Cat',
    breed: 'Maine Coon',
    age: '3 years',
    gender: 'Male',
    description: 'Max is a gentle giant with a beautiful fluffy coat. He enjoys lounging in sunny spots and being brushed. He is quite independent but loves affection on his terms.',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    price: 200,
    location: 'Portland, OR',
    vaccinated: true,
    neutered: true,
    traits: ['Independent', 'Calm', 'Affectionate', 'Quiet'],
  },
  {
    id: '3',
    name: 'Bella',
    species: 'Dog',
    breed: 'Beagle',
    age: '1 year',
    gender: 'Female',
    description: 'Bella is a curious and playful Beagle puppy. She has lots of energy and loves to explore. She is very food-motivated and would benefit from continued training.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    price: 300,
    location: 'Austin, TX',
    vaccinated: true,
    neutered: false,
    traits: ['Curious', 'Playful', 'Intelligent', 'Friendly'],
  },
  {
    id: '4',
    name: 'Oliver',
    species: 'Cat',
    breed: 'Siamese',
    age: '4 years',
    gender: 'Male',
    description: 'Oliver is a vocal Siamese cat with striking blue eyes. He is very social and will follow you around the house. He enjoys interactive toys and puzzle feeders.',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1574144113084-b6f450cc5e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    price: 180,
    location: 'Chicago, IL',
    vaccinated: true,
    neutered: true,
    traits: ['Vocal', 'Social', 'Intelligent', 'Active'],
  },
  {
    id: '5',
    name: 'Charlie',
    species: 'Dog',
    breed: 'Poodle Mix',
    age: '5 years',
    gender: 'Male',
    description: 'Charlie is a gentle and well-behaved poodle mix. He is hypoallergenic and does not shed much. He loves cuddles and is great with children.',
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    price: 275,
    location: 'Seattle, WA',
    vaccinated: true,
    neutered: true,
    traits: ['Gentle', 'Quiet', 'Cuddly', 'Well-behaved'],
  },
  {
    id: '6',
    name: 'Lucy',
    species: 'Cat',
    breed: 'Tabby',
    age: '2 years',
    gender: 'Female',
    description: 'Lucy is a playful tabby cat with lots of personality. She loves chasing toys and climbing cat trees. She gets along well with other cats.',
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    images: [
      'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1570018143038-6f4c428a6cce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    price: 150,
    location: 'Denver, CO',
    vaccinated: true,
    neutered: true,
    traits: ['Playful', 'Energetic', 'Social', 'Curious'],
  },
];

// Mock API functions with artificial delay to simulate network requests
export const fetchPets = (): Promise<Pet[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pets);
    }, 800);
  });
};

export const fetchPetById = (id: string): Promise<Pet> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pet = pets.find(pet => pet.id === id);
      if (pet) {
        resolve(pet);
      } else {
        reject(new Error('Pet not found'));
      }
    }, 500);
  });
};

// Mock adoption process
export const adoptPet = (petId: string, paymentInfo: PaymentInfo): Promise<AdoptionResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate payment processing
      if (paymentInfo && paymentInfo.cardNumber && paymentInfo.cardNumber.length >= 16) {
        resolve({
          success: true,
          message: 'Adoption successful!',
          adoptionId: `ADT-${Date.now().toString().slice(-6)}`,
          petId,
        });
      } else {
        reject(new Error('Payment failed. Please check your payment information.'));
      }
    }, 1500);
  });
}; 