import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJGjJ3RFp3Ejjj8_w4vtkxqYwxSYXqE_M",
  authDomain: "tubes-3cd0f.firebaseapp.com",
  projectId: "tubes-3cd0f",
  storageBucket: "tubes-3cd0f.appspot.com",
  messagingSenderId: "230748698336",
  appId: "1:230748698336:web:11222a7ecf86e787adc285"
};

// Ensure Firebase is initialized once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// Debugging logs (optional)
console.log("Firebase Initialized:", app);
console.log("Firebase Auth Initialized:", auth);

export { auth };
