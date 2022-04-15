import { useState } from 'react';

import { getAuth } from 'firebase/auth'

const auth = getAuth()

const useAuth = () => {
  const [user, setUser] = useState(() => auth.currentUser)

  return user
}

export { useAuth };