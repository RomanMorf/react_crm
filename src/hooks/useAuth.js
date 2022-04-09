import { getAuth } from 'firebase/auth'

const useAuth = () => {
  const auth = getAuth()
  return auth.currentUser
}

export { useAuth };