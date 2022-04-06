import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const RequireAuth = ({children}) => {
  const location = useLocation()
  const auth = useAuth()

  if (!auth) {
    return <Navigate to='/auth/login' state={{from: location}}/>
  }

  return children
}

export {RequireAuth};