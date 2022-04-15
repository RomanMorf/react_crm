import React from 'react';
import './style.scss';

import Navigate from 'src/components/Navigate';
import Button from 'src/components/elements/Button';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from 'src/store/authSlice'


function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth.auth)

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
        <div className='header_btn'>
          {auth && <Button onClick={logOut} name="Log out"/>}
        </div>
      </div>
      <div className="container">
        <Navigate />
      </div>
    </div>
  )
}

export default Header;