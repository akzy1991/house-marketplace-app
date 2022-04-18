// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvEogOPRPPoq8x_laYblJZi9rWNJZSEJ8',
  authDomain: 'house-marketplace-app-6a1b2.firebaseapp.com',
  projectId: 'house-marketplace-app-6a1b2',
  storageBucket: 'house-marketplace-app-6a1b2.appspot.com',
  messagingSenderId: '1049971400362',
  appId: '1:1049971400362:web:3692e38e0dd87bf4637ad3',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
