import { fs } from 'src/firebase';

import { 
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  orderBy,
  limit,
  query } from "firebase/firestore"; 

import { useCollectionData } from 'react-firebase-hooks/firestore';


export const addDocToFirebase = async (path, payload) => {
  const docRef = await addDoc(collection(fs, `${path}`), {...payload})
  const id = docRef.id
  await setDoc(doc(fs, `${path}`, `${id}`), {...payload, id: id})
}


export const updateDocToFirebase = async (path, key, payload) => {
  await setDoc(doc(fs, `${path}`, `${key}`), {...payload})
}

export const fetchDocFromFirebase = async (path, key) => {
const docRef = doc(fs, `${path}`, `${key}`);
const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return undefined
  }
}

export const fetchDocsFromFirebase = async (path) => {
  const data = []
  const querySnapshot = await getDocs(collection(fs, `${path}`), limit(2));
  querySnapshot.forEach((doc) => {
    const segments = doc._key.path.segments

    data.push({...doc.data(), id: segments[segments.length-1]})
  });

  return data

}

export const useCollection = (path, sort) => {
  const messagesRef = (collection(fs, `${path}`));

  if (sort) {
    const q = query(
      messagesRef, 
      orderBy(`${sort}`)
    );

    return useCollectionData(q, { idField: 'id' })

  } else {
    const q = query(
      messagesRef, 
    );

    return useCollectionData(q, { idField: 'id' })
  }
}