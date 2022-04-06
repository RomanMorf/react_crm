import { getAuth } from 'firebase/auth'

const useAuth = () => {
  const auth = getAuth()
  return auth ? auth.currentUser : null
}

export { useAuth };