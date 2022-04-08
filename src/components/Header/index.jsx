import React from 'react';
import Navigate from '../Navigate'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../../store/authSlice'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth.auth)

  const logIn = () => {
    navigate('/auth/login')
  }

  const logOut = () => {
    dispatch(signOutUser())
    navigate('/auth/login')
  }

  return (
    <div className='header'>
      <div className='header_body'>
        <div>
          Logo
        </div>
        <div>
          {!auth &&<button onClick={logIn}>Log in</button>}
          {auth && <button onClick={logOut}>Log out</button>}
        </div>
      </div>
      <div className="container">
        <Navigate />
      </div>
    </div>
  )
}

export default Header;