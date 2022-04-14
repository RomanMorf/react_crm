import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChjLdLQ9U0jEbdo0KgHKl6bMDjQe2KYeI",
  authDomain: "react-crm-6b22e.firebaseapp.com",
  databaseURL: "https://react-crm-6b22e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-crm-6b22e",
  storageBucket: "react-crm-6b22e.appspot.com",
  messagingSenderId: "875015324086",
  appId: "1:875015324086:web:90a9b353849a4cbdce0117",
  measurementId: "G-XXCT96ZGP5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const fs = getFirestore(app);

export default app

export { db, app, fs }

