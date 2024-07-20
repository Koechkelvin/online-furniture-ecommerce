
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC7mugEFxqUyHZZnFyEXR07j6P7zWMtscs",
  authDomain: "furniture-ecommerce-f83da.firebaseapp.com",
  projectId: "furniture-ecommerce-f83da",
  storageBucket: "furniture-ecommerce-f83da.appspot.com",
  messagingSenderId: "625658468029",
  appId: "1:625658468029:web:f1560917d1527c24f689d4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;