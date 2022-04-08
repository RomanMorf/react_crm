import React from 'react';
import Navigate from '../Navigate'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { singOutUser } from '../../store/authSlice'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth.auth)
  console.log(auth, 'auth from Header');

  return (
    <div className='header'>
      <div className='header_body'>
        <div>
          Logo
        </div>
        <div>
          {!auth &&<button onClick={() => navigate('/auth/login')}>Log in</button>}
          {auth && <button onClick={() => dispatch(singOutUser())}>Log out</button>}
        </div>
      </div>
      <div className="container">
        <Navigate />
      </div>
    </div>
  )
}

export default Header;