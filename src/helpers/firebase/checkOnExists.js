import { getDatabase, ref, child, get } from "firebase/database";

export const checkOnExists = async (uid) => {
  const dbRef = ref(getDatabase());
  const value =  await get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return true
      } else {
        return undefined
      }
    })

  return value

}