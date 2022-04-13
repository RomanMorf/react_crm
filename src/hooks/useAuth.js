import React, { useState } from 'react';

import { getAuth } from 'firebase/auth'

const auth = getAuth()

const useAuth = () => {
  const [user, setUser] = useState(() => auth.currentUser)

  // return auth.currentUser
  // console.log(user, 'user - from useAuth');
  return user
}

export { useAuth };