import type { PilotRequest } from '../types';

export const STORAGE_KEY = 'smarttagsPilotRequests';

/**
 * Safely retrieves stored pilot requests from localStorage
 * Guarantees an array is returned even if data is corrupted
 */
export const getStoredPilotRequests = (): PilotRequest[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

/**
 * Appends a new submission to localStorage
 * Never overwrites or deletes existing submissions
 */
export const savePilotRequest = (submission: PilotRequest): boolean => {
  try {
    const existingSubmissions = getStoredPilotRequests();
    existingSubmissions.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingSubmissions));
    return true;
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
    return false;
  }
};

/**
 * Validates a UK or international phone number allowing numbers, spaces, hyphens, parentheses, plus
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-()+]{7,20}$/;
  const digitCount = (phone.match(/\d/g) || []).length;
  return phoneRegex.test(phone.trim()) && digitCount >= 7;
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};
