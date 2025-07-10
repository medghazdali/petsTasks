/**
 * AdoptionScreen interfaces
 */

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
} 