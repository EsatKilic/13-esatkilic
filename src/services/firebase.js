import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVLHqNcMxFnSY5ENlB-JKaIAkz-10h0ro",
  authDomain: "hopi-3d3d5.firebaseapp.com",
  projectId: "hopi-3d3d5",
  storageBucket: "hopi-3d3d5.appspot.com",
  messagingSenderId: "877859534178",
  appId: "1:877859534178:web:6e2893ee18893fa495a83b",
  measurementId: "G-YHZS80XR8F"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

