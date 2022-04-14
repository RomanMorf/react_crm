import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const RequireAuth = ({children}) => {

  const location = useLocation()
  const auth = useAuth()

  // const auth = getAuth()
  
  // const [user] = useAuthState(auth);
  

  if (!auth) {
    return <Navigate to='/auth/login' state={{from: location}}/>
  }

  return children
}

export {RequireAuth};