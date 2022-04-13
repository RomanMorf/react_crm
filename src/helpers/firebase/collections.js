// import { db } from 'src/firebase';
import { getAuth } from 'firebase/auth'
import { collection, doc, setDoc, getDoc, getDocs , where } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";

export const fetchCollections = async (path = 'users') => {
  console.log('fetchCollections');
  const db = getDatabase()
  // console.log(db, 'db');
  // const collectionRef = collection(db, `${path}`, '5QKQUrBt5VSa0yrOxVJMySMel213');

  // const collectionSnap = await getDoc(collectionRef);
  
  // if (collectionSnap.exists()) {
  //   console.log("Document data:", usersSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }  

  const citiesRef = collection(db, "cities");

  setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });
  // await setDoc(doc(citiesRef, "LA"), {
  //     name: "Los Angeles", state: "CA", country: "USA",
  //     capital: false, population: 3900000,
  //     regions: ["west_coast", "socal"] });
  // await setDoc(doc(citiesRef, "DC"), {
  //     name: "Washington, D.C.", state: null, country: "USA",
  //     capital: true, population: 680000,
  //     regions: ["east_coast"] });
  // await setDoc(doc(citiesRef, "TOK"), {
  //     name: "Tokyo", state: null, country: "Japan",
  //     capital: true, population: 9000000,
  //     regions: ["kanto", "honshu"] });
  // await setDoc(doc(citiesRef, "BJ"), {
  //     name: "Beijing", state: null, country: "China",
  //     capital: true, population: 21500000,
  //   regions: ["jingjinji", "hebei"] });
  
    // const q = query(citiesRef, where("capital", "==", true));
    // console.log(q, 'q');

}

