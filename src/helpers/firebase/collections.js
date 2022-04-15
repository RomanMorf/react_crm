import { collection, doc, setDoc } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";

export const fetchCollections = async (path = 'users') => {
  console.log('fetchCollections');
  const db = getDatabase()

  const citiesRef = collection(db, "cities");

  setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });

}

