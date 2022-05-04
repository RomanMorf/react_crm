import { set, ref } from "firebase/database";
import { db } from 'src/firebase'

export const setToDatabase = async (path, payload) => {
  await set(ref(db, `${path}`), {...payload})
}
