import { getAuth } from "firebase/auth";

export const getUid = () => {
  const auth = getAuth();
  return auth ? auth.currentUser.uid : null
}
