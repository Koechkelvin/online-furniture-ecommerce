import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCeRP9VtKwrRrzfZytXZqMPlTTqjS-cSI4",
  authDomain: "furniture-shop-2e044.firebaseapp.com",
  projectId: "furniture-shop-2e044",
  storageBucket: "furniture-shop-2e044.appspot.com",
  messagingSenderId: "457185070071",
  appId: "1:457185070071:web:e7082635b7c4d966423cf2"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;