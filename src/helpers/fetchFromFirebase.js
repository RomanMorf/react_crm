import { getDatabase, ref, child, get } from "firebase/database";

export const fetchFromFirebase = async (path) => {
  const dbRef = ref(getDatabase());
  const value = await get(child(dbRef, `users/${path}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return undefined
    }
  }).catch((e) => {
    console.error(e);
    throw e
  });

  return value
}
