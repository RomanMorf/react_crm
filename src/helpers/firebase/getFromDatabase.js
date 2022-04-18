import { getDatabase, ref, child, get } from "firebase/database";

export const getFromDatabase = async (path) => {
  const dbRef = ref(getDatabase());
  const value = await get(child(dbRef, `${path}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return undefined
    }
  })

  return value
}
