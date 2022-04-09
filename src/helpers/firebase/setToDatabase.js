import { set, ref } from "firebase/database";
import { db } from 'src/firebase'

export const setToDatabase = async (path, payload) => {
  try {
    await set(ref(db, `${path}`), {...payload})
  } catch (e) {
    console.error(e);
    throw e
  }
}
